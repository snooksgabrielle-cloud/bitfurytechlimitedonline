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
    body: JSON.stringify({ email: 'admin@bitfurytech.com', password: 'Admin@1234' })
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
});

test.after(() => {
  server.close();
});
