import test, { describe, it, after } from 'node:test';
import assert from 'node:assert/strict';
import { app } from '../server.js';

const server = app.listen(0);
const getUrl = (path) => `http://127.0.0.1:${server.address().port}${path}`;

describe('Bitfury Tech Real-Use Integration Test Suite', { concurrency: 1 }, () => {

  it('1. System Health, Market Plans, and Public Crypto Wallets', async () => {
    // Test health check
    const healthRes = await fetch(getUrl('/api/health'));
    assert.equal(healthRes.status, 200);
    const healthData = await healthRes.json();
    assert.equal(healthData.ok, true);
    assert.equal(healthData.service, 'bitfurytech');

    // Test investment plans list
    const plansRes = await fetch(getUrl('/api/plans'));
    assert.equal(plansRes.status, 200);
    const plansData = await plansRes.json();
    assert.equal(plansData.ok, true);
    assert.ok(Array.isArray(plansData.plans));
    assert.ok(plansData.plans.length >= 3);
    assert.ok(plansData.plans.some(p => p.id === 'stock' || p.dailyProfit > 0));

    // Test admin public crypto deposit wallets
    const walletsRes = await fetch(getUrl('/api/wallets'));
    assert.equal(walletsRes.status, 200);
    const walletsData = await walletsRes.json();
    assert.equal(walletsData.ok, true);
    assert.ok(Array.isArray(walletsData.wallets));
    assert.ok(walletsData.wallets.length > 0);

    // Test live financial statistics
    const statsRes = await fetch(getUrl('/api/live-financial-totals'));
    assert.equal(statsRes.status, 200);
    const statsData = await statsRes.json();
    assert.equal(statsData.ok, true);
    assert.ok(Number(statsData.stats.activeUsers) >= 1);
  });

  it('2. Real Investor Lifecycle: Registration, Auth Session, Deposit & Admin Approval', async () => {
    const timestamp = Date.now();
    const email = `investor_${timestamp}@bitfurytech.pro`;
    const username = `investor_${timestamp}`;
    const password = 'RealPassword123#';

    // Visitor Tracking
    const trackRes = await fetch(getUrl('/api/track-visitor'), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ page: '/investment.html', referrer: 'https://google.com' })
    });
    assert.equal(trackRes.status, 200);

    // 1. Investor Registration with Welcome Bonus
    const registerRes = await fetch(getUrl('/api/auth/register'), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        fullName: 'Institutional Investor',
        email,
        username,
        phone: '+14155552671',
        password
      })
    });
    assert.equal(registerRes.status, 200);
    const regData = await registerRes.json();
    assert.equal(regData.ok, true);
    assert.ok(regData.token);
    assert.equal(regData.user.email, email);

    // 2. Investor Login
    const loginRes = await fetch(getUrl('/api/auth/login'), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    assert.equal(loginRes.status, 200);
    const loginData = await loginRes.json();
    assert.equal(loginData.ok, true);
    const userToken = loginData.token;

    // 3. Verify /api/auth/me session
    const meRes = await fetch(getUrl('/api/auth/me'), {
      headers: { Authorization: `Bearer ${userToken}` }
    });
    assert.equal(meRes.status, 200);
    const meData = await meRes.json();
    assert.equal(meData.ok, true);
    assert.equal(meData.user.email, email);
    assert.equal(meData.user.depositBalance, 10); // $10 Welcome bonus credited

    // 4. Investor initiates real Crypto Deposit
    const depositRes = await fetch(getUrl('/api/deposits'), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userToken}`
      },
      body: JSON.stringify({
        amount: 1500,
        method: 'USDT (TRC20)',
        reference: `TRX-${timestamp}-TEST`
      })
    });
    assert.equal(depositRes.status, 200);
    const depositData = await depositRes.json();
    assert.equal(depositData.ok, true);
    const depositId = depositData.deposit.id;
    assert.ok(depositId);
    assert.equal(depositData.deposit.amount, 1500);
    assert.equal(depositData.deposit.status, 'pending');

    // 5. Admin Login & Approving Deposit
    const adminLoginRes = await fetch(getUrl('/api/auth/login'), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: 'admin619042@bitfurytech.com', password: 'Amkelechi@2' })
    });
    assert.equal(adminLoginRes.status, 200);
    const adminLoginData = await adminLoginRes.json();
    const adminToken = adminLoginData.token;

    const approveDepositRes = await fetch(getUrl(`/api/admin/requests/${depositId}/approve`), {
      method: 'POST',
      headers: { Authorization: `Bearer ${adminToken}` }
    });
    assert.equal(approveDepositRes.status, 200);
    const approveDepositData = await approveDepositRes.json();
    assert.equal(approveDepositData.ok, true);

    // 6. Verify Investor's updated deposit balance
    const updatedMeRes = await fetch(getUrl('/api/auth/me'), {
      headers: { Authorization: `Bearer ${userToken}` }
    });
    const updatedMeData = await updatedMeRes.json();
    assert.equal(updatedMeData.user.depositBalance, 1510); // $10 bonus + $1500 deposit
  });

  it('3. Real Financial Operations: Plan Subscription, Internal Transfers & Withdrawals', async () => {
    const timestamp = Date.now();
    const email = `trader_${timestamp}@bitfurytech.pro`;
    const password = 'TraderPass123!';

    // Register & login
    const regRes = await fetch(getUrl('/api/auth/register'), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ fullName: 'Active Trader', email, password })
    });
    const regData = await regRes.json();
    const userToken = regData.token;

    // Admin logs in and funds user's deposit balance with $2,000 for realistic plan investment
    const adminLoginRes = await fetch(getUrl('/api/auth/login'), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: 'admin619042@bitfurytech.com', password: 'Amkelechi@2' })
    });
    const adminData = await adminLoginRes.json();
    const adminToken = adminData.token;

    await fetch(getUrl(`/api/admin/users/${regData.user.id}/update-profile`), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${adminToken}`
      },
      body: JSON.stringify({
        depositBalance: 2000,
        interestBalance: 350
      })
    });

    // 1. Investor subscribes to an Investment Plan
    const investRes = await fetch(getUrl('/api/investments'), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userToken}`
      },
      body: JSON.stringify({
        planId: 'stock',
        amount: 1000,
        walletType: 'deposit'
      })
    });
    assert.equal(investRes.status, 200);
    const investData = await investRes.json();
    assert.equal(investData.ok, true);
    assert.equal(investData.investment.amount, 1000);

    // 2. Investor transfers funds internally (Interest Wallet -> Deposit Wallet)
    const transferRes = await fetch(getUrl('/api/user/transfer'), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userToken}`
      },
      body: JSON.stringify({ amount: 150 })
    });
    assert.equal(transferRes.status, 200);
    const transferData = await transferRes.json();
    assert.equal(transferData.ok, true);
    assert.equal(transferData.interestBalance, 200); // 350 - 150

    // 3. Investor requests a Withdrawal
    const withdrawRes = await fetch(getUrl('/api/withdrawals'), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userToken}`
      },
      body: JSON.stringify({
        amount: 100,
        walletType: 'interest',
        method: 'Bitcoin (BTC)',
        details: 'bc1qtestaddressrealoperations9981'
      })
    });
    assert.equal(withdrawRes.status, 200);
    const withdrawData = await withdrawRes.json();
    assert.equal(withdrawData.ok, true);
    const withdrawalId = withdrawData.withdrawal.id;

    // 4. Admin approves Withdrawal
    const approveWithdrawRes = await fetch(getUrl(`/api/admin/withdrawals/${withdrawalId}/approve`), {
      method: 'POST',
      headers: { Authorization: `Bearer ${adminToken}` }
    });
    assert.equal(approveWithdrawRes.status, 200);
    const approveWithdrawData = await approveWithdrawRes.json();
    assert.equal(approveWithdrawData.ok, true);
    assert.equal(approveWithdrawData.status, 'approved');
  });

  it('4. Support Helpdesk, Investor Inquiries, and Inbox Notifications', async () => {
    const timestamp = Date.now();
    const email = `support_user_${timestamp}@bitfurytech.pro`;
    const password = 'SupportPass123!';

    const regRes = await fetch(getUrl('/api/auth/register'), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ fullName: 'Support Client', email, password })
    });
    const regData = await regRes.json();
    const userToken = regData.token;

    // 1. User submits Support Ticket
    const ticketRes = await fetch(getUrl('/api/support/ticket'), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userToken}`
      },
      body: JSON.stringify({
        subject: 'Institutional API Consultation',
        priority: 'High',
        message: 'Requesting institutional integration keys and dedicated account manager.'
      })
    });
    assert.equal(ticketRes.status, 200);
    const ticketData = await ticketRes.json();
    assert.equal(ticketData.ok, true);

    // 2. User checks Notifications Inbox
    const notifRes = await fetch(getUrl('/api/notifications'), {
      headers: { Authorization: `Bearer ${userToken}` }
    });
    assert.equal(notifRes.status, 200);
    const notifData = await notifRes.json();
    assert.equal(notifData.ok, true);
    assert.ok(Array.isArray(notifData.notifications));
    assert.ok(notifData.notifications.length > 0);

    // Mark notification as read
    const firstNotifId = notifData.notifications[0].id;
    const readRes = await fetch(getUrl(`/api/notifications/${firstNotifId}/read`), {
      method: 'POST',
      headers: { Authorization: `Bearer ${userToken}` }
    });
    assert.equal(readRes.status, 200);
    const readData = await readRes.json();
    assert.equal(readData.ok, true);

    // 3. Public contact form inquiry
    const contactRes = await fetch(getUrl('/api/contact'), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'Dr. Jane Smith',
        email: 'jane.smith@enterprise.org',
        subject: 'Private Mining Infrastructure Inquiry',
        message: 'We are interested in a $250,000 corporate staking allocation.'
      })
    });
    assert.equal(contactRes.status, 200);
    const contactData = await contactRes.json();
    assert.equal(contactData.ok, true);

    // 4. Admin replies to contact inquiry
    const adminLoginRes = await fetch(getUrl('/api/auth/login'), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: 'admin619042@bitfurytech.com', password: 'Amkelechi@2' })
    });
    const adminData = await adminLoginRes.json();
    const adminToken = adminData.token;

    const adminDashboardRes = await fetch(getUrl('/api/admin'), {
      headers: { Authorization: `Bearer ${adminToken}` }
    });
    const adminDashboard = await adminDashboardRes.json();
    const targetContact = adminDashboard.contacts.find(c => c.email === 'jane.smith@enterprise.org');
    if (targetContact) {
      const replyRes = await fetch(getUrl(`/api/admin/contacts/${targetContact.id}/reply`), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${adminToken}`
        },
        body: JSON.stringify({
          replyMessage: 'Thank you Dr. Smith. Our executive portfolio desk has reserved your allocation.'
        })
      });
      assert.equal(replyRes.status, 200);
      const replyData = await replyRes.json();
      assert.equal(replyData.ok, true);
    }
  });

  it('5. Security, Password Management, and Operational Backup Suite', async () => {
    const timestamp = Date.now();
    const email = `sec_user_${timestamp}@bitfurytech.pro`;
    const initialPassword = 'InitialPass123!';
    const updatedPassword = 'NewSecretPassword456#';

    const regRes = await fetch(getUrl('/api/auth/register'), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ fullName: 'Security Tester', email, password: initialPassword })
    });
    const regData = await regRes.json();
    const userToken = regData.token;

    // 1. Toggle Two-Factor Authentication
    const tfaRes = await fetch(getUrl('/api/user/2fa'), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userToken}`
      },
      body: JSON.stringify({ enable: true })
    });
    assert.equal(tfaRes.status, 200);
    const tfaData = await tfaRes.json();
    assert.equal(tfaData.ok, true);
    assert.equal(tfaData.twoFactorEnabled, true);

    // 2. Change password authenticated
    const changePassRes = await fetch(getUrl('/api/user/password'), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userToken}`
      },
      body: JSON.stringify({
        currentPassword: initialPassword,
        newPassword: updatedPassword
      })
    });
    assert.equal(changePassRes.status, 200);
    const changePassData = await changePassRes.json();
    assert.equal(changePassData.ok, true);

    // 3. Admin triggers on-demand system & database backup
    const adminLoginRes = await fetch(getUrl('/api/auth/login'), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: 'admin619042@bitfurytech.com', password: 'Amkelechi@2' })
    });
    const adminData = await adminLoginRes.json();
    const adminToken = adminData.token;

    const backupTriggerRes = await fetch(getUrl('/api/admin/backup/trigger'), {
      method: 'POST',
      headers: { Authorization: `Bearer ${adminToken}` }
    });
    assert.equal(backupTriggerRes.status, 200);
    const backupData = await backupTriggerRes.json();
    assert.equal(backupData.ok, true);
    assert.ok(backupData.backup.filename);

    // 4. Admin lists historical backups
    const backupsListRes = await fetch(getUrl('/api/admin/backups'), {
      headers: { Authorization: `Bearer ${adminToken}` }
    });
    assert.equal(backupsListRes.status, 200);
    const backupsListData = await backupsListRes.json();
    assert.equal(backupsListData.ok, true);
    assert.ok(Array.isArray(backupsListData.backups));
    assert.ok(backupsListData.backups.length > 0);
  });

  after(() => {
    server.close();
  });
});
