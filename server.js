import express from 'express';
import cors from 'cors';
import path from 'path';
import fs from 'fs';
import { createHash, randomBytes } from 'crypto';
import { fileURLToPath, pathToFileURL } from 'url';
import { db, initDb } from './db.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const port = process.env.PORT || 3000;
const isEntryPoint = process.argv[1]
  ? import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href
  : false;

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

// Initialize SQLite database
initDb().catch((err) => console.error('Error initializing SQLite database:', err));

// Official Bitfury Tech Investment Plans Definition
const INVESTMENT_PLANS = [
  {
    id: 'stock',
    name: 'STOCK Plan',
    category: 'Stock Market',
    dailyProfit: 1.08, // 1.08% daily
    monthlyProfit: 32.4, // 32.4% monthly
    minDeposit: 1000,
    maxDeposit: 19999,
    referralBonus: 6,
    durationDays: 30,
    description: 'Broad international equity & momentum index exposure with quantitative rebalancing.'
  },
  {
    id: 'prime',
    name: 'PRIME Plan',
    category: 'Institutional Growth',
    dailyProfit: 1.60, // 1.60% daily
    monthlyProfit: 48.0, // 48.0% monthly
    minDeposit: 20000,
    maxDeposit: 49999,
    referralBonus: 6,
    durationDays: 30,
    description: 'High-yield institutional strategy combining tech equities, blue-chip stocks, and yield arbitrage.'
  },
  {
    id: 'executive',
    name: 'EXECUTIVE Plan',
    category: 'Executive Capital',
    dailyProfit: 1.98, // 1.98% daily
    monthlyProfit: 59.4, // 59.4% monthly
    minDeposit: 50000,
    maxDeposit: 99999,
    referralBonus: 6,
    durationDays: 30,
    description: 'Private equity liquidity pools, structured forex arbitrage, and risk-managed capital preservation.'
  },
  {
    id: 'premium',
    name: 'PREMIUM Plan',
    category: 'VIP Wealth',
    dailyProfit: 2.60, // 2.60% daily
    monthlyProfit: 78.0, // 78.0% monthly
    minDeposit: 100000,
    maxDeposit: 1000000,
    referralBonus: 6,
    durationDays: 30,
    description: 'Bespoke institutional algorithmic trading, multi-asset real estate, and maximum yield optimization.'
  },
  {
    id: 'crypto',
    name: 'Crypto Growth Strategy',
    category: 'Crypto Arbitrage',
    dailyProfit: 1.25, // 1.25% daily
    monthlyProfit: 37.5,
    minDeposit: 500,
    maxDeposit: 15000,
    referralBonus: 6,
    durationDays: 30,
    description: 'Algorithmic crypto trading and cross-exchange yield arbitrage across BTC, ETH, and DeFi protocols.'
  },
  {
    id: 'realestate',
    name: 'Real Estate Strategy',
    category: 'Commercial Real Estate',
    dailyProfit: 1.80, // 1.80% daily
    monthlyProfit: 54.0,
    minDeposit: 10000,
    maxDeposit: 500000,
    referralBonus: 6,
    durationDays: 30,
    description: 'Direct equity stakes in commercial & residential real estate with inflation-protected dividends.'
  }
];

const OFFICIAL_COMPANY_EMAIL = 'info@trustpay.tax';

const hashPassword = (password) => createHash('sha256').update(password).digest('hex');
const createToken = () => randomBytes(24).toString('hex');

async function sendOfficialNotificationEmail({ toUser, userId, recipientEmail, subject, message, category = 'Official Notice', notificationType = 'info' }) {
  const sender = OFFICIAL_COMPANY_EMAIL;
  let targetUserId = userId || (toUser ? toUser.id : null);
  let recipient = recipientEmail || (toUser ? toUser.email : null);

  if (!recipient && targetUserId) {
    const foundUser = await db.get('SELECT email FROM users WHERE id = ?', [targetUserId]);
    if (foundUser) recipient = foundUser.email;
  }

  if (!recipient) return null;

  const now = new Date().toISOString();

  // Record outgoing dispatch log
  const mailResult = await db.run(
    'INSERT INTO mail_logs (sender, recipient, subject, message, category, status, created_at) VALUES (?, ?, ?, ?, ?, ?, ?)',
    [sender, recipient, subject, message, category, 'delivered', now]
  );

  if (!targetUserId) {
    const foundUser = await db.get('SELECT id FROM users WHERE email = ?', [recipient]);
    if (foundUser) targetUserId = foundUser.id;
  }

  if (targetUserId) {
    await db.run(
      'INSERT INTO user_notifications (user_id, sender, title, body, type, is_read, created_at) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [targetUserId, sender, subject, message, notificationType || (category.toLowerCase().includes('alert') ? 'warning' : 'info'), 0, now]
    );
  }

  console.log(`[AUTOMATED TRANSACTION ALERT EMAIL DISPATCHED] From: ${sender} -> To: ${recipient} | Subject: ${subject}`);
  return { mailId: mailResult.lastID, sender, recipient, subject };
}

const createNotificationEmail = sendOfficialNotificationEmail;

const getAuthenticatedUser = async (req) => {
  const header = req.headers.authorization || '';
  const token = header.startsWith('Bearer ') ? header.slice(7) : '';
  if (!token) {
    return null;
  }
  return (await db.get('SELECT * FROM users WHERE auth_token = ?', [token])) || null;
};

const formatCurrency = (amount) => `$${Number(amount || 0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, service: 'bitfurytech' });
});

// Helper function to calculate interest and update active investments
async function calculateUserInvestmentsAndInterest(user) {
  if (!user) return { activeInvestments: [], totalInvested: 0, accruedInterest: 0 };

  const userInvestments = await db.all('SELECT * FROM investments WHERE user_id = ? ORDER BY id DESC', [user.id]);
  const now = new Date();
  let totalInvested = 0;
  let totalAccruedInterest = 0;

  const activeInvestments = userInvestments.map((inv) => {
    totalInvested += inv.amount;
    const startDate = new Date(inv.created_at);
    const elapsedDays = Math.max((now.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24), 0.1);
    
    // Accrued profit = Amount * (Daily Rate / 100) * elapsedDays
    const dailyProfitAmount = inv.amount * (inv.daily_rate / 100);
    const accruedProfit = dailyProfitAmount * elapsedDays;
    totalAccruedInterest += accruedProfit;

    return {
      id: inv.id,
      planId: inv.plan_id,
      planName: inv.plan_name,
      amount: inv.amount,
      dailyRate: inv.daily_rate,
      dailyProfitAmount,
      accruedProfit,
      status: inv.status,
      createdAt: inv.created_at,
      nextPayoutIn: '23h 59m'
    };
  });

  return { activeInvestments, totalInvested, accruedInterest: totalAccruedInterest };
}

app.get('/api/dashboard', async (req, res) => {
  try {
    const user = await getAuthenticatedUser(req);
    
    if (!user) {
      return res.json({
        balance: '$10.00',
        depositWallet: '$10.00',
        interestWallet: '$0.00',
        totalInvest: '$0.00',
        totalDeposit: '$0.00',
        totalWithdraw: '$0.00',
        referralEarnings: '$0.00',
        yesterdayEarnings: '+$0.14',
        depositBalanceRaw: 10,
        interestBalanceRaw: 0,
        plans: INVESTMENT_PLANS,
        activeInvestments: [],
        transactions: [],
        activity: [],
        deposits: [],
        withdrawals: []
      });
    }

    const deposits = await db.all('SELECT * FROM deposits WHERE user_id = ? ORDER BY id DESC', [user.id]);
    const withdrawals = await db.all('SELECT * FROM withdrawals WHERE user_id = ? ORDER BY id DESC', [user.id]);
    const transactions = await db.all('SELECT * FROM transactions WHERE user_id = ? ORDER BY id DESC', [user.id]);

    const totalDeposit = deposits
      .filter((d) => d.status === 'approved')
      .reduce((sum, item) => sum + Number(item.amount || 0), 0);

    const totalWithdraw = withdrawals
      .filter((w) => w.status === 'approved')
      .reduce((sum, item) => sum + Number(item.amount || 0), 0);

    const { activeInvestments, totalInvested, accruedInterest } = await calculateUserInvestmentsAndInterest(user);

    const currentInterestWallet = (user.interest_balance || 0) + accruedInterest;

    const formattedTransactions = transactions.map((t) => ({
      id: t.id,
      trxId: t.trx_id,
      type: t.type,
      amount: formatCurrency(t.amount),
      wallet: t.wallet,
      details: t.details,
      status: t.status || (t.type === 'withdrawal' ? 'pending' : 'completed'),
      postBalance: formatCurrency(t.post_balance),
      createdAt: t.created_at
    }));

    res.json({
      user: {
        fullName: user.full_name,
        email: user.email,
        phone: user.phone || '',
        country: user.country || '',
        btcWallet: user.btc_wallet || '',
        usdtWallet: user.usdt_wallet || '',
        twoFactorEnabled: !!user.two_factor_enabled,
        role: user.role
      },
      balance: formatCurrency(user.deposit_balance),
      depositWallet: formatCurrency(user.deposit_balance),
      interestWallet: formatCurrency(currentInterestWallet),
      totalInvest: formatCurrency(totalInvested),
      totalDeposit: formatCurrency(totalDeposit),
      totalWithdraw: formatCurrency(totalWithdraw),
      referralEarnings: formatCurrency(user.referral_balance || 0),
      yesterdayEarnings: `+$${(activeInvestments.reduce((sum, inv) => sum + (Number(inv.amount || 0) * (Number(inv.daily_rate || inv.dailyRate || 0) / 100)), 0) || 0.14).toFixed(2)}`,
      depositBalanceRaw: user.deposit_balance,
      interestBalanceRaw: currentInterestWallet,
      plans: INVESTMENT_PLANS,
      activeInvestments,
      transactions: formattedTransactions,
      activity: formattedTransactions,
      deposits: deposits.map((d) => ({
        id: d.id,
        amount: formatCurrency(d.amount),
        method: d.method,
        reference: d.reference,
        status: d.status,
        createdAt: d.created_at
      })),
      withdrawals: withdrawals.map((w) => ({
        id: w.id,
        amount: formatCurrency(w.amount),
        walletType: w.wallet_type,
        method: w.method,
        details: w.details,
        status: w.status,
        createdAt: w.created_at
      }))
    });
  } catch (err) {
    console.error('Error fetching dashboard:', err);
    res.status(500).json({ ok: false, error: 'Internal server error.' });
  }
});

app.get('/api/plans', (_req, res) => {
  res.json({ ok: true, plans: INVESTMENT_PLANS });
});

// Crypto Gateway Wallets API
app.get('/api/wallets', async (_req, res) => {
  try {
    const wallets = await db.all('SELECT coin_code, coin_name, coin_symbol, network, address, memo, qr_code_url, is_active FROM admin_wallets WHERE is_active = 1 ORDER BY id ASC');
    res.json({ ok: true, wallets });
  } catch (err) {
    console.error('Error fetching crypto wallets:', err);
    res.status(500).json({ ok: false, error: 'Failed to load crypto gateways.' });
  }
});

app.get('/api/admin/wallets', async (req, res) => {
  try {
    const adminUser = await requireAdminUser(req, res);
    if (!adminUser) return;
    const wallets = await db.all('SELECT * FROM admin_wallets ORDER BY id ASC');
    res.json({ ok: true, wallets });
  } catch (err) {
    console.error('Error fetching admin wallets:', err);
    res.status(500).json({ ok: false, error: 'Failed to fetch admin wallets.' });
  }
});

app.post('/api/admin/wallets', async (req, res) => {
  try {
    const adminUser = await requireAdminUser(req, res);
    if (!adminUser) return;

    const { wallets } = req.body;
    if (!Array.isArray(wallets) || wallets.length === 0) {
      return res.status(400).json({ ok: false, error: 'Invalid wallets payload. Array expected.' });
    }

    const nowStr = new Date().toISOString();
    await db.run('DELETE FROM admin_wallets');

    for (const w of wallets) {
      const code = (w.coin_code || w.coinCode || 'COIN').trim().toUpperCase();
      const name = (w.coin_name || w.coinName || code).trim();
      const sym = (w.coin_symbol || w.coinSymbol || '₮').trim();
      const net = (w.network || '').trim();
      const addr = (w.address || '').trim();
      const memo = (w.memo || '').trim();
      const isActive = w.is_active !== undefined ? (w.is_active ? 1 : 0) : 1;
      const qrUrl = addr ? `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(addr)}&size=200x200` : '';

      await db.run(
        'INSERT INTO admin_wallets (coin_code, coin_name, coin_symbol, network, address, memo, qr_code_url, is_active, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [code, name, sym, net, addr, memo, qrUrl, isActive, nowStr]
      );
    }

    res.json({ ok: true, message: 'All admin cryptocurrency payment gateways integrated and saved successfully.' });
  } catch (err) {
    console.error('Error saving admin wallets:', err);
    res.status(500).json({ ok: false, error: 'Failed to update admin crypto wallets.' });
  }
});

app.post('/api/investments', async (req, res) => {
  try {
    const user = await getAuthenticatedUser(req);
    if (!user) {
      return res.status(401).json({ ok: false, error: 'Authentication required to make an investment.' });
    }

    const { planId, amount, walletType = 'deposit' } = req.body;
    const numAmount = Number(amount);

    if (!planId || !numAmount || isNaN(numAmount) || numAmount <= 0) {
      return res.status(400).json({ ok: false, error: 'Please enter a valid investment amount.' });
    }

    const plan = INVESTMENT_PLANS.find((p) => p.id === planId);
    if (!plan) {
      return res.status(404).json({ ok: false, error: 'Selected investment plan not found.' });
    }

    if (numAmount < plan.minDeposit) {
      return res.status(400).json({
        ok: false,
        error: `Minimum deposit for ${plan.name} is ${formatCurrency(plan.minDeposit)}.`
      });
    }

    if (numAmount > plan.maxDeposit) {
      return res.status(400).json({
        ok: false,
        error: `Maximum deposit for ${plan.name} is ${formatCurrency(plan.maxDeposit)}.`
      });
    }

    const targetWallet = walletType === 'interest' ? 'interest_balance' : 'deposit_balance';
    const walletName = walletType === 'interest' ? 'Interest Wallet' : 'Deposit Wallet';
    const currentBalance = user[targetWallet] || 0;

    if (currentBalance < numAmount) {
      return res.status(400).json({
        ok: false,
        error: `Insufficient funds in your ${walletName}. Current balance: ${formatCurrency(currentBalance)}. Please fund your Deposit Wallet first.`
      });
    }

    const newBalance = currentBalance - numAmount;
    if (walletType === 'interest') {
      await db.run('UPDATE users SET interest_balance = ? WHERE id = ?', [newBalance, user.id]);
    } else {
      await db.run('UPDATE users SET deposit_balance = ? WHERE id = ?', [newBalance, user.id]);
    }

    const now = new Date().toISOString();
    const resInv = await db.run(
      'INSERT INTO investments (user_id, plan_id, plan_name, amount, daily_rate, status, created_at) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [user.id, plan.id, plan.name, numAmount, plan.dailyProfit, 'active', now]
    );

    const trxId = `INV-${Math.random().toString(36).substring(2, 10).toUpperCase()}`;
    await db.run(
      'INSERT INTO transactions (user_id, trx_id, type, amount, wallet, details, post_balance, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
      [user.id, trxId, 'investment', numAmount, walletName, `Invested in ${plan.name} (${plan.dailyProfit}% Daily)`, newBalance, now]
    );

    const updatedUser = await db.get('SELECT * FROM users WHERE id = ?', [user.id]);

    await sendOfficialNotificationEmail({
      toUser: updatedUser,
      category: 'Transaction Alert: Investment Activated',
      subject: `TrustPay Tax: Investment Activated - $${numAmount.toFixed(2)} in ${plan.name}`,
      message: `Dear ${updatedUser.full_name},\n\nYour investment in plan "${plan.name}" has been activated successfully.\n\nTransaction ID: ${trxId}\nTransaction Type: Plan Investment\nPlan Name: ${plan.name}\nAmount Invested: $${numAmount.toFixed(2)} USD\nDaily Profit Yield Rate: ${plan.dailyProfit}%\nEstimated Daily Yield: $${(numAmount * (plan.dailyProfit / 100)).toFixed(2)} USD\nDebited Wallet: ${walletName}\nUpdated ${walletName} Balance: $${newBalance.toFixed(2)} USD\nTimestamp: ${now}\n\nIf you did not authorize this transaction, please contact security immediately at info@trustpay.tax.\nOfficial Sender: info@trustpay.tax`,
      notificationType: 'info'
    });

    res.json({
      ok: true,
      message: `Successfully invested ${formatCurrency(numAmount)} in ${plan.name}! Your daily returns will accrue automatically.`,
      investment: {
        id: resInv.lastID,
        planName: plan.name,
        amount: numAmount,
        dailyProfitRate: plan.dailyProfit,
        dailyProfitAmount: numAmount * (plan.dailyProfit / 100),
        createdAt: now
      },
      depositBalance: formatCurrency(updatedUser.deposit_balance),
      interestBalance: formatCurrency(updatedUser.interest_balance)
    });
  } catch (err) {
    console.error('Error creating investment:', err);
    res.status(500).json({ ok: false, error: 'Failed to process investment.' });
  }
});

app.post('/api/withdrawals', async (req, res) => {
  try {
    const user = await getAuthenticatedUser(req);
    if (!user) {
      return res.status(401).json({ ok: false, error: 'Authentication required.' });
    }

    const { amount, walletType = 'interest', method, details } = req.body;
    const numAmount = Number(amount);

    if (!numAmount || isNaN(numAmount) || numAmount < 10) {
      return res.status(400).json({ ok: false, error: 'Minimum withdrawal amount is $10.00.' });
    }

    if (!method || !details) {
      return res.status(400).json({ ok: false, error: 'Payment method and account/wallet details are required.' });
    }

    const targetWallet = walletType === 'deposit' ? 'deposit_balance' : 'interest_balance';
    const walletName = walletType === 'deposit' ? 'Deposit Wallet' : 'Interest Wallet';
    const currentBalance = user[targetWallet] || 0;

    if (currentBalance < numAmount) {
      return res.status(400).json({
        ok: false,
        error: `Insufficient funds in your ${walletName}. Available: ${formatCurrency(currentBalance)}.`
      });
    }

    const newBalance = currentBalance - numAmount;
    if (walletType === 'deposit') {
      await db.run('UPDATE users SET deposit_balance = ? WHERE id = ?', [newBalance, user.id]);
    } else {
      await db.run('UPDATE users SET interest_balance = ? WHERE id = ?', [newBalance, user.id]);
    }

    const now = new Date().toISOString();
    const resW = await db.run(
      'INSERT INTO withdrawals (user_id, amount, wallet_type, method, details, status, created_at) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [user.id, numAmount, walletName, method, details, 'pending', now]
    );

    const trxId = `WD-${Math.random().toString(36).substring(2, 10).toUpperCase()}`;
    await db.run(
      'INSERT INTO transactions (user_id, trx_id, type, amount, wallet, details, post_balance, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
      [user.id, trxId, 'withdrawal', numAmount, walletName, `Withdrawal request via ${method}`, newBalance, now]
    );

    await sendOfficialNotificationEmail({
      toUser: user,
      category: 'Transaction Alert: Withdrawal Requested',
      subject: `TrustPay Tax: Withdrawal Request Logged - $${numAmount.toFixed(2)}`,
      message: `Dear ${user.full_name},\n\nYour withdrawal request of $${numAmount.toFixed(2)} USD has been logged and is awaiting compliance verification.\n\nTransaction ID: ${trxId}\nTransaction Type: Withdrawal Request\nAmount: $${numAmount.toFixed(2)} USD\nSource Wallet: ${walletName}\nWithdrawal Method: ${method}\nDestination Account / Address: ${details}\nStatus: Pending Verification\nUpdated ${walletName} Balance: $${newBalance.toFixed(2)} USD\nTimestamp: ${now}\n\nOfficial Sender: info@trustpay.tax`,
      notificationType: 'warning'
    });

    res.json({
      ok: true,
      message: `Withdrawal request of ${formatCurrency(numAmount)} submitted successfully. It is awaiting admin processing.`,
      withdrawal: {
        id: resW.lastID,
        user_id: user.id,
        amount: numAmount,
        wallet_type: walletName,
        method,
        details,
        status: 'pending',
        created_at: now
      }
    });
  } catch (err) {
    console.error('Error creating withdrawal:', err);
    res.status(500).json({ ok: false, error: 'Failed to process withdrawal.' });
  }
});

app.get('/api/auth/me', async (req, res) => {
  try {
    const user = await getAuthenticatedUser(req);
    if (!user) {
      return res.status(401).json({ ok: false, authenticated: false, error: 'Session expired or invalid.' });
    }
    if (user.status === 'suspended') {
      return res.status(403).json({ ok: false, authenticated: false, suspended: true, error: 'Account suspended by administration.' });
    }
    res.json({
      ok: true,
      authenticated: true,
      user: {
        id: user.id,
        fullName: user.full_name,
        email: user.email,
        phone: user.phone || '',
        country: user.country || '',
        btcWallet: user.btc_wallet || '',
        usdtWallet: user.usdt_wallet || '',
        twoFactorEnabled: !!user.two_factor_enabled,
        role: user.role,
        status: user.status || 'active',
        depositBalance: user.deposit_balance,
        interestBalance: user.interest_balance
      }
    });
  } catch (err) {
    res.status(500).json({ ok: false, error: 'Failed to verify session.' });
  }
});

app.post('/api/user/transfer', async (req, res) => {
  try {
    const user = await getAuthenticatedUser(req);
    if (!user) return res.status(401).json({ ok: false, error: 'Authentication required.' });

    const { amount } = req.body;
    const transferAmt = parseFloat(amount);
    if (!transferAmt || isNaN(transferAmt) || transferAmt <= 0) {
      return res.status(400).json({ ok: false, error: 'Invalid transfer amount.' });
    }

    if ((user.interest_balance || 0) < transferAmt) {
      return res.status(400).json({ ok: false, error: 'Insufficient Interest Wallet balance.' });
    }

    const newInterest = user.interest_balance - transferAmt;
    const newDeposit = user.deposit_balance + transferAmt;

    await db.run(
      'UPDATE users SET interest_balance = ?, deposit_balance = ? WHERE id = ?',
      [newInterest, newDeposit, user.id]
    );

    const trxId = 'TRX' + Date.now().toString(36).toUpperCase() + Math.random().toString(36).substring(2, 6).toUpperCase();
    await db.run(
      'INSERT INTO transactions (user_id, trx_id, type, amount, wallet, details, post_balance, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
      [user.id, trxId, 'transfer', transferAmt, 'Interest -> Deposit', `Internal transfer of $${transferAmt.toFixed(2)} to Deposit Wallet`, newDeposit, new Date().toISOString()]
    );

    await createNotificationEmail({
      userId: user.id,
      recipientEmail: user.email,
      category: 'Internal Transfer Confirmation',
      subject: `TrustPay Tax: Internal Wallet Transfer of $${transferAmt.toFixed(2)} Completed`,
      message: `Dear ${user.full_name},\n\nYour internal wallet transfer of $${transferAmt.toFixed(2)} from your Interest Wallet to your Deposit Wallet has been completed successfully.\n\nTransaction ID: ${trxId}\nUpdated Deposit Balance: $${newDeposit.toFixed(2)}\n\nThank you for choosing Bitfurytech.`,
      notificationType: 'info'
    });

    res.json({
      ok: true,
      message: `Successfully transferred $${transferAmt.toFixed(2)} to Deposit Wallet.`,
      depositBalance: newDeposit,
      interestBalance: newInterest
    });
  } catch (err) {
    res.status(500).json({ ok: false, error: 'Failed to process internal transfer.' });
  }
});

app.post('/api/user/profile', async (req, res) => {
  try {
    const user = await getAuthenticatedUser(req);
    if (!user) return res.status(401).json({ ok: false, error: 'Authentication required.' });

    const { fullName, phone, country, btcWallet, usdtWallet } = req.body;
    const updatedName = fullName?.trim() || user.full_name;
    const updatedPhone = phone?.trim() ?? (user.phone || '');
    const updatedCountry = country?.trim() ?? (user.country || '');
    const updatedBtc = btcWallet?.trim() ?? (user.btc_wallet || '');
    const updatedUsdt = usdtWallet?.trim() ?? (user.usdt_wallet || '');

    await db.run(
      'UPDATE users SET full_name = ?, phone = ?, country = ?, btc_wallet = ?, usdt_wallet = ? WHERE id = ?',
      [updatedName, updatedPhone, updatedCountry, updatedBtc, updatedUsdt, user.id]
    );

    await createNotificationEmail({
      userId: user.id,
      recipientEmail: user.email,
      category: 'Profile Update Notice',
      subject: 'TrustPay Tax: Account Profile Details Updated',
      message: `Dear ${updatedName},\n\nYour investor profile settings and default payout wallet addresses have been updated successfully.\n\nIf you did not initiate this change, please contact our security desk immediately at info@trustpay.tax.`,
      notificationType: 'info'
    });

    res.json({
      ok: true,
      message: 'Profile settings updated successfully.',
      user: {
        id: user.id,
        fullName: updatedName,
        email: user.email,
        phone: updatedPhone,
        country: updatedCountry,
        btcWallet: updatedBtc,
        usdtWallet: updatedUsdt,
        role: user.role,
        depositBalance: user.deposit_balance,
        interestBalance: user.interest_balance
      }
    });
  } catch (err) {
    res.status(500).json({ ok: false, error: 'Failed to update profile.' });
  }
});

app.post('/api/user/password', async (req, res) => {
  try {
    const user = await getAuthenticatedUser(req);
    if (!user) return res.status(401).json({ ok: false, error: 'Authentication required.' });

    const { currentPassword, newPassword } = req.body;
    if (!currentPassword || !newPassword || newPassword.length < 6) {
      return res.status(400).json({ ok: false, error: 'New password must be at least 6 characters long.' });
    }

    if (hashPassword(currentPassword) !== user.password_hash) {
      return res.status(400).json({ ok: false, error: 'Current password incorrect.' });
    }

    const newHash = hashPassword(newPassword);
    await db.run('UPDATE users SET password_hash = ? WHERE id = ?', [newHash, user.id]);

    await createNotificationEmail({
      userId: user.id,
      recipientEmail: user.email,
      category: 'Security Alert',
      subject: 'TrustPay Tax: Account Security Password Changed',
      message: `Dear ${user.full_name},\n\nYour Bitfurytech security password was changed successfully.\n\nTimestamp: ${new Date().toUTCString()}\n\nIf you did not perform this action, please contact security immediately at info@trustpay.tax.`,
      notificationType: 'warning'
    });

    res.json({ ok: true, message: 'Security password updated successfully.' });
  } catch (err) {
    res.status(500).json({ ok: false, error: 'Failed to update password.' });
  }
});

app.post('/api/user/2fa', async (req, res) => {
  try {
    const user = await getAuthenticatedUser(req);
    if (!user) return res.status(401).json({ ok: false, error: 'Authentication required.' });

    const current2FA = user.two_factor_enabled || 0;
    const next2FA = current2FA ? 0 : 1;

    await db.run('UPDATE users SET two_factor_enabled = ? WHERE id = ?', [next2FA, user.id]);

    await createNotificationEmail({
      userId: user.id,
      recipientEmail: user.email,
      category: 'Security Alert',
      subject: `TrustPay Tax: Two-Factor Authentication ${next2FA ? 'Enabled' : 'Disabled'}`,
      message: `Dear ${user.full_name},\n\nTwo-Factor Authentication (2FA) protection on your account is now ${next2FA ? 'ENABLED' : 'DISABLED'}.\n\nTimestamp: ${new Date().toUTCString()}`,
      notificationType: next2FA ? 'info' : 'warning'
    });

    res.json({
      ok: true,
      twoFactorEnabled: !!next2FA,
      message: `Two-Factor Authentication is now ${next2FA ? 'enabled' : 'disabled'}.`
    });
  } catch (err) {
    res.status(500).json({ ok: false, error: 'Failed to update 2FA status.' });
  }
});

app.post('/api/support/ticket', async (req, res) => {
  try {
    const user = await getAuthenticatedUser(req);
    const { subject, department, priority, message } = req.body;

    if (!subject || !message) {
      return res.status(400).json({ ok: false, error: 'Subject and message are required.' });
    }

    const userId = user ? user.id : 0;
    const userEmail = user ? user.email : 'guest@bitfurytech.com';
    const userName = user ? user.full_name : 'Guest Investor';

    const result = await db.run(
      'INSERT INTO support_tickets (user_id, subject, department, priority, message, status, created_at) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [userId, subject, department || 'General', priority || 'Medium', message, 'Open', new Date().toISOString()]
    );

    if (user) {
      await createNotificationEmail({
        userId: user.id,
        recipientEmail: user.email,
        category: 'Support Ticket Opened',
        subject: `TrustPay Tax: Support Ticket #${result.lastID} Created - [${subject}]`,
        message: `Dear ${userName},\n\nThank you for contacting Bitfurytech Institutional Support.\n\nYour support ticket #${result.lastID} has been assigned to our senior desk representative. Expected response time: under 2 hours.\n\nTicket Subject: ${subject}\nPriority: ${priority || 'Medium'}`,
        notificationType: 'info'
      });
    }

    res.json({
      ok: true,
      ticketId: result.lastID,
      message: `Support ticket #${result.lastID} created successfully. Our team will respond shortly.`
    });
  } catch (err) {
    res.status(500).json({ ok: false, error: 'Failed to create support ticket.' });
  }
});

async function requireAdminUser(req, res) {
  const user = await getAuthenticatedUser(req);
  if (!user || user.role !== 'admin') {
    res.status(403).json({ ok: false, error: 'Unauthorized: Administrator access required.' });
    return null;
  }
  return user;
}

app.get('/api/admin', async (req, res) => {
  try {
    const adminUser = await requireAdminUser(req, res);
    if (!adminUser) return;

    const deposits = await db.all('SELECT * FROM deposits ORDER BY id DESC');
    const withdrawals = await db.all('SELECT * FROM withdrawals ORDER BY id DESC');
    const users = await db.all('SELECT * FROM users ORDER BY id DESC');
    const investments = await db.all('SELECT * FROM investments ORDER BY id DESC');
    const contacts = await db.all('SELECT * FROM contacts ORDER BY id DESC LIMIT 50');

    const pendingDeposits = deposits.filter((item) => item.status === 'pending');
    const pendingWithdrawals = withdrawals.filter((item) => item.status === 'pending');

    const totalCapital =
      users.reduce((sum, u) => sum + (u.deposit_balance || 0) + (u.interest_balance || 0), 0) +
      investments.reduce((sum, inv) => sum + inv.amount, 0);

    res.json({
      stats: {
        managedCapital: formatCurrency(totalCapital),
        activeUsers: String(users.length),
        pendingAlerts: String(pendingDeposits.length + pendingWithdrawals.length),
        totalDeposits: formatCurrency(deposits.reduce((sum, d) => sum + d.amount, 0)),
        totalInvestments: formatCurrency(investments.reduce((sum, inv) => sum + inv.amount, 0))
      },
      requests: deposits.map((item) => ({
        id: item.id,
        userId: item.user_id,
        amount: formatCurrency(item.amount),
        method: item.method,
        reference: item.reference,
        status: item.status,
        createdAt: item.created_at
      })),
      withdrawals: withdrawals.map((w) => ({
        id: w.id,
        userId: w.user_id,
        amount: formatCurrency(w.amount),
        walletType: w.wallet_type,
        method: w.method,
        details: w.details,
        status: w.status,
        createdAt: w.created_at
      })),
      users: users.map((u) => {
        const userInvestments = investments.filter((inv) => inv.user_id === u.id);
        const activeInvestments = userInvestments.filter((inv) => inv.status === 'active');
        return {
          id: u.id,
          fullName: u.full_name,
          email: u.email,
          phone: u.phone || '',
          country: u.country || '',
          role: u.role || 'client',
          status: u.status || 'active',
          depositBalance: formatCurrency(u.deposit_balance),
          depositBalanceRaw: u.deposit_balance || 0,
          interestBalance: formatCurrency(u.interest_balance),
          interestBalanceRaw: u.interest_balance || 0,
          referralBalance: formatCurrency(u.referral_balance || 0),
          referralBalanceRaw: u.referral_balance || 0,
          btcWallet: u.btc_wallet || '',
          usdtWallet: u.usdt_wallet || '',
          twoFactorEnabled: Boolean(u.two_factor_enabled),
          createdAt: u.created_at,
          activeInvestmentsCount: activeInvestments.length,
          activeInvestments: activeInvestments.map((inv) => ({
            id: inv.id,
            planName: inv.plan_name,
            amount: formatCurrency(inv.amount),
            amountRaw: inv.amount,
            dailyRate: inv.daily_rate,
            accruedProfit: formatCurrency(inv.accrued_profit || 0),
            createdAt: inv.created_at
          })),
          totalInvested: formatCurrency(activeInvestments.reduce((sum, inv) => sum + inv.amount, 0))
        };
      }),
      contacts: contacts || []
    });
  } catch (err) {
    console.error('Error fetching admin data:', err);
    res.status(500).json({ ok: false, error: 'Failed to fetch admin data.' });
  }
});

app.post('/api/auth/register', async (req, res) => {
  try {
    const { fullName = '', email = '', password = '' } = req.body;
    const normalizedEmail = String(email).trim().toLowerCase();

    if (!fullName || !normalizedEmail || !password) {
      return res.status(400).json({ ok: false, error: 'Full name, email address, and password are required.' });
    }

    const existing = await db.get('SELECT id FROM users WHERE email = ?', [normalizedEmail]);
    if (existing) {
      return res.status(409).json({ ok: false, error: 'An account with this email address already exists. Please log in.' });
    }

    const token = createToken();
    const now = new Date().toISOString();

    const result = await db.run(
      'INSERT INTO users (full_name, email, password_hash, role, auth_token, deposit_balance, interest_balance, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
      [String(fullName).trim(), normalizedEmail, hashPassword(String(password)), 'client', token, 10.0, 0.0, now]
    );

    const userId = result.lastID;

    // Log signup bonus
    const trxId = `BONUS-${Math.random().toString(36).substring(2, 10).toUpperCase()}`;
    await db.run(
      'INSERT INTO transactions (user_id, trx_id, type, amount, wallet, details, post_balance, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
      [userId, trxId, 'signup_bonus', 10, 'Deposit Wallet', 'You got $10 Sign Up Bonus', 10, now]
    );

    try {
      // Send automated registration & bonus transaction alert email
      await sendOfficialNotificationEmail({
        userId,
        recipientEmail: normalizedEmail,
        category: 'Transaction Alert: Welcome Bonus',
        subject: 'TrustPay Tax: Welcome & $10.00 Sign-Up Bonus Credited',
        message: `Dear ${String(fullName).trim()},\n\nWelcome to Bitfurytech! Your account has been created successfully.\n\nTransaction ID: ${trxId}\nTransaction Type: Welcome Sign-Up Bonus\nAmount Credited: $10.00 USD\nWallet: Deposit Wallet\nUpdated Deposit Wallet Balance: $10.00 USD\nTimestamp: ${now}\n\nThank you for choosing Bitfurytech.\nOfficial Sender: info@trustpay.tax`,
        notificationType: 'info'
      });
    } catch (e) {
      console.warn('Failed to send notification email during registration:', e);
    }

    res.json({
      ok: true,
      token,
      user: {
        id: userId,
        fullName: String(fullName).trim(),
        email: normalizedEmail,
        role: 'client'
      }
    });
  } catch (err) {
    console.error('Error in registration:', err);
    res.status(500).json({ ok: false, error: 'Failed to create user account. Please try again.' });
  }
});

app.post('/api/auth/demo', async (req, res) => {
  try {
    const demoEmail = 'investor@bitfurytech.com';
    let user = await db.get('SELECT * FROM users WHERE email = ?', [demoEmail]);
    const token = createToken();

    if (!user) {
      const now = new Date().toISOString();
      const result = await db.run(
        'INSERT INTO users (full_name, email, password_hash, role, auth_token, deposit_balance, interest_balance, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
        ['Demo Investor', demoEmail, hashPassword('Demo1234!'), 'client', token, 5000.0, 320.50, now]
      );
      user = await db.get('SELECT * FROM users WHERE id = ?', [result.lastID]);
    } else {
      await db.run('UPDATE users SET auth_token = ? WHERE id = ?', [token, user.id]);
    }

    res.json({
      ok: true,
      token,
      user: {
        id: user.id,
        fullName: user.full_name,
        email: user.email,
        role: user.role
      }
    });
  } catch (err) {
    console.error('Error in demo auth:', err);
    res.status(500).json({ ok: false, error: 'Demo login failed.' });
  }
});

app.post('/api/auth/login', async (req, res) => {
  try {
    const { email = '', password = '' } = req.body;
    const normalizedEmail = String(email).trim().toLowerCase();

    if (!normalizedEmail || !password) {
      return res.status(400).json({ ok: false, error: 'Email and password are required.' });
    }

    const user = await db.get('SELECT * FROM users WHERE email = ?', [normalizedEmail]);
    if (!user) {
      return res.status(401).json({ ok: false, error: 'No account found with this email. Please register first.' });
    }

    if (user.password_hash !== hashPassword(String(password))) {
      return res.status(401).json({ ok: false, error: 'Incorrect password. Please try again.' });
    }

    const token = createToken();
    await db.run('UPDATE users SET auth_token = ? WHERE id = ?', [token, user.id]);

    res.json({
      ok: true,
      token,
      user: {
        id: user.id,
        fullName: user.full_name,
        email: user.email,
        role: user.role
      }
    });
  } catch (err) {
    console.error('Error in login:', err);
    res.status(500).json({ ok: false, error: 'Login failed. Please try again.' });
  }
});

app.post('/api/contact', async (req, res) => {
  try {
    const { name = '', email = '', message = '' } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ ok: false, error: 'All fields are required.' });
    }

    await db.run(
      'INSERT INTO contacts (name, email, message, created_at) VALUES (?, ?, ?, ?)',
      [name, email, message, new Date().toISOString()]
    );

    // Send auto-acknowledgement from official email
    await sendOfficialNotificationEmail({
      recipientEmail: email,
      subject: 'Inquiry Received - TrustPay Tax Support',
      message: `Hello ${name},\n\nThank you for reaching out to TrustPay Tax. We have received your message:\n\n"${message}"\n\nAn institutional representative will review your request and get back to you shortly.\n\nSender: info@trustpay.tax`,
      category: 'Support Auto-Reply'
    });

    res.json({ ok: true, message: 'Message recorded and notification sent from info@trustpay.tax.' });
  } catch (err) {
    console.error('Error saving contact message:', err);
    res.status(500).json({ ok: false, error: 'Failed to record message.' });
  }
});

app.post('/api/deposits', async (req, res) => {
  try {
    const user = await getAuthenticatedUser(req);
    if (!user) {
      return res.status(401).json({ ok: false, error: 'Authentication required.' });
    }

    const { amount, method, reference } = req.body;
    const numAmount = Number(amount);
    if (!numAmount || isNaN(numAmount) || numAmount <= 0 || !method || !reference) {
      return res.status(400).json({ ok: false, error: 'Valid amount, payment method, and reference address are required.' });
    }

    const now = new Date().toISOString();
    const result = await db.run(
      'INSERT INTO deposits (user_id, amount, method, reference, status, created_at) VALUES (?, ?, ?, ?, ?, ?)',
      [user.id, numAmount, method, reference, 'pending', now]
    );

    // Trigger user notification email
    await sendOfficialNotificationEmail({
      toUser: user,
      subject: 'Deposit Request Submitted - Pending Verification',
      message: `Dear ${user.full_name},\n\nYour deposit request of $${numAmount.toFixed(2)} via ${method} (Ref: ${reference}) has been logged and is awaiting compliance verification.\n\nOfficial Company Email: info@trustpay.tax`,
      category: 'Deposit Confirmation'
    });

    res.json({ ok: true, deposit: { id: result.lastID, amount: numAmount, method, reference, status: 'pending' } });
  } catch (err) {
    console.error('Error creating deposit:', err);
    res.status(500).json({ ok: false, error: 'Failed to record deposit.' });
  }
});

app.post('/api/admin/requests/:id/approve', async (req, res) => {
  try {
    const adminUser = await requireAdminUser(req, res);
    if (!adminUser) return;

    const { id } = req.params;
    const deposit = await db.get('SELECT * FROM deposits WHERE id = ?', [id]);
    if (!deposit) {
      return res.status(404).json({ ok: false, error: 'Deposit request not found.' });
    }

    if (deposit.status === 'pending') {
      await db.run('UPDATE deposits SET status = ? WHERE id = ?', ['approved', id]);

      const user = await db.get('SELECT * FROM users WHERE id = ?', [deposit.user_id]);
      if (user) {
        const newBal = (user.deposit_balance || 0) + deposit.amount;
        await db.run('UPDATE users SET deposit_balance = ? WHERE id = ?', [newBal, user.id]);

        const trxId = `DEP-${Math.random().toString(36).substring(2, 10).toUpperCase()}`;
        await db.run(
          'INSERT INTO transactions (user_id, trx_id, type, amount, wallet, details, post_balance, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
          [user.id, trxId, 'deposit_approved', deposit.amount, 'Deposit Wallet', `Deposit via ${deposit.method} approved`, newBal, new Date().toISOString()]
        );

        // Official email notification
        await sendOfficialNotificationEmail({
          toUser: user,
          subject: 'Deposit Approved & Funds Credited',
          message: `Dear ${user.full_name},\n\nYour deposit of $${deposit.amount.toFixed(2)} via ${deposit.method} has been approved. Your updated Deposit Wallet balance is $${newBal.toFixed(2)}.\n\nOfficial Company Email: info@trustpay.tax`,
          category: 'Deposit Confirmation'
        });
      }
    }

    res.json({ ok: true, status: 'approved' });
  } catch (err) {
    console.error('Error approving deposit:', err);
    res.status(500).json({ ok: false, error: 'Failed to approve deposit.' });
  }
});

app.post('/api/admin/requests/:id/reject', async (req, res) => {
  try {
    const adminUser = await requireAdminUser(req, res);
    if (!adminUser) return;

    const { id } = req.params;
    const deposit = await db.get('SELECT * FROM deposits WHERE id = ?', [id]);
    if (!deposit) {
      return res.status(404).json({ ok: false, error: 'Deposit request not found.' });
    }

    if (deposit.status === 'pending') {
      await db.run('UPDATE deposits SET status = ? WHERE id = ?', ['rejected', id]);
      const user = await db.get('SELECT * FROM users WHERE id = ?', [deposit.user_id]);
      if (user) {
        await sendOfficialNotificationEmail({
          toUser: user,
          subject: 'Deposit Verification Unsuccessful',
          message: `Dear ${user.full_name},\n\nYour deposit request #${id} of $${deposit.amount.toFixed(2)} could not be verified and was rejected. Please contact support at info@trustpay.tax for assistance.`,
          category: 'Account Notice'
        });
      }
    }

    res.json({ ok: true, status: 'rejected' });
  } catch (err) {
    console.error('Error rejecting deposit:', err);
    res.status(500).json({ ok: false, error: 'Failed to reject deposit.' });
  }
});

app.post('/api/admin/withdrawals/:id/approve', async (req, res) => {
  try {
    const adminUser = await requireAdminUser(req, res);
    if (!adminUser) return;

    const { id } = req.params;
    const withdrawal = await db.get('SELECT * FROM withdrawals WHERE id = ?', [id]);
    if (!withdrawal) {
      return res.status(404).json({ ok: false, error: 'Withdrawal request not found.' });
    }
    await db.run('UPDATE withdrawals SET status = ? WHERE id = ?', ['approved', id]);

    const user = await db.get('SELECT * FROM users WHERE id = ?', [withdrawal.user_id]);
    if (user) {
      await sendOfficialNotificationEmail({
        toUser: user,
        subject: `Withdrawal #${id} Approved & Processed`,
        message: `Dear ${user.full_name},\n\nYour withdrawal request #${id} of $${withdrawal.amount.toFixed(2)} (${withdrawal.wallet_type}) via ${withdrawal.method} has been approved and dispatched to ${withdrawal.details}.\n\nOfficial Company Sender: info@trustpay.tax`,
        category: 'Withdrawal Notice'
      });
    }

    res.json({ ok: true, status: 'approved', message: `Withdrawal #${id} approved successfully.` });
  } catch (err) {
    console.error('Error approving withdrawal:', err);
    res.status(500).json({ ok: false, error: 'Failed to approve withdrawal.' });
  }
});

app.post('/api/admin/withdrawals/:id/reject', async (req, res) => {
  try {
    const adminUser = await requireAdminUser(req, res);
    if (!adminUser) return;

    const { id } = req.params;
    const withdrawal = await db.get('SELECT * FROM withdrawals WHERE id = ?', [id]);
    if (!withdrawal) {
      return res.status(404).json({ ok: false, error: 'Withdrawal request not found.' });
    }
    if (withdrawal.status === 'pending') {
      await db.run('UPDATE withdrawals SET status = ? WHERE id = ?', ['rejected', id]);

      const user = await db.get('SELECT * FROM users WHERE id = ?', [withdrawal.user_id]);
      if (user) {
        const isDepositWallet = withdrawal.wallet_type === 'Deposit Wallet';
        const targetBal = isDepositWallet ? (user.deposit_balance || 0) + withdrawal.amount : user.deposit_balance;
        const targetIntBal = !isDepositWallet ? (user.interest_balance || 0) + withdrawal.amount : user.interest_balance;

        if (isDepositWallet) {
          await db.run('UPDATE users SET deposit_balance = ? WHERE id = ?', [targetBal, user.id]);
        } else {
          await db.run('UPDATE users SET interest_balance = ? WHERE id = ?', [targetIntBal, user.id]);
        }

        const trxId = `REF-${Math.random().toString(36).substring(2, 10).toUpperCase()}`;
        await db.run(
          'INSERT INTO transactions (user_id, trx_id, type, amount, wallet, details, post_balance, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
          [user.id, trxId, 'refund', withdrawal.amount, withdrawal.wallet_type, `Rejected withdrawal #${id} refunded`, isDepositWallet ? targetBal : targetIntBal, new Date().toISOString()]
        );

        await sendOfficialNotificationEmail({
          toUser: user,
          subject: `Withdrawal #${id} Rejected & Funds Refunded`,
          message: `Dear ${user.full_name},\n\nYour withdrawal request #${id} of $${withdrawal.amount.toFixed(2)} was rejected. The funds have been returned to your ${withdrawal.wallet_type}.\n\nOfficial Company Sender: info@trustpay.tax`,
          category: 'Withdrawal Notice'
        });
      }
    }
    res.json({ ok: true, status: 'rejected', message: `Withdrawal #${id} rejected and funds refunded.` });
  } catch (err) {
    console.error('Error rejecting withdrawal:', err);
    res.status(500).json({ ok: false, error: 'Failed to reject withdrawal.' });
  }
});

app.post('/api/admin/users/:id/balance', async (req, res) => {
  try {
    const adminUser = await requireAdminUser(req, res);
    if (!adminUser) return;

    const { id } = req.params;
    const { wallet = 'deposit', amount = 0, type = 'credit', reason = 'Admin Adjustment' } = req.body;
    const user = await db.get('SELECT * FROM users WHERE id = ?', [id]);
    if (!user) {
      return res.status(404).json({ ok: false, error: 'User account not found.' });
    }

    const numAmt = Math.abs(Number(amount) || 0);
    if (numAmt <= 0) {
      return res.status(400).json({ ok: false, error: 'Valid amount required.' });
    }

    const targetKey = wallet === 'interest' ? 'interest_balance' : 'deposit_balance';
    const walletLabel = wallet === 'interest' ? 'Interest Wallet' : 'Deposit Wallet';
    let currentBal = user[targetKey] || 0;

    if (type === 'credit') {
      currentBal += numAmt;
    } else {
      currentBal = Math.max(currentBal - numAmt, 0);
    }

    if (wallet === 'interest') {
      await db.run('UPDATE users SET interest_balance = ? WHERE id = ?', [currentBal, user.id]);
    } else {
      await db.run('UPDATE users SET deposit_balance = ? WHERE id = ?', [currentBal, user.id]);
    }

    const trxId = `ADM-${Math.random().toString(36).substring(2, 10).toUpperCase()}`;
    await db.run(
      'INSERT INTO transactions (user_id, trx_id, type, amount, wallet, details, post_balance, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
      [user.id, trxId, `admin_${type}`, numAmt, walletLabel, `${type === 'credit' ? 'Admin credit' : 'Admin debit'}: ${reason}`, currentBal, new Date().toISOString()]
    );

    const updatedUser = await db.get('SELECT * FROM users WHERE id = ?', [user.id]);

    // Send official notification
    await sendOfficialNotificationEmail({
      toUser: user,
      subject: `Account Balance ${type === 'credit' ? 'Credit' : 'Debit'} Notice`,
      message: `Dear ${user.full_name},\n\nYour ${walletLabel} has been ${type === 'credit' ? 'credited' : 'debited'} with $${numAmt.toFixed(2)}. Reason: ${reason}.\n\nNew Wallet Balance: $${currentBal.toFixed(2)}\nOfficial Company Email: info@trustpay.tax`,
      category: 'Account Notice'
    });

    res.json({
      ok: true,
      message: `User ${user.full_name} (${walletLabel}) updated. New balance: $${currentBal.toFixed(2)}`,
      user: {
        id: user.id,
        depositBalance: updatedUser.deposit_balance,
        interestBalance: updatedUser.interest_balance
      }
    });
  } catch (err) {
    console.error('Error adjusting user balance:', err);
    res.status(500).json({ ok: false, error: 'Failed to adjust user balance.' });
  }
});

app.post('/api/admin/trigger-profit', async (req, res) => {
  try {
    const adminUser = await requireAdminUser(req, res);
    if (!adminUser) return;

    let processedCount = 0;
    let totalDistributed = 0;

    const activeInvestments = await db.all('SELECT * FROM investments WHERE status = ?', ['active']);

    for (const inv of activeInvestments) {
      const user = await db.get('SELECT * FROM users WHERE id = ?', [inv.user_id]);
      if (user) {
        const dailyReturn = inv.amount * (inv.daily_rate / 100);
        const newIntBal = (user.interest_balance || 0) + dailyReturn;
        await db.run('UPDATE users SET interest_balance = ? WHERE id = ?', [newIntBal, user.id]);

        totalDistributed += dailyReturn;
        processedCount++;

        const trxId = `YIELD-${Math.random().toString(36).substring(2, 10).toUpperCase()}`;
        await db.run(
          'INSERT INTO transactions (user_id, trx_id, type, amount, wallet, details, post_balance, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
          [user.id, trxId, 'interest_payout', dailyReturn, 'Interest Wallet', `Daily interest payout from ${inv.plan_name}`, newIntBal, new Date().toISOString()]
        );

        await sendOfficialNotificationEmail({
          toUser: user,
          subject: 'Daily Profit Yield Credited',
          message: `Dear ${user.full_name},\n\nA profit yield of $${dailyReturn.toFixed(2)} from plan "${inv.plan_name}" has been credited to your Interest Wallet.\n\nSender: info@trustpay.tax`,
          category: 'Profit Yield Update'
        });
      }
    }

    res.json({
      ok: true,
      message: `Profit yields triggered for ${processedCount} active investment(s). Total $${totalDistributed.toFixed(2)} credited to interest wallets.`
    });
  } catch (err) {
    console.error('Error triggering profit:', err);
    res.status(500).json({ ok: false, error: 'Failed to process profit yields.' });
  }
});

// OFFICIAL ADMIN MAILING & NOTIFICATION API ENDPOINTS
app.post('/api/admin/mail/send', async (req, res) => {
  try {
    const adminUser = await requireAdminUser(req, res);
    if (!adminUser) return;

    const { target = 'all', userId, recipientEmail, subject = '', message = '', category = 'Official Announcement' } = req.body;

    if (!subject || !message) {
      return res.status(400).json({ ok: false, error: 'Subject and message body are required.' });
    }

    let dispatchedCount = 0;

    if (target === 'all') {
      const users = await db.all('SELECT * FROM users WHERE role = ?', ['client']);
      for (const u of users) {
        await sendOfficialNotificationEmail({
          toUser: u,
          subject,
          message,
          category
        });
        dispatchedCount++;
      }
    } else if (target === 'user' && userId) {
      const user = await db.get('SELECT * FROM users WHERE id = ?', [userId]);
      if (!user) {
        return res.status(404).json({ ok: false, error: 'Selected user not found.' });
      }
      await sendOfficialNotificationEmail({
        toUser: user,
        subject,
        message,
        category
      });
      dispatchedCount = 1;
    } else if (recipientEmail) {
      await sendOfficialNotificationEmail({
        recipientEmail,
        subject,
        message,
        category
      });
      dispatchedCount = 1;
    } else {
      return res.status(400).json({ ok: false, error: 'Invalid recipient specified.' });
    }

    res.json({
      ok: true,
      message: `Official notification successfully dispatched from info@trustpay.tax to ${dispatchedCount} recipient(s).`,
      count: dispatchedCount
    });
  } catch (err) {
    console.error('Error sending admin email:', err);
    res.status(500).json({ ok: false, error: 'Failed to dispatch email.' });
  }
});

app.get('/api/admin/mail/logs', async (req, res) => {
  try {
    const adminUser = await requireAdminUser(req, res);
    if (!adminUser) return;

    const logs = await db.all('SELECT * FROM mail_logs ORDER BY id DESC LIMIT 100');
    res.json({ ok: true, logs });
  } catch (err) {
    console.error('Error fetching mail logs:', err);
    res.status(500).json({ ok: false, error: 'Failed to load mail logs.' });
  }
});

// USER NOTIFICATIONS INBOX API ENDPOINTS
app.get('/api/notifications', async (req, res) => {
  try {
    const user = await getAuthenticatedUser(req);
    if (!user) {
      return res.status(401).json({ ok: false, error: 'Authentication required.' });
    }

    const notifications = await db.all(
      'SELECT * FROM user_notifications WHERE user_id = ? ORDER BY id DESC LIMIT 50',
      [user.id]
    );

    res.json({ ok: true, notifications });
  } catch (err) {
    console.error('Error fetching user notifications:', err);
    res.status(500).json({ ok: false, error: 'Failed to load notifications.' });
  }
});

app.post('/api/notifications/:id/read', async (req, res) => {
  try {
    const user = await getAuthenticatedUser(req);
    if (!user) {
      return res.status(401).json({ ok: false, error: 'Authentication required.' });
    }

    const { id } = req.params;
    await db.run('UPDATE user_notifications SET is_read = 1 WHERE id = ? AND user_id = ?', [id, user.id]);
    res.json({ ok: true });
  } catch (err) {
    console.error('Error marking notification as read:', err);
    res.status(500).json({ ok: false, error: 'Failed to update notification.' });
  }
});

app.post('/api/admin/users/:id/toggle-role', async (req, res) => {
  try {
    const adminUser = await requireAdminUser(req, res);
    if (!adminUser) return;

    const { id } = req.params;
    const user = await db.get('SELECT * FROM users WHERE id = ?', [id]);
    if (!user) {
      return res.status(404).json({ ok: false, error: 'User not found.' });
    }
    const newRole = user.role === 'admin' ? 'client' : 'admin';
    await db.run('UPDATE users SET role = ? WHERE id = ?', [newRole, user.id]);
    res.json({ ok: true, role: newRole, message: `User ${user.full_name} role set to ${newRole}.` });
  } catch (err) {
    console.error('Error toggling user role:', err);
    res.status(500).json({ ok: false, error: 'Failed to toggle user role.' });
  }
});

app.post('/api/admin/users/:id/approve', async (req, res) => {
  try {
    const adminUser = await requireAdminUser(req, res);
    if (!adminUser) return;

    const { id } = req.params;
    const user = await db.get('SELECT * FROM users WHERE id = ?', [id]);
    if (!user) {
      return res.status(404).json({ ok: false, error: 'User account not found.' });
    }

    await db.run('UPDATE users SET status = ? WHERE id = ?', ['active', user.id]);

    await sendOfficialNotificationEmail({
      toUser: user,
      subject: 'TrustPay Tax: Account Approved & Activated',
      message: `Dear ${user.full_name},\n\nYour investor account (#${user.id}) has been manually approved and activated by our administration team. You now have full access to deposit, invest, and request withdrawals.\n\nOfficial Company Email: info@trustpay.tax`,
      category: 'Account Notice'
    });

    res.json({ ok: true, status: 'active', message: `Account #${user.id} (${user.full_name}) manually approved and activated successfully.` });
  } catch (err) {
    console.error('Error approving user account:', err);
    res.status(500).json({ ok: false, error: 'Failed to approve user account.' });
  }
});

app.post('/api/admin/users/:id/toggle-status', async (req, res) => {
  try {
    const adminUser = await requireAdminUser(req, res);
    if (!adminUser) return;

    const { id } = req.params;
    const user = await db.get('SELECT * FROM users WHERE id = ?', [id]);
    if (!user) {
      return res.status(404).json({ ok: false, error: 'User account not found.' });
    }
    const currentStatus = user.status || 'active';
    const newStatus = currentStatus === 'active' ? 'suspended' : 'active';
    await db.run('UPDATE users SET status = ? WHERE id = ?', [newStatus, user.id]);
    res.json({ ok: true, status: newStatus, message: `Account #${user.id} (${user.full_name}) status updated to ${newStatus.toUpperCase()}.` });
  } catch (err) {
    console.error('Error toggling user status:', err);
    res.status(500).json({ ok: false, error: 'Failed to update user status.' });
  }
});

app.post('/api/admin/users/:id/update-profile', async (req, res) => {
  try {
    const adminUser = await requireAdminUser(req, res);
    if (!adminUser) return;

    const { id } = req.params;
    const { fullName, email, phone, country, btcWallet, usdtWallet, depositBalance, interestBalance, role, status, newPassword } = req.body;

    const user = await db.get('SELECT * FROM users WHERE id = ?', [id]);
    if (!user) {
      return res.status(404).json({ ok: false, error: 'User account not found.' });
    }

    const updatedName = fullName !== undefined ? String(fullName).trim() : user.full_name;
    const updatedEmail = email !== undefined ? String(email).trim().toLowerCase() : user.email;
    const updatedPhone = phone !== undefined ? String(phone).trim() : (user.phone || '');
    const updatedCountry = country !== undefined ? String(country).trim() : (user.country || '');
    const updatedBtc = btcWallet !== undefined ? String(btcWallet).trim() : (user.btc_wallet || '');
    const updatedUsdt = usdtWallet !== undefined ? String(usdtWallet).trim() : (user.usdt_wallet || '');
    const updatedDep = depositBalance !== undefined ? Math.max(parseFloat(depositBalance) || 0, 0) : user.deposit_balance;
    const updatedInt = interestBalance !== undefined ? Math.max(parseFloat(interestBalance) || 0, 0) : user.interest_balance;
    const updatedRole = role || user.role || 'client';
    const updatedStatus = status || user.status || 'active';

    if (newPassword && String(newPassword).trim().length > 0) {
      const pwdHash = hashPassword(String(newPassword).trim());
      await db.run(
        'UPDATE users SET full_name = ?, email = ?, phone = ?, country = ?, btc_wallet = ?, usdt_wallet = ?, deposit_balance = ?, interest_balance = ?, role = ?, status = ?, password_hash = ? WHERE id = ?',
        [updatedName, updatedEmail, updatedPhone, updatedCountry, updatedBtc, updatedUsdt, updatedDep, updatedInt, updatedRole, updatedStatus, pwdHash, user.id]
      );
    } else {
      await db.run(
        'UPDATE users SET full_name = ?, email = ?, phone = ?, country = ?, btc_wallet = ?, usdt_wallet = ?, deposit_balance = ?, interest_balance = ?, role = ?, status = ? WHERE id = ?',
        [updatedName, updatedEmail, updatedPhone, updatedCountry, updatedBtc, updatedUsdt, updatedDep, updatedInt, updatedRole, updatedStatus, user.id]
      );
    }

    res.json({ ok: true, message: `Investor account #${user.id} (${updatedName}) updated successfully.` });
  } catch (err) {
    console.error('Error updating user profile by admin:', err);
    res.status(500).json({ ok: false, error: 'Failed to update user profile.' });
  }
});

app.post('/api/admin/users/:id/delete', async (req, res) => {
  try {
    const adminUser = await requireAdminUser(req, res);
    if (!adminUser) return;

    const { id } = req.params;
    const user = await db.get('SELECT * FROM users WHERE id = ?', [id]);
    if (!user) {
      return res.status(404).json({ ok: false, error: 'User not found.' });
    }

    if (user.id === adminUser.id) {
      return res.status(400).json({ ok: false, error: 'You cannot delete your own admin account.' });
    }

    // Delete user dependent records if necessary
    await db.run('DELETE FROM deposits WHERE user_id = ?', [user.id]);
    await db.run('DELETE FROM withdrawals WHERE user_id = ?', [user.id]);
    await db.run('DELETE FROM investments WHERE user_id = ?', [user.id]);
    await db.run('DELETE FROM transactions WHERE user_id = ?', [user.id]);
    await db.run('DELETE FROM user_notifications WHERE user_id = ?', [user.id]);
    await db.run('DELETE FROM users WHERE id = ?', [user.id]);

    res.json({ ok: true, message: `Account #${user.id} (${user.full_name}) and associated records deleted.` });
  } catch (err) {
    console.error('Error deleting user account:', err);
    res.status(500).json({ ok: false, error: 'Failed to delete user account.' });
  }
});

app.get('/:page', (req, res, next) => {
  const page = req.params.page;
  if (page.includes('.')) {
    return next();
  }
  const filePath = path.join(__dirname, `${page}.html`);
  if (fs.existsSync(filePath)) {
    return res.sendFile(filePath);
  }
  next();
});

app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

if (process.env.NODE_ENV !== 'test' && process.env.NODE_ENV !== 'testing' && process.env.npm_lifecycle_event !== 'test' && isEntryPoint) {
  app.listen(port, '0.0.0.0', () => {
    console.log(`Bitfurytech server running on port ${port}`);
  });
}

export { app, db };
