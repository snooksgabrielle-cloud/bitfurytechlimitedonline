import initSqlJs from 'sql.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createHash, randomBytes } from 'crypto';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dbPath = path.join(__dirname, 'database.sqlite');

const hashPassword = (password) => createHash('sha256').update(password).digest('hex');
const createToken = () => randomBytes(24).toString('hex');

let SQL = null;
let sqliteDb = null;
let initPromise = null;

function persist() {
  if (!sqliteDb) return;
  try {
    const data = sqliteDb.export();
    fs.writeFileSync(dbPath, Buffer.from(data));
  } catch (err) {
    console.warn('⚠️ Error persisting database:', err.message);
  }
}

export async function initDb() {
  if (sqliteDb) return sqliteDb;
  if (initPromise) return initPromise;

  initPromise = (async () => {
    SQL = await initSqlJs();

    let fileBuffer = null;
    if (fs.existsSync(dbPath)) {
      try {
        fileBuffer = fs.readFileSync(dbPath);
        if (fileBuffer && fileBuffer.length > 0) {
          sqliteDb = new SQL.Database(fileBuffer);
        }
      } catch (err) {
        console.warn('⚠️ SQLite database file is corrupted or malformed. Removing bad file and re-initializing database...', err.message);
        try {
          if (fs.existsSync(dbPath)) {
            fs.unlinkSync(dbPath);
          }
        } catch (e) {
          // ignore deletion error
        }
        sqliteDb = null;
      }
    }

    if (!sqliteDb) {
      sqliteDb = new SQL.Database();
    }

    const createTablesSql = `
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        full_name TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password_hash TEXT NOT NULL,
        role TEXT NOT NULL DEFAULT 'client',
        auth_token TEXT,
        deposit_balance REAL DEFAULT 10.0,
        interest_balance REAL DEFAULT 0.0,
        referral_balance REAL DEFAULT 0.0,
        phone TEXT DEFAULT '',
        country TEXT DEFAULT '',
        btc_wallet TEXT DEFAULT '',
        usdt_wallet TEXT DEFAULT '',
        two_factor_enabled INTEGER DEFAULT 0,
        status TEXT DEFAULT 'active',
        avatar TEXT DEFAULT '',
        username TEXT UNIQUE DEFAULT '',
        account_type TEXT DEFAULT 'Crypto Account',
        reset_token TEXT DEFAULT '',
        reset_expires INTEGER DEFAULT 0,
        created_at TEXT NOT NULL
      );

      CREATE TABLE IF NOT EXISTS deposits (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER NOT NULL,
        amount REAL NOT NULL,
        method TEXT NOT NULL,
        reference TEXT NOT NULL,
        status TEXT NOT NULL DEFAULT 'pending',
        created_at TEXT NOT NULL,
        FOREIGN KEY (user_id) REFERENCES users(id)
      );

      CREATE TABLE IF NOT EXISTS withdrawals (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER NOT NULL,
        amount REAL NOT NULL,
        wallet_type TEXT NOT NULL,
        method TEXT NOT NULL,
        details TEXT NOT NULL,
        status TEXT NOT NULL DEFAULT 'pending',
        created_at TEXT NOT NULL,
        FOREIGN KEY (user_id) REFERENCES users(id)
      );

      CREATE TABLE IF NOT EXISTS investments (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER NOT NULL,
        plan_id TEXT NOT NULL,
        plan_name TEXT NOT NULL,
        amount REAL NOT NULL,
        daily_rate REAL NOT NULL,
        status TEXT NOT NULL DEFAULT 'active',
        payouts_count INTEGER DEFAULT 0,
        last_payout_at TEXT,
        duration_days INTEGER DEFAULT 30,
        capital_returned INTEGER DEFAULT 0,
        created_at TEXT NOT NULL,
        FOREIGN KEY (user_id) REFERENCES users(id)
      );

      CREATE TABLE IF NOT EXISTS transactions (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER NOT NULL,
        trx_id TEXT NOT NULL,
        type TEXT NOT NULL,
        amount REAL NOT NULL,
        wallet TEXT NOT NULL,
        details TEXT NOT NULL,
        post_balance REAL NOT NULL,
        status TEXT DEFAULT 'completed',
        created_at TEXT NOT NULL,
        FOREIGN KEY (user_id) REFERENCES users(id)
      );

      CREATE TABLE IF NOT EXISTS contacts (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        message TEXT NOT NULL,
        subject TEXT DEFAULT 'General Inquiry',
        status TEXT DEFAULT 'unread',
        reply_message TEXT DEFAULT '',
        replied_at TEXT DEFAULT '',
        created_at TEXT NOT NULL
      );

      CREATE TABLE IF NOT EXISTS visitor_logs (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        ip_address TEXT,
        user_agent TEXT,
        path TEXT,
        referrer TEXT,
        user_id INTEGER,
        created_at TEXT NOT NULL
      );

      CREATE TABLE IF NOT EXISTS support_tickets (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER NOT NULL,
        subject TEXT NOT NULL,
        department TEXT NOT NULL DEFAULT 'General',
        priority TEXT NOT NULL DEFAULT 'Medium',
        message TEXT NOT NULL,
        status TEXT NOT NULL DEFAULT 'Open',
        created_at TEXT NOT NULL,
        FOREIGN KEY (user_id) REFERENCES users(id)
      );

      CREATE TABLE IF NOT EXISTS mail_logs (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        sender TEXT NOT NULL DEFAULT 'info@trustpay.tax',
        recipient TEXT NOT NULL,
        subject TEXT NOT NULL,
        message TEXT NOT NULL,
        category TEXT NOT NULL DEFAULT 'Official Notification',
        status TEXT NOT NULL DEFAULT 'delivered',
        created_at TEXT NOT NULL
      );

      CREATE TABLE IF NOT EXISTS user_notifications (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER NOT NULL,
        sender TEXT NOT NULL DEFAULT 'info@trustpay.tax',
        title TEXT NOT NULL,
        body TEXT NOT NULL,
        type TEXT NOT NULL DEFAULT 'info',
        is_read INTEGER DEFAULT 0,
        created_at TEXT NOT NULL,
        FOREIGN KEY (user_id) REFERENCES users(id)
      );

      CREATE TABLE IF NOT EXISTS admin_wallets (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        coin_code TEXT UNIQUE NOT NULL,
        coin_name TEXT NOT NULL,
        coin_symbol TEXT NOT NULL,
        network TEXT NOT NULL,
        address TEXT NOT NULL,
        memo TEXT DEFAULT '',
        qr_code_url TEXT DEFAULT '',
        is_active INTEGER DEFAULT 1,
        updated_at TEXT NOT NULL
      );

      CREATE TABLE IF NOT EXISTS app_settings (
        key TEXT PRIMARY KEY,
        value TEXT NOT NULL
      );
    `;

    try {
      sqliteDb.run('PRAGMA foreign_keys = ON;');
      sqliteDb.exec(createTablesSql);
    } catch (err) {
      console.warn('⚠️ Table creation failed (possible corrupted database). Re-creating fresh database...', err.message);
      try {
        if (fs.existsSync(dbPath)) {
          fs.unlinkSync(dbPath);
        }
      } catch (e) {}
      sqliteDb = new SQL.Database();
      sqliteDb.run('PRAGMA foreign_keys = ON;');
      sqliteDb.exec(createTablesSql);
    }

    // Seed default admin crypto wallets if empty
    try {
      const walletCheck = sqliteDb.prepare('SELECT COUNT(*) as count FROM admin_wallets');
      let walletCount = 0;
      if (walletCheck.step()) {
        walletCount = walletCheck.getAsObject().count;
      }
      walletCheck.free();

      if (walletCount === 0) {
        const defaultWallets = [
          ['BTC', 'Bitcoin', '₿', 'Bitcoin Network', 'bc1q8xxf9z4a9pvl32wzq9unm7m6y0r5q3kz9u0001', ''],
          ['USDT_TRC20', 'Tether USDT', '₮', 'TRC20 (Tron)', 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t', ''],
          ['USDT_ERC20', 'Tether USDT', '₮', 'ERC20 (Ethereum)', '0x71C7656EC7ab88b098defB751B7401B5f6d8976F', ''],
          ['ETH', 'Ethereum', 'Ξ', 'ERC20 (Ethereum)', '0x71C7656EC7ab88b098defB751B7401B5f6d8976F', ''],
          ['LTC', 'Litecoin', 'Ł', 'Litecoin Network', 'LTC1q8xxf9z4a9pvl32wzq9unm7m6y0r5q3kz9u0002', ''],
          ['SOL', 'Solana', '☀️', 'Solana Network', '7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU', ''],
          ['TRX', 'Tron', '🗲', 'TRC20 Network', 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t', ''],
          ['BNB', 'Binance Coin', '🪙', 'BEP20 (BSC)', '0x71C7656EC7ab88b098defB751B7401B5f6d8976F', ''],
          ['XRP', 'Ripple', '✕', 'RippleNet', 'rEb8TK3gGKwBJJ98A9T1o2v9vF7f3x2mP1', '1089241'],
          ['DOGE', 'Dogecoin', 'Ɖ', 'Dogecoin Network', 'D6k3y7z2W9P4n2x1v5b3N7m8x9Z1q', '']
        ];
        const nowStr = new Date().toISOString();
        for (const [code, name, sym, net, addr, memo] of defaultWallets) {
          const qr = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(addr)}&size=200x200`;
          sqliteDb.run(
            'INSERT INTO admin_wallets (coin_code, coin_name, coin_symbol, network, address, memo, qr_code_url, is_active, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, 1, ?)',
            [code, name, sym, net, addr, memo, qr, nowStr]
          );
        }
      }
    } catch (e) {
      console.warn('⚠️ Error seeding admin wallets:', e.message);
    }

    // Safe ALTER TABLE migrations for existing sqlite databases
    const alterCols = [
      'ALTER TABLE users ADD COLUMN phone TEXT DEFAULT ""',
      'ALTER TABLE users ADD COLUMN country TEXT DEFAULT ""',
      'ALTER TABLE users ADD COLUMN btc_wallet TEXT DEFAULT ""',
      'ALTER TABLE users ADD COLUMN usdt_wallet TEXT DEFAULT ""',
      'ALTER TABLE users ADD COLUMN two_factor_enabled INTEGER DEFAULT 0',
      'ALTER TABLE users ADD COLUMN status TEXT DEFAULT "active"',
      'ALTER TABLE users ADD COLUMN avatar TEXT DEFAULT ""',
      'ALTER TABLE users ADD COLUMN username TEXT DEFAULT ""',
      'ALTER TABLE users ADD COLUMN account_type TEXT DEFAULT "Crypto Account"',
      'ALTER TABLE users ADD COLUMN reset_token TEXT DEFAULT ""',
      'ALTER TABLE users ADD COLUMN reset_expires INTEGER DEFAULT 0',
      'ALTER TABLE transactions ADD COLUMN status TEXT DEFAULT "completed"',
      'ALTER TABLE investments ADD COLUMN payouts_count INTEGER DEFAULT 0',
      'ALTER TABLE investments ADD COLUMN last_payout_at TEXT',
      'ALTER TABLE investments ADD COLUMN duration_days INTEGER DEFAULT 30',
      'ALTER TABLE investments ADD COLUMN capital_returned INTEGER DEFAULT 0',
      'ALTER TABLE contacts ADD COLUMN subject TEXT DEFAULT "General Inquiry"',
      'ALTER TABLE contacts ADD COLUMN status TEXT DEFAULT "unread"',
      'ALTER TABLE contacts ADD COLUMN reply_message TEXT DEFAULT ""',
      'ALTER TABLE contacts ADD COLUMN replied_at TEXT DEFAULT ""'
    ];
    for (const alterSql of alterCols) {
      try {
        sqliteDb.run(alterSql);
      } catch {
        // Column already exists
      }
    }

    // Check & update admin user credentials
    try {
      const adminUsername = 'admin619042';
      const adminEmail = 'admin619042@bitfurytech.com';
      const adminPassword = 'Amkelechi@2';
      const hashedPass = hashPassword(adminPassword);

      const stmt = sqliteDb.prepare('SELECT id FROM users WHERE username = ? OR email = ? OR role = "admin"');
      stmt.bind([adminUsername, adminEmail]);
      let hasAdmin = false;
      let adminId = null;
      if (stmt.step()) {
        hasAdmin = true;
        adminId = stmt.getAsObject().id;
      }
      stmt.free();

      if (!hasAdmin) {
        sqliteDb.run(
          'INSERT INTO users (full_name, email, username, password_hash, role, auth_token, deposit_balance, interest_balance, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
          [
            'System Administrator',
            adminEmail,
            adminUsername,
            hashedPass,
            'admin',
            createToken(),
            10000.0,
            0.0,
            new Date().toISOString()
          ]
        );
      } else {
        sqliteDb.run(
          'UPDATE users SET username = ?, email = ?, password_hash = ?, role = "admin" WHERE id = ?',
          [adminUsername, adminEmail, hashedPass, adminId]
        );
      }
    } catch (e) {
      console.warn('⚠️ Error seeding admin user:', e.message);
    }

    // Check sample client user
    try {
      const clientEmail = 'user@bitfurytech.com';
      const stmtClient = sqliteDb.prepare('SELECT id FROM users WHERE email = ?');
      stmtClient.bind([clientEmail]);
      let hasClient = false;
      if (stmtClient.step()) {
        hasClient = true;
      }
      stmtClient.free();

      if (!hasClient) {
        const clientPassword = 'User1234!';
        sqliteDb.run(
          'INSERT INTO users (full_name, email, password_hash, role, auth_token, deposit_balance, interest_balance, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
          [
            'Alex Mercer',
            clientEmail,
            hashPassword(clientPassword),
            'client',
            createToken(),
            2500.0,
            145.20,
            new Date().toISOString()
          ]
        );
      } else {
        sqliteDb.run('UPDATE users SET password_hash = ? WHERE email = ?', [hashPassword('User1234!'), clientEmail]);
      }
    } catch (e) {
      console.warn('⚠️ Error seeding client user:', e.message);
    }

    persist();
    return sqliteDb;
  })();

  return initPromise;
}

export const db = {
  async get(sql, params = []) {
    const instance = await initDb();
    const stmt = instance.prepare(sql);
    const rawP = Array.isArray(params) ? params : [params];
    const p = rawP.map((val) => (val === undefined ? null : val));
    stmt.bind(p);
    let row = null;
    if (stmt.step()) {
      row = stmt.getAsObject();
    }
    stmt.free();
    return row;
  },

  async all(sql, params = []) {
    const instance = await initDb();
    const stmt = instance.prepare(sql);
    const rawP = Array.isArray(params) ? params : [params];
    const p = rawP.map((val) => (val === undefined ? null : val));
    stmt.bind(p);
    const results = [];
    while (stmt.step()) {
      results.push(stmt.getAsObject());
    }
    stmt.free();
    return results;
  },

  async run(sql, params = []) {
    const instance = await initDb();
    const rawP = Array.isArray(params) ? params : [params];
    const p = rawP.map((val) => (val === undefined ? null : val));
    instance.run(sql, p);

    const resId = instance.exec('SELECT last_insert_rowid() as id');
    const lastID = resId && resId[0] && resId[0].values && resId[0].values[0] ? resId[0].values[0][0] : 0;

    const resChanges = instance.exec('SELECT changes() as cnt');
    const changes = resChanges && resChanges[0] && resChanges[0].values && resChanges[0].values[0] ? resChanges[0].values[0][0] : 0;

    persist();

    return {
      lastID,
      lastInsertRowid: lastID,
      changes
    };
  },

  async exec(sql) {
    const instance = await initDb();
    instance.exec(sql);
    persist();
  },

  prepare(sql) {
    const normalized = sql.replace(/\s+/g, ' ').trim();
    return {
      get: (...args) => db.get(normalized, args.flat()),
      all: (...args) => db.all(normalized, args.flat()),
      run: (...args) => db.run(normalized, args.flat())
    };
  }
};
