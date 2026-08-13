import test from 'node:test';
import assert from 'node:assert/strict';
import { app } from '../server.js';

const server = app.listen(0);

test('health endpoint responds successfully', async () => {
  const address = server.address();
  const res = await fetch(`http://127.0.0.1:${address.port}/api/health`);
  assert.equal(res.status, 200);
  const data = await res.json();
  assert.equal(data.service, 'bitfurytech');
});

test('dashboard endpoint returns data', async () => {
  const address = server.address();
  const res = await fetch(`http://127.0.0.1:${address.port}/api/dashboard`);
  assert.equal(res.status, 200);
  const data = await res.json();
  assert.ok(data.balance);
  assert.ok(Array.isArray(data.activity));
});

test('register, login, and deposit create real persisted records', async () => {
  const address = server.address();
  const email = `tester-${Date.now()}@example.com`;
  const password = 'SecurePass123!';

  const registerRes = await fetch(`http://127.0.0.1:${address.port}/api/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ fullName: 'Test User', email, password })
  });
  assert.equal(registerRes.status, 200);
  const registerData = await registerRes.json();
  assert.equal(registerData.ok, true);
  assert.ok(registerData.token);

  const loginRes = await fetch(`http://127.0.0.1:${address.port}/api/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });
  assert.equal(loginRes.status, 200);
  const loginData = await loginRes.json();
  assert.equal(loginData.ok, true);
  assert.ok(loginData.user.email === email);

  const depositRes = await fetch(`http://127.0.0.1:${address.port}/api/deposits`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${loginData.token}`
    },
    body: JSON.stringify({ amount: 2500, method: 'USDT', reference: 'wallet-123' })
  });
  assert.equal(depositRes.status, 200);
  const depositData = await depositRes.json();
  assert.equal(depositData.ok, true);
  assert.equal(depositData.deposit.amount, 2500);

  // Test session verification endpoint /api/auth/me
  const meRes = await fetch(`http://127.0.0.1:${address.port}/api/auth/me`, {
    headers: { Authorization: `Bearer ${loginData.token}` }
  });
  assert.equal(meRes.status, 200);
  const meData = await meRes.json();
  assert.equal(meData.ok, true);
  assert.equal(meData.authenticated, true);
  assert.equal(meData.user.email, email);

  // Test invalid session token returns 401
  const invalidRes = await fetch(`http://127.0.0.1:${address.port}/api/auth/me`, {
    headers: { Authorization: 'Bearer invalid-token-xyz' }
  });
  assert.equal(invalidRes.status, 401);
});

test('admin login and admin endpoint authorization', async () => {
  const address = server.address();
  
  // Admin login
  const adminLoginRes = await fetch(`http://127.0.0.1:${address.port}/api/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: 'admin619042@bitfurytech.com', password: 'Amkelechi@2' })
  });
  assert.equal(adminLoginRes.status, 200);
  const adminData = await adminLoginRes.json();
  assert.equal(adminData.ok, true);
  assert.equal(adminData.user.role, 'admin');

  // Fetch admin dashboard with token
  const adminRes = await fetch(`http://127.0.0.1:${address.port}/api/admin`, {
    headers: { Authorization: `Bearer ${adminData.token}` }
  });
  assert.equal(adminRes.status, 200);
  const adminInfo = await adminRes.json();
  assert.ok(adminInfo.stats);
  assert.ok(Array.isArray(adminInfo.users));

  // Test admin user management endpoints (approve, edit profile, delete)
  const targetUser = adminInfo.users.find(u => u.role !== 'admin');
  if (targetUser) {
    // Test manual approve
    const approveRes = await fetch(`http://127.0.0.1:${address.port}/api/admin/users/${targetUser.id}/approve`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${adminData.token}` }
    });
    assert.equal(approveRes.status, 200);
    const approveData = await approveRes.json();
    assert.equal(approveData.ok, true);
    assert.equal(approveData.status, 'active');

    // Test edit profile
    const editRes = await fetch(`http://127.0.0.1:${address.port}/api/admin/users/${targetUser.id}/update-profile`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${adminData.token}`
      },
      body: JSON.stringify({
        fullName: 'Updated Name Admin',
        phone: '+1234567890',
        depositBalance: 500,
        interestBalance: 50
      })
    });
    assert.equal(editRes.status, 200);
    const editData = await editRes.json();
    assert.equal(editData.ok, true);

    // Test delete user
    const deleteRes = await fetch(`http://127.0.0.1:${address.port}/api/admin/users/${targetUser.id}/delete`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${adminData.token}` }
    });
    assert.equal(deleteRes.status, 200);
    const deleteData = await deleteRes.json();
    assert.equal(deleteData.ok, true);
  }

  // Test Smartsupp API endpoints
  const getPrevSmartsupp = await fetch(`http://127.0.0.1:${address.port}/api/smartsupp-key`);
  const prevData = await getPrevSmartsupp.json();
  const originalKey = prevData.key || '';

  const saveSmartsuppRes = await fetch(`http://127.0.0.1:${address.port}/api/admin/smartsupp`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${adminData.token}`
    },
    body: JSON.stringify({ key: 'test_smartsupp_key_12345' })
  });
  assert.equal(saveSmartsuppRes.status, 200);

  const getSmartsuppPublicRes = await fetch(`http://127.0.0.1:${address.port}/api/smartsupp-key`);
  assert.equal(getSmartsuppPublicRes.status, 200);
  const smartsuppPublicData = await getSmartsuppPublicRes.json();
  assert.equal(smartsuppPublicData.ok, true);
  assert.equal(smartsuppPublicData.key, 'test_smartsupp_key_12345');

  // Reset back to original
  await fetch(`http://127.0.0.1:${address.port}/api/admin/smartsupp`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${adminData.token}`
    },
    body: JSON.stringify({ key: originalKey })
  });
});

test('investment plan activation and wallet amount flow', async () => {
  const address = server.address();
  const testEmail = `investor_${Date.now()}@example.com`;
  
  // Register user
  const regRes = await fetch(`http://127.0.0.1:${address.port}/api/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      fullName: 'Test Investor',
      email: testEmail,
      username: `investor_${Date.now()}`,
      password: 'Password123!',
      country: 'United States',
      mobile: '+1234567890'
    })
  });
  assert.equal(regRes.status, 200);
  const regData = await regRes.json();
  const token = regData.token;
  assert.ok(token);

  // Fund user's deposit wallet via admin
  const adminLoginRes = await fetch(`http://127.0.0.1:${address.port}/api/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: 'admin619042@bitfurytech.com', password: 'Amkelechi@2' })
  });
  const adminData = await adminLoginRes.json();

  // Approve and fund user with $10,000 in deposit_balance
  const approveRes = await fetch(`http://127.0.0.1:${address.port}/api/admin/users/${regData.user.id}/approve`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${adminData.token}` }
  });
  assert.equal(approveRes.status, 200);

  const fundRes = await fetch(`http://127.0.0.1:${address.port}/api/admin/users/${regData.user.id}/update-profile`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${adminData.token}`
    },
    body: JSON.stringify({
      deposit_balance: 10000,
      interest_balance: 2000
    })
  });
  assert.equal(fundRes.status, 200);

  // Test 1: Successful investment in Beginners Plan with Deposit Wallet ($500)
  const investRes1 = await fetch(`http://127.0.0.1:${address.port}/api/investments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      planId: 'beginners',
      amount: 500,
      walletSource: 'deposit'
    })
  });
  assert.equal(investRes1.status, 200);
  const investData1 = await investRes1.json();
  assert.equal(investData1.ok, true);
  assert.equal(investData1.investment.amount, 500);
  assert.equal(investData1.investment.planId, 'beginners');

  // Test 2: Successful investment in Prime Plan ($5,000)
  const investRes2 = await fetch(`http://127.0.0.1:${address.port}/api/investments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      planId: 'prime',
      amount: 5000,
      walletSource: 'deposit'
    })
  });
  assert.equal(investRes2.status, 200);
  const investData2 = await investRes2.json();
  assert.equal(investData2.ok, true);
  assert.equal(investData2.investment.planId, 'prime');

  // Test 3: Exceeds maximum plan limit rejection
  const investRes3 = await fetch(`http://127.0.0.1:${address.port}/api/investments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      planId: 'beginners',
      amount: 10000, // exceeds max limit of 4999
      walletSource: 'deposit'
    })
  });
  assert.equal(investRes3.status, 400);
  const investData3 = await investRes3.json();
  assert.equal(investData3.ok, false);
  assert.match(investData3.error, /Maximum deposit/i);

  // Test 4: Below minimum limit rejection
  const investRes4 = await fetch(`http://127.0.0.1:${address.port}/api/investments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      planId: 'prime',
      amount: 100, // below prime plan min of 5000
      walletSource: 'interest'
    })
  });
  assert.equal(investRes4.status, 400);
  const investData4 = await investRes4.json();
  assert.equal(investData4.ok, false);
  assert.match(investData4.error, /Minimum (investment|deposit)/i);

  // Test 5: Insufficient balance rejection
  const investRes5 = await fetch(`http://127.0.0.1:${address.port}/api/investments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      planId: 'beginners',
      amount: 4900,
      walletSource: 'interest' // interest balance only has 2000
    })
  });
  assert.equal(investRes5.status, 400);
  const investData5 = await investRes5.json();
  assert.equal(investData5.ok, false);
  assert.match(investData5.error, /Insufficient/i);
});

test.after(() => {
  server.close();
});
