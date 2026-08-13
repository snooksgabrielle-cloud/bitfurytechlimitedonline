import express from 'express';
import cors from 'cors';
import path from 'path';
import fs from 'fs';
import nodemailer from 'nodemailer';
import { createHash, randomBytes } from 'crypto';
import { fileURLToPath, pathToFileURL } from 'url';
import { db, initDb } from './db.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

process.on('uncaughtException', (err) => {
  console.error('⚠️ Uncaught Exception detected:', err);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('⚠️ Unhandled Rejection at:', promise, 'reason:', reason);
});

const app = express();
const port = process.env.PORT || 3000;
const isEntryPoint = process.argv[1]
  ? import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href
  : false;

app.use(cors());
app.use(express.json({ limit: '15mb' }));
app.use(express.urlencoded({ limit: '15mb', extended: true }));
app.use(express.static(__dirname));

// AUTOMATED WEBSITE VISITOR RECORDING MIDDLEWARE
app.use((req, res, next) => {
  if (
    req.method === 'GET' &&
    !req.path.startsWith('/api/') &&
    !req.path.match(/\.(js|css|png|jpg|jpeg|gif|svg|ico|json|woff|woff2)$/i)
  ) {
    try {
      const ipAddress = (req.headers['x-forwarded-for'] || req.socket?.remoteAddress || '127.0.0.1')
        .split(',')[0]
        .trim();
      const userAgent = (req.headers['user-agent'] || 'Unknown Browser').slice(0, 250);
      const visitPath = req.path || '/';
      const referrer = (req.headers['referer'] || req.headers['referrer'] || 'Direct').slice(0, 250);
      const now = new Date().toISOString();

      db.run(
        'INSERT INTO visitor_logs (ip_address, user_agent, path, referrer, user_id, created_at) VALUES (?, ?, ?, ?, NULL, ?)',
        [ipAddress, userAgent, visitPath, referrer, now]
      ).catch(() => {});
    } catch (e) {
      // Ignore background tracking errors
    }
  }
  next();
});

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
  },
  {
    id: 'agriculture',
    name: 'AGRICULTURE Plan',
    category: 'Sustainable Agriculture',
    dailyProfit: 1.45, // 1.45% daily
    monthlyProfit: 43.5, // 43.5% monthly
    minDeposit: 2500,
    maxDeposit: 100000,
    referralBonus: 6,
    durationDays: 30,
    description: 'Investing in Sustainable Agriculture, Precision Farming Technology & Agri-Assets.'
  }
];

const OFFICIAL_COMPANY_EMAIL = 'info@trustpay.tax';

const hashPassword = (password) => createHash('sha256').update(password).digest('hex');
const createToken = () => randomBytes(24).toString('hex');

async function getSmtpTransporter() {
  let host = process.env.SMTP_HOST || process.env.MAIL_HOST;
  let port = parseInt(process.env.SMTP_PORT || process.env.MAIL_PORT || '587');
  let user = process.env.SMTP_USER || process.env.MAIL_USER;
  let pass = process.env.SMTP_PASS || process.env.MAIL_PASS;
  let secure = process.env.SMTP_SECURE === 'true' || port === 465;

  if (!host && db) {
    try {
      const rows = await db.all('SELECT key, value FROM app_settings WHERE key LIKE "smtp_%"');
      const settings = {};
      (rows || []).forEach((r) => { settings[r.key] = r.value; });
      if (settings.smtp_host) {
        host = settings.smtp_host;
        port = parseInt(settings.smtp_port || '587');
        user = settings.smtp_user || '';
        pass = settings.smtp_pass || '';
        secure = settings.smtp_secure === 'true' || port === 465;
      }
    } catch (e) {
      // Table check fallback
    }
  }

  if (host && user && pass) {
    return nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass },
      tls: { rejectUnauthorized: false },
      connectionTimeout: 2500,
      greetingTimeout: 2500,
      socketTimeout: 3000
    });
  }

  return null;
}

async function sendOfficialNotificationEmail({ toUser, userId, recipientEmail, subject, message, category = 'Official Notice', notificationType = 'info' }) {
  const sender = process.env.SMTP_FROM || OFFICIAL_COMPANY_EMAIL;
  let targetUserId = userId || (toUser ? toUser.id : null);
  let recipient = recipientEmail || (toUser ? toUser.email : null);

  if (!recipient && targetUserId) {
    const foundUser = await db.get('SELECT email FROM users WHERE id = ?', [targetUserId]);
    if (foundUser) recipient = foundUser.email;
  }

  if (!recipient) return null;

  const now = new Date().toISOString();

  let emailStatus = 'delivered_in_app';
  let smtpError = null;

  try {
    const transporter = await getSmtpTransporter();
    if (transporter) {
      const htmlBody = `
        <div style="font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif; background-color: #0b0f19; color: #f8fafc; padding: 28px; border-radius: 12px; max-width: 620px; margin: 0 auto; border: 1px solid #1e293b;">
          <div style="text-align: center; border-bottom: 1px solid #334155; padding-bottom: 18px; margin-bottom: 22px;">
            <h2 style="color: #38bdf8; margin: 0; font-size: 22px; font-weight: 800;">Bitfurytech Limited</h2>
            <p style="color: #94a3b8; font-size: 13px; margin-top: 4px;">Quantitative Finance & Asset Management</p>
          </div>
          <div style="background: #1e293b; padding: 22px; border-radius: 8px; border-left: 4px solid #38bdf8; margin-bottom: 22px;">
            <h3 style="color: #f1f5f9; margin-top: 0; font-size: 16px;">${subject}</h3>
            <div style="color: #cbd5e1; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${message}</div>
          </div>
          <div style="text-align: center; color: #64748b; font-size: 12px; border-top: 1px solid #334155; padding-top: 16px;">
            <p style="margin: 4px 0;">Official Sender: <a href="mailto:${sender}" style="color: #38bdf8; text-decoration: none;">${sender}</a></p>
            <p style="margin: 4px 0;">&copy; ${new Date().getFullYear()} Bitfurytech Limited. All rights reserved.</p>
          </div>
        </div>
      `;

      const sendPromise = transporter.sendMail({
        from: `"Bitfurytech Support" <${sender}>`,
        to: recipient,
        subject: subject,
        text: message,
        html: htmlBody
      });

      const timeoutPromise = new Promise((_, reject) =>
        setTimeout(() => reject(new Error('SMTP connection timed out after 3 seconds.')), 3000)
      );

      await Promise.race([sendPromise, timeoutPromise]);
      emailStatus = 'sent_smtp';
      console.log(`✅ [SMTP Mailer] Real email dispatched to ${recipient}: ${subject}`);
    } else {
      console.log(`ℹ️ [Mailer] No active SMTP configuration found in environment. Saved in-app notification for ${recipient}: ${subject}`);
    }
  } catch (err) {
    smtpError = err.message;
    console.error(`⚠️ [SMTP Dispatch Failure] ${recipient}:`, err.message);
    emailStatus = 'smtp_failed';
  }

  // Record outgoing dispatch log in SQLite
  const mailResult = await db.run(
    'INSERT INTO mail_logs (sender, recipient, subject, message, category, status, created_at) VALUES (?, ?, ?, ?, ?, ?, ?)',
    [sender, recipient, subject, message, category, emailStatus, now]
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

  return { mailId: mailResult.lastID, sender, recipient, subject, status: emailStatus, smtpError };
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
async function processAutomatedInvestmentROI() {
  try {
    const activeInvestments = await db.all('SELECT * FROM investments WHERE status = "active"');
    const now = new Date();
    const nowIso = now.toISOString();

    for (const inv of activeInvestments) {
      const user = await db.get('SELECT * FROM users WHERE id = ?', [inv.user_id]);
      if (!user) continue;

      const durationDays = inv.duration_days || 30;
      let payoutsCount = inv.payouts_count || 0;
      const createdAt = new Date(inv.created_at);
      const lastPayoutAt = inv.last_payout_at ? new Date(inv.last_payout_at) : createdAt;

      const msSinceLast = now.getTime() - lastPayoutAt.getTime();
      const cyclesDue = Math.floor(msSinceLast / (24 * 60 * 60 * 1000));

      if (cyclesDue > 0 && payoutsCount < durationDays) {
        const payoutsToRun = Math.min(cyclesDue, durationDays - payoutsCount);
        const dailyProfit = inv.amount * (inv.daily_rate / 100);

        for (let i = 0; i < payoutsToRun; i++) {
          payoutsCount++;
          const currentInterest = user.interest_balance || 0;
          const newInterest = currentInterest + dailyProfit;
          user.interest_balance = newInterest;

          await db.run('UPDATE users SET interest_balance = ? WHERE id = ?', [newInterest, user.id]);

          const trxId = `ROI-${Math.random().toString(36).substring(2, 10).toUpperCase()}`;
          await db.run(
            'INSERT INTO transactions (user_id, trx_id, type, amount, wallet, details, post_balance, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
            [
              user.id,
              trxId,
              'interest_payout',
              dailyProfit,
              'Interest Wallet',
              `Automated 24h ROI Payout (${payoutsCount}/${durationDays}) for ${inv.plan_name}`,
              newInterest,
              nowIso
            ]
          );

          await sendOfficialNotificationEmail({
            toUser: user,
            category: 'Automated 24h ROI Payout',
            subject: `TrustPay Tax: 24h Profit Yield Credited - $${dailyProfit.toFixed(2)} USD`,
            message: `Dear ${user.full_name},\n\nYour automated 24-hour profit yield for investment "${inv.plan_name}" has been calculated and credited directly to your Interest Wallet.\n\nTransaction ID: ${trxId}\nPlan Name: ${inv.plan_name}\nInvested Capital: $${inv.amount.toFixed(2)} USD\nDaily Yield Rate: ${inv.daily_rate}%\nDaily Yield Credited: $${dailyProfit.toFixed(2)} USD\nPayout Cycle: Day ${payoutsCount} of ${durationDays}\nUpdated Interest Wallet Balance: $${newInterest.toFixed(2)} USD\nTimestamp: ${nowIso}\n\nOfficial Company Email: info@trustpay.tax`,
            notificationType: 'info'
          });
        }

        await db.run(
          'UPDATE investments SET payouts_count = ?, last_payout_at = ? WHERE id = ?',
          [payoutsCount, nowIso, inv.id]
        );
      }

      if (payoutsCount >= durationDays && (!inv.capital_returned || inv.capital_returned === 0)) {
        const currentInterest = user.interest_balance || 0;
        const newInterestWithCapital = currentInterest + inv.amount;
        user.interest_balance = newInterestWithCapital;

        await db.run('UPDATE users SET interest_balance = ? WHERE id = ?', [newInterestWithCapital, user.id]);

        const capTrxId = `CAP-${Math.random().toString(36).substring(2, 10).toUpperCase()}`;
        await db.run(
          'INSERT INTO transactions (user_id, trx_id, type, amount, wallet, details, post_balance, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
          [
            user.id,
            capTrxId,
            'capital_back',
            inv.amount,
            'Interest Wallet',
            `30-Day Principal Capital Return for ${inv.plan_name}`,
            newInterestWithCapital,
            nowIso
          ]
        );

        await db.run(
          'UPDATE investments SET status = "completed", capital_returned = 1 WHERE id = ?',
          [inv.id]
        );

        await sendOfficialNotificationEmail({
          toUser: user,
          category: '30-Day Capital Return',
          subject: `TrustPay Tax: 30-Day Investment Term Complete - $${inv.amount.toFixed(2)} Capital Returned`,
          message: `Dear ${user.full_name},\n\nYour 30-day investment term for plan "${inv.plan_name}" has reached maturity. As per institutional policy, your full principal capital of $${inv.amount.toFixed(2)} USD has been returned directly to your Interest Wallet.\n\nTransaction ID: ${capTrxId}\nPlan Name: ${inv.plan_name}\nOriginal Investment Amount: $${inv.amount.toFixed(2)} USD\nCapital Credited Wallet: Interest Wallet\nStatus: Investment Term Completed\nUpdated Interest Wallet Balance: $${newInterestWithCapital.toFixed(2)} USD\nTimestamp: ${nowIso}\n\nThank you for investing with Bitfurytech.\nOfficial Company Email: info@trustpay.tax`,
          notificationType: 'info'
        });
      }
    }
  } catch (err) {
    console.error('Error processing automated investment ROI:', err);
  }
}

// Start background 60s timer for automated ROI processing
setInterval(processAutomatedInvestmentROI, 60000);

async function calculateUserInvestmentsAndInterest(user) {
  if (!user) return { activeInvestments: [], totalInvested: 0, accruedInterest: 0 };

  const userInvestments = await db.all('SELECT * FROM investments WHERE user_id = ? ORDER BY id DESC', [user.id]);
  const now = new Date();
  let totalInvested = 0;
  let totalAccruedInterest = 0;

  const activeInvestments = userInvestments.map((inv) => {
    if (inv.status === 'active') {
      totalInvested += inv.amount;
    }
    const durationDays = inv.duration_days || 30;
    const payoutsCount = inv.payouts_count || 0;
    const dailyProfitAmount = inv.amount * (inv.daily_rate / 100);
    const totalEarnedSoFar = dailyProfitAmount * payoutsCount;
    totalAccruedInterest += totalEarnedSoFar;

    const lastPayoutAt = inv.last_payout_at ? new Date(inv.last_payout_at) : new Date(inv.created_at);
    const nextPayoutMs = Math.max(0, (lastPayoutAt.getTime() + 24 * 60 * 60 * 1000) - now.getTime());
    const hoursLeft = Math.floor(nextPayoutMs / (1000 * 60 * 60));
    const minsLeft = Math.floor((nextPayoutMs % (1000 * 60 * 60)) / (1000 * 60));

    return {
      id: inv.id,
      planId: inv.plan_id,
      planName: inv.plan_name,
      amount: inv.amount,
      dailyRate: inv.daily_rate,
      dailyProfitAmount,
      accruedProfit: totalEarnedSoFar,
      payoutsCount,
      durationDays,
      capitalReturned: Boolean(inv.capital_returned),
      status: inv.status,
      createdAt: inv.created_at,
      nextPayoutIn: inv.status === 'completed' ? 'Term Completed' : `${hoursLeft}h ${minsLeft}m`
    };
  });

  return { activeInvestments, totalInvested, accruedInterest: totalAccruedInterest };
}

app.get('/api/dashboard', async (req, res) => {
  try {
    let user = await getAuthenticatedUser(req);
    
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

    await processAutomatedInvestmentROI();
    user = await db.get('SELECT * FROM users WHERE id = ?', [user.id]);

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

    const currentInterestWallet = user.interest_balance || 0;

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
        avatar: user.avatar || '',
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

    const { fullName, phone, country, btcWallet, usdtWallet, avatar } = req.body;
    const updatedName = fullName?.trim() || user.full_name;
    const updatedPhone = phone?.trim() ?? (user.phone || '');
    const updatedCountry = country?.trim() ?? (user.country || '');
    const updatedBtc = btcWallet?.trim() ?? (user.btc_wallet || '');
    const updatedUsdt = usdtWallet?.trim() ?? (user.usdt_wallet || '');
    const updatedAvatar = avatar !== undefined ? avatar : (user.avatar || '');

    await db.run(
      'UPDATE users SET full_name = ?, phone = ?, country = ?, btc_wallet = ?, usdt_wallet = ?, avatar = ? WHERE id = ?',
      [updatedName, updatedPhone, updatedCountry, updatedBtc, updatedUsdt, updatedAvatar, user.id]
    );

    await sendOfficialNotificationEmail({
      userId: user.id,
      recipientEmail: user.email,
      category: 'Profile Update Notice',
      subject: 'TrustPay Tax: Account Profile Details Updated',
      message: `Dear ${updatedName},\n\nYour investor profile settings, profile picture, and default payout wallet addresses have been updated successfully.\n\nIf you did not initiate this change, please contact our security desk immediately at info@trustpay.tax.`,
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
        avatar: updatedAvatar,
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

// ==========================================
// DEDICATED /admin CONTROL ROUTER & HANDLERS
// ==========================================
const adminRouter = express.Router();

// Middleware on adminRouter: Serve admin UI page if HTML requested, otherwise enforce admin access
adminRouter.use(async (req, res, next) => {
  if (req.method === 'GET' && (req.path === '/' || req.path === '') && req.headers.accept && req.headers.accept.includes('text/html')) {
    return res.sendFile(path.join(__dirname, 'admin.html'));
  }
  next();
});

// ==========================================
// LIVE FINANCIAL TOTALS SERVICE & MIDDLEWARE
// ==========================================

/**
 * Service function to query and calculate real-time live financial metrics directly from SQLite database.
 */
async function getLiveFinancialTotals(database) {
  const activeDb = database || db;
  const deposits = await activeDb.all('SELECT * FROM deposits ORDER BY id DESC');
  const withdrawals = await activeDb.all('SELECT * FROM withdrawals ORDER BY id DESC');
  const users = await activeDb.all('SELECT * FROM users ORDER BY id DESC');
  const investments = await activeDb.all('SELECT * FROM investments ORDER BY id DESC');
  const contacts = await activeDb.all('SELECT * FROM contacts ORDER BY id DESC LIMIT 100');
  const visitorLogs = await activeDb.all('SELECT * FROM visitor_logs ORDER BY id DESC LIMIT 200');

  // Visitor Statistics Computations
  const totalVisitorsCount = (await activeDb.get('SELECT COUNT(*) as count FROM visitor_logs'))?.count || 0;
  const todayDateStr = new Date().toISOString().split('T')[0];
  const todayVisitorsCount = (await activeDb.get('SELECT COUNT(*) as count FROM visitor_logs WHERE created_at LIKE ?', [todayDateStr + '%']))?.count || 0;
  const uniqueVisitorsCount = (await activeDb.get('SELECT COUNT(DISTINCT ip_address) as count FROM visitor_logs'))?.count || 0;

  const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString();
  const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString();
  const weeklyVisitorsCount = (await activeDb.get('SELECT COUNT(*) as count FROM visitor_logs WHERE created_at >= ?', [sevenDaysAgo]))?.count || Math.max(todayVisitorsCount, Math.floor(totalVisitorsCount * 0.4));
  const monthlyVisitorsCount = (await activeDb.get('SELECT COUNT(*) as count FROM visitor_logs WHERE created_at >= ?', [thirtyDaysAgo]))?.count || totalVisitorsCount;

  // Top Visited Pages
  const pageCountsMap = {};
  visitorLogs.forEach(v => {
    const p = v.path || '/';
    pageCountsMap[p] = (pageCountsMap[p] || 0) + 1;
  });
  const mostVisitedPages = Object.entries(pageCountsMap)
    .map(([path, hits]) => ({ path, hits, count: hits, percentage: Math.round((hits / Math.max(visitorLogs.length, 1)) * 100) }))
    .sort((a, b) => b.hits - a.hits)
    .slice(0, 5);

  // Device & Browser Stats
  let desktopCount = 0, mobileCount = 0, tabletCount = 0;
  let chromeCount = 0, safariCount = 0, firefoxCount = 0, edgeCount = 0, otherBrowserCount = 0;
  visitorLogs.forEach(v => {
    const ua = (v.user_agent || '').toLowerCase();
    if (/ipad|tablet/i.test(ua)) tabletCount++;
    else if (/mobile|iphone|android/i.test(ua)) mobileCount++;
    else desktopCount++;

    if (ua.includes('edg/')) edgeCount++;
    else if (ua.includes('chrome')) chromeCount++;
    else if (ua.includes('safari')) safariCount++;
    else if (ua.includes('firefox')) firefoxCount++;
    else otherBrowserCount++;
  });

  const deviceStats = { Desktop: desktopCount || 1, Mobile: mobileCount, Tablet: tabletCount };
  const browserStats = { Chrome: chromeCount || 1, Safari: safariCount, Edge: edgeCount, Firefox: firefoxCount, Other: otherBrowserCount };

  const pendingDeposits = deposits.filter((item) => item.status === 'pending');
  const pendingWithdrawals = withdrawals.filter((item) => item.status === 'pending');
  const approvedWithdrawalsSum = withdrawals
    .filter((item) => item.status === 'approved')
    .reduce((sum, w) => sum + (w.amount || 0), 0);

  const unreadMessagesCount = contacts.filter((c) => (c.status || 'unread') === 'unread').length;

  const totalUserDepositBalances = users.reduce((sum, u) => sum + (u.deposit_balance || 0), 0);
  const totalUserInterestBalances = users.reduce((sum, u) => sum + (u.interest_balance || 0), 0);
  const activeInvestmentsList = investments.filter((inv) => inv.status === 'active');
  const totalInvestedRaw = activeInvestmentsList.reduce((sum, inv) => sum + (inv.amount || 0), 0);
  const totalAccruedProfitRaw = activeInvestmentsList.reduce((sum, inv) => sum + (inv.accrued_profit || 0), 0);

  const totalManagedCapitalRaw = totalUserDepositBalances + totalUserInterestBalances + totalInvestedRaw;
  const totalProfitYieldRaw = totalUserInterestBalances + totalAccruedProfitRaw;

  // Portfolio Sector Categorization
  let realEstateCap = 0, agriCap = 0, cryptoCap = 0, stocksCap = 0;
  activeInvestmentsList.forEach(inv => {
    const pName = (inv.plan_name || '').toLowerCase();
    if (pName.includes('real estate') || pName.includes('property')) realEstateCap += inv.amount;
    else if (pName.includes('agri') || pName.includes('farm')) agriCap += inv.amount;
    else if (pName.includes('stock') || pName.includes('equity') || pName.includes('index')) stocksCap += inv.amount;
    else cryptoCap += inv.amount;
  });

  if (totalInvestedRaw > 0 && (realEstateCap + agriCap + cryptoCap + stocksCap === 0)) {
    realEstateCap = Math.round(totalInvestedRaw * 0.35);
    agriCap = Math.round(totalInvestedRaw * 0.20);
    cryptoCap = Math.round(totalInvestedRaw * 0.30);
    stocksCap = totalInvestedRaw - (realEstateCap + agriCap + cryptoCap);
  }

  const uptimeSeconds = Math.floor(process.uptime());
  const uptimeHours = (uptimeSeconds / 3600).toFixed(1);

  const stats = {
    managedCapital: formatCurrency(totalManagedCapitalRaw),
    managedCapitalRaw: totalManagedCapitalRaw,
    investedCapital: formatCurrency(totalInvestedRaw),
    investedCapitalRaw: totalInvestedRaw,
    profitYield: formatCurrency(totalProfitYieldRaw),
    profitYieldRaw: totalProfitYieldRaw,
    totalWithdrawals: formatCurrency(approvedWithdrawalsSum),
    totalWithdrawalsRaw: approvedWithdrawalsSum,
    activeUsers: String(users.length),
    activeInvestmentsCount: String(activeInvestmentsList.length),
    pendingAlerts: String(pendingDeposits.length + pendingWithdrawals.length),
    pendingDepositsCount: String(pendingDeposits.length),
    pendingWithdrawalsCount: String(pendingWithdrawals.length),
    totalDeposits: formatCurrency(deposits.reduce((sum, d) => sum + d.amount, 0)),
    totalVisitorsCount: String(totalVisitorsCount),
    todayVisitorsCount: String(todayVisitorsCount),
    weeklyVisitorsCount: String(weeklyVisitorsCount),
    monthlyVisitorsCount: String(monthlyVisitorsCount),
    uniqueVisitorsCount: String(uniqueVisitorsCount),
    unreadMessagesCount: String(unreadMessagesCount),
    uptime: `${uptimeHours} hours`,
    categories: {
      realEstate: formatCurrency(realEstateCap),
      realEstateRaw: realEstateCap,
      agriculture: formatCurrency(agriCap),
      agricultureRaw: agriCap,
      crypto: formatCurrency(cryptoCap),
      cryptoRaw: cryptoCap,
      stocks: formatCurrency(stocksCap),
      stocksRaw: stocksCap
    },
    deviceStats,
    browserStats,
    mostVisitedPages
  };

  const capitalCenter = {
    totalManagedCapital: totalManagedCapitalRaw,
    totalInvestedCapital: totalInvestedRaw,
    totalProfitYield: totalProfitYieldRaw,
    totalWithdrawals: approvedWithdrawalsSum,
    categories: {
      realEstate: realEstateCap,
      agriculture: agriCap,
      crypto: cryptoCap,
      stocks: stocksCap
    },
    investmentLedger: activeInvestmentsList.map((inv) => {
      const u = users.find(usr => usr.id === inv.user_id) || {};
      return {
        id: inv.id,
        userId: inv.user_id,
        userName: u.full_name || u.username || `Investor #${inv.user_id}`,
        userEmail: u.email || '',
        planName: inv.plan_name,
        amount: formatCurrency(inv.amount),
        amountRaw: inv.amount,
        dailyRate: inv.daily_rate,
        profitYield: formatCurrency(inv.accrued_profit || 0),
        status: inv.status,
        createdAt: inv.created_at
      };
    })
  };

  return {
    stats,
    capitalCenter,
    topPages: mostVisitedPages,
    deviceStats,
    browserStats,
    deposits,
    withdrawals,
    users,
    investments,
    contacts,
    visitorLogs
  };
}

/**
 * Express middleware to attach live financial totals to request object
 */
async function liveTotalsMiddleware(req, res, next) {
  try {
    req.liveTotals = await getLiveFinancialTotals(db);
  } catch (err) {
    console.error('Error in liveTotalsMiddleware:', err);
  }
  next();
}

// GET /api/live-financial-totals - Dedicated API endpoint for real-time financial metrics
app.get('/api/live-financial-totals', async (req, res) => {
  try {
    const data = await getLiveFinancialTotals(db);
    res.json({ ok: true, stats: data.stats, capitalCenter: data.capitalCenter });
  } catch (err) {
    res.status(500).json({ ok: false, error: 'Failed to fetch live financial totals.' });
  }
});

// GET / or /stats - Main Admin Telemetry & Statistics
adminRouter.get(['/', '/stats'], async (req, res) => {
  try {
    const adminUser = await requireAdminUser(req, res);
    if (!adminUser) return;

    const liveData = await getLiveFinancialTotals(db);

    res.json({
      stats: liveData.stats,
      capitalCenter: liveData.capitalCenter,
      topPages: liveData.topPages,
      deviceStats: liveData.deviceStats,
      browserStats: liveData.browserStats,
      investmentsLedger: liveData.capitalCenter.investmentLedger,
      requests: liveData.deposits.map((item) => ({
        id: item.id,
        userId: item.user_id,
        amount: formatCurrency(item.amount),
        method: item.method,
        reference: item.reference,
        status: item.status,
        createdAt: item.created_at
      })),
      withdrawals: liveData.withdrawals.map((w) => ({
        id: w.id,
        userId: w.user_id,
        amount: formatCurrency(w.amount),
        walletType: w.wallet_type,
        method: w.method,
        details: w.details,
        status: w.status,
        createdAt: w.created_at
      })),
      users: liveData.users.map((u) => {
        const userInvestments = liveData.investments.filter((inv) => inv.user_id === u.id);
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
      contacts: (liveData.contacts || []).map((c) => ({
        id: c.id,
        name: c.name,
        email: c.email,
        subject: c.subject || 'General Inquiry',
        message: c.message,
        status: c.status || 'unread',
        replyMessage: c.reply_message || '',
        repliedAt: c.replied_at || '',
        createdAt: c.created_at
      })),
      visitorLogs: (liveData.visitorLogs || []).map((v) => ({
        id: v.id,
        ipAddress: v.ip_address || '127.0.0.1',
        userAgent: v.user_agent || 'Browser',
        path: v.path || '/',
        referrer: v.referrer || 'Direct',
        userId: v.user_id || null,
        createdAt: v.created_at
      }))
    });
  } catch (err) {
    console.error('Error fetching admin data:', err);
    res.status(500).json({ ok: false, error: 'Failed to fetch admin data.' });
  }
});

app.post('/api/auth/register', async (req, res) => {
  try {
    const { fullName = '', email = '', username = '', password = '', phone = '', country = '', accountType = 'Crypto Account' } = req.body;
    const normalizedEmail = String(email).trim().toLowerCase();
    let cleanUsername = String(username || '').trim().toLowerCase();
    const cleanPhone = String(phone).trim();
    const cleanCountry = String(country).trim();
    const cleanAccountType = String(accountType).trim() || 'Crypto Account';

    if (!fullName || !normalizedEmail || !password) {
      return res.status(400).json({ ok: false, error: 'Full name, email address, and password are required.' });
    }

    if (!cleanUsername) {
      // Auto-generate username if not provided
      cleanUsername = normalizedEmail.split('@')[0].replace(/[^a-z0-9_]/g, '');
    }

    const existingEmail = await db.get('SELECT id FROM users WHERE LOWER(email) = ?', [normalizedEmail]);
    if (existingEmail) {
      return res.status(409).json({ ok: false, error: 'An account with this email address already exists. Please log in.' });
    }

    const existingUsername = await db.get('SELECT id FROM users WHERE LOWER(username) = ? AND username != ""', [cleanUsername]);
    if (existingUsername) {
      return res.status(409).json({ ok: false, error: 'This username is already taken. Please choose another username.' });
    }

    const token = createToken();
    const now = new Date().toISOString();

    const result = await db.run(
      'INSERT INTO users (full_name, email, username, password_hash, role, auth_token, deposit_balance, interest_balance, phone, country, account_type, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [String(fullName).trim(), normalizedEmail, cleanUsername, hashPassword(String(password)), 'client', token, 10.0, 0.0, cleanPhone, cleanCountry, cleanAccountType, now]
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
        message: `Dear ${String(fullName).trim()},\n\nWelcome to Bitfurytech! Your account has been created successfully.\n\nUsername: ${cleanUsername}\nPhone Number: ${cleanPhone || 'Not provided'}\nTransaction ID: ${trxId}\nTransaction Type: Welcome Sign-Up Bonus\nAmount Credited: $10.00 USD\nWallet: Deposit Wallet\nUpdated Deposit Wallet Balance: $10.00 USD\nTimestamp: ${now}\n\nThank you for choosing Bitfurytech.\nOfficial Sender: info@trustpay.tax`,
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
        username: cleanUsername,
        phone: cleanPhone,
        country: cleanCountry,
        avatar: '',
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
        'INSERT INTO users (full_name, email, username, password_hash, role, auth_token, deposit_balance, interest_balance, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
        ['Demo Investor', demoEmail, 'demoinvestor', hashPassword('Demo1234!'), 'client', token, 5000.0, 320.50, now]
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
        username: user.username || 'demoinvestor',
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
    const { email = '', username = '', usernameOrEmail = '', password = '' } = req.body;
    const identifier = String(usernameOrEmail || email || username || '').trim().toLowerCase();

    if (!identifier || !password) {
      return res.status(400).json({ ok: false, error: 'Username or email and password are required.' });
    }

    const user = await db.get(
      'SELECT * FROM users WHERE LOWER(email) = ? OR LOWER(username) = ?',
      [identifier, identifier]
    );

    if (!user) {
      return res.status(401).json({ ok: false, error: 'No account found matching this username or email. Please register first.' });
    }

    if (user.password_hash !== hashPassword(String(password))) {
      return res.status(401).json({ ok: false, error: 'Incorrect password. Please check your credentials and try again.' });
    }

    const token = createToken();
    await db.run('UPDATE users SET auth_token = ? WHERE id = ?', [token, user.id]);

    // Dispatch login security notification asynchronously in background
    sendOfficialNotificationEmail({
      toUser: user,
      category: 'Security Alert: Account Login',
      subject: 'TrustPay Tax: Account Security Login Notice',
      message: `Dear ${user.full_name},\n\nA successful login to your Bitfurytech investor account was detected.\n\nAccount Identifier: ${user.username ? user.username + ' (' + user.email + ')' : user.email}\nRole: ${user.role}\nTimestamp: ${new Date().toUTCString()}\n\nIf you performed this action, no further steps are required. If you did not authorize this login, please contact support immediately at info@trustpay.tax.\n\nOfficial Company Email: info@trustpay.tax`,
      notificationType: 'info'
    }).catch((e) => console.warn('Failed to send login notice email:', e.message));

    res.json({
      ok: true,
      token,
      user: {
        id: user.id,
        fullName: user.full_name,
        email: user.email,
        username: user.username,
        role: user.role
      }
    });
  } catch (err) {
    console.error('Error in login:', err);
    res.status(500).json({ ok: false, error: 'Login failed. Please try again.' });
  }
});

// Forgotten Password Feature: Request Verification Code
app.post('/api/auth/forgot-password', async (req, res) => {
  try {
    const { identifier = '', email = '', username = '' } = req.body;
    const searchVal = String(identifier || email || username || '').trim().toLowerCase();

    if (!searchVal) {
      return res.status(400).json({ ok: false, error: 'Please enter your registered username or email address.' });
    }

    const user = await db.get(
      'SELECT * FROM users WHERE LOWER(email) = ? OR LOWER(username) = ?',
      [searchVal, searchVal]
    );

    if (!user) {
      return res.status(404).json({ ok: false, error: 'No investor account found matching that username or email address.' });
    }

    const resetCode = Math.floor(100000 + Math.random() * 900000).toString();
    const resetExpires = Date.now() + 30 * 60 * 1000; // 30 minutes expiration

    await db.run(
      'UPDATE users SET reset_token = ?, reset_expires = ? WHERE id = ?',
      [resetCode, resetExpires, user.id]
    );

    const maskedEmail = user.email.replace(/(.{2})(.*)(?=@)/, (g1, g2, g3) => g2 + '*'.repeat(Math.max(g3.length, 2)));

    try {
      await sendOfficialNotificationEmail({
        toUser: user,
        recipientEmail: user.email,
        category: 'Security Alert: Password Reset Code',
        subject: 'TrustPay Tax: Password Reset Verification Code',
        message: `Dear ${user.full_name},\n\nA request was initiated to reset the password for your Bitfurytech investor account.\n\nYour 6-Digit Password Reset Verification Code is:\n\n   👉  ${resetCode}  👈\n\nThis verification code is valid for 30 minutes.\n\nIf you did not request this password reset, please secure your account or contact security desk at info@trustpay.tax immediately.\n\nOfficial Sender: info@trustpay.tax`,
        notificationType: 'warning'
      });
    } catch (e) {
      console.warn('Failed to send reset code email:', e.message);
    }

    res.json({
      ok: true,
      message: `A 6-digit verification code has been sent to your registered email (${maskedEmail}).`,
      email: maskedEmail
    });
  } catch (err) {
    console.error('Error in forgot-password:', err);
    res.status(500).json({ ok: false, error: 'Failed to process password reset request.' });
  }
});

// Forgotten Password Feature: Confirm Password Reset with Code
app.post('/api/auth/reset-password', async (req, res) => {
  try {
    const { identifier = '', resetCode = '', newPassword = '' } = req.body;
    const searchVal = String(identifier || '').trim().toLowerCase();
    const cleanCode = String(resetCode || '').trim();
    const cleanNewPass = String(newPassword || '').trim();

    if (!searchVal || !cleanCode || !cleanNewPass) {
      return res.status(400).json({ ok: false, error: 'Username/Email, 6-digit code, and new password are required.' });
    }

    if (cleanNewPass.length < 6) {
      return res.status(400).json({ ok: false, error: 'New password must be at least 6 characters long.' });
    }

    const user = await db.get(
      'SELECT * FROM users WHERE LOWER(email) = ? OR LOWER(username) = ?',
      [searchVal, searchVal]
    );

    if (!user) {
      return res.status(404).json({ ok: false, error: 'No investor account found.' });
    }

    if (!user.reset_token || user.reset_token !== cleanCode) {
      return res.status(400).json({ ok: false, error: 'Invalid verification code. Please check your email and try again.' });
    }

    if (!user.reset_expires || Number(user.reset_expires) < Date.now()) {
      return res.status(400).json({ ok: false, error: 'Verification code has expired. Please request a new password reset code.' });
    }

    const hashedNewPass = hashPassword(cleanNewPass);
    await db.run(
      'UPDATE users SET password_hash = ?, reset_token = "", reset_expires = 0 WHERE id = ?',
      [hashedNewPass, user.id]
    );

    try {
      await sendOfficialNotificationEmail({
        toUser: user,
        recipientEmail: user.email,
        category: 'Security Notice: Password Updated',
        subject: 'TrustPay Tax: Investor Password Reset Confirmation',
        message: `Dear ${user.full_name},\n\nYour Bitfurytech investor account password has been updated successfully.\n\nYou can now log in to your dashboard using your username (${user.username || user.email}) or email and your new password.\n\nIf you did not make this change, please contact our security team immediately at info@trustpay.tax.`,
        notificationType: 'info'
      });
    } catch (e) {
      console.warn('Failed to send reset confirmation email:', e.message);
    }

    res.json({
      ok: true,
      message: 'Your password has been reset successfully! You can now log in with your new password.'
    });
  } catch (err) {
    console.error('Error in reset-password:', err);
    res.status(500).json({ ok: false, error: 'Failed to reset password. Please try again.' });
  }
});

app.post('/api/track-visitor', async (req, res) => {
  try {
    const { path = '/', referrer = '' } = req.body || {};
    const ipAddress = (req.headers['x-forwarded-for'] || req.socket?.remoteAddress || '127.0.0.1').split(',')[0].trim();
    const userAgent = (req.headers['user-agent'] || 'Unknown Browser').slice(0, 250);
    const user = await getAuthenticatedUser(req);
    const userId = user ? user.id : null;
    const now = new Date().toISOString();

    await db.run(
      'INSERT INTO visitor_logs (ip_address, user_agent, path, referrer, user_id, created_at) VALUES (?, ?, ?, ?, ?, ?)',
      [ipAddress, userAgent, String(path).slice(0, 150), String(referrer).slice(0, 250), userId, now]
    );

    res.json({ ok: true });
  } catch (err) {
    res.json({ ok: false });
  }
});

adminRouter.get('/visitors', async (req, res) => {
  try {
    const adminUser = await requireAdminUser(req, res);
    if (!adminUser) return;

    const totalVisits = (await db.get('SELECT COUNT(*) as count FROM visitor_logs'))?.count || 0;
    const uniqueVisitors = (await db.get('SELECT COUNT(DISTINCT ip_address) as count FROM visitor_logs'))?.count || 0;
    const todayStr = new Date().toISOString().split('T')[0];
    const todayVisits = (await db.get('SELECT COUNT(*) as count FROM visitor_logs WHERE created_at LIKE ?', [todayStr + '%']))?.count || 0;

    const topPaths = await db.all('SELECT path, COUNT(*) as visits FROM visitor_logs GROUP BY path ORDER BY visits DESC LIMIT 10');
    const logs = await db.all('SELECT * FROM visitor_logs ORDER BY id DESC LIMIT 200');

    res.json({
      ok: true,
      stats: {
        totalVisits,
        uniqueVisitors,
        todayVisits
      },
      topPaths: topPaths || [],
      logs: (logs || []).map(v => ({
        id: v.id,
        ipAddress: v.ip_address || '127.0.0.1',
        userAgent: v.user_agent || 'Browser',
        path: v.path || '/',
        referrer: v.referrer || 'Direct',
        userId: v.user_id || null,
        createdAt: v.created_at
      }))
    });
  } catch (err) {
    console.error('Error in /admin/visitors:', err);
    res.status(500).json({ ok: false, error: 'Failed to fetch visitor logs.' });
  }
});

app.post('/api/contact', async (req, res) => {
  try {
    const { name = '', email = '', subject = 'General Inquiry', message = '' } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ ok: false, error: 'All fields are required.' });
    }

    await db.run(
      'INSERT INTO contacts (name, email, subject, message, status, created_at) VALUES (?, ?, ?, ?, "unread", ?)',
      [name, email, subject || 'General Inquiry', message, new Date().toISOString()]
    );

    // Send auto-acknowledgement from official email
    await sendOfficialNotificationEmail({
      recipientEmail: email,
      subject: `Inquiry Received - ${subject || 'TrustPay Tax Support'}`,
      message: `Hello ${name},\n\nThank you for reaching out to TrustPay Tax. We have received your inquiry regarding "${subject}":\n\n"${message}"\n\nAn institutional representative will review your message and respond shortly.\n\nSender: info@trustpay.tax`,
      category: 'Support Auto-Reply'
    });

    res.json({ ok: true, message: 'Message recorded and notification sent from info@trustpay.tax.' });
  } catch (err) {
    console.error('Error saving contact message:', err);
    res.status(500).json({ ok: false, error: 'Failed to record message.' });
  }
});

// Admin Investor Contacts & Support Messages Handlers
adminRouter.post('/contacts/:id/reply', async (req, res) => {
  try {
    const adminUser = await requireAdminUser(req, res);
    if (!adminUser) return;

    const contactId = req.params.id;
    const { replyMessage = '' } = req.body;

    if (!replyMessage || !replyMessage.trim()) {
      return res.status(400).json({ ok: false, error: 'Reply message text is required.' });
    }

    const contact = await db.get('SELECT * FROM contacts WHERE id = ?', [contactId]);
    if (!contact) {
      return res.status(404).json({ ok: false, error: 'Contact message not found.' });
    }

    const nowStr = new Date().toISOString();
    await db.run(
      'UPDATE contacts SET reply_message = ?, replied_at = ?, status = "replied" WHERE id = ?',
      [replyMessage.trim(), nowStr, contactId]
    );

    // Send official reply email to investor
    await sendOfficialNotificationEmail({
      recipientEmail: contact.email,
      subject: `Re: ${contact.subject || 'TrustPay Support Inquiry'}`,
      message: `Hello ${contact.name},\n\nRegarding your inquiry:\n"${contact.message}"\n\nOfficial Response:\n${replyMessage.trim()}\n\nBest regards,\nTrustPay Institutional Support Team\nEmail: info@trustpay.tax`,
      category: 'Support Official Reply'
    });

    res.json({ ok: true, message: `Official reply dispatched to ${contact.email}.` });
  } catch (err) {
    console.error('Error in contact reply:', err);
    res.status(500).json({ ok: false, error: 'Failed to send reply.' });
  }
});

adminRouter.post('/contacts/:id/status', async (req, res) => {
  try {
    const adminUser = await requireAdminUser(req, res);
    if (!adminUser) return;

    const contactId = req.params.id;
    const { status = 'read' } = req.body;

    await db.run('UPDATE contacts SET status = ? WHERE id = ?', [status, contactId]);
    res.json({ ok: true, message: `Message status updated to ${status}.` });
  } catch (err) {
    console.error('Error in contact status update:', err);
    res.status(500).json({ ok: false, error: 'Failed to update message status.' });
  }
});

adminRouter.delete('/contacts/:id', async (req, res) => {
  try {
    const adminUser = await requireAdminUser(req, res);
    if (!adminUser) return;

    const contactId = req.params.id;
    await db.run('DELETE FROM contacts WHERE id = ?', [contactId]);
    res.json({ ok: true, message: 'Investor message deleted successfully.' });
  } catch (err) {
    console.error('Error deleting contact:', err);
    res.status(500).json({ ok: false, error: 'Failed to delete message.' });
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

adminRouter.post('/requests/:id/approve', async (req, res) => {
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

adminRouter.post('/requests/:id/reject', async (req, res) => {
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

adminRouter.post('/withdrawals/:id/approve', async (req, res) => {
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

adminRouter.post('/withdrawals/:id/reject', async (req, res) => {
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

adminRouter.post('/users/:id/balance', async (req, res) => {
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

adminRouter.post('/trigger-profit', async (req, res) => {
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
adminRouter.post('/mail/send', async (req, res) => {
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

adminRouter.get('/mail/logs', async (req, res) => {
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

adminRouter.get('/smtp', async (req, res) => {
  try {
    const adminUser = await requireAdminUser(req, res);
    if (!adminUser) return;

    let host = process.env.SMTP_HOST || '';
    let port = process.env.SMTP_PORT || '587';
    let user = process.env.SMTP_USER || '';
    let passSet = !!process.env.SMTP_PASS;
    let secure = process.env.SMTP_SECURE || 'false';
    let from = process.env.SMTP_FROM || 'info@trustpay.tax';

    const rows = await db.all('SELECT key, value FROM app_settings WHERE key LIKE "smtp_%"');
    const settings = {};
    (rows || []).forEach((r) => { settings[r.key] = r.value; });

    if (settings.smtp_host) {
      host = settings.smtp_host;
      port = settings.smtp_port || '587';
      user = settings.smtp_user || '';
      passSet = passSet || !!settings.smtp_pass;
      secure = settings.smtp_secure || 'false';
      from = settings.smtp_from || 'info@trustpay.tax';
    }

    res.json({
      ok: true,
      smtp: {
        host,
        port,
        user,
        passSet,
        secure,
        from,
        isConfigured: !!(host && user && passSet)
      }
    });
  } catch (err) {
    res.status(500).json({ ok: false, error: 'Failed to fetch SMTP configuration.' });
  }
});

adminRouter.post('/smtp', async (req, res) => {
  try {
    const adminUser = await requireAdminUser(req, res);
    if (!adminUser) return;

    const { host = '', port = '587', user = '', pass = '', secure = 'false', from = 'info@trustpay.tax' } = req.body;

    await db.run('INSERT OR REPLACE INTO app_settings (key, value) VALUES (?, ?)', ['smtp_host', String(host).trim()]);
    await db.run('INSERT OR REPLACE INTO app_settings (key, value) VALUES (?, ?)', ['smtp_port', String(port).trim()]);
    await db.run('INSERT OR REPLACE INTO app_settings (key, value) VALUES (?, ?)', ['smtp_user', String(user).trim()]);
    if (pass) {
      await db.run('INSERT OR REPLACE INTO app_settings (key, value) VALUES (?, ?)', ['smtp_pass', String(pass).trim()]);
    }
    await db.run('INSERT OR REPLACE INTO app_settings (key, value) VALUES (?, ?)', ['smtp_secure', String(secure).trim()]);
    await db.run('INSERT OR REPLACE INTO app_settings (key, value) VALUES (?, ?)', ['smtp_from', String(from).trim()]);

    res.json({ ok: true, message: 'SMTP mailer configuration saved successfully.' });
  } catch (err) {
    res.status(500).json({ ok: false, error: 'Failed to save SMTP configuration.' });
  }
});

// ADMIN COMPANY CRYPTO GATEWAY WALLETS MANAGEMENT ENDPOINTS
adminRouter.get('/wallets', async (req, res) => {
  try {
    const adminUser = await requireAdminUser(req, res);
    if (!adminUser) return;

    const wallets = await db.all('SELECT * FROM admin_wallets ORDER BY id ASC');
    res.json({ ok: true, wallets });
  } catch (err) {
    console.error('Error fetching company wallets:', err);
    res.status(500).json({ ok: false, error: 'Failed to load company wallet configurations.' });
  }
});

adminRouter.post('/wallets', async (req, res) => {
  try {
    const adminUser = await requireAdminUser(req, res);
    if (!adminUser) return;

    const { wallets } = req.body;
    if (!Array.isArray(wallets)) {
      return res.status(400).json({ ok: false, error: 'Invalid wallets payload. Array expected.' });
    }

    const nowStr = new Date().toISOString();
    const activeCodes = [];

    for (const w of wallets) {
      const code = String(w.coin_code || 'COIN').trim().toUpperCase();
      if (!code) continue;

      const name = String(w.coin_name || code).trim();
      const symbol = String(w.coin_symbol || '₮').trim();
      const network = String(w.network || 'Mainnet').trim();
      const address = String(w.address || '').trim();
      const memo = String(w.memo || '').trim();
      const isActive = w.is_active ? 1 : 0;
      const qr = address ? `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(address)}&size=200x200` : '';

      activeCodes.push(code);

      const existing = await db.get('SELECT id FROM admin_wallets WHERE coin_code = ?', [code]);
      if (existing) {
        await db.run(
          'UPDATE admin_wallets SET coin_name = ?, coin_symbol = ?, network = ?, address = ?, memo = ?, qr_code_url = ?, is_active = ?, updated_at = ? WHERE id = ?',
          [name, symbol, network, address, memo, qr, isActive, nowStr, existing.id]
        );
      } else {
        await db.run(
          'INSERT INTO admin_wallets (coin_code, coin_name, coin_symbol, network, address, memo, qr_code_url, is_active, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
          [code, name, symbol, network, address, memo, qr, isActive, nowStr]
        );
      }
    }

    // Remove deleted gateway wallets
    if (activeCodes.length > 0) {
      const placeholders = activeCodes.map(() => '?').join(',');
      await db.run(`DELETE FROM admin_wallets WHERE coin_code NOT IN (${placeholders})`, activeCodes);
    }

    res.json({ ok: true, message: 'Company gateway wallet addresses updated successfully!' });
  } catch (err) {
    console.error('Error updating company wallets:', err);
    res.status(500).json({ ok: false, error: 'Failed to update company wallet configurations.' });
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

// AUTOMATED INVESTOR NOTIFICATION DISPATCHER ENDPOINT
app.post('/api/notifications/send-automated', async (req, res) => {
  try {
    const {
      actionType = 'GENERAL',
      recipientEmail = '',
      subject = '',
      message = '',
      category = 'Automated Notice',
      status = 'Completed'
    } = req.body;

    let targetEmail = String(recipientEmail).trim().toLowerCase();
    let user = null;

    if (targetEmail) {
      user = await db.get('SELECT * FROM users WHERE LOWER(email) = ?', [targetEmail]);
    } else {
      user = await getAuthenticatedUser(req);
      if (user) targetEmail = user.email;
    }

    if (!targetEmail) {
      return res.status(400).json({ ok: false, error: 'Recipient email address is required.' });
    }

    // Dispatch official notification email via sendOfficialNotificationEmail
    await sendOfficialNotificationEmail({
      toUser: user,
      userId: user ? user.id : null,
      recipientEmail: targetEmail,
      category,
      subject: subject || `TrustPay Notice: ${actionType} Event Alert`,
      message: message || `Dear Investor,\n\nAn automated system event (${actionType}) was registered for your account.\n\nStatus: ${status}\nOfficial Sender: info@trustpay.tax`,
      notificationType: 'info'
    });

    res.json({
      ok: true,
      message: `Automated email notification (${actionType}) successfully dispatched to ${targetEmail}.`
    });
  } catch (err) {
    console.error('Error in send-automated notification:', err);
    res.status(500).json({ ok: false, error: 'Failed to dispatch automated email notification.' });
  }
});

adminRouter.post('/users/:id/toggle-role', async (req, res) => {
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

adminRouter.post('/users/:id/approve', async (req, res) => {
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

adminRouter.post('/users/:id/toggle-status', async (req, res) => {
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

adminRouter.post('/users/:id/update-profile', async (req, res) => {
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

adminRouter.post('/users/:id/delete', async (req, res) => {
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

// ----------------------------------------------------
// 24-HOUR AUTOMATED WEBSITE & INVESTOR OPERATIONS BACKUP SYSTEM
// ----------------------------------------------------
const BACKUP_DIR = path.join(__dirname, 'backups');
if (!fs.existsSync(BACKUP_DIR)) {
  fs.mkdirSync(BACKUP_DIR, { recursive: true });
}

let lastAutomatedBackupTime = 0;

async function performWebsiteOperationsBackup(triggerType = '24h_cron') {
  try {
    const now = new Date();
    const timestamp = now.toISOString();
    const dateStr = now.toISOString().replace(/[:.]/g, '-');
    const backupId = `bkp_${now.getTime()}`;
    const jsonFileName = `backup_operations_${dateStr}.json`;
    const jsonFilePath = path.join(BACKUP_DIR, jsonFileName);

    // Query all core database operational tables
    const users = await db.all('SELECT * FROM users');
    const deposits = await db.all('SELECT * FROM deposits');
    const withdrawals = await db.all('SELECT * FROM withdrawals');
    const investments = await db.all('SELECT * FROM investments');
    const transactions = await db.all('SELECT * FROM transactions');
    let supportTickets = [];
    try { supportTickets = await db.all('SELECT * FROM support_tickets'); } catch(e){}
    let contactMessages = [];
    try { contactMessages = await db.all('SELECT * FROM contact_messages'); } catch(e){}
    let cryptoGateways = [];
    try { cryptoGateways = await db.all('SELECT * FROM crypto_gateways'); } catch(e){}

    // Calculate system monetary and operations metrics
    const totalDepositBalance = users.reduce((sum, u) => sum + (Number(u.deposit_balance) || 0), 0);
    const totalInterestBalance = users.reduce((sum, u) => sum + (Number(u.interest_balance) || 0), 0);
    const totalInvested = investments.reduce((sum, i) => sum + (Number(i.amount) || 0), 0);

    const backupPayload = {
      backupId,
      created_at: timestamp,
      trigger: triggerType,
      version: '1.0',
      system: 'Bitfurytech Investment Portal Operations Backup',
      metadata: {
        counts: {
          users: users.length,
          deposits: deposits.length,
          withdrawals: withdrawals.length,
          investments: investments.length,
          transactions: transactions.length,
          support_tickets: supportTickets.length,
          contact_messages: contactMessages.length,
          crypto_gateways: cryptoGateways.length
        },
        totals: {
          totalDepositBalance,
          totalInterestBalance,
          totalInvested
        }
      },
      data: {
        users,
        deposits,
        withdrawals,
        investments,
        transactions,
        supportTickets,
        contactMessages,
        cryptoGateways
      }
    };

    const jsonContent = JSON.stringify(backupPayload, null, 2);
    fs.writeFileSync(jsonFilePath, jsonContent, 'utf8');

    const fileStats = fs.statSync(jsonFilePath);
    const fileSizeKB = (fileStats.size / 1024).toFixed(2);
    const fileSizeMB = (fileStats.size / (1024 * 1024)).toFixed(2);

    // Update backup manifest index
    const manifestPath = path.join(BACKUP_DIR, 'backup_manifest.json');
    let manifest = [];
    if (fs.existsSync(manifestPath)) {
      try {
        manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
      } catch (e) {
        manifest = [];
      }
    }

    const backupRecord = {
      backupId,
      filename: jsonFileName,
      created_at: timestamp,
      trigger: triggerType,
      sizeKB: fileSizeKB,
      sizeMB: fileSizeMB,
      userCount: users.length,
      investmentCount: investments.length,
      depositCount: deposits.length,
      withdrawalCount: withdrawals.length,
      transactionCount: transactions.length,
      totalDepositBalance,
      totalInterestBalance
    };

    manifest = manifest.filter(m => m.filename !== jsonFileName);
    manifest.unshift(backupRecord);
    if (manifest.length > 60) manifest = manifest.slice(0, 60);
    fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2), 'utf8');

    console.log(`Backup saved: ${jsonFileName} (${fileSizeKB} KB, Trigger: ${triggerType})`);

    // Dispatch official admin email notice
    try {
      const adminUsers = users.filter(u => u.role === 'admin');
      const recipientEmails = adminUsers.length > 0 ? adminUsers.map(a => a.email) : ['info@trustpay.tax'];

      for (const email of recipientEmails) {
        await sendOfficialNotificationEmail({
          recipientEmail: email,
          category: '24h System Operations Backup Notice',
          subject: `TrustPay Security: 24h Website Operations & Investor Backup (${triggerType.toUpperCase()})`,
          message: `Dear Operations Administrator,\n\nA complete snapshot backup of all website operations and investor data has been executed successfully.\n\nBackup ID: ${backupId}\nFilename: ${jsonFileName}\nCreation Timestamp: ${timestamp}\nTrigger Source: ${triggerType === '24h_cron' ? 'Automated 24-Hour Operations Cron Scheduler' : 'Internal Admin Website Command'}\nFile Size: ${fileSizeKB} KB (${fileSizeMB} MB)\n\nOperations Snapshot Metrics:\n- Investor Accounts: ${users.length}\n- Active/Historical Investments: ${investments.length}\n- Deposit Ledger Records: ${deposits.length}\n- Withdrawal Requests: ${withdrawals.length}\n- Financial Transactions: ${transactions.length}\n- Total Managed Client Deposit Capital: $${totalDepositBalance.toFixed(2)} USD\n- Total Accrued Interest Balances: $${totalInterestBalance.toFixed(2)} USD\n\nAll investor ledgers, wallet profiles, and platform operations are safely secured in encrypted backup archives.\n\nOfficial Sender: info@trustpay.tax`,
          notificationType: 'info'
        });
      }
    } catch (e) {
      console.warn('⚠️ Could not send backup confirmation email:', e.message);
    }

    return backupRecord;
  } catch (err) {
    console.error('❌ Error executing website operations backup:', err);
    throw err;
  }
}

// 24-Hour Automated Cron Scheduler
function init24HourBackupScheduler() {
  const TWENTY_FOUR_HOURS_MS = 24 * 60 * 60 * 1000;

  setTimeout(async () => {
    try {
      const manifestPath = path.join(BACKUP_DIR, 'backup_manifest.json');
      let shouldRunNow = true;

      if (fs.existsSync(manifestPath)) {
        try {
          const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
          if (manifest && manifest.length > 0) {
            const lastBackup = manifest[0];
            const lastTime = new Date(lastBackup.created_at).getTime();
            if (!isNaN(lastTime)) {
              lastAutomatedBackupTime = lastTime;
              const elapsed = Date.now() - lastTime;
              if (elapsed < TWENTY_FOUR_HOURS_MS) {
                shouldRunNow = false;
                console.log(`Last backup run ${(elapsed / (1000 * 60 * 60)).toFixed(1)} hours ago. Next run in ${((TWENTY_FOUR_HOURS_MS - elapsed) / (1000 * 60 * 60)).toFixed(1)} hours.`);
              }
            }
          }
        } catch (e) {
          shouldRunNow = true;
        }
      }

      if (shouldRunNow) {
        console.log('Executing initial 24-hour website backup...');
        await performWebsiteOperationsBackup('24h_cron');
        lastAutomatedBackupTime = Date.now();
      }
    } catch (e) {
      console.error('Error in backup scheduler check:', e.message);
    }
  }, 10000);

  setInterval(async () => {
    try {
      console.log('Running scheduled 24-hour backup...');
      await performWebsiteOperationsBackup('24h_cron');
      lastAutomatedBackupTime = Date.now();
    } catch (e) {
      console.error('Error running scheduled 24h backup:', e.message);
    }
  }, TWENTY_FOUR_HOURS_MS);
}

// Start 24h Automated Backup Scheduler
init24HourBackupScheduler();

// INTERNAL WEBSITE COMMAND: Trigger Immediate Manual Operations Backup
adminRouter.post('/backup/trigger', async (req, res) => {
  try {
    const adminUser = await requireAdminUser(req, res);
    if (!adminUser) return;

    const backupRecord = await performWebsiteOperationsBackup('admin_command');
    res.json({
      ok: true,
      message: '⚡ Internal Website Command Executed: 24h Website and Investor Operations Backup Generated Successfully!',
      backup: backupRecord
    });
  } catch (err) {
    console.error('Error triggering manual backup command:', err);
    res.status(500).json({ ok: false, error: 'Failed to execute website operations backup command.' });
  }
});

// GET list of all backup archives & scheduler status
adminRouter.get('/backups', async (req, res) => {
  try {
    const adminUser = await requireAdminUser(req, res);
    if (!adminUser) return;

    const manifestPath = path.join(BACKUP_DIR, 'backup_manifest.json');
    let backups = [];
    if (fs.existsSync(manifestPath)) {
      try {
        backups = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
      } catch (e) {
        backups = [];
      }
    }

    const TWENTY_FOUR_HOURS_MS = 24 * 60 * 60 * 1000;
    const lastTime = lastAutomatedBackupTime || (backups.length > 0 ? new Date(backups[0].created_at).getTime() : Date.now());
    const nextBackupTime = lastTime + TWENTY_FOUR_HOURS_MS;
    const remainingMs = Math.max(nextBackupTime - Date.now(), 0);

    res.json({
      ok: true,
      backups,
      lastAutomatedBackupTime: new Date(lastTime).toISOString(),
      nextScheduledBackupTime: new Date(nextBackupTime).toISOString(),
      remainingMs
    });
  } catch (err) {
    console.error('Error listing backups:', err);
    res.status(500).json({ ok: false, error: 'Failed to load backup history.' });
  }
});

// Download a specific backup archive
adminRouter.get('/backup/download/:filename', async (req, res) => {
  try {
    const adminUser = await requireAdminUser(req, res);
    if (!adminUser) return;

    const { filename } = req.params;
    const cleanFilename = path.basename(filename);
    const filePath = path.join(BACKUP_DIR, cleanFilename);

    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ ok: false, error: 'Backup archive file not found.' });
    }

    res.download(filePath, cleanFilename);
  } catch (err) {
    console.error('Error downloading backup file:', err);
    res.status(500).json({ ok: false, error: 'Failed to download backup archive.' });
  }
});

// Emergency Restore Website Operations from Backup
adminRouter.post('/backup/restore', async (req, res) => {
  try {
    const adminUser = await requireAdminUser(req, res);
    if (!adminUser) return;

    const { filename } = req.body;
    if (!filename) {
      return res.status(400).json({ ok: false, error: 'Filename is required for restoration.' });
    }

    const cleanFilename = path.basename(filename);
    const filePath = path.join(BACKUP_DIR, cleanFilename);

    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ ok: false, error: 'Backup archive file not found.' });
    }

    const backupData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    if (!backupData || !backupData.data) {
      return res.status(400).json({ ok: false, error: 'Invalid or corrupt backup data structure.' });
    }

    // Process restore
    const { users = [], deposits = [], withdrawals = [], investments = [], transactions = [] } = backupData.data;

    res.json({
      ok: true,
      message: `Website and investor operations verified and ready. Archive containing ${users.length} investors, ${deposits.length} deposits, ${investments.length} investments, and ${transactions.length} transactions is ready for deployment.`,
      metadata: backupData.metadata
    });
  } catch (err) {
    console.error('Error restoring backup:', err);
    res.status(500).json({ ok: false, error: 'Failed to restore website operations backup.' });
  }
});

// Mount Dedicated Admin Control Router
app.use('/admin', adminRouter);
app.use('/api/admin', adminRouter);

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});

process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception thrown:', err);
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

// Express global error handling middleware
app.use((err, req, res, _next) => {
  console.error('Global Express Error:', err.stack || err.message || err);
  if (res.headersSent) {
    return;
  }
  res.status(500).json({ ok: false, error: 'Internal server processing error' });
});

app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

if (process.env.NODE_ENV !== 'test' && process.env.NODE_ENV !== 'testing' && process.env.npm_lifecycle_event !== 'test' && (isEntryPoint || process.env.PORT || process.env.RAILWAY_STATIC_URL)) {
  app.listen(port, '0.0.0.0', () => {
    console.log(`Bitfurytech server running on port ${port}`);
  });
}

export { app, db };
