const SUPPORTED_LANGUAGES = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'zh-CN', name: '中文', flag: '🇨🇳' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦' },
  { code: 'pt', name: 'Português', flag: '🇵🇹' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
  { code: 'ko', name: '한국어', flag: '🇰🇷' },
  { code: 'hi', name: 'हिन्दी', flag: '🇮🇳' },
  { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
  { code: 'vi', name: 'Tiếng Việt', flag: '🇻🇳' },
  { code: 'nl', name: 'Nederlands', flag: '🇳🇱' },
  { code: 'pl', name: 'Polski', flag: '🇵🇱' },
];

const translations = {
  en: {
    nav_home: 'Home',
    nav_about: 'About',
    nav_services: 'Services',
    nav_markets: 'Markets',
    nav_navigation: 'Navigation',
    nav_contact: 'Contact',
    nav_dashboard: 'Dashboard',
    nav_login: 'Login',
    nav_register: 'Register',
    nav_logout: 'Logout',
    approve: 'Approve',
    reject: 'Reject',
    action: 'Action',
    form_required: 'Please complete the required fields before continuing.',
    form_contact_required: 'Please complete all fields before submitting.',
    contact_success: 'Thank you. Your request has been received and our team will follow up shortly.',
    contact_error: 'Something went wrong. Please try again.',
    deposit_required: 'Please complete every deposit field.',
    deposit_login: 'Please sign in before submitting a deposit request.',
    deposit_success: 'Deposit request received. It is now awaiting admin approval.',
    deposit_error: 'Deposit submission failed.',
    auth_register_success: 'Account created successfully. Redirecting to your dashboard.',
    auth_login_success: 'Login successful. Redirecting to your dashboard.',
    auth_error: 'Authentication failed.',
    working: 'Working...',
    submitting: 'Submitting...',
    sending: 'Sending...',
    submitted: 'Submitted',
    request_submitted: 'Request submitted',
    create_account: 'Create account',
    continue: 'Continue',
    pending: 'Pending',
    approved: 'Approved',
    rejected: 'Rejected',
    investor: 'Investor',
    admin: 'Admin',
    secure_access: 'Secure access',
    create_account_heading: 'Create account',
    login_heading: 'Login to your account',
    login_subtitle: 'Use your email and password to continue into your dashboard.',
    register_heading: 'Register for your investor workspace',
    register_subtitle: 'Create your profile to access the client dashboard, live market view, and premium support.',
    dashboard_heading: 'Investor portal',
    admin_heading: 'Administration',
    mobile_menu: 'Menu',
    submit_request: 'Submit request',
  },
  es: {
    nav_home: 'Inicio',
    nav_about: 'Nosotros',
    nav_services: 'Servicios',
    nav_markets: 'Mercados',
    nav_navigation: 'Navegación',
    nav_contact: 'Contacto',
    nav_dashboard: 'Panel',
    nav_login: 'Iniciar sesión',
    nav_register: 'Registrarse',
    nav_logout: 'Cerrar sesión',
    form_required: 'Complete los campos obligatorios antes de continuar.',
    form_contact_required: 'Complete todos los campos antes de enviar.',
    contact_success: 'Gracias. Su solicitud fue recibida y nuestro equipo le responderá pronto.',
    contact_error: 'Algo salió mal. Inténtelo de nuevo.',
    deposit_required: 'Complete todos los campos del depósito.',
    deposit_login: 'Inicie sesión antes de enviar una solicitud de depósito.',
    deposit_success: 'Solicitud de depósito recibida. Ahora espera la aprobación del administrador.',
    deposit_error: 'No se pudo enviar el depósito.',
    auth_register_success: 'Cuenta creada correctamente. Redirigiendo a su panel.',
    auth_login_success: 'Inicio de sesión correcto. Redirigiendo a su panel.',
    auth_error: 'No se pudo autenticar.',
    working: 'Procesando...',
    submitting: 'Enviando...',
    sending: 'Enviando...',
    submitted: 'Enviado',
    request_submitted: 'Solicitud enviada',
    create_account: 'Crear cuenta',
    continue: 'Continuar',
    pending: 'Pendiente',
    approved: 'Aprobado',
    rejected: 'Rechazado',
    investor: 'Inversionista',
    admin: 'Administrador',
    secure_access: 'Acceso seguro',
    create_account_heading: 'Crear cuenta',
    login_heading: 'Inicie sesión en su cuenta',
    login_subtitle: 'Use su correo electrónico y contraseña para entrar a su panel.',
    register_heading: 'Regístrese para su espacio de inversionista',
    register_subtitle: 'Cree su perfil para acceder al panel del cliente, la vista de mercado en vivo y el soporte premium.',
    dashboard_heading: 'Portal de inversionistas',
    admin_heading: 'Administración',
    mobile_menu: 'Menú',
    submit_request: 'Enviar solicitud',
    approve: 'Aprobar',
    reject: 'Rechazar',
    action: 'Acción',
  },
  fr: {
    nav_home: 'Accueil',
    nav_about: 'À propos',
    nav_services: 'Services',
    nav_markets: 'Marchés',
    nav_navigation: 'Navigation',
    nav_contact: 'Contact',
    nav_dashboard: 'Tableau de bord',
    nav_login: 'Connexion',
    nav_register: 'Créer un compte',
    nav_logout: 'Déconnexion',
    form_required: 'Veuillez remplir les champs requis avant de continuer.',
    form_contact_required: 'Veuillez remplir tous les champs avant l’envoi.',
    contact_success: 'Merci. Votre demande a bien été reçue et notre équipe reviendra vers vous bientôt.',
    contact_error: 'Une erreur s’est produite. Veuillez réessayer.',
    deposit_required: 'Veuillez remplir tous les champs du dépôt.',
    deposit_login: 'Veuillez vous connecter avant d’envoyer une demande de dépôt.',
    deposit_success: 'Demande de dépôt reçue. Elle attend maintenant l’approbation de l’administrateur.',
    deposit_error: 'La soumission du dépôt a échoué.',
    auth_register_success: 'Compte créé avec succès. Redirection vers votre tableau de bord.',
    auth_login_success: 'Connexion réussie. Redirection vers votre tableau de bord.',
    auth_error: 'L’authentification a échoué.',
    working: 'Traitement...',
    submitting: 'Envoi...',
    sending: 'Envoi...',
    submitted: 'Envoyé',
    request_submitted: 'Demande envoyée',
    create_account: 'Créer un compte',
    continue: 'Continuer',
    pending: 'En attente',
    approved: 'Approuvé',
    rejected: 'Rejeté',
    investor: 'Investisseur',
    admin: 'Administrateur',
    secure_access: 'Accès sécurisé',
    create_account_heading: 'Créer un compte',
    login_heading: 'Connectez-vous à votre compte',
    login_subtitle: 'Utilisez votre e-mail et votre mot de passe pour accéder à votre tableau de bord.',
    register_heading: 'Inscrivez-vous à votre espace investisseur',
    register_subtitle: 'Créez votre profil pour accéder au tableau de bord client, à la vue du marché en direct et au support premium.',
    dashboard_heading: 'Portail investisseur',
    admin_heading: 'Administration',
    mobile_menu: 'Menu',
    submit_request: 'Envoyer la demande',
    approve: 'Approuver',
    reject: 'Rejeter',
    action: 'Action',
  },
  de: {
    nav_home: 'Startseite',
    nav_about: 'Über uns',
    nav_services: 'Dienstleistungen',
    nav_markets: 'Märkte',
    nav_navigation: 'Navigation',
    nav_contact: 'Kontakt',
    nav_dashboard: 'Dashboard',
    nav_login: 'Anmelden',
    nav_register: 'Registrieren',
    nav_logout: 'Abmelden',
    approve: 'Genehmigen',
    reject: 'Ablehnen',
    action: 'Aktion',
    working: 'Wird bearbeitet...',
    submitting: 'Wird gesendet...',
    sending: 'Senden...',
    submitted: 'Eingereicht',
  },
  'zh-CN': {
    nav_home: '首页',
    nav_about: '关于我们',
    nav_services: '服务',
    nav_markets: '市场',
    nav_navigation: '导航',
    nav_contact: '联系我们',
    nav_dashboard: '控制面板',
    nav_login: '登录',
    nav_register: '注册',
    nav_logout: '退出',
    approve: '批准',
    reject: '拒绝',
    action: '操作',
    working: '处理中...',
    submitting: '提交中...',
    sending: '发送中...',
    submitted: '已提交',
  },
  ar: {
    nav_home: 'الرئيسية',
    nav_about: 'من نحن',
    nav_services: 'الخدمات',
    nav_markets: 'الأسواق',
    nav_navigation: 'التنقل',
    nav_contact: 'اتصل بنا',
    nav_dashboard: 'لوحة التحكم',
    nav_login: 'تسجيل الدخول',
    nav_register: 'تسجيل',
    nav_logout: 'تسجيل الخروج',
    approve: 'موافقة',
    reject: 'رفض',
    action: 'إجراء',
    working: 'جاري العمل...',
    submitting: 'جاري الإرسال...',
    sending: 'جاري الإرسال...',
    submitted: 'تم الإرسال',
  },
  pt: {
    nav_home: 'Início',
    nav_about: 'Sobre',
    nav_services: 'Serviços',
    nav_markets: 'Mercados',
    nav_navigation: 'Navegação',
    nav_contact: 'Contato',
    nav_dashboard: 'Painel',
    nav_login: 'Entrar',
    nav_register: 'Registrar',
    nav_logout: 'Sair',
    approve: 'Aprovar',
    reject: 'Rejeitar',
    action: 'Ação',
    working: 'Processando...',
    submitting: 'Enviando...',
    sending: 'Enviando...',
    submitted: 'Enviado',
  },
  ru: {
    nav_home: 'Главная',
    nav_about: 'О нас',
    nav_services: 'Услуги',
    nav_markets: 'Рынки',
    nav_navigation: 'Навигация',
    nav_contact: 'Контакты',
    nav_dashboard: 'Панель',
    nav_login: 'Войти',
    nav_register: 'Регистрация',
    nav_logout: 'Выйти',
    approve: 'Одобрить',
    reject: 'Отклонить',
    action: 'Действие',
    working: 'Обработка...',
    submitting: 'Отправка...',
    sending: 'Отправка...',
    submitted: 'Отправлено',
  }
};

const fxRates = {
  USD: 1.0,
  EUR: 0.92,
  GBP: 0.79,
  CAD: 1.36,
  AUD: 1.52,
  JPY: 155.20,
  NGN: 1580.0,
  INR: 83.90,
  ZAR: 18.50,
  AED: 3.67,
  BTC: 0.0000146,
  ETH: 0.000385,
  USDT: 1.0,
  SOL: 0.00685
};

const currSymbols = {
  USD: '$', EUR: '€', GBP: '£', CAD: '$', AUD: '$', JPY: '¥', NGN: '₦', INR: '₹', ZAR: 'R', AED: 'د.إ', BTC: '₿', ETH: 'Ξ', USDT: '₮', SOL: '◎'
};

window.googleTranslateElementInit = function() {
  if (window.google && window.google.translate) {
    new window.google.translate.TranslateElement({
      pageLanguage: 'en',
      includedLanguages: 'en,es,fr,de,zh-CN,ar,pt,ru,it,ja,ko,hi,tr,vi,nl,pl',
      autoDisplay: false
    }, 'google_translate_element');
  }
};

function initGoogleTranslateScript() {
  if (document.getElementById('google-translate-script')) return;

  if (!document.getElementById('google_translate_element')) {
    const div = document.createElement('div');
    div.id = 'google_translate_element';
    div.style.display = 'none';
    document.body.appendChild(div);
  }

  const script = document.createElement('script');
  script.id = 'google-translate-script';
  script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
  script.async = true;
  document.head.appendChild(script);
}

function getLanguage() {
  const stored = localStorage.getItem('bitfurytech_lang');
  if (stored && translations[stored]) {
    return stored;
  }
  const browserLang = (navigator.language || 'en').slice(0, 2);
  return translations[browserLang] ? browserLang : 'en';
}

function t(key, fallback = '') {
  const lang = getLanguage();
  return translations[lang]?.[key] || translations.en[key] || fallback || key;
}

function setCurrentYear() {
  const currentYear = new Date().getFullYear();
  document.querySelectorAll('#year, .footer-year').forEach((el) => {
    el.textContent = currentYear;
  });
}

function setActiveNav() {
  const current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a[data-page]').forEach((link) => {
    const page = link.getAttribute('data-page');
    link.classList.toggle('active', current === page);
  });
}

function getAuthToken() {
  return localStorage.getItem('bitfurytech_token') || '';
}

function getStoredUser() {
  try {
    return JSON.parse(localStorage.getItem('bitfurytech_user') || 'null');
  } catch {
    return null;
  }
}

function getLoggedInUser() {
  const user = getStoredUser();
  const token = getAuthToken();
  return (token && user) ? user : (token ? { token } : null);
}

function saveAuth(data) {
  localStorage.setItem('bitfurytech_token', data.token);
  localStorage.setItem('bitfurytech_user', JSON.stringify(data.user));
}

function clearAuth() {
  localStorage.removeItem('bitfurytech_token');
  localStorage.removeItem('bitfurytech_user');
}

function updateAuthNavbar() {
  const navbar = document.querySelector('header .navbar');
  const nav = navbar?.querySelector('.nav-links');
  if (!nav) return;

  const token = getAuthToken();
  const user = getStoredUser();

  let dashLink = nav.querySelector('a[href="dashboard.html"]');
  let adminLink = nav.querySelector('a[href="admin.html"]');
  const loginLink = nav.querySelector('a[href="login.html"]');
  const regLink = nav.querySelector('a[href="register.html"]');
  let logoutBtn = nav.querySelector('[data-logout]');

  // Ensure Dashboard button is ALWAYS present and visible
  if (!dashLink) {
    dashLink = document.createElement('a');
    dashLink.href = 'dashboard.html';
    dashLink.className = 'btn btn-secondary';
    dashLink.setAttribute('data-i18n', 'nav_dashboard');
    dashLink.textContent = 'Dashboard';
    nav.appendChild(dashLink);
  }
  dashLink.style.display = 'inline-flex';

  if (token && user) {
    dashLink.className = 'btn btn-primary';
    if (loginLink) loginLink.style.display = 'none';
    if (regLink) regLink.style.display = 'none';

    // Show Admin link if user is admin
    if (user.role === 'admin') {
      if (!adminLink) {
        adminLink = document.createElement('a');
        adminLink.href = 'admin.html';
        adminLink.className = 'btn btn-secondary';
        adminLink.style.borderColor = '#10b981';
        adminLink.style.color = '#10b981';
        adminLink.textContent = '🛡️ Admin Panel';
        nav.insertBefore(adminLink, logoutBtn || null);
      }
      adminLink.style.display = 'inline-flex';
    } else if (adminLink) {
      adminLink.style.display = 'none';
    }

    if (!logoutBtn) {
      logoutBtn = document.createElement('a');
      logoutBtn.href = 'index.html';
      logoutBtn.className = 'btn btn-secondary';
      logoutBtn.setAttribute('data-logout', '');
      logoutBtn.textContent = 'Logout';
      logoutBtn.addEventListener('click', (e) => {
        e.preventDefault();
        clearAuth();
        window.location.href = 'index.html';
      });
      nav.appendChild(logoutBtn);
    } else {
      logoutBtn.style.display = 'inline-flex';
    }
  } else {
    dashLink.className = 'btn btn-secondary';
    if (adminLink) adminLink.style.display = 'none';
    if (loginLink) {
      loginLink.style.display = 'inline-flex';
    }
    if (regLink) {
      regLink.style.display = 'inline-flex';
    }
    if (logoutBtn) {
      logoutBtn.style.display = 'none';
    }
  }
}

function updateTranslatorControlsUI(lang) {
  document.querySelectorAll('[data-lang-option]').forEach((button) => {
    button.classList.toggle('active', button.getAttribute('data-lang-option') === lang);
  });
  document.querySelectorAll('.header-lang-select, .floating-lang-select').forEach((select) => {
    if (select.value !== lang) {
      select.value = lang;
    }
  });
}

let smartsuppInitialized = false;

async function initSmartsuppLiveChat() {
  try {
    const res = await fetch('/api/smartsupp-key');
    const data = await res.json();
    const smartsuppKey = (data && data.key && data.key.trim()) || '537601b7a8d50587197b4c58f869accb4da3984f';

    if (smartsuppKey) {
      window._smartsupp = window._smartsupp || {};
      window._smartsupp.key = smartsuppKey;

      if (!smartsuppInitialized) {
        smartsuppInitialized = true;
        window.smartsuppLoaded = true;

        (function(d) {
          var s, c, o = window.smartsupp = function() { o._.push(arguments); };
          o._ = [];
          s = d.getElementsByTagName('script')[0];
          if (!s) s = d.head || d.body;
          c = d.createElement('script');
          c.type = 'text/javascript';
          c.charset = 'utf-8';
          c.async = true;
          c.src = 'https://www.smartsuppchat.com/loader.js?';
          if (s && s.parentNode) {
            s.parentNode.insertBefore(c, s);
          } else if (d.head) {
            d.head.appendChild(c);
          }
        })(document);

        setTimeout(() => {
          try {
            const user = typeof getStoredUser === 'function' ? getStoredUser() : null;
            if (user && typeof window.smartsupp === 'function') {
              if (user.fullName) window.smartsupp('name', user.fullName);
              if (user.email) window.smartsupp('email', user.email);
            }
          } catch(e) {}
        }, 1200);
      }
    }
  } catch (err) {
    console.warn('Could not initialize Smartsupp live chat:', err);
  }
}

function setupCustomerCareFloatingWidget() {
  if (document.getElementById('floatingCustomerCareWidget')) return;

  const widget = document.createElement('div');
  widget.id = 'floatingCustomerCareWidget';
  widget.className = 'floating-customer-care-widget';

  widget.innerHTML = `
    <button type="button" id="customer-care-float-btn" class="customer-care-float-btn" aria-label="Customer Care & Support">
      <div class="care-icon-wrap">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
        <span class="care-online-dot"></span>
      </div>
      <span class="care-btn-label">Customer Care</span>
    </button>
  `;

  document.body.appendChild(widget);

  const modal = document.createElement('div');
  modal.id = 'customerCareModal';
  modal.className = 'customer-care-modal';
  modal.innerHTML = `
    <div class="customer-care-modal-content">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.2rem; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 0.8rem;">
        <div style="display: flex; align-items: center; gap: 0.6rem;">
          <div style="width: 38px; height: 38px; border-radius: 50%; background: rgba(56,189,248,0.15); display: flex; align-items: center; justify-content: center; color: #38bdf8; font-size: 1.2rem;">
            🎧
          </div>
          <div>
            <h3 style="margin: 0; font-size: 1.05rem; color: #ffffff;">Customer Care & Live Support</h3>
            <p style="margin: 0; font-size: 0.78rem; color: #34d399;">● Support Desk Representative Active</p>
          </div>
        </div>
        <button type="button" id="close-customer-care-modal" style="background: none; border: none; color: #94a3b8; font-size: 1.6rem; cursor: pointer; padding: 0 0.4rem;">&times;</button>
      </div>

      <div style="background: rgba(15,23,42,0.6); border: 1px solid rgba(56,189,248,0.2); border-radius: 12px; padding: 0.9rem; margin-bottom: 1.2rem; font-size: 0.85rem; color: #cbd5e1;">
        <p style="margin: 0 0 0.4rem 0;">Need immediate assistance with deposits, withdrawals, or account verification? Our customer care team responds 24/7.</p>
        <div style="display: flex; flex-wrap: wrap; gap: 0.8rem; font-size: 0.8rem; font-weight: 600; color: #38bdf8; margin-top: 0.4rem;">
          <span>📧 info@trustpay.tax</span>
          <span>⏱️ Typical Response: &lt; 15 Mins</span>
        </div>
      </div>

      <form id="customer-care-form">
        <div class="form-group" style="margin-bottom: 0.8rem;">
          <label style="display: block; font-size: 0.82rem; font-weight: 600; color: #cbd5e1; margin-bottom: 0.3rem;">Full Name</label>
          <input type="text" id="care-name" class="form-input" placeholder="e.g. Alex Johnson" required style="width: 100%; padding: 0.65rem 0.8rem; background: #091325; border: 1px solid var(--border); border-radius: 8px; color: #fff;" />
        </div>
        <div class="form-group" style="margin-bottom: 0.8rem;">
          <label style="display: block; font-size: 0.82rem; font-weight: 600; color: #cbd5e1; margin-bottom: 0.3rem;">Email Address</label>
          <input type="email" id="care-email" class="form-input" placeholder="e.g. alex@example.com" required style="width: 100%; padding: 0.65rem 0.8rem; background: #091325; border: 1px solid var(--border); border-radius: 8px; color: #fff;" />
        </div>
        <div class="form-group" style="margin-bottom: 1rem;">
          <label style="display: block; font-size: 0.82rem; font-weight: 600; color: #cbd5e1; margin-bottom: 0.3rem;">Message or Inquiry</label>
          <textarea id="care-message" class="form-input" rows="3" placeholder="Type your support request or question here..." required style="width: 100%; padding: 0.65rem 0.8rem; background: #091325; border: 1px solid var(--border); border-radius: 8px; color: #fff;"></textarea>
        </div>
        <div style="display: flex; gap: 0.6rem; justify-content: flex-end;">
          <button type="button" id="cancel-customer-care" class="btn btn-secondary" style="padding: 0.6rem 1rem;">Cancel</button>
          <button type="submit" class="btn btn-primary" style="padding: 0.6rem 1.2rem; font-weight: 700; background: linear-gradient(135deg, #0284c7, #0369a1); border: none; color: #fff;">
            ✉️ Send to Customer Care
          </button>
        </div>
      </form>
    </div>
  `;
  document.body.appendChild(modal);

  const floatBtn = document.getElementById('customer-care-float-btn');
  const closeBtn = document.getElementById('close-customer-care-modal');
  const cancelBtn = document.getElementById('cancel-customer-care');
  const form = document.getElementById('customer-care-form');

  const openModal = () => {
    const user = getStoredUser();
    if (user) {
      const nameInput = document.getElementById('care-name');
      const emailInput = document.getElementById('care-email');
      if (nameInput && user.fullName) nameInput.value = user.fullName;
      if (emailInput && user.email) emailInput.value = user.email;
    }
    modal.style.display = 'flex';
  };

  const closeModal = () => {
    modal.style.display = 'none';
  };

  window.openCustomerSupport = () => {
    if (window.smartsuppLoaded && (typeof window.smartsupp === 'function' || window._smartsupp)) {
      try {
        if (typeof window.smartsupp === 'function') {
          window.smartsupp('chat:open');
          return;
        } else if (window._smartsupp) {
          window._smartsupp('open');
          return;
        }
      } catch (err) {
        console.warn('Smartsupp open fallback to modal:', err);
      }
    }
    openModal();
  };

  if (floatBtn) floatBtn.onclick = () => window.openCustomerSupport();
  if (closeBtn) closeBtn.onclick = closeModal;
  if (cancelBtn) cancelBtn.onclick = closeModal;

  document.querySelectorAll('.open-customer-care, [data-open-customer-care]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      window.openCustomerSupport();
    });
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  if (form) {
    form.onsubmit = async (e) => {
      e.preventDefault();
      const name = document.getElementById('care-name').value;
      const email = document.getElementById('care-email').value;
      const message = document.getElementById('care-message').value;

      try {
        const res = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email, message })
        });
        const data = await res.json();
        if (res.ok && data.ok) {
          showToast('✅ Message sent to Customer Care! A representative will get back to you shortly.', true);
          const careMsg = document.getElementById('care-message');
          if (careMsg) careMsg.value = '';
          closeModal();
          if (typeof loadAdminData === 'function') {
            loadAdminData();
          }
        } else {
          showToast(`❌ ${data.error || 'Failed to submit message.'}`, false);
        }
      } catch (err) {
        showToast('❌ Network error submitting support request.', false);
      }
    };
  }
}

function setupHeaderControls() {
  const navbar = document.querySelector('header .navbar');
  const nav = navbar?.querySelector('.nav-links');
  if (!navbar || !nav) return;

  updateAuthNavbar();

  if (!document.querySelector('[data-lang-switcher]')) {
    const switcher = document.createElement('div');
    switcher.className = 'lang-switcher';
    switcher.setAttribute('data-lang-switcher', '');

    let optionsHtml = '';
    SUPPORTED_LANGUAGES.forEach((l) => {
      optionsHtml += `<option value="${l.code}">${l.flag} ${l.name}</option>`;
    });

    switcher.innerHTML = `
      <select class="header-lang-select" aria-label="Select Language">
        ${optionsHtml}
      </select>
    `;
    navbar.appendChild(switcher);

    const headerSelect = switcher.querySelector('.header-lang-select');
    if (headerSelect) {
      headerSelect.value = getLanguage();
      headerSelect.addEventListener('change', (e) => {
        setLanguage(e.target.value);
      });
    }
  }

  if (!document.querySelector('.mobile-nav-toggle')) {
    const toggle = document.createElement('button');
    toggle.className = 'mobile-nav-toggle';
    toggle.type = 'button';
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', t('mobile_menu'));
    toggle.innerHTML = '<span></span><span></span><span></span>';
    navbar.appendChild(toggle);
  }

  document.querySelectorAll('[data-lang-option]').forEach((button) => {
    button.addEventListener('click', () => {
      setLanguage(button.getAttribute('data-lang-option'));
    });
  });

  const toggle = document.querySelector('.mobile-nav-toggle');
  if (toggle) {
    toggle.addEventListener('click', () => {
      const expanded = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(expanded));
    });
  }

  // Keyboard navigation: Close header navigation on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (nav.classList.contains('open')) {
        nav.classList.remove('open');
        toggle?.setAttribute('aria-expanded', 'false');
        toggle?.focus();
      }
      const careModal = document.getElementById('customerCareModal');
      if (careModal && careModal.style.display === 'flex') {
        careModal.style.display = 'none';
      }
    }
  });

  document.addEventListener('click', (event) => {
    if (!navbar.contains(event.target) && nav.classList.contains('open')) {
      nav.classList.remove('open');
      toggle?.setAttribute('aria-expanded', 'false');
    }
  });
}

function setLanguage(lang) {
  if (!lang) return;
  localStorage.setItem('bitfurytech_lang', lang);

  // Set googtrans cookie for Google Translate
  const cookieVal = lang === 'en' ? '' : `/en/${lang}`;
  const domain = window.location.hostname;
  document.cookie = `googtrans=${cookieVal}; path=/; domain=${domain}`;
  document.cookie = `googtrans=${cookieVal}; path=/`;

  applyTranslations();

  // Trigger Google Translate combobox if rendered
  const googCombo = document.querySelector('.goog-te-combo');
  if (googCombo) {
    googCombo.value = lang;
    googCombo.dispatchEvent(new Event('change'));
  }

  updateTranslatorControlsUI(lang);
}

function applyTranslations() {
  document.documentElement.lang = getLanguage();
  const currentLang = getLanguage();

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.getAttribute('data-i18n');
    const value = t(key);
    if (value) {
      element.textContent = value;
    }
  });

  const textMap = {
    Home: { en: 'Home', es: 'Inicio', fr: 'Accueil' },
    About: { en: 'About', es: 'Nosotros', fr: 'À propos' },
    Services: { en: 'Services', es: 'Servicios', fr: 'Services' },
    Markets: { en: 'Markets', es: 'Mercados', fr: 'Marchés' },
    Navigation: { en: 'Navigation', es: 'Navegación', fr: 'Navigation' },
    Contact: { en: 'Contact', es: 'Contacto', fr: 'Contact' },
    Dashboard: { en: 'Dashboard', es: 'Panel', fr: 'Tableau de bord' },
    Login: { en: 'Login', es: 'Iniciar sesión', fr: 'Connexion' },
    Register: { en: 'Register', es: 'Registrarse', fr: 'Créer un compte' },
    Logout: { en: 'Logout', es: 'Cerrar sesión', fr: 'Déconnexion' },
    'Secure access': { en: 'Secure access', es: 'Acceso seguro', fr: 'Accès sécurisé' },
    'Create account': { en: 'Create account', es: 'Crear cuenta', fr: 'Créer un compte' },
    'Login to your account': { en: 'Login to your account', es: 'Inicie sesión en su cuenta', fr: 'Connectez-vous à votre compte' },
    'Register for your investor workspace': { en: 'Register for your investor workspace', es: 'Regístrese para su espacio de inversionista', fr: 'Inscrivez-vous à votre espace investisseur' },
    'Investor portal': { en: 'Investor portal', es: 'Portal de inversionistas', fr: 'Portail investisseur' },
    Administration: { en: 'Administration', es: 'Administración', fr: 'Administration' },
    'Continue': { en: 'Continue', es: 'Continuar', fr: 'Continuer' },
    'Create account': { en: 'Create account', es: 'Crear cuenta', fr: 'Créer un compte' },
    'Send request': { en: 'Send request', es: 'Enviar solicitud', fr: 'Envoyer la demande' },
    'Submit request': { en: 'Submit request', es: 'Enviar solicitud', fr: 'Envoyer la demande' },
    'Request submitted': { en: 'Request submitted', es: 'Solicitud enviada', fr: 'Demande envoyée' },
    'Submitted': { en: 'Submitted', es: 'Enviado', fr: 'Envoyé' },
    'Working...': { en: 'Working...', es: 'Procesando...', fr: 'Traitement...' },
    'Submitting...': { en: 'Submitting...', es: 'Enviando...', fr: 'Envoi...' },
    'Sending...': { en: 'Sending...', es: 'Enviando...', fr: 'Envoi...' },
    'Pending': { en: 'Pending', es: 'Pendiente', fr: 'En attente' },
    Approved: { en: 'Approved', es: 'Aprobado', fr: 'Approuvé' },
    Rejected: { en: 'Rejected', es: 'Rechazado', fr: 'Rejeté' },
    Investor: { en: 'Investor', es: 'Inversionista', fr: 'Investisseur' },
    Admin: { en: 'Admin', es: 'Administrador', fr: 'Administrateur' },
  };

  document.querySelectorAll('a, button, label, h1, h2, h3, p, span, li, th, td, option').forEach((element) => {
    const text = (element.textContent || '').trim();
    if (textMap[text]) {
      element.textContent = textMap[text][currentLang] || textMap[text].en;
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
    const key = element.getAttribute('data-i18n-placeholder');
    const value = t(key);
    if (value) {
      element.placeholder = value;
    }
  });
}

async function postJson(url, payload, options = {}) {
  let response;
  try {
    response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(options.authToken ? { Authorization: `Bearer ${options.authToken}` } : {}),
      },
      body: JSON.stringify(payload),
    });
  } catch (netErr) {
    throw new Error('Connection failed. Please check your internet connection and try again.');
  }

  let data = {};
  try {
    data = await response.json();
  } catch (jsonErr) {
    if (!response.ok) {
      throw new Error(`Server returned status ${response.status}. Please try again.`);
    }
  }

  if (!response.ok) {
    throw new Error(data.error || `Request failed with status ${response.status}.`);
  }
  return data;
}

function createMessage(form, messageText) {
  const existingMessage = form.querySelector('.form-message');
  if (existingMessage) {
    existingMessage.remove();
  }

  const message = document.createElement('p');
  message.className = 'form-message muted';
  message.style.marginTop = '0.8rem';
  message.textContent = messageText;
  form.appendChild(message);
}

async function handleAdminAction(requestId, action) {
  const token = getAuthToken();
  if (!token) {
    window.location.href = 'login.html';
    return;
  }

  try {
    await postJson(`/api/admin/requests/${requestId}/${action}`, {}, { authToken: token });
    await loadAdminData();
  } catch (error) {
    console.error(error);
  }
}

function handleContactFormSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const button = form.querySelector('button[type="submit"]');
  const payload = {
    name: form.querySelector('#name')?.value?.trim() || '',
    email: form.querySelector('#contact-email')?.value?.trim() || '',
    message: form.querySelector('#message')?.value?.trim() || '',
  };

  if (!payload.name || !payload.email || !payload.message) {
    createMessage(form, t('form_contact_required'));
    return;
  }

  if (button) {
    button.disabled = true;
    button.textContent = t('sending');
  }

  postJson('/api/contact', payload)
    .then(() => {
      createMessage(form, t('contact_success'));
      form.reset();
      if (button) {
        button.textContent = t('submitted');
      }
    })
    .catch((error) => {
      createMessage(form, error.message || t('contact_error'));
      if (button) {
        button.disabled = false;
        button.textContent = 'Send request';
      }
    });
}

function handleDepositFormSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const button = form.querySelector('button[type="submit"]');
  const token = getAuthToken();
  const selectedMethodInput = form.querySelector('#deposit-selected-method') || form.querySelector('#deposit-method') || form.querySelector('[name="method"]');
  const methodVal = selectedMethodInput?.value || 'Bitcoin (BTC ₿)';

  const payload = {
    amount: form.querySelector('#deposit-amount')?.value || '',
    method: methodVal,
    reference: form.querySelector('#deposit-reference')?.value?.trim() || '',
  };

  if (!payload.amount || !payload.method || !payload.reference) {
    createMessage(form, t('deposit_required'));
    return;
  }

  if (!token) {
    createMessage(form, t('deposit_login'));
    window.location.href = 'login.html';
    return;
  }

  if (button) {
    button.disabled = true;
    button.textContent = t('submitting');
  }

  postJson('/api/deposits', payload, { authToken: token })
    .then((res) => {
      createMessage(form, t('deposit_success'));
      if (typeof showToast === 'function') {
        showToast('✅ Deposit request submitted successfully and pending approval!', true);
      }
      const savedMethod = methodVal;
      form.reset();
      if (selectedMethodInput) selectedMethodInput.value = savedMethod;
      if (button) {
        button.disabled = false;
        button.textContent = t('request_submitted');
      }
      loadDashboardData();
    })
    .catch((error) => {
      createMessage(form, error.message || t('deposit_error'));
      if (button) {
        button.disabled = false;
        button.textContent = t('submit_request');
      }
    });
}

/**
 * Renders a loading spinner component inside a button during async operations
 */
function setButtonLoading(button, isLoading, loadingText = 'Processing...', defaultText = null) {
  if (!button) return;

  if (isLoading) {
    if (!button.hasAttribute('data-original-html')) {
      button.setAttribute('data-original-html', defaultText || button.innerHTML);
    }
    button.disabled = true;
    button.classList.add('btn-loading');
    button.innerHTML = `
      <span class="btn-loading-content">
        <span class="btn-spinner" aria-hidden="true"></span>
        <span>${loadingText}</span>
      </span>
    `;
  } else {
    button.disabled = false;
    button.classList.remove('btn-loading');
    const original = button.getAttribute('data-original-html');
    if (original) {
      button.innerHTML = original;
      button.removeAttribute('data-original-html');
    } else if (defaultText) {
      button.innerHTML = defaultText;
    }
  }
}
window.setButtonLoading = setButtonLoading;

function handleAuthFormSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const button = form.querySelector('button[type="submit"]');
  const isRegister = form.id === 'register-form';
  const emailVal = form.querySelector('#email')?.value?.trim() || '';
  const usernameVal = form.querySelector('#username')?.value?.trim() || '';
  const passwordVal = form.querySelector('#password')?.value || '';
  const fullNameVal = isRegister ? form.querySelector('#fullName')?.value?.trim() || '' : '';
  const countryCodeVal = isRegister ? form.querySelector('#countryCode')?.value || '+1' : '';
  const phoneVal = isRegister ? form.querySelector('#phone')?.value?.trim() || '' : '';
  const fullPhone = phoneVal ? `${countryCodeVal} ${phoneVal}`.trim() : '';
  const accountTypeVal = isRegister ? form.querySelector('#account')?.value || 'Crypto Account' : '';

  if (!emailVal || !passwordVal || (isRegister && !fullNameVal)) {
    createMessage(form, isRegister ? 'Please provide your full name, email address, and password.' : 'Please enter your username or email address and password.');
    return;
  }

  if (isRegister && passwordVal.length < 6) {
    createMessage(form, 'Password must be at least 6 characters long.');
    return;
  }

  const payload = isRegister
    ? {
        fullName: fullNameVal,
        email: emailVal,
        username: usernameVal,
        password: passwordVal,
        phone: fullPhone,
        accountType: accountTypeVal,
      }
    : {
        usernameOrEmail: emailVal,
        password: passwordVal,
      };

  const defaultBtnText = isRegister ? 'Create Account & Log In' : 'Log In to Dashboard';
  const loadingMsg = isRegister ? 'Creating Account...' : 'Authenticating...';

  if (button) {
    setButtonLoading(button, true, loadingMsg, defaultBtnText);
  }

  postJson(isRegister ? '/api/auth/register' : '/api/auth/login', payload)
    .then((data) => {
      saveAuth(data);
      if (button) {
        button.innerHTML = `
          <span class="btn-loading-content" style="color: #34d399;">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" style="margin-right: 0.5rem;"><polyline points="20 6 9 17 4 12"/></svg>
            <span>${isRegister ? 'Account Created!' : 'Authenticated!'}</span>
          </span>
        `;
      }
      createMessage(form, isRegister ? 'Account created successfully! Redirecting to dashboard...' : 'Login successful! Redirecting to dashboard...');
      setTimeout(() => {
        if (data && data.user && data.user.role === 'admin') {
          window.location.href = 'admin.html';
        } else {
          window.location.href = 'dashboard.html';
        }
      }, 550);
    })
    .catch((error) => {
      createMessage(form, error.message || (isRegister ? 'Registration failed. Please try again.' : 'Invalid email or password.'));
      if (button) {
        setButtonLoading(button, false, '', defaultBtnText);
      }
    });
}

function initForms() {
  const contactForm = document.querySelector('form[data-contact-form]');
  const depositForm = document.querySelector('form[data-deposit-form]');
  const loginForm = document.querySelector('form#auth-form, form#login-form');
  const registerForm = document.querySelector('form#register-form');

  if (contactForm) {
    contactForm.addEventListener('submit', handleContactFormSubmit);
  }

  if (depositForm) {
    depositForm.addEventListener('submit', handleDepositFormSubmit);
  }

  if (loginForm) {
    loginForm.addEventListener('submit', handleAuthFormSubmit);
  }

  if (registerForm) {
    registerForm.addEventListener('submit', handleAuthFormSubmit);
  }

  initForgotPasswordHandlers();

  document.querySelectorAll('[data-logout]').forEach((button) => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      clearAuth();
      window.location.href = 'index.html';
    });
  });
}

function initForgotPasswordHandlers() {
  const toggleBtn = document.getElementById('toggle-forgot-pass-btn');
  const closeBtn = document.getElementById('close-forgot-pass-btn');
  const forgotCard = document.getElementById('forgot-password-card');
  const requestCodeForm = document.getElementById('request-reset-code-form');
  const confirmResetForm = document.getElementById('confirm-reset-password-form');

  if (toggleBtn && forgotCard) {
    toggleBtn.addEventListener('click', () => {
      forgotCard.style.display = forgotCard.style.display === 'none' ? 'block' : 'none';
      if (forgotCard.style.display === 'block') {
        forgotCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    });
  }

  if (closeBtn && forgotCard) {
    closeBtn.addEventListener('click', () => {
      forgotCard.style.display = 'none';
    });
  }

  if (requestCodeForm) {
    requestCodeForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const identifierInput = document.getElementById('reset-identifier');
      const sendBtn = document.getElementById('send-code-btn');
      const identifier = identifierInput?.value?.trim();

      if (!identifier) {
        showToast('❌ Please enter your username or email address.', false);
        return;
      }

      const origHtml = sendBtn.innerHTML;
      sendBtn.disabled = true;
      sendBtn.innerHTML = '📩 Sending Verification Code...';

      try {
        const res = await fetch('/api/auth/forgot-password', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ identifier })
        });
        const data = await res.json();

        if (res.ok && data.ok) {
          showToast(`✅ ${data.message}`, true);
          const sentMsg = document.getElementById('reset-code-sent-msg');
          if (sentMsg) {
            sentMsg.textContent = `A 6-digit verification code has been sent to ${data.email || 'your registered email'}. Enter it below along with your new password.`;
          }
          if (confirmResetForm) {
            confirmResetForm.style.display = 'block';
            confirmResetForm.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          }
        } else {
          showToast(`❌ ${data.error || 'Failed to send reset code.'}`, false);
        }
      } catch (err) {
        showToast('❌ Network error processing password reset.', false);
      } finally {
        sendBtn.disabled = false;
        sendBtn.innerHTML = origHtml;
      }
    });
  }

  if (confirmResetForm) {
    confirmResetForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const identifier = document.getElementById('reset-identifier')?.value?.trim();
      const resetCode = document.getElementById('reset-code')?.value?.trim();
      const newPassword = document.getElementById('new-password')?.value?.trim();
      const confirmBtn = document.getElementById('confirm-reset-btn');

      if (!identifier || !resetCode || !newPassword) {
        showToast('❌ Please enter the verification code and new password.', false);
        return;
      }

      if (newPassword.length < 6) {
        showToast('❌ New password must be at least 6 characters long.', false);
        return;
      }

      const origHtml = confirmBtn.innerHTML;
      confirmBtn.disabled = true;
      confirmBtn.innerHTML = '🔄 Updating Password...';

      try {
        const res = await fetch('/api/auth/reset-password', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ identifier, resetCode, newPassword })
        });
        const data = await res.json();

        if (res.ok && data.ok) {
          showToast(`✅ ${data.message}`, true);
          // Autofill login form
          const loginEmailInput = document.querySelector('form#auth-form #email');
          const loginPassInput = document.querySelector('form#auth-form #password');
          if (loginEmailInput) loginEmailInput.value = identifier;
          if (loginPassInput) loginPassInput.value = newPassword;

          if (forgotCard) forgotCard.style.display = 'none';
        } else {
          showToast(`❌ ${data.error || 'Password reset failed.'}`, false);
        }
      } catch (err) {
        showToast('❌ Network error resetting password.', false);
      } finally {
        confirmBtn.disabled = false;
        confirmBtn.innerHTML = origHtml;
      }
    });
  }
}

function renderPortfolioGrowthChart(depositBal, interestBal, totalInvest, timeframe = '7D') {
  const chartSvg = document.getElementById('portfolio-growth-chart');
  if (!chartSvg) return;

  const parseNum = (val) => {
    if (typeof val === 'number') return val;
    if (typeof val === 'string') {
      const num = parseFloat(val.replace(/[^0-9.-]+/g, ''));
      return isNaN(num) ? 0 : num;
    }
    return 0;
  };

  const dep = parseNum(depositBal);
  const int = parseNum(interestBal);
  const inv = parseNum(totalInvest);

  const pointsCount = timeframe === '7D' ? 7 : timeframe === '30D' ? 12 : timeframe === '90D' ? 15 : 20;
  const totalValues = [];
  const interestValues = [];

  for (let i = 0; i < pointsCount; i++) {
    const factor = (i + 1) / pointsCount;
    const noise = 1 + (Math.sin(i * 1.8) * 0.04);
    const simInt = Math.max(0, int * Math.pow(factor, 1.1) * noise);
    const simTotal = Math.max(10, (dep + inv) + simInt);
    totalValues.push(simTotal);
    interestValues.push(simInt);
  }

  const width = 600;
  const height = 180;
  const padding = 20;
  const maxVal = Math.max(...totalValues, 100) * 1.12;
  const minVal = 0;

  const getX = (idx) => padding + (idx / (pointsCount - 1)) * (width - 2 * padding);
  const getY = (val) => height - padding - ((val - minVal) / (maxVal - minVal)) * (height - 2 * padding);

  let totalPath = '';
  let interestPath = '';
  let areaPath = '';

  totalValues.forEach((val, i) => {
    const x = getX(i);
    const y = getY(val);
    if (i === 0) {
      totalPath += `M ${x} ${y}`;
      areaPath += `M ${x} ${height - padding} L ${x} ${y}`;
    } else {
      const prevX = getX(i - 1);
      const prevY = getY(totalValues[i - 1]);
      const cx = prevX + (x - prevX) / 2;
      totalPath += ` C ${cx} ${prevY}, ${cx} ${y}, ${x} ${y}`;
      areaPath += ` C ${cx} ${prevY}, ${cx} ${y}, ${x} ${y}`;
    }
  });

  areaPath += ` L ${getX(pointsCount - 1)} ${height - padding} Z`;

  interestValues.forEach((val, i) => {
    const x = getX(i);
    const y = getY(val);
    if (i === 0) {
      interestPath += `M ${x} ${y}`;
    } else {
      const prevX = getX(i - 1);
      const prevY = getY(interestValues[i - 1]);
      const cx = prevX + (x - prevX) / 2;
      interestPath += ` C ${cx} ${prevY}, ${cx} ${y}, ${x} ${y}`;
    }
  });

  chartSvg.innerHTML = `
    <defs>
      <linearGradient id="chartBgGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#10b981" stop-opacity="0.38"/>
        <stop offset="100%" stop-color="#10b981" stop-opacity="0.0"/>
      </linearGradient>
    </defs>
    <line x1="${padding}" y1="${getY(maxVal * 0.25)}" x2="${width - padding}" y2="${getY(maxVal * 0.25)}" stroke="rgba(255,255,255,0.06)" stroke-dasharray="4 4" />
    <line x1="${padding}" y1="${getY(maxVal * 0.5)}" x2="${width - padding}" y2="${getY(maxVal * 0.5)}" stroke="rgba(255,255,255,0.06)" stroke-dasharray="4 4" />
    <line x1="${padding}" y1="${getY(maxVal * 0.75)}" x2="${width - padding}" y2="${getY(maxVal * 0.75)}" stroke="rgba(255,255,255,0.06)" stroke-dasharray="4 4" />
    <path d="${areaPath}" fill="url(#chartBgGrad)" />
    <path d="${totalPath}" fill="none" stroke="#34d399" stroke-width="3" stroke-linecap="round" />
    <path d="${interestPath}" fill="none" stroke="#38bdf8" stroke-width="2" stroke-linecap="round" stroke-dasharray="3 3" />
    <circle cx="${getX(pointsCount - 1)}" cy="${getY(totalValues[pointsCount - 1])}" r="6" fill="#34d399" stroke="#ffffff" stroke-width="2" />
  `;
}

/**
 * Smooth Count-up number ticker animation for balances, profit, and financial statistics
 */
function animateCountUp(targetEl, targetVal, options = {}) {
  let elements = [];
  if (typeof targetEl === 'string') {
    elements = Array.from(document.querySelectorAll(`#${targetEl}, .${targetEl}`));
  } else if (targetEl instanceof HTMLElement) {
    elements = [targetEl];
  } else if (targetEl && targetEl.length) {
    elements = Array.from(targetEl);
  }
  if (!elements || elements.length === 0) return;

  elements.forEach((el) => {
    const {
      duration = 1250,
      prefix = '$',
      suffix = '',
      hasPlus = false,
      decimals = 2,
      isMasked = false
    } = options;

    const parseValLocal = (val) => {
      if (val === null || val === undefined) return 0;
      if (typeof val === 'number') return val;
      if (typeof val === 'string') {
        const clean = val.replace(/[^0-9.-]+/g, '');
        const num = parseFloat(clean);
        return isNaN(num) ? 0 : num;
      }
      return 0;
    };

    const numericTarget = parseValLocal(targetVal);
    const sign = hasPlus && numericTarget > 0 ? '+' : '';
    const formattedFinal = `${sign}${prefix}${numericTarget.toLocaleString('en-US', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals
    })}${suffix}`;

    el.setAttribute('data-real-val', formattedFinal);

    if (isMasked || (localStorage.getItem('balance_masked') === 'true' && el.id === 'stat-total-available-balance')) {
      el.textContent = '••••••';
      return;
    }

    if (el._animFrame) {
      cancelAnimationFrame(el._animFrame);
    }

    const startTime = performance.now();
    const startNum = 0; // Starts ticking up from 0 on page load

    el.classList.add('number-tick-up');
    el.classList.add('number-ticking');

    const updateCounter = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentVal = startNum + (numericTarget - startNum) * easeOut;

      if (localStorage.getItem('balance_masked') === 'true' && el.id === 'stat-total-available-balance') {
        el.textContent = '••••••';
        el.classList.remove('number-ticking');
        return;
      }

      const currSign = hasPlus && currentVal > 0 ? '+' : '';
      el.textContent = `${currSign}${prefix}${currentVal.toLocaleString('en-US', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals
      })}${suffix}`;

      if (progress < 1) {
        el._animFrame = requestAnimationFrame(updateCounter);
      } else {
        el.textContent = formattedFinal;
        el.classList.remove('number-ticking');
      }
    };

    el._animFrame = requestAnimationFrame(updateCounter);
  });
}
window.animateCountUp = animateCountUp;

window.currentSelectedAvatar = '';

function updateUserAvatarUI(avatarUrl, fullName = 'Investor') {
  const avatarContainers = document.querySelectorAll('.user-avatar-circle');
  const initial = (fullName || 'I').trim().charAt(0).toUpperCase();

  avatarContainers.forEach((container) => {
    if (avatarUrl && avatarUrl.trim()) {
      container.innerHTML = `<img src="${avatarUrl}" alt="Profile Photo" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%; display: block;" />`;
    } else {
      container.innerHTML = `<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 14c-5.33 0-8 2.67-8 4v1h16v-1c0-1.33-2.67-4-8-4z"/></svg>`;
    }
  });

  const imgPreview = document.getElementById('prof-avatar-img-preview');
  const fallbackEl = document.getElementById('prof-avatar-fallback');
  const removeBtn = document.getElementById('remove-profile-photo-btn');

  if (imgPreview && fallbackEl) {
    if (avatarUrl && avatarUrl.trim()) {
      imgPreview.src = avatarUrl;
      imgPreview.style.display = 'block';
      fallbackEl.style.display = 'none';
      if (removeBtn) removeBtn.style.display = 'inline-block';
    } else {
      imgPreview.src = '';
      imgPreview.style.display = 'none';
      fallbackEl.textContent = initial || 'I';
      fallbackEl.style.display = 'block';
      if (removeBtn) removeBtn.style.display = 'none';
    }
  }
}
window.updateUserAvatarUI = updateUserAvatarUI;

function initProfileAvatarControls() {
  const avatarFileInput = document.getElementById('prof-avatar-file-input');
  const removeBtn = document.getElementById('remove-profile-photo-btn');

  if (avatarFileInput && !avatarFileInput.dataset.bound) {
    avatarFileInput.dataset.bound = 'true';
    avatarFileInput.addEventListener('change', (e) => {
      const file = e.target.files && e.target.files[0];
      if (!file) return;

      if (!file.type.startsWith('image/')) {
        showToast('❌ Please select a valid image file (PNG, JPG, WebP).', false);
        return;
      }

      if (file.size > 8 * 1024 * 1024) {
        showToast('❌ Image size is too large. Please select an image under 8MB.', false);
        return;
      }

      const reader = new FileReader();
      reader.onload = function (evt) {
        const base64Data = evt.target.result;
        window.currentSelectedAvatar = base64Data;
        const nameVal = document.getElementById('prof-fullname')?.value || 'Investor';
        updateUserAvatarUI(base64Data, nameVal);
        showToast('📷 Photo selected! Click "Save Profile Changes" to update.', true);
      };
      reader.readAsDataURL(file);
    });
  }

  if (removeBtn && !removeBtn.dataset.bound) {
    removeBtn.dataset.bound = 'true';
    removeBtn.addEventListener('click', () => {
      window.currentSelectedAvatar = '';
      if (avatarFileInput) avatarFileInput.value = '';
      const nameVal = document.getElementById('prof-fullname')?.value || 'Investor';
      updateUserAvatarUI('', nameVal);
      showToast('🗑️ Photo removed. Save profile to finalize changes.', true);
    });
  }
}
window.initProfileAvatarControls = initProfileAvatarControls;

async function loadDashboardData() {
  const dashboard = document.querySelector('[data-dashboard]');
  if (!dashboard) return;

  if (!getAuthToken()) {
    window.location.href = 'login.html';
    return;
  }

  try {
    const response = await fetch('/api/dashboard', {
      headers: getAuthToken() ? { Authorization: `Bearer ${getAuthToken()}` } : {},
    });
    const data = await response.json();

    if (data.authRequired) {
      window.location.href = 'login.html';
      return;
    }

    // Format currency helper that handles numbers, formatted strings, raw strings, nulls
    const parseVal = (val) => {
      if (val === null || val === undefined) return 0;
      if (typeof val === 'number') return val;
      if (typeof val === 'string') {
        const clean = val.replace(/[^0-9.-]+/g, '');
        const num = parseFloat(clean);
        return isNaN(num) ? 0 : num;
      }
      return 0;
    };

    const fmt = (val) => {
      if (typeof val === 'string' && val.trim().startsWith('$')) return val;
      const num = parseVal(val);
      return `$${num.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    };

    // Top Green Stat Cards & Main Balance - Animate count-up on load
    const depVal = parseVal(data.depositWallet);
    const intVal = parseVal(data.interestWallet);
    const totalAvail = depVal + intVal;
    const isMasked = localStorage.getItem('balance_masked') === 'true';

    // 1. Available Balance
    animateCountUp('stat-total-available-balance', totalAvail, { isMasked, duration: 1300 });

    // 2. Yesterday's Earnings
    const investmentsList = data.activeInvestments || data.investments || [];
    const calculatedYesterdayEarnings = investmentsList.reduce((sum, inv) => {
      const amt = parseVal(inv.amount);
      const rate = parseVal(inv.dailyRate || inv.daily_rate);
      return sum + (amt * (rate / 100));
    }, 0) || 0.14;

    const yesterdayEarningsVal = data.yesterdayEarnings !== undefined ? parseVal(data.yesterdayEarnings) : calculatedYesterdayEarnings;
    animateCountUp('stat-yesterday-earnings', yesterdayEarningsVal, { hasPlus: true, duration: 1100 });

    // 3. Stat Card Balances
    animateCountUp('stat-deposit-wallet', data.depositWallet, { duration: 1200 });
    animateCountUp('stat-interest-wallet', data.interestWallet, { duration: 1200 });
    animateCountUp('stat-total-invest', data.totalInvest, { duration: 1200 });
    animateCountUp('stat-total-deposit', data.totalDeposit, { duration: 1200 });
    animateCountUp('stat-total-withdraw', data.totalWithdraw, { duration: 1200 });
    animateCountUp('stat-referral-earnings', data.referralEarnings, { duration: 1200 });

    // Update Multi-Currency Portfolio Valuations
    if (window.updateFxValuations) {
      window.updateFxValuations(totalAvail);
    }

    // Form/Modal wallet balances
    if (document.getElementById('withdraw-interest-avail')) document.getElementById('withdraw-interest-avail').textContent = fmt(data.interestWallet);
    if (document.getElementById('withdraw-deposit-avail')) document.getElementById('withdraw-deposit-avail').textContent = fmt(data.depositWallet);
    if (document.getElementById('modal-dep-bal')) document.getElementById('modal-dep-bal').textContent = fmt(data.depositWallet);
    if (document.getElementById('modal-int-bal')) document.getElementById('modal-int-bal').textContent = fmt(data.interestWallet);

    // Update Interest & Yield View Board Metrics
    const totalAccruedInterest = investmentsList.reduce((sum, inv) => sum + parseVal(inv.accruedProfit || inv.accrued_profit || 0), 0) + intVal;
    if (document.getElementById('board-total-interest')) {
      document.getElementById('board-total-interest').textContent = fmt(totalAccruedInterest);
    }
    if (document.getElementById('board-yesterday-interest')) {
      document.getElementById('board-yesterday-interest').textContent = '+' + fmt(yesterdayEarningsVal);
    }
    if (document.getElementById('board-interest-wallet-bal')) {
      document.getElementById('board-interest-wallet-bal').textContent = fmt(data.interestWallet);
    }
    const avgRate = investmentsList.length > 0 
      ? (investmentsList.reduce((s, i) => s + parseVal(i.dailyRate || i.daily_rate || 0), 0) / investmentsList.length).toFixed(2)
      : '1.80';
    if (document.getElementById('board-avg-yield-rate')) {
      document.getElementById('board-avg-yield-rate').textContent = `${avgRate}% / Day`;
    }

    // Update Interest Board Accrual History Table
    const boardTbody = document.getElementById('interest-board-tbody');
    if (boardTbody) {
      if (investmentsList.length === 0) {
        boardTbody.innerHTML = `
          <tr>
            <td class="muted" style="font-size: 0.82rem;">Today, 00:00 UTC</td>
            <td style="font-weight: 700; color: #ffffff;">Crypto Momentum Alpha</td>
            <td style="font-family: monospace;">$10.00</td>
            <td><span class="badge" style="background: rgba(52, 211, 153, 0.2); color: #34d399;">1.40% / Day</span></td>
            <td style="font-weight: 700; color: #34d399;">+$0.14</td>
            <td><span class="badge badge-success">Accrued to Wallet</span></td>
          </tr>
        `;
      } else {
        boardTbody.innerHTML = investmentsList.map((inv) => {
          const dailyProf = parseVal(inv.amount) * (parseVal(inv.dailyRate || inv.daily_rate) / 100);
          return `
            <tr>
              <td class="muted" style="font-size: 0.82rem;">${new Date().toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}, 00:00 UTC</td>
              <td style="font-weight: 700; color: #ffffff;">${inv.planName || inv.plan_name}</td>
              <td style="font-family: monospace;">${fmt(inv.amount)}</td>
              <td><span class="badge" style="background: rgba(52, 211, 153, 0.2); color: #34d399;">${inv.dailyRate || inv.daily_rate}% / Day</span></td>
              <td style="font-weight: 700; color: #34d399;">+${fmt(dailyProf)}</td>
              <td><span class="badge badge-success">Accrued to Wallet</span></td>
            </tr>
          `;
        }).join('');
      }
    }

    const userNameEl = document.querySelector('[data-user-name]');
    if (userNameEl && data.user) {
      userNameEl.textContent = data.user.fullName || data.user.email || 'Investor';
    }

    if (data.user) {
      if (document.getElementById('prof-fullname')) document.getElementById('prof-fullname').value = data.user.fullName || '';
      if (document.getElementById('prof-email')) document.getElementById('prof-email').value = data.user.email || '';
      if (document.getElementById('prof-phone')) document.getElementById('prof-phone').value = data.user.phone || '';
      if (document.getElementById('prof-country')) document.getElementById('prof-country').value = data.user.country || '';
    }

    window.currentActiveInvestments = investmentsList;
    window.currentDashboardData = data;

    // Active Investments Tables (Overview & Active Investments Tab)
    const renderInvestments = (investments, isOverview = false) => {
      const colSpan = isOverview ? 6 : 8;
      if (!investments || investments.length === 0) {
        return `<tr><td colspan="${colSpan}" class="text-center muted">No active investments yet. Explore our plans to start earning daily interest.</td></tr>`;
      }
      return investments.map((inv, idx) => `
        <tr>
          <td><strong>${inv.planName || inv.plan_name}</strong></td>
          <td>${fmt(inv.amount)}</td>
          <td><span class="green-text font-bold">${inv.dailyRate || inv.daily_rate}%</span></td>
          ${isOverview ? '' : `<td>${fmt((parseVal(inv.amount)) * ((parseVal(inv.dailyRate || inv.daily_rate)) / 100))} / day</td>`}
          <td><strong class="green-text">${fmt(inv.accruedProfit || inv.accrued_profit)}</strong></td>
          ${isOverview ? '' : `<td>${new Date(inv.createdAt || inv.created_at || Date.now()).toLocaleDateString()}</td>`}
          <td><span class="badge" style="background: rgba(16, 185, 129, 0.2); color: #34d399;">Running</span></td>
          <td>
            <button type="button" class="btn btn-secondary btn-xs open-agreement-modal-btn" data-inv-idx="${idx}" style="padding: 0.28rem 0.55rem; font-size: 0.72rem; display: inline-flex; align-items: center; gap: 0.3rem;">
              📄 PDF Agreement
            </button>
          </td>
        </tr>
      `).join('');
    };

    const overviewInvTable = document.querySelector('#overview-active-investments tbody');
    if (overviewInvTable) overviewInvTable.innerHTML = renderInvestments(investmentsList, true);

    const fullInvTable = document.querySelector('#full-active-investments-table tbody');
    if (fullInvTable) fullInvTable.innerHTML = renderInvestments(investmentsList, false);

    window.currentDashboardTransactions = data.transactions || [];

    // Transactions Table
    const renderTransactions = (transactions) => {
      if (!transactions || transactions.length === 0) {
        return `<tr><td colspan="7" class="text-center muted">No transaction records found.</td></tr>`;
      }
      return transactions.map((trx) => {
        const rawStatus = (trx.status || 'completed').toLowerCase();
        let statusBadge = '';
        if (rawStatus === 'pending') {
          statusBadge = `<span class="badge" style="background: rgba(234, 179, 8, 0.2); color: #facc15; font-weight: 600;">Pending</span>`;
        } else if (rawStatus === 'failed' || rawStatus === 'rejected') {
          statusBadge = `<span class="badge" style="background: rgba(239, 68, 68, 0.2); color: #f87171; font-weight: 600;">Failed</span>`;
        } else {
          statusBadge = `<span class="badge" style="background: rgba(16, 185, 129, 0.2); color: #34d399; font-weight: 600;">Completed</span>`;
        }

        return `
        <tr>
          <td>${new Date(trx.createdAt || trx.created_at || Date.now()).toLocaleDateString()}</td>
          <td><code>${trx.trxId || trx.id}</code></td>
          <td class="${parseVal(trx.amount) >= 0 ? 'green-text' : ''}">${parseVal(trx.amount) >= 0 ? '+' : ''}${fmt(trx.amount)}</td>
          <td><span class="badge">${trx.wallet || trx.walletType || 'Wallet'}</span></td>
          <td>${trx.details}</td>
          <td>${statusBadge}</td>
          <td><strong>${fmt(trx.postBalance || trx.post_balance)}</strong></td>
        </tr>
      `;
      }).join('');
    };

    window.filterAndRenderDashboardTransactions = function() {
      const searchInput = document.getElementById('trx-search-input');
      const typeSelect = document.getElementById('trx-type-filter');
      const searchVal = searchInput ? searchInput.value.toLowerCase().trim() : '';
      const filterType = typeSelect ? typeSelect.value : 'all';

      let filtered = window.currentDashboardTransactions || [];

      if (filterType !== 'all') {
        filtered = filtered.filter((t) => {
          const typeStr = (t.type || t.details || '').toLowerCase();
          const statusStr = (t.status || '').toLowerCase();
          if (filterType === 'deposit') return typeStr.includes('deposit');
          if (filterType === 'investment') return typeStr.includes('invest');
          if (filterType === 'interest') return typeStr.includes('interest') || typeStr.includes('yield') || typeStr.includes('payout');
          if (filterType === 'withdrawal') return typeStr.includes('withdraw');
          if (filterType === 'bonus') return typeStr.includes('bonus') || typeStr.includes('sign');
          if (filterType === 'pending') return statusStr === 'pending';
          if (filterType === 'completed') return statusStr === 'completed';
          if (filterType === 'failed') return statusStr === 'failed' || statusStr === 'rejected';
          return true;
        });
      }

      if (searchVal) {
        filtered = filtered.filter((t) => {
          const idStr = String(t.trxId || t.id || '').toLowerCase();
          const detailsStr = String(t.details || '').toLowerCase();
          const statusStr = String(t.status || '').toLowerCase();
          return idStr.includes(searchVal) || detailsStr.includes(searchVal) || statusStr.includes(searchVal);
        });
      }

      const fullTrxTable = document.querySelector('#full-transactions-table tbody');
      if (fullTrxTable) fullTrxTable.innerHTML = renderTransactions(filtered);
    };

    const overviewTrxTable = document.querySelector('#overview-transactions tbody');
    if (overviewTrxTable) overviewTrxTable.innerHTML = renderTransactions((data.transactions || []).slice(0, 5));

    window.filterAndRenderDashboardTransactions();

    // Render Portfolio Chart
    renderPortfolioGrowthChart(parseVal(data.depositWallet), parseVal(data.interestWallet), parseVal(data.totalInvest), '7D');

    // Deposit History Table
    const depositTable = document.querySelector('#deposit-history-table tbody');
    const depositList = data.deposits || data.payments || [];
    if (depositTable) {
      if (!depositList || depositList.length === 0) {
        depositTable.innerHTML = `<tr><td colspan="5" class="text-center muted">No deposit requests logged yet.</td></tr>`;
      } else {
        depositTable.innerHTML = depositList.map((p) => `
          <tr>
            <td>${new Date(p.createdAt || p.created_at || Date.now()).toLocaleDateString()}</td>
            <td><strong>${fmt(p.amount)}</strong></td>
            <td>${p.method}</td>
            <td><code>${p.reference}</code></td>
            <td>
              <span class="badge" style="${p.status === 'approved' ? 'background: rgba(16,185,129,0.2); color:#34d399;' : p.status === 'rejected' ? 'background: rgba(239,68,68,0.2); color:#f87171;' : 'background: rgba(234,179,8,0.2); color:#facc15;'}">
                ${p.status ? p.status.toUpperCase() : 'PENDING'}
              </span>
            </td>
          </tr>
        `).join('');
      }
    }

    // Withdrawal History Table
    const withdrawTable = document.querySelector('#withdrawal-history-table tbody');
    if (withdrawTable) {
      if (!data.withdrawals || data.withdrawals.length === 0) {
        withdrawTable.innerHTML = `<tr><td colspan="6" class="text-center muted">No withdrawal requests logged yet.</td></tr>`;
      } else {
        withdrawTable.innerHTML = data.withdrawals.map((w) => `
          <tr>
            <td>${new Date(w.createdAt || Date.now()).toLocaleDateString()}</td>
            <td><strong>${fmt(w.amount)}</strong></td>
            <td>${w.walletSource === 'interest' ? 'Interest Wallet' : 'Deposit Wallet'}</td>
            <td>${w.method}</td>
            <td><code>${w.details}</code></td>
            <td>
              <span class="badge" style="${w.status === 'approved' ? 'background: rgba(16,185,129,0.2); color:#34d399;' : w.status === 'rejected' ? 'background: rgba(239,68,68,0.2); color:#f87171;' : 'background: rgba(234,179,8,0.2); color:#facc15;'}">
                ${w.status ? w.status.toUpperCase() : 'PENDING'}
              </span>
            </td>
          </tr>
        `).join('');
      }
    }

    // Pre-fill profile settings inputs
    if (data.user) {
      if (document.getElementById('prof-fullname')) document.getElementById('prof-fullname').value = data.user.fullName || '';
      if (document.getElementById('prof-email')) document.getElementById('prof-email').value = data.user.email || '';
      if (document.getElementById('prof-country')) document.getElementById('prof-country').value = data.user.country || '';
      if (document.getElementById('prof-btc-wallet')) document.getElementById('prof-btc-wallet').value = data.user.btcWallet || '';
      if (document.getElementById('prof-usdt-wallet')) document.getElementById('prof-usdt-wallet').value = data.user.usdtWallet || '';

      if (data.user.phone) {
        const rawPhone = data.user.phone.trim();
        const ccSelect = document.getElementById('prof-country-code');
        const phoneInput = document.getElementById('prof-phone');
        if (ccSelect && phoneInput) {
          const match = rawPhone.match(/^(\+\d+)\s*(.*)$/);
          if (match) {
            if (Array.from(ccSelect.options).some((opt) => opt.value === match[1])) {
              ccSelect.value = match[1];
            }
            phoneInput.value = match[2];
          } else {
            phoneInput.value = rawPhone;
          }
        } else if (phoneInput) {
          phoneInput.value = rawPhone;
        }
      }

      if (data.user.avatar) {
        window.currentSelectedAvatar = data.user.avatar;
        updateUserAvatarUI(data.user.avatar, data.user.fullName);
      } else {
        updateUserAvatarUI('', data.user.fullName);
      }

      const badge2FA = document.getElementById('2fa-status-badge');
      if (badge2FA) {
        if (data.user.twoFactorEnabled) {
          badge2FA.textContent = '2FA ENABLED';
          badge2FA.style.background = 'rgba(16,185,129,0.2)';
          badge2FA.style.color = '#34d399';
        } else {
          badge2FA.textContent = '2FA DISABLED';
          badge2FA.style.background = 'rgba(239,68,68,0.2)';
          badge2FA.style.color = '#f87171';
        }
      }

      // Display Admin link in investor header if user role is admin
      const headerAdminLink = document.getElementById('header-admin-link');
      if (headerAdminLink && data.user.role === 'admin') {
        headerAdminLink.style.display = 'inline-flex';
      }
    }
    initProfileAvatarControls();

    // Referrals Data
    if (document.getElementById('ref-count')) document.getElementById('ref-count').textContent = '0';
    if (document.getElementById('ref-bonus-total')) document.getElementById('ref-bonus-total').textContent = fmt(data.referralEarnings);

    // Load User Mail Notifications
    await loadUserNotifications();
    const refreshNotifBtn = document.getElementById('refresh-notifications-btn');
    if (refreshNotifBtn && !refreshNotifBtn.dataset.bound) {
      refreshNotifBtn.dataset.bound = 'true';
      refreshNotifBtn.addEventListener('click', async () => {
        await loadUserNotifications();
        showToast('🔄 Notifications inbox refreshed', true);
      });
    }

    // Initialize Crypto Deposit & Withdrawal Portals
    await initCryptoDepositPortal();
    initCryptoWithdrawalPortal();

    // Also load admin control panel data if admin panel elements exist
    await loadAdminData();

  } catch (error) {
    console.error('Error loading dashboard data:', error);
  }
}

// Dashboard Tabs & Interactions Setup
function initDashboardControls() {
  const allTabBtns = document.querySelectorAll('.dash-nav-btn, .acc-menu-btn, .investor-nav-item');
  const tabContents = document.querySelectorAll('.tab-content');

  const switchTab = (tabId) => {
    if (!tabId) return;
    const btns = document.querySelectorAll('.dash-nav-btn, .acc-menu-btn, .investor-nav-item, [data-tab]');
    btns.forEach((btn) => {
      const isMatch = btn.getAttribute('data-tab') === tabId;
      btn.classList.toggle('active', isMatch);
      btn.setAttribute('aria-selected', isMatch ? 'true' : 'false');
    });

    tabContents.forEach((tab) => {
      const isMatch = tab.id === `tab-${tabId}`;
      tab.classList.toggle('active', isMatch);
      tab.setAttribute('aria-hidden', isMatch ? 'false' : 'true');
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Dashboard Mobile Sidebar Toggle Logic
  const dashMenuBtn = document.getElementById('dash-menu-toggle-btn');
  const dashSidebar = document.getElementById('dashboard-sidebar');
  const dashOverlay = document.getElementById('dash-sidebar-overlay');

  const closeDashMenu = () => {
    if (dashSidebar) dashSidebar.classList.remove('open');
    if (dashMenuBtn) {
      dashMenuBtn.classList.remove('is-active');
      dashMenuBtn.setAttribute('aria-expanded', 'false');
    }
    if (dashOverlay) dashOverlay.classList.remove('active');
  };

  if (dashMenuBtn && dashSidebar) {
    dashMenuBtn.setAttribute('aria-expanded', 'false');
    dashMenuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = dashSidebar.classList.toggle('open');
      dashMenuBtn.classList.toggle('is-active', isOpen);
      dashMenuBtn.setAttribute('aria-expanded', String(isOpen));
      if (dashOverlay) dashOverlay.classList.toggle('active', isOpen);
    });
  }

  // Keyboard accessibility for sidebar escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && dashSidebar && dashSidebar.classList.contains('open')) {
      closeDashMenu();
      dashMenuBtn?.focus();
    }
  });

  if (dashOverlay) {
    dashOverlay.addEventListener('click', closeDashMenu);
  }

  document.addEventListener('click', (e) => {
    const switchTarget = e.target.closest('[data-switch-tab]');
    if (switchTarget) {
      const tabId = switchTarget.getAttribute('data-switch-tab');
      if (tabId) {
        switchTab(tabId);
        if (window.innerWidth <= 940) {
          closeDashMenu();
        }
      }
      return;
    }

    const tabTarget = e.target.closest('[data-tab]');
    if (tabTarget && (tabTarget.classList.contains('dash-nav-btn') || tabTarget.classList.contains('acc-menu-btn') || tabTarget.classList.contains('investor-nav-item') || tabTarget.classList.contains('mobile-bottom-nav-btn'))) {
      const tabId = tabTarget.getAttribute('data-tab');
      if (tabId) {
        switchTab(tabId);
        if (window.innerWidth <= 940) {
          closeDashMenu();
        }
      }
    }
  });

  // Account Accordion Toggle Handler
  const accToggle = document.getElementById('account-accordion-toggle');
  const accMenu = document.getElementById('account-menu');
  if (accToggle && accMenu) {
    accToggle.addEventListener('click', () => {
      accToggle.classList.toggle('collapsed');
      accMenu.classList.toggle('collapsed');
    });
  }

  // Balance Visibility Eye Toggle Handler
  const eyeBtn = document.getElementById('toggle-balance-eye');
  if (eyeBtn) {
    const openIcon = document.getElementById('eye-icon-open');
    const closedIcon = document.getElementById('eye-icon-closed');
    const balEl = document.getElementById('stat-total-available-balance');

    const updateEyeState = (isMasked) => {
      if (openIcon && closedIcon) {
        if (isMasked) {
          openIcon.classList.add('hidden');
          closedIcon.classList.remove('hidden');
          if (balEl) {
            if (!balEl.hasAttribute('data-real-val')) {
              balEl.setAttribute('data-real-val', balEl.textContent);
            }
            balEl.textContent = '••••••';
          }
        } else {
          openIcon.classList.remove('hidden');
          closedIcon.classList.add('hidden');
          if (balEl && balEl.hasAttribute('data-real-val')) {
            balEl.textContent = balEl.getAttribute('data-real-val');
          }
        }
      }
    };

    // Initialize state
    const currentlyMasked = localStorage.getItem('balance_masked') === 'true';
    updateEyeState(currentlyMasked);

    eyeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const newMaskedState = !(localStorage.getItem('balance_masked') === 'true');
      localStorage.setItem('balance_masked', newMaskedState ? 'true' : 'false');
      updateEyeState(newMaskedState);
    });
  }

  // Transaction Search & Type Filter Listeners
  const trxSearch = document.getElementById('trx-search-input');
  const trxType = document.getElementById('trx-type-filter');
  if (trxSearch) {
    trxSearch.addEventListener('input', () => {
      if (window.filterAndRenderDashboardTransactions) window.filterAndRenderDashboardTransactions();
    });
  }
  if (trxType) {
    trxType.addEventListener('change', () => {
      if (window.filterAndRenderDashboardTransactions) window.filterAndRenderDashboardTransactions();
    });
  }

  // Timeframe selector buttons for chart
  const timeframeBtns = document.querySelectorAll('#chart-timeframe-btns .btn-timeframe');
  timeframeBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      timeframeBtns.forEach((b) => {
        b.classList.remove('active');
        b.style.background = 'transparent';
        b.style.color = 'var(--muted)';
      });
      btn.classList.add('active');
      btn.style.background = 'rgba(16, 185, 129, 0.25)';
      btn.style.color = '#34d399';
      const tf = btn.getAttribute('data-timeframe') || '7D';
      const depEl = document.getElementById('stat-deposit-wallet');
      const intEl = document.getElementById('stat-interest-wallet');
      const invEl = document.getElementById('stat-total-invest');
      const depVal = depEl ? depEl.textContent : '0';
      const intVal = intEl ? intEl.textContent : '0';
      const invVal = invEl ? invEl.textContent : '0';
      renderPortfolioGrowthChart(depVal, intVal, invVal, tf);
    });
  });

  // Daily Yield Countdown Timer Loop
  const timerEl = document.getElementById('yield-countdown-timer');
  const progressPctEl = document.getElementById('yield-progress-pct');
  const progressBarEl = document.getElementById('yield-progress-bar');
  if (timerEl) {
    const updateYieldTimer = () => {
      const now = new Date();
      const endOfDay = new Date();
      endOfDay.setHours(23, 59, 59, 999);
      const diffMs = endOfDay - now;
      if (diffMs <= 0) {
        timerEl.textContent = '00h 00m 00s (Accruing...)';
        if (progressPctEl) progressPctEl.textContent = '100% Complete';
        if (progressBarEl) progressBarEl.style.width = '100%';
        return;
      }
      const hrs = String(Math.floor(diffMs / (1000 * 60 * 60))).padStart(2, '0');
      const mins = String(Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
      const secs = String(Math.floor((diffMs % (1000 * 60)) / 1000)).padStart(2, '0');
      timerEl.textContent = `${hrs}h ${mins}m ${secs}s`;

      const totalMsInDay = 24 * 60 * 60 * 1000;
      const elapsedMs = totalMsInDay - diffMs;
      const pct = Math.min(100, Math.max(0, Math.floor((elapsedMs / totalMsInDay) * 100)));
      if (progressPctEl) progressPctEl.textContent = `${pct}% Complete`;
      if (progressBarEl) progressBarEl.style.width = `${pct}%`;
    };
    updateYieldTimer();
    setInterval(updateYieldTimer, 1000);
  }
  // About Us Page Nav Tabs Handler
  const aboutTabBtns = document.querySelectorAll('.about-tab-btn');
  const aboutTabContents = document.querySelectorAll('.about-tab-content');
  if (aboutTabBtns.length > 0) {
    aboutTabBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const targetTab = btn.getAttribute('data-tab');
        aboutTabBtns.forEach((b) => {
          b.classList.remove('active');
          b.style.background = 'transparent';
          b.style.color = 'var(--muted)';
          b.style.borderColor = 'var(--border)';
        });
        btn.classList.add('active');
        btn.style.background = 'rgba(16, 185, 129, 0.2)';
        btn.style.color = '#34d399';
        btn.style.borderColor = 'rgba(16, 185, 129, 0.4)';

        aboutTabContents.forEach((c) => {
          if (c.id === targetTab) {
            c.style.display = 'block';
            c.classList.add('active');
          } else {
            c.style.display = 'none';
            c.classList.remove('active');
          }
        });
      });
    });
  }

  // About Page Interactive Calculator Form
  const aboutCalcForm = document.getElementById('about-calc-form');
  if (aboutCalcForm) {
    aboutCalcForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const plan = document.getElementById('about-calc-plan')?.value || 'crypto';
      const amount = parseFloat(document.getElementById('about-calc-amount')?.value || '1000');
      const days = parseInt(document.getElementById('about-calc-days')?.value || '30', 10);

      const rates = { crypto: 0.012, stock: 0.018, realestate: 0.025 };
      const dailyRate = rates[plan] || 0.012;

      const dailyYield = amount * dailyRate;
      const totalProfit = dailyYield * days;
      const totalValue = amount + totalProfit;

      const fmtNum = (val) => '$' + val.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

      if (document.getElementById('about-calc-daily')) document.getElementById('about-calc-daily').textContent = fmtNum(dailyYield);
      if (document.getElementById('about-calc-profit')) document.getElementById('about-calc-profit').textContent = fmtNum(totalProfit);
      if (document.getElementById('about-calc-total')) document.getElementById('about-calc-total').textContent = fmtNum(totalValue);
    });
  }

  // Executive Bio Modal Handler
  const execData = {
    'robb-baldwin': {
      name: 'Robb Baldwin',
      role: 'President and Chief Executive Officer',
      img: 'https://bitfurytechlimited.com/assets/file/item01.png',
      bio: 'Robb Baldwin has over 15 years of experience in quantitative finance, algorithmic model development, and institutional asset management. As CEO of Bitfurytech Limited, Robb directs global quantitative strategies, algorithmic risk validation, and corporate governance under SEC & IIROC regulatory guidelines. Prior to Bitfurytech, he served as a senior quantitative analyst and fund manager at leading European investment firms.'
    },
    'rob-dilbone': {
      name: 'Rob Dilbone',
      role: 'Managing Director',
      img: 'https://bitfurytechlimited.com/assets/file/item02.png',
      bio: 'Rob Dilbone brings 12+ years of institutional portfolio execution and client management experience. At Bitfurytech, Rob oversees multi-asset liquidity pools, cross-market execution, and high-net-worth investor relations. His disciplined approach ensures seamless trade execution and daily yield distribution.'
    },
    'cris-frankel': {
      name: 'Cris Frankel',
      role: 'VP of Business Development',
      img: 'https://bitfurytechlimited.com/assets/file/item03.png',
      bio: 'Cris Frankel leads Bitfurytech\'s global partnership expansion, institutional investor onboarding, and strategic corporate alliances across North America, Europe, and Asia. Cris holds a Master\'s degree in International Finance and has facilitated multi-million dollar capital allocations in digital assets and global equities.'
    },
    'scott-victoria': {
      name: 'Scott Victoria',
      role: 'Chief Operating Officer',
      img: 'https://bitfurytechlimited.com/assets/file/item04.jpg',
      bio: 'Scott Victoria manages daily platform operations, infrastructure security, and regulatory compliance at Bitfurytech. With over 14 years of operational engineering experience, Scott maintains multi-signature cold storage protocols, 24/7 automated platform monitoring, and continuous balance reconciliation.'
    }
  };

  // Inject modal into body if not present
  if (!document.getElementById('exec-bio-modal')) {
    const modalHtml = `
      <div class="exec-modal-overlay" id="exec-bio-modal" aria-hidden="true">
        <div class="exec-modal-card">
          <button type="button" class="exec-modal-close" id="exec-modal-close-btn">&times;</button>
          <div class="exec-modal-grid">
            <img src="" alt="Executive Photo" class="exec-modal-img" id="exec-modal-img" />
            <div>
              <div class="exec-modal-header">
                <h3 id="exec-modal-name">Robb Baldwin</h3>
                <div class="role" id="exec-modal-role">President and CEO</div>
              </div>
              <div class="exec-modal-body" id="exec-modal-body">
                Executive biography details...
              </div>
              <div style="margin-top: 1.5rem; padding-top: 1rem; border-top: 1px solid rgba(255,255,255,0.1); display: flex; gap: 0.8rem; align-items: center;">
                <span class="badge badge-accent" style="background: rgba(16, 185, 129, 0.15); color: #34d399;">✓ Verified Board Director</span>
                <span style="font-size: 0.82rem; color: var(--muted);">Bitfurytech Limited Executive Board</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHtml);
  }

  const modalOverlay = document.getElementById('exec-bio-modal');
  const closeBtn = document.getElementById('exec-modal-close-btn');

  const openExecModal = (execKey) => {
    const item = execData[execKey];
    if (!item || !modalOverlay) return;
    const imgEl = document.getElementById('exec-modal-img');
    const nameEl = document.getElementById('exec-modal-name');
    const roleEl = document.getElementById('exec-modal-role');
    const bodyEl = document.getElementById('exec-modal-body');

    if (imgEl) imgEl.src = item.img;
    if (nameEl) nameEl.textContent = item.name;
    if (roleEl) roleEl.textContent = item.role;
    if (bodyEl) bodyEl.textContent = item.bio;

    modalOverlay.classList.add('open');
    modalOverlay.setAttribute('aria-hidden', 'false');
  };

  const closeExecModal = () => {
    if (modalOverlay) {
      modalOverlay.classList.remove('open');
      modalOverlay.setAttribute('aria-hidden', 'true');
    }
  };

  if (closeBtn) closeBtn.addEventListener('click', closeExecModal);
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeExecModal();
    });
  }

  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('[data-exec]');
    if (trigger) {
      const execKey = trigger.getAttribute('data-exec');
      if (execKey && execData[execKey]) {
        e.preventDefault();
        openExecModal(execKey);
      }
    }
  });

  initProfileAvatarControls();

  const profForm = document.getElementById('profile-settings-form');
  if (profForm) {
    profForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const fullName = document.getElementById('prof-fullname')?.value || '';
      const countryCode = document.getElementById('prof-country-code')?.value || '';
      const rawPhone = document.getElementById('prof-phone')?.value?.trim() || '';
      const phone = rawPhone ? `${countryCode} ${rawPhone}`.trim() : '';
      const country = document.getElementById('prof-country')?.value || '';
      const btcWallet = document.getElementById('prof-btc-wallet')?.value || '';
      const usdtWallet = document.getElementById('prof-usdt-wallet')?.value || '';
      const avatar = window.currentSelectedAvatar !== undefined ? window.currentSelectedAvatar : '';

      try {
        const res = await fetch('/api/user/profile', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            ...(getAuthToken() ? { Authorization: `Bearer ${getAuthToken()}` } : {})
          },
          body: JSON.stringify({ fullName, phone, country, btcWallet, usdtWallet, avatar })
        });
        const resData = await res.json();
        if (res.ok && resData.ok) {
          showToast('✅ Profile settings saved to database!', true);
          if (resData.user) {
            const userNameEl = document.querySelector('[data-user-name]');
            if (userNameEl) userNameEl.textContent = resData.user.fullName || 'Investor';
            if (resData.user.avatar !== undefined) {
              window.currentSelectedAvatar = resData.user.avatar;
              updateUserAvatarUI(resData.user.avatar, resData.user.fullName);
            }
          }
        } else {
          showToast(`❌ ${resData.error || 'Failed to save profile.'}`, false);
        }
      } catch (err) {
        showToast('❌ Error saving profile settings.', false);
      }
    });
  }

  const transForm = document.getElementById('transfer-balance-form');
  if (transForm) {
    transForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const amount = parseFloat(document.getElementById('trans-amount')?.value || '0');
      if (amount <= 0) {
        showToast('❌ Please enter a valid transfer amount.', false);
        return;
      }

      try {
        const res = await fetch('/api/user/transfer', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            ...(getAuthToken() ? { Authorization: `Bearer ${getAuthToken()}` } : {})
          },
          body: JSON.stringify({ amount })
        });
        const resData = await res.json();
        if (res.ok && resData.ok) {
          showToast(`✅ ${resData.message}`, true);
          transForm.reset();
          await loadDashboardData();
        } else {
          showToast(`❌ ${resData.error || 'Transfer failed.'}`, false);
        }
      } catch (err) {
        showToast('❌ Error processing internal transfer.', false);
      }
    });
  }

  const pwdForm = document.getElementById('change-password-form');
  if (pwdForm) {
    pwdForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const currentPassword = document.getElementById('pwd-current')?.value;
      const newPassword = document.getElementById('pwd-new')?.value;
      const confirmPassword = document.getElementById('pwd-confirm')?.value;

      if (newPassword !== confirmPassword) {
        showToast('❌ Passwords do not match.', false);
        return;
      }

      try {
        const res = await fetch('/api/user/password', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            ...(getAuthToken() ? { Authorization: `Bearer ${getAuthToken()}` } : {})
          },
          body: JSON.stringify({ currentPassword, newPassword })
        });
        const resData = await res.json();
        if (res.ok && resData.ok) {
          showToast('🔒 Security password updated successfully!', true);
          pwdForm.reset();
        } else {
          showToast(`❌ ${resData.error || 'Failed to update password.'}`, false);
        }
      } catch (err) {
        showToast('❌ Error updating password.', false);
      }
    });
  }

  const ticketForm = document.getElementById('support-ticket-form');
  if (ticketForm) {
    ticketForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const subject = document.getElementById('ticket-subject')?.value?.trim();
      const priority = document.getElementById('ticket-priority')?.value || 'Medium';
      const message = document.getElementById('ticket-message')?.value?.trim();

      if (!subject || !message) {
        showToast('❌ Subject and message are required.', false);
        return;
      }

      try {
        const res = await fetch('/api/support/ticket', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            ...(getAuthToken() ? { Authorization: `Bearer ${getAuthToken()}` } : {})
          },
          body: JSON.stringify({ subject, priority, message })
        });
        const resData = await res.json();
        if (res.ok && resData.ok) {
          showToast(`🎫 ${resData.message}`, true);
          ticketForm.reset();
        } else {
          showToast(`❌ ${resData.error || 'Failed to open ticket.'}`, false);
        }
      } catch (err) {
        showToast('❌ Error opening support ticket.', false);
      }
    });
  }

  const toggle2FABtn = document.getElementById('toggle-2fa-btn');
  if (toggle2FABtn && !toggle2FABtn.dataset.bound) {
    toggle2FABtn.dataset.bound = 'true';
    toggle2FABtn.addEventListener('click', async () => {
      try {
        const res = await fetch('/api/user/2fa', {
          method: 'POST',
          headers: getAuthToken() ? { Authorization: `Bearer ${getAuthToken()}` } : {}
        });
        const resData = await res.json();
        if (res.ok && resData.ok) {
          showToast(`🛡️ ${resData.message}`, true);
          await loadDashboardData();
        } else {
          showToast(`❌ ${resData.error || 'Failed to toggle 2FA.'}`, false);
        }
      } catch (err) {
        showToast('❌ Error toggling 2FA status.', false);
      }
    });
  }

  const copyPromoBtn = document.getElementById('copy-promo-banner-btn');
  if (copyPromoBtn && !copyPromoBtn.dataset.bound) {
    copyPromoBtn.dataset.bound = 'true';
    copyPromoBtn.addEventListener('click', () => {
      const promoText = document.getElementById('promo-banner-code');
      if (promoText) {
        promoText.select();
        navigator.clipboard.writeText(promoText.value).then(() => {
          showToast('📋 Banner HTML embed code copied to clipboard!', true);
        }).catch(() => {
          showToast('📋 Embed code copied.', true);
        });
      }
    });
  }

  // Invest Modal Setup
  const investModal = document.getElementById('invest-modal');
  const closeInvestModal = () => {
    if (investModal) investModal.classList.remove('active');
  };

  if (document.getElementById('close-invest-modal')) {
    document.getElementById('close-invest-modal').addEventListener('click', closeInvestModal);
  }
  if (document.getElementById('cancel-invest-modal')) {
    document.getElementById('cancel-invest-modal').addEventListener('click', closeInvestModal);
  }

  // Helper to open invest modal for a plan
  window.openInvestModalForPlan = function(planId, planName, rate, min, max, initialAmount) {
    const investModal = document.getElementById('invest-modal');
    if (!investModal) return;

    const planIdEl = document.getElementById('modal-plan-id');
    const planRateRawEl = document.getElementById('modal-plan-raw-rate');
    const planMinRawEl = document.getElementById('modal-plan-raw-min');
    const planMaxRawEl = document.getElementById('modal-plan-raw-max');
    const planTitleEl = document.getElementById('modal-plan-title');
    const planCatEl = document.getElementById('modal-plan-cat');
    const planRateEl = document.getElementById('modal-plan-rate');
    const planMonthlyPctEl = document.getElementById('modal-plan-monthly-pct');
    const investAmtInput = document.getElementById('invest-amount-input');
    const modalLimitTxt = document.getElementById('modal-limit-text');
    const walletSelect = document.getElementById('invest-wallet-source');
    const availBalEl = document.getElementById('modal-selected-wallet-bal');
    const valBox = document.getElementById('modal-amount-validation-box');

    const cleanPlanId = planId || 'beginners';
    const cleanRate = parseFloat(rate || 1.00);
    const cleanMin = parseFloat(min || 100);
    const cleanMax = parseFloat(max || 1000000);

    if (planIdEl) planIdEl.value = cleanPlanId;
    if (planRateRawEl) planRateRawEl.value = cleanRate;
    if (planMinRawEl) planMinRawEl.value = cleanMin;
    if (planMaxRawEl) planMaxRawEl.value = cleanMax;

    if (planTitleEl) planTitleEl.textContent = planName || 'Investment Plan';
    if (planRateEl) planRateEl.textContent = `${cleanRate.toFixed(2)}% / Daily`;
    if (planMonthlyPctEl) planMonthlyPctEl.textContent = `${(cleanRate * 30).toFixed(1)}% Monthly Yield`;

    // Try finding corporate segment details
    const corpInfo = window.CORPORATE_INCOME_DATA?.[cleanPlanId];
    if (planCatEl) {
      planCatEl.textContent = corpInfo?.segment || 'Institutional Yield Strategy';
    }

    if (modalLimitTxt) {
      modalLimitTxt.textContent = `Limits: $${cleanMin.toLocaleString()} - $${cleanMax.toLocaleString()}`;
    }

    // Update wallet option labels with live user balances
    const getLiveBalances = () => {
      const dash = window.currentDashboardData || {};
      const user = dash.user || {};
      const storedUser = (() => {
        try { return JSON.parse(localStorage.getItem('bitfury_user') || '{}'); } catch(e) { return {}; }
      })();

      const parseBal = (val) => {
        if (typeof val === 'number') return isNaN(val) ? 0 : val;
        if (typeof val === 'string') {
          const num = parseFloat(val.replace(/[^0-9.-]+/g, ''));
          return isNaN(num) ? 0 : num;
        }
        return 0;
      };

      const dep = parseBal(dash.depositBalanceRaw) || parseBal(dash.depositWallet) || parseBal(dash.balance) || parseBal(user.depositBalance) || parseBal(user.deposit_balance) || parseBal(user.depositWallet) || parseBal(storedUser.depositBalance) || parseBal(storedUser.deposit_balance) || 0;
      const int = parseBal(dash.interestBalanceRaw) || parseBal(dash.interestWallet) || parseBal(user.interestBalance) || parseBal(user.interest_balance) || parseBal(user.interestWallet) || parseBal(storedUser.interestBalance) || parseBal(storedUser.interest_balance) || 0;

      return { depBal: dep, intBal: int };
    };

    const refreshBalancesUI = () => {
      const { depBal, intBal } = getLiveBalances();
      const depOpt = document.getElementById('modal-dep-opt');
      const intOpt = document.getElementById('modal-int-opt');
      if (depOpt) depOpt.textContent = `Deposit Wallet ($${depBal.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })})`;
      if (intOpt) intOpt.textContent = `Interest Wallet ($${intBal.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })})`;
      updateModalCalc();
    };

    const getSelectedWalletBalance = () => {
      const { depBal, intBal } = getLiveBalances();
      const src = walletSelect ? walletSelect.value : 'deposit';
      return src === 'interest' ? intBal : depBal;
    };

    const getSelectedWalletName = () => {
      const src = walletSelect ? walletSelect.value : 'deposit';
      return src === 'interest' ? 'Interest Wallet' : 'Deposit Wallet';
    };

    const updateWalletAvailabilityDisplay = () => {
      const bal = getSelectedWalletBalance();
      if (availBalEl) {
        availBalEl.textContent = `Available: $${bal.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
      }
    };

    const updateModalCalc = () => {
      const amt = parseFloat(investAmtInput ? investAmtInput.value : 0) || 0;
      const dailyProfit = amt * (cleanRate / 100);
      const weeklyProfit = dailyProfit * 7;
      const monthlyProfit = dailyProfit * 30;
      const grandTotal = amt + monthlyProfit;

      const dailyCalcEl = document.getElementById('modal-daily-return-calc');
      const weeklyCalcEl = document.getElementById('modal-weekly-return-calc');
      const monthlyCalcEl = document.getElementById('modal-monthly-return-calc');
      const grandCalcEl = document.getElementById('modal-grand-total-calc');

      if (dailyCalcEl) dailyCalcEl.textContent = `+$${dailyProfit.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
      if (weeklyCalcEl) weeklyCalcEl.textContent = `+$${weeklyProfit.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
      if (monthlyCalcEl) monthlyCalcEl.textContent = `+$${monthlyProfit.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
      if (grandCalcEl) grandCalcEl.textContent = `$${grandTotal.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

      updateWalletAvailabilityDisplay();

      // Real-time validation feedback
      if (valBox) {
        const bal = getSelectedWalletBalance();
        const wName = getSelectedWalletName();

        if (amt === 0 || isNaN(amt)) {
          valBox.style.display = 'none';
          valBox.innerHTML = '';
        } else if (amt < cleanMin) {
          valBox.style.display = 'block';
          valBox.style.color = '#f59e0b';
          valBox.innerHTML = `⚠️ Below minimum limit ($${cleanMin.toLocaleString()} minimum required for ${planName || 'this plan'}).`;
        } else if (amt > cleanMax) {
          valBox.style.display = 'block';
          valBox.style.color = '#ef4444';
          valBox.innerHTML = `❌ Exceeds maximum limit ($${cleanMax.toLocaleString()} maximum allowed).`;
        } else if (amt > bal) {
          valBox.style.display = 'block';
          valBox.style.color = '#f87171';
          const needed = (amt - bal).toFixed(2);
          valBox.innerHTML = `
            <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.4rem; background: rgba(239, 68, 68, 0.12); padding: 0.4rem 0.6rem; border-radius: 6px; border: 1px solid rgba(239, 68, 68, 0.3);">
              <span>⚠️ Insufficient ${wName} balance ($${bal.toFixed(2)} available. Need $${needed} more).</span>
              <button type="button" id="modal-quick-deposit-btn" class="btn btn-primary btn-xs" style="padding: 0.2rem 0.6rem; font-size: 0.72rem; font-weight: 700; white-space: nowrap;">
                + Fund Wallet Now
              </button>
            </div>
          `;
          const quickDepBtn = document.getElementById('modal-quick-deposit-btn');
          if (quickDepBtn) {
            quickDepBtn.onclick = () => {
              closeInvestModal();
              const depTab = document.querySelector('[data-tab="deposit"], [data-switch-tab="deposit"]');
              if (depTab) depTab.click();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            };
          }
        } else {
          valBox.style.display = 'block';
          valBox.style.color = '#34d399';
          valBox.innerHTML = `✓ Ready to activate with $${amt.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} from ${wName}.`;
        }
      }
    };

    if (investAmtInput) {
      const defaultVal = initialAmount || cleanMin || 100;
      investAmtInput.value = defaultVal;
      investAmtInput.min = cleanMin;
      investAmtInput.max = cleanMax;
      investAmtInput.oninput = updateModalCalc;
      investAmtInput.onkeyup = updateModalCalc;
      investAmtInput.onchange = updateModalCalc;
    }

    if (walletSelect) {
      walletSelect.onchange = updateModalCalc;
    }

    // Setup Quick Preset buttons
    const presetBtns = investModal.querySelectorAll('.btn-preset');
    presetBtns.forEach((pBtn) => {
      pBtn.onclick = (e) => {
        e.preventDefault();
        const presetType = pBtn.getAttribute('data-preset');
        let currentAmt = parseFloat(investAmtInput?.value || 0) || 0;
        const curBal = getSelectedWalletBalance();

        if (presetType === 'min') {
          currentAmt = cleanMin;
        } else if (presetType === 'add250') {
          currentAmt = currentAmt + 250;
        } else if (presetType === 'add500') {
          currentAmt = currentAmt + 500;
        } else if (presetType === 'add1000') {
          currentAmt = currentAmt + 1000;
        } else if (presetType === 'maxbal') {
          currentAmt = curBal > 0 ? Math.min(curBal, cleanMax) : cleanMin;
        }

        if (investAmtInput) {
          investAmtInput.value = currentAmt;
          investAmtInput.dispatchEvent(new Event('input'));
        }
      };
    });

    refreshBalancesUI();
    investModal.classList.add('active');

    // Asynchronously refresh balances from server to ensure 100% live state
    if (getAuthToken()) {
      fetch('/api/dashboard', {
        headers: { Authorization: `Bearer ${getAuthToken()}` }
      })
        .then((r) => r.json())
        .then((d) => {
          if (d && (d.user || d.balance || d.depositWallet)) {
            window.currentDashboardData = d;
            refreshBalancesUI();
          }
        })
        .catch(() => {});
    }
  };

  // Delegated click handler for Open Invest Modal buttons
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.open-invest-modal');
    if (btn) {
      e.preventDefault();
      const planId = btn.getAttribute('data-plan-id') || 'beginners';
      const planName = btn.getAttribute('data-plan-name') || 'Investment Plan';
      const rate = parseFloat(btn.getAttribute('data-plan-rate') || '1.00');
      const min = parseFloat(btn.getAttribute('data-plan-min') || '100');
      const max = parseFloat(btn.getAttribute('data-plan-max') || '1000000');
      window.openInvestModalForPlan(planId, planName, rate, min, max);
    }
  });

  // Confirm Investment Submission
  const investForm = document.getElementById('invest-action-form');
  if (investForm) {
    investForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const confirmBtn = document.getElementById('confirm-invest-btn');
      const planId = document.getElementById('modal-plan-id').value;
      const walletSource = document.getElementById('invest-wallet-source').value;
      const amount = parseFloat(document.getElementById('invest-amount-input').value);

      if (!planId || isNaN(amount) || amount <= 0) {
        showToast('❌ Please enter a valid investment amount.', false);
        return;
      }

      const origText = confirmBtn ? confirmBtn.innerHTML : 'Confirm & Activate Plan';
      if (confirmBtn) {
        confirmBtn.disabled = true;
        confirmBtn.innerHTML = '⏳ Activating Plan...';
      }

      try {
        const res = await fetch('/api/investments', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            ...(getAuthToken() ? { Authorization: `Bearer ${getAuthToken()}` } : {}),
          },
          body: JSON.stringify({ planId, amount, walletSource, walletType: walletSource }),
        });
        const data = await res.json();

        if (res.ok && (data.ok || data.success)) {
          showToast(`🚀 ${data.message || 'Investment plan activated successfully!'}`, true);
          closeInvestModal();
          await loadDashboardData();
          const activeInvestTab = document.querySelector('[data-tab="active-investments"]');
          if (activeInvestTab) activeInvestTab.click();
          
          // Auto-open Investment Agreement for newly activated plan
          if (window.currentActiveInvestments && window.currentActiveInvestments.length > 0) {
            window.openAgreementModal(0);
          }
        } else {
          showToast(`❌ ${data.error || 'Failed to activate investment.'}`, false);
        }
      } catch (err) {
        console.error('Error activating investment:', err);
        showToast('❌ Investment submission error. Please try again.', false);
      } finally {
        if (confirmBtn) {
          confirmBtn.disabled = false;
          confirmBtn.innerHTML = origText;
        }
      }
    });
  }

  // --- PDF Investment Agreement & Account Statement Handlers ---
  window.openAgreementModal = function(invIdx, customData) {
    let inv = null;
    const list = window.currentActiveInvestments || [];

    if (typeof invIdx === 'object' && invIdx !== null) {
      inv = invIdx;
    } else if (typeof invIdx === 'number' && !isNaN(invIdx) && list[invIdx]) {
      inv = list[invIdx];
    } else if (customData) {
      inv = customData;
    } else if (list.length > 0) {
      inv = list[0];
    } else {
      const planTitle = document.getElementById('modal-plan-title')?.textContent || 'Beginners Plan';
      const amtVal = parseFloat(document.getElementById('invest-amount-input')?.value || 1000) || 1000;
      const rateVal = parseFloat(document.getElementById('modal-plan-raw-rate')?.value || 1.0) || 1.0;
      inv = {
        id: Math.floor(100000 + Math.random() * 900000),
        planName: planTitle,
        plan_name: planTitle,
        amount: amtVal,
        dailyRate: rateVal,
        daily_rate: rateVal,
        createdAt: new Date().toISOString()
      };
    }

    const userData = window.currentDashboardData?.user || {};
    const uName = userData.fullName || userData.email || 'Investor';
    const uEmail = userData.email || 'investor@example.com';
    const uId = 'USR-' + (userData.id || '10001');

    const fmtNum = (val) => '$' + (parseFloat(val) || 0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    const startDate = new Date(inv.createdAt || inv.created_at || Date.now()).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    const dailyRate = parseFloat(inv.dailyRate || inv.daily_rate || 1.0);
    const amount = parseFloat(inv.amount || 0);
    const dailyProfit = amount * (dailyRate / 100);
    const refCode = 'BF-AGR-' + (inv.id || Math.floor(100000 + Math.random() * 900000));

    if (document.getElementById('agr-doc-ref')) document.getElementById('agr-doc-ref').textContent = refCode;
    if (document.getElementById('agr-doc-date')) document.getElementById('agr-doc-date').textContent = startDate;
    if (document.getElementById('agr-user-name')) document.getElementById('agr-user-name').textContent = uName;
    if (document.getElementById('agr-user-email')) document.getElementById('agr-user-email').textContent = uEmail;
    if (document.getElementById('agr-user-id')) document.getElementById('agr-user-id').textContent = uId;
    if (document.getElementById('agr-user-sig-name')) document.getElementById('agr-user-sig-name').textContent = uName;

    if (document.getElementById('agr-plan-name')) document.getElementById('agr-plan-name').textContent = inv.planName || inv.plan_name || 'Investment Plan';
    if (document.getElementById('agr-plan-amount')) document.getElementById('agr-plan-amount').textContent = `${fmtNum(amount)} USD`;
    if (document.getElementById('agr-plan-rate')) document.getElementById('agr-plan-rate').textContent = `${dailyRate.toFixed(2)}% Fixed Daily Yield`;
    if (document.getElementById('agr-daily-profit')) document.getElementById('agr-daily-profit').textContent = `${fmtNum(dailyProfit)} USD / Day`;
    if (document.getElementById('agr-start-date')) document.getElementById('agr-start-date').textContent = startDate;

    const modal = document.getElementById('agreement-modal');
    if (modal) modal.classList.add('active');
  };

  const closeAgreementModal = () => {
    const modal = document.getElementById('agreement-modal');
    if (modal) modal.classList.remove('active');
  };

  if (document.getElementById('close-agreement-modal')) document.getElementById('close-agreement-modal').addEventListener('click', closeAgreementModal);
  if (document.getElementById('close-agreement-btn')) document.getElementById('close-agreement-btn').addEventListener('click', closeAgreementModal);

  // Hook up Preview Agreement Button in Invest Modal
  const previewAgrBtn = document.getElementById('modal-preview-agreement-btn');
  if (previewAgrBtn) {
    previewAgrBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const planTitle = document.getElementById('modal-plan-title')?.textContent || 'Beginners Plan';
      const amtVal = parseFloat(document.getElementById('invest-amount-input')?.value || 100) || 100;
      const rateVal = parseFloat(document.getElementById('modal-plan-raw-rate')?.value || 1.0) || 1.0;
      window.openAgreementModal(null, {
        id: Math.floor(100000 + Math.random() * 900000),
        planName: planTitle,
        plan_name: planTitle,
        amount: amtVal,
        dailyRate: rateVal,
        daily_rate: rateVal,
        createdAt: new Date().toISOString()
      });
    });
  }

  // Print Agreement Trigger
  const printAgrBtn = document.getElementById('print-agreement-trigger');
  if (printAgrBtn) {
    printAgrBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.print();
    });
  }

  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.open-agreement-modal-btn');
    if (btn) {
      e.preventDefault();
      const idx = parseInt(btn.getAttribute('data-inv-idx'), 10);
      if (!isNaN(idx)) {
        window.openAgreementModal(idx);
      } else {
        window.openAgreementModal(0);
      }
    }
  });

  // Statement Modal Handler
  window.openStatementModal = function() {
    const dashData = window.currentDashboardData || {};
    const userData = dashData.user || {};
    const uName = userData.fullName || userData.email || 'Investor';
    const uEmail = userData.email || 'investor@example.com';
    const uId = 'USR-' + (userData.id || '10001');

    const fmtNum = (val) => '$' + (parseFloat(val) || 0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    const todayStr = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    const refCode = 'BF-STMT-' + Math.floor(100000 + Math.random() * 900000);

    const depBal = parseFloat(dashData.depositWallet || 0);
    const intBal = parseFloat(dashData.interestWallet || 0);
    const activeInv = parseFloat(dashData.totalInvest || 0);
    const totalVal = depBal + intBal + activeInv;

    if (document.getElementById('stmt-doc-ref')) document.getElementById('stmt-doc-ref').textContent = refCode;
    if (document.getElementById('stmt-doc-date')) document.getElementById('stmt-doc-date').textContent = todayStr;
    if (document.getElementById('stmt-user-name')) document.getElementById('stmt-user-name').textContent = uName;
    if (document.getElementById('stmt-user-email')) document.getElementById('stmt-user-email').textContent = uEmail;
    if (document.getElementById('stmt-user-id')) document.getElementById('stmt-user-id').textContent = uId;

    if (document.getElementById('stmt-total-val')) document.getElementById('stmt-total-val').textContent = fmtNum(totalVal);
    if (document.getElementById('stmt-active-invest')) document.getElementById('stmt-active-invest').textContent = fmtNum(activeInv);
    if (document.getElementById('stmt-dep-bal')) document.getElementById('stmt-dep-bal').textContent = fmtNum(depBal);
    if (document.getElementById('stmt-int-bal')) document.getElementById('stmt-int-bal').textContent = fmtNum(intBal);

    // Render active investments into statement table
    const invList = window.currentActiveInvestments || [];
    const stmtInvTbody = document.querySelector('#stmt-investments-table tbody');
    if (stmtInvTbody) {
      if (!invList || invList.length === 0) {
        stmtInvTbody.innerHTML = `<tr><td colspan="6" style="padding: 0.6rem; text-align: center; color: #64748b;">No active investment contracts on record.</td></tr>`;
      } else {
        stmtInvTbody.innerHTML = invList.map((inv) => `
          <tr style="border-bottom: 1px solid #e2e8f0;">
            <td style="padding: 0.45rem 0.65rem; font-weight: 700;">${inv.planName || inv.plan_name}</td>
            <td style="padding: 0.45rem 0.65rem; font-weight: 700; color: #0f172a;">${fmtNum(inv.amount)}</td>
            <td style="padding: 0.45rem 0.65rem; color: #0284c7; font-weight: 700;">${parseFloat(inv.dailyRate || inv.daily_rate).toFixed(2)}%</td>
            <td style="padding: 0.45rem 0.65rem; color: #16a34a; font-weight: 700;">${fmtNum(inv.accruedProfit || inv.accrued_profit)}</td>
            <td style="padding: 0.45rem 0.65rem;">${new Date(inv.createdAt || inv.created_at || Date.now()).toLocaleDateString()}</td>
            <td style="padding: 0.45rem 0.65rem;"><span style="background: #dcfce7; color: #15803d; padding: 0.15rem 0.4rem; border-radius: 4px; font-weight: 700; font-size: 0.72rem;">RUNNING</span></td>
          </tr>
        `).join('');
      }
    }

    // Render transactions into statement table
    const trxList = window.currentDashboardTransactions || [];
    const stmtTrxTbody = document.querySelector('#stmt-transactions-table tbody');
    if (stmtTrxTbody) {
      if (!trxList || trxList.length === 0) {
        stmtTrxTbody.innerHTML = `<tr><td colspan="7" style="padding: 0.6rem; text-align: center; color: #64748b;">No transaction ledger entries found.</td></tr>`;
      } else {
        stmtTrxTbody.innerHTML = trxList.map((trx) => {
          const amt = parseFloat(trx.amount || 0);
          const amtStr = (amt >= 0 ? '+' : '') + fmtNum(amt);
          const status = (trx.status || 'completed').toUpperCase();
          let badgeBg = '#dcfce7';
          let badgeColor = '#15803d';
          if (status === 'PENDING') { badgeBg = '#fef9c3'; badgeColor = '#854d0e'; }
          if (status === 'FAILED' || status === 'REJECTED') { badgeBg = '#fee2e2'; badgeColor = '#991b1b'; }

          return `
            <tr style="border-bottom: 1px solid #e2e8f0;">
              <td style="padding: 0.45rem 0.6rem;">${new Date(trx.createdAt || trx.created_at || Date.now()).toLocaleDateString()}</td>
              <td style="padding: 0.45rem 0.6rem; font-family: monospace;"><code>${trx.trxId || trx.id}</code></td>
              <td style="padding: 0.45rem 0.6rem;">${trx.details || 'Transaction'}</td>
              <td style="padding: 0.45rem 0.6rem; text-transform: capitalize;">${trx.wallet || trx.walletType || 'Wallet'}</td>
              <td style="padding: 0.45rem 0.6rem; font-weight: 700; ${amt >= 0 ? 'color: #16a34a;' : 'color: #dc2626;'}">${amtStr}</td>
              <td style="padding: 0.45rem 0.6rem;"><span style="background: ${badgeBg}; color: ${badgeColor}; padding: 0.12rem 0.4rem; border-radius: 4px; font-size: 0.68rem; font-weight: 700;">${status}</span></td>
              <td style="padding: 0.45rem 0.6rem; font-weight: 700;">${fmtNum(trx.postBalance || trx.post_balance)}</td>
            </tr>
          `;
        }).join('');
      }
    }

    const modal = document.getElementById('statement-modal');
    if (modal) modal.classList.add('active');
  };

  const closeStatementModal = () => {
    const modal = document.getElementById('statement-modal');
    if (modal) modal.classList.remove('active');
  };

  if (document.getElementById('close-statement-modal')) document.getElementById('close-statement-modal').addEventListener('click', closeStatementModal);
  if (document.getElementById('close-statement-btn')) document.getElementById('close-statement-btn').addEventListener('click', closeStatementModal);

  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.download-statement-btn');
    if (btn) {
      e.preventDefault();
      window.openStatementModal();
    }
  });

  // Print triggers
  if (document.getElementById('print-agreement-trigger')) {
    document.getElementById('print-agreement-trigger').addEventListener('click', () => {
      window.print();
    });
  }
  if (document.getElementById('print-statement-trigger')) {
    document.getElementById('print-statement-trigger').addEventListener('click', () => {
      window.print();
    });
  }

  // CSV Exporter Helper
  window.downloadCSVFile = function(filename, csvContent) {
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', filename);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (document.getElementById('export-statement-csv-btn')) {
    document.getElementById('export-statement-csv-btn').addEventListener('click', () => {
      const trxList = window.currentDashboardTransactions || [];
      let csv = 'Date,Reference ID,Details,Wallet,Amount,Status,Post Balance\n';
      trxList.forEach(t => {
        const date = new Date(t.createdAt || t.created_at || Date.now()).toLocaleDateString();
        const ref = t.trxId || t.id || '';
        const details = (t.details || '').replace(/,/g, ' ');
        const wallet = t.wallet || t.walletType || '';
        const amt = t.amount || 0;
        const status = t.status || '';
        const post = t.postBalance || t.post_balance || 0;
        csv += `"${date}","${ref}","${details}","${wallet}","${amt}","${status}","${post}"\n`;
      });
      window.downloadCSVFile(`Account_Statement_${Date.now()}.csv`, csv);
    });
  }

  // Profit Calculator Logic
  const calcPlanSelect = document.getElementById('calc-plan-select');
  const calcAmountInput = document.getElementById('calc-amount-input');
  const calcDaysInput = document.getElementById('calc-days-input');

  const updateCalculator = () => {
    if (!calcPlanSelect || !calcAmountInput || !calcDaysInput) return;
    const selectedOption = calcPlanSelect.options[calcPlanSelect.selectedIndex];
    const rate = parseFloat(selectedOption.getAttribute('data-rate') || '1.08');
    const min = parseFloat(selectedOption.getAttribute('data-min') || '1000');
    const max = parseFloat(selectedOption.getAttribute('data-max') || '19999');

    if (document.getElementById('calc-limit-hint')) {
      document.getElementById('calc-limit-hint').textContent = `Limits: $${min.toLocaleString()} - $${max.toLocaleString()}`;
    }

    const amt = parseFloat(calcAmountInput.value) || 0;
    const days = parseInt(calcDaysInput.value) || 1;

    const dailyReturn = amt * (rate / 100);
    const totalReturn = dailyReturn * days;
    const grandTotal = amt + totalReturn;

    if (document.getElementById('calc-daily-profit')) document.getElementById('calc-daily-profit').textContent = `$${dailyReturn.toFixed(2)}`;
    if (document.getElementById('calc-total-return')) document.getElementById('calc-total-return').textContent = `$${totalReturn.toFixed(2)}`;
    if (document.getElementById('calc-grand-total')) document.getElementById('calc-grand-total').textContent = `$${grandTotal.toFixed(2)}`;
  };

  if (calcPlanSelect) calcPlanSelect.addEventListener('change', updateCalculator);
  if (calcAmountInput) calcAmountInput.addEventListener('input', updateCalculator);
  if (calcDaysInput) calcDaysInput.addEventListener('input', updateCalculator);
  updateCalculator();

  if (document.getElementById('calc-invest-now-btn')) {
    document.getElementById('calc-invest-now-btn').addEventListener('click', () => {
      let planId = 'beginners';
      let planName = 'Beginners Plan';
      let rate = 1.00;
      let min = 100;
      let max = 4999;
      let amt = parseFloat(calcAmountInput?.value || '1000') || 1000;

      if (calcPlanSelect && calcPlanSelect.selectedIndex >= 0) {
        const opt = calcPlanSelect.options[calcPlanSelect.selectedIndex];
        planId = opt.value || 'beginners';
        planName = opt.getAttribute('data-plan-name') || opt.text || 'Investment Plan';
        rate = parseFloat(opt.getAttribute('data-rate') || '1.00');
        min = parseFloat(opt.getAttribute('data-min') || '100');
        max = parseFloat(opt.getAttribute('data-max') || '4999');
      }

      switchTab('plans');
      if (window.openInvestModalForPlan) {
        window.openInvestModalForPlan(planId, planName, rate, min, max, amt);
      }
    });
  }

  // --- Real Currency Converter Logic ---
  let currentDashboardBalanceUsd = 10.0;

  async function fetchLiveRates() {
    const statusBadge = document.getElementById('fx-status-badge');
    try {
      const res = await fetch('https://open.er-api.com/v6/latest/USD');
      if (res.ok) {
        const data = await res.json();
        if (data && data.rates) {
          if (data.rates.EUR) fxRates.EUR = data.rates.EUR;
          if (data.rates.GBP) fxRates.GBP = data.rates.GBP;
          if (data.rates.CAD) fxRates.CAD = data.rates.CAD;
          if (data.rates.AUD) fxRates.AUD = data.rates.AUD;
          if (data.rates.JPY) fxRates.JPY = data.rates.JPY;
          if (data.rates.NGN) fxRates.NGN = data.rates.NGN;
          if (data.rates.INR) fxRates.INR = data.rates.INR;
          if (data.rates.ZAR) fxRates.ZAR = data.rates.ZAR;
          if (data.rates.AED) fxRates.AED = data.rates.AED;
        }
      }
      const cryptoRes = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,tether,solana&vs_currencies=usd');
      if (cryptoRes.ok) {
        const cData = await cryptoRes.json();
        if (cData.bitcoin?.usd) fxRates.BTC = 1 / cData.bitcoin.usd;
        if (cData.ethereum?.usd) fxRates.ETH = 1 / cData.ethereum.usd;
        if (cData.solana?.usd) fxRates.SOL = 1 / cData.solana.usd;
        if (cData.tether?.usd) fxRates.USDT = 1 / cData.tether.usd;
      }
      if (statusBadge) {
        statusBadge.textContent = 'Live Market Rates Active';
        statusBadge.style.background = 'rgba(16, 185, 129, 0.25)';
        statusBadge.style.color = '#34d399';
      }
    } catch (e) {
      if (statusBadge) {
        statusBadge.textContent = 'Offline Market Fallback Rates';
      }
    }
    calculateConversion();
    updateFxValuations(currentDashboardBalanceUsd);
  }

  function calculateConversion() {
    const amountInput = document.getElementById('fx-amount-input');
    const fromSelect = document.getElementById('fx-from-select');
    const toSelect = document.getElementById('fx-to-select');
    const convertedEl = document.getElementById('fx-converted-amount');
    const unitRateEl = document.getElementById('fx-unit-rate');

    if (!amountInput || !fromSelect || !toSelect || !convertedEl) return;

    const amount = parseFloat(amountInput.value) || 0;
    const fromCurr = fromSelect.value;
    const toCurr = toSelect.value;

    const rateFrom = fxRates[fromCurr] || 1.0;
    const rateTo = fxRates[toCurr] || 1.0;

    const amountUsd = amount / rateFrom;
    const converted = amountUsd * rateTo;

    const symbol = currSymbols[toCurr] || '';
    let formatted = '';

    if (['BTC', 'ETH', 'SOL'].includes(toCurr)) {
      formatted = `${converted.toFixed(5)} ${symbol} ${toCurr}`;
    } else if (['JPY', 'NGN'].includes(toCurr)) {
      formatted = `${symbol}${converted.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ${toCurr}`;
    } else {
      formatted = `${symbol}${converted.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ${toCurr}`;
    }

    convertedEl.textContent = formatted;

    if (unitRateEl) {
      const unitRate = (1 / rateFrom) * rateTo;
      let unitFormatted = unitRate < 0.001 ? unitRate.toFixed(6) : unitRate.toFixed(4);
      unitRateEl.textContent = `1 ${fromCurr} = ${unitFormatted} ${toCurr}`;
    }
  }

  function updateFxValuations(usdBalance) {
    if (typeof usdBalance === 'number' && !isNaN(usdBalance)) {
      currentDashboardBalanceUsd = usdBalance;
    }
    const balUsdEl = document.querySelectorAll('[data-user-balance-usd]');
    balUsdEl.forEach(el => el.textContent = currentDashboardBalanceUsd.toFixed(2));

    const setVal = (id, curr, decimals = 2) => {
      const el = document.getElementById(id);
      if (!el) return;
      const rate = fxRates[curr] || 1.0;
      const val = currentDashboardBalanceUsd * rate;
      const sym = currSymbols[curr] || '';
      if (['BTC', 'ETH', 'SOL'].includes(curr)) {
        el.textContent = `${val.toFixed(5)} ${sym}`;
      } else {
        el.textContent = `${sym}${val.toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}`;
      }
    };

    setVal('fx-bal-usd', 'USD', 2);
    setVal('fx-bal-eur', 'EUR', 2);
    setVal('fx-bal-gbp', 'GBP', 2);
    setVal('fx-bal-cad', 'CAD', 2);
    setVal('fx-bal-btc', 'BTC', 5);
    setVal('fx-bal-eth', 'ETH', 4);
    setVal('fx-bal-usdt', 'USDT', 2);
    setVal('fx-bal-ngn', 'NGN', 2);
  }

  window.updateFxValuations = updateFxValuations;

  const fxForm = document.getElementById('dash-fx-converter-form');
  const fxAmtInput = document.getElementById('fx-amount-input');
  const fxFromSel = document.getElementById('fx-from-select');
  const fxToSel = document.getElementById('fx-to-select');
  const fxSwapBtn = document.getElementById('fx-swap-btn');
  const fxApplyDepBtn = document.getElementById('fx-apply-to-deposit-btn');

  if (fxAmtInput) fxAmtInput.addEventListener('input', calculateConversion);
  if (fxFromSel) fxFromSel.addEventListener('change', calculateConversion);
  if (fxToSel) fxToSel.addEventListener('change', calculateConversion);
  if (fxSwapBtn) {
    fxSwapBtn.addEventListener('click', () => {
      if (fxFromSel && fxToSel) {
        const temp = fxFromSel.value;
        fxFromSel.value = fxToSel.value;
        fxToSel.value = temp;
        calculateConversion();
      }
    });
  }
  if (fxForm) {
    fxForm.addEventListener('submit', (e) => {
      e.preventDefault();
      fetchLiveRates();
      showToast('🔄 Live exchange rates synchronized!', true);
    });
  }
  if (fxApplyDepBtn) {
    fxApplyDepBtn.addEventListener('click', () => {
      const amtInput = document.getElementById('fx-amount-input');
      const fromSel = document.getElementById('fx-from-select');
      const val = parseFloat(amtInput?.value || '0');
      const fromCurr = fromSel?.value || 'USD';
      const rateFrom = fxRates[fromCurr] || 1.0;
      const usdVal = val / rateFrom;

      const depInput = document.getElementById('deposit-amount');
      if (depInput) {
        depInput.value = usdVal.toFixed(2);
      }
      switchTab('deposit');
      showToast(`💰 $${usdVal.toFixed(2)} USD prefilled into Deposit Wallet!`, true);
    });
  }

  // Initial rate fetch
  fetchLiveRates();

  // Withdrawal Form Handler
  const withdrawForm = document.getElementById('withdraw-form');
  if (withdrawForm) {
    withdrawForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const walletSource = document.getElementById('withdraw-wallet-type')?.value || 'interest';
      const amount = parseFloat(document.getElementById('withdraw-amount')?.value || '0');
      const methodSelect = document.getElementById('withdraw-method');
      const method = methodSelect ? methodSelect.value : '';
      const selectedOption = methodSelect ? methodSelect.options[methodSelect.selectedIndex] : null;
      const coinSymbol = selectedOption ? (selectedOption.getAttribute('data-symbol') || '₮') : '₮';
      const details = document.getElementById('withdraw-details')?.value?.trim() || '';

      if (!amount || amount < 10) {
        showToast('⚠️ Minimum withdrawal amount is $10.00 USD.', false);
        return;
      }

      if (!details) {
        showToast('⚠️ Destination recipient crypto wallet address is required.', false);
        return;
      }

      try {
        const res = await fetch('/api/withdrawals', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            ...(getAuthToken() ? { Authorization: `Bearer ${getAuthToken()}` } : {}),
          },
          body: JSON.stringify({ amount, walletSource, walletType: walletSource, method, coinSymbol, details }),
        });
        const data = await res.json();

        if (res.ok && (data.ok || data.success)) {
          showToast(`💸 Cryptocurrency withdrawal request of $${amount.toFixed(2)} USD (${method}) submitted successfully!`, true);
          withdrawForm.reset();
          loadDashboardData();
        } else {
          showToast(`❌ ${data.error || 'Withdrawal request failed.'}`, false);
        }
      } catch (err) {
        showToast('❌ Withdrawal request error. Please try again.', false);
      }
    });
  }

  // Copy Referral Link Handler
  const copyRefBtn = document.getElementById('copy-ref-link');
  if (copyRefBtn) {
    copyRefBtn.addEventListener('click', () => {
      const refInput = document.getElementById('ref-link-input');
      if (refInput) {
        refInput.select();
        navigator.clipboard.writeText(refInput.value);
        showToast('📋 Referral link copied to clipboard!', true);
      }
    });
  }

  // Admin Controls Event Bindings
  const adminProfitBtns = document.querySelectorAll('#admin-trigger-profit-btn, #admin-trigger-profit-btn-cap');
  adminProfitBtns.forEach((btn) => {
    btn.addEventListener('click', async () => {
      try {
        const res = await fetch('/api/admin/trigger-profit', {
          method: 'POST',
          headers: getAuthToken() ? { Authorization: `Bearer ${getAuthToken()}` } : {}
        });
        const data = await res.json();
        if (res.ok && data.ok) {
          showToast(`⚡ ${data.message}`, true);
          await loadAdminData();
          if (window.location.pathname.includes('dashboard.html')) {
            await loadDashboardData();
          }
        } else {
          showToast(`❌ ${data.error || 'Failed to trigger profit yields.'}`, false);
        }
      } catch (err) {
        showToast('❌ Error triggering profit yields.', false);
      }
    });
  });

  const adminAdjForm = document.getElementById('admin-balance-adj-form');
  if (adminAdjForm) {
    adminAdjForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const userId = document.getElementById('admin-adj-user-id')?.value;
      const wallet = document.getElementById('admin-adj-wallet')?.value || 'deposit';
      const type = document.getElementById('admin-adj-type')?.value || 'credit';
      const amount = parseFloat(document.getElementById('admin-adj-amount')?.value || '0');

      if (!userId || amount <= 0) {
        showToast('⚠️ Please select a user and enter a valid positive amount.', false);
        return;
      }

      try {
        const res = await fetch(`/api/admin/users/${userId}/balance`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            ...(getAuthToken() ? { Authorization: `Bearer ${getAuthToken()}` } : {})
          },
          body: JSON.stringify({ wallet, type, amount, reason: 'Admin Direct Adjustment' })
        });
        const data = await res.json();
        if (res.ok && data.ok) {
          showToast(`💰 ${data.message}`, true);
          adminAdjForm.reset();
          await loadAdminData();
          if (window.location.pathname.includes('dashboard.html')) {
            await loadDashboardData();
          }
        } else {
          showToast(`❌ ${data.error || 'Adjustment failed.'}`, false);
        }
      } catch (err) {
        showToast('❌ Error processing wallet adjustment.', false);
      }
    });
  }

  // Bind Clickable Overview Cards Smooth Jump Navigation
  initAdminOverviewJumpCards();
}

function initAdminOverviewJumpCards() {
  document.querySelectorAll('.clickable-overview-card').forEach((card) => {
    card.addEventListener('click', (e) => {
      // Don't trigger if clicked on an action button inside the card
      if (e.target.closest('button, a')) return;

      const jumpTarget = card.getAttribute('data-jump');
      if (jumpTarget) {
        const targetEl = document.querySelector(jumpTarget);
        if (targetEl) {
          targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
          targetEl.classList.add('highlight-section');
          setTimeout(() => targetEl.classList.remove('highlight-section'), 2000);
        }
      }
    });
  });
}

async function loadAdminData() {
  const adminElements = document.querySelectorAll('[data-admin]');
  if (!adminElements.length) return;

  try {
    const response = await fetch('/api/admin', {
      headers: getAuthToken() ? { Authorization: `Bearer ${getAuthToken()}` } : {},
    });
    const data = await response.json();
    window.currentAdminData = data;

    if (!response.ok || data.authRequired) {
      if (response.status === 401 || data.authRequired) {
        window.location.href = 'login.html';
      } else {
        window.location.href = 'dashboard.html';
      }
      return;
    }

    const stats = data.stats || {};
    if (document.getElementById('admin-balance')) document.getElementById('admin-balance').textContent = stats.managedCapital || '$0.00';
    if (document.getElementById('admin-users')) document.getElementById('admin-users').textContent = stats.activeUsers || '0';
    if (document.getElementById('admin-alerts')) document.getElementById('admin-alerts').textContent = stats.pendingAlerts || '0';

    if (document.getElementById('admin-managed-capital')) document.getElementById('admin-managed-capital').textContent = stats.managedCapital || '$0.00';
    if (document.getElementById('admin-active-users-count')) document.getElementById('admin-active-users-count').textContent = stats.activeUsers || '0';

    const pendingDeposits = (data.requests || []).filter((r) => r.status === 'pending');
    const pendingWithdrawals = (data.withdrawals || []).filter((w) => w.status === 'pending');

    if (document.getElementById('admin-pending-deposits-count')) document.getElementById('admin-pending-deposits-count').textContent = String(pendingDeposits.length);
    if (document.getElementById('admin-pending-withdrawals-count')) document.getElementById('admin-pending-withdrawals-count').textContent = String(pendingWithdrawals.length);
    if (document.getElementById('admin-pending-dep-badge')) document.getElementById('admin-pending-dep-badge').textContent = `${pendingDeposits.length} Pending Action`;
    if (document.getElementById('admin-pending-wd-badge')) document.getElementById('admin-pending-wd-badge').textContent = `${pendingWithdrawals.length} Pending Action`;

    // Update Visitors & Investor Messages Stat Elements
    if (document.getElementById('admin-visitors-stat')) document.getElementById('admin-visitors-stat').textContent = `${stats.totalVisitorsCount || '0'} Hits`;
    if (document.getElementById('admin-unread-messages-stat')) document.getElementById('admin-unread-messages-stat').textContent = `${stats.unreadMessagesCount || '0'} Notice`;

    if (document.getElementById('admin-total-visitors-badge')) document.getElementById('admin-total-visitors-badge').textContent = `${stats.totalVisitorsCount || '0'} Total Visits`;
    if (document.getElementById('admin-today-visitors-badge')) document.getElementById('admin-today-visitors-badge').textContent = `${stats.todayVisitorsCount || '0'} Today`;
    if (document.getElementById('admin-unique-visitors-badge')) document.getElementById('admin-unique-visitors-badge').textContent = `${stats.uniqueVisitorsCount || '0'} Unique IPs`;

    if (document.getElementById('admin-unread-messages-badge')) document.getElementById('admin-unread-messages-badge').textContent = `${stats.unreadMessagesCount || '0'} Unread Notices`;
    if (document.getElementById('admin-contacts-count')) document.getElementById('admin-contacts-count').textContent = `${(data.contacts || []).length} Total Messages`;

    // Render Managed Capital Center
    renderAdminCapitalCenter(data.capitalCenter);

    // Render Analytics Overview Metrics & Visual Progress Bars
    renderAdminAnalyticsCenter(data);

    // User select options for balance adjustment and mailing
    const userSelect = document.getElementById('admin-adj-user-id');
    const mailUserSelect = document.getElementById('admin-mail-user-id');
    if (data.users) {
      const userOptions = '<option value="">-- Choose User Account --</option>' + data.users.map((u) => `
        <option value="${u.id}">${u.fullName || u.email} (${u.email}) — Dep: ${u.depositBalance} | Int: ${u.interestBalance}</option>
      `).join('');

      if (userSelect) {
        const currentVal = userSelect.value;
        userSelect.innerHTML = userOptions;
        if (currentVal) userSelect.value = currentVal;
      }
      if (mailUserSelect) {
        const currentMailVal = mailUserSelect.value;
        mailUserSelect.innerHTML = userOptions;
        if (currentMailVal) mailUserSelect.value = currentMailVal;
      }
    }

    // Load admin mail logs & initialize form
    await loadAdminMailLogs();
    initAdminMailingForm();

    // Load admin crypto wallet integration configurations
    await initAdminCryptoWalletsPortal();

    // Deposits Table
    renderAdminDepositsTable(data.requests || []);
    initAdminDepositsControls();

    // Withdrawals Table
    renderAdminWithdrawalsTable(data.withdrawals || []);
    initAdminWithdrawalsControls();

    // Registered Users Table
    if (data.users) {
      allAdminUsersList = data.users || [];
      renderAdminUsersTable();
      initAdminUsersControls();
    }

    // Render Website Visitors Recording Table
    renderAdminVisitorLogsTable(data.visitorLogs || []);

    // Investor Support Messages Notice Center Table
    renderAdminContactsTable(data.contacts || []);

    // Attach Admin CSV Export Listeners
    initAdminCSVExports();

    // Load 24-Hour Automated Website Operations Backup Archives & Controls
    await loadAdminBackups();
    initAdminBackupControls();
  } catch (error) {
    console.error('Admin data load error:', error);
  }
}
// ----------------------------------------------------
// MANAGED CAPITAL CENTER & ANALYTICS RENDERERS
// ----------------------------------------------------
function renderAdminCapitalCenter(capital) {
  if (!capital) return;

  const fmtCurrency = (val) => '$' + Number(val || 0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  if (document.getElementById('cap-center-total')) document.getElementById('cap-center-total').textContent = fmtCurrency(capital.totalManagedCapital);
  if (document.getElementById('cap-center-invested')) document.getElementById('cap-center-invested').textContent = fmtCurrency(capital.totalInvestedCapital);
  if (document.getElementById('cap-center-profit')) document.getElementById('cap-center-profit').textContent = fmtCurrency(capital.totalProfitYield);
  if (document.getElementById('cap-center-withdrawals')) document.getElementById('cap-center-withdrawals').textContent = fmtCurrency(capital.totalWithdrawals);

  const categories = capital.categories || {};
  if (document.getElementById('cap-sector-realestate')) document.getElementById('cap-sector-realestate').textContent = fmtCurrency(categories.realEstate);
  if (document.getElementById('cap-sector-agri')) document.getElementById('cap-sector-agri').textContent = fmtCurrency(categories.agriculture);
  if (document.getElementById('cap-sector-crypto')) document.getElementById('cap-sector-crypto').textContent = fmtCurrency(categories.crypto);
  if (document.getElementById('cap-sector-stocks')) document.getElementById('cap-sector-stocks').textContent = fmtCurrency(categories.stocks);

  // Active Ledger Table
  const ledgerTable = document.querySelector('#admin-investment-ledger-table tbody');
  const countBadge = document.getElementById('cap-ledger-count');
  const ledgerList = capital.investmentLedger || [];

  if (countBadge) countBadge.textContent = `${ledgerList.length} Active Contracts`;

  if (ledgerTable) {
    if (!ledgerList.length) {
      ledgerTable.innerHTML = `<tr><td colspan="8" class="text-center muted" style="padding: 1.5rem;">No active investor subscriptions logged in capital ledger.</td></tr>`;
    } else {
      ledgerTable.innerHTML = ledgerList.map((inv) => {
        const dateStr = inv.createdAt ? new Date(inv.createdAt).toLocaleDateString() : 'N/A';
        return `
          <tr>
            <td><strong style="color: #38bdf8;">#${inv.id}</strong></td>
            <td>
              <div style="font-weight: 700; color: #ffffff;">${inv.userName || 'Investor'}</div>
              <div style="font-size: 0.8rem; color: #38bdf8;">${inv.userEmail || ''}</div>
            </td>
            <td><span class="badge" style="background: rgba(16, 185, 129, 0.15); color: #34d399; font-weight: 700;">${inv.planName || 'Plan'}</span></td>
            <td><strong class="green-text" style="font-size: 0.95rem;">${inv.amount}</strong></td>
            <td><span class="badge" style="background: rgba(56, 189, 248, 0.15); color: #38bdf8;">${inv.dailyRate}% / day</span></td>
            <td><strong style="color: #c084fc; font-size: 0.95rem;">${inv.profitYield || '$0.00'}</strong></td>
            <td><span class="badge" style="background: rgba(16, 185, 129, 0.2); color: #34d399;">${(inv.status || 'active').toUpperCase()}</span></td>
            <td><span style="font-size: 0.78rem; color: #94a3b8;">${dateStr}</span></td>
          </tr>
        `;
      }).join('');
    }
  }
}

function renderAdminAnalyticsCenter(data) {
  if (!data) return;
  const stats = data.stats || {};

  if (document.getElementById('analytics-weekly-visits')) document.getElementById('analytics-weekly-visits').textContent = `${stats.weeklyVisitsCount || 0} Visits`;
  if (document.getElementById('analytics-monthly-visits')) document.getElementById('analytics-monthly-visits').textContent = `${stats.monthlyVisitsCount || 0} Visits`;
  if (document.getElementById('analytics-top-pages-count')) document.getElementById('analytics-top-pages-count').textContent = `${(data.topPages || []).length} Active Pages`;
  if (document.getElementById('analytics-visitor-countries-count')) document.getElementById('analytics-visitor-countries-count').textContent = `${stats.uniqueVisitorsCount || 0} IPs`;

  // Render Top Pages List
  const topPagesEl = document.getElementById('admin-analytics-top-pages-list');
  if (topPagesEl) {
    const topPages = data.topPages || [];
    if (!topPages.length) {
      topPagesEl.innerHTML = `<div class="muted text-center" style="padding: 1rem;">No page visit analytics recorded yet.</div>`;
    } else {
      topPagesEl.innerHTML = topPages.map((p) => `
        <div style="display: flex; justify-content: space-between; align-items: center; background: rgba(0,0,0,0.3); padding: 0.6rem 0.8rem; border-radius: 8px; border: 1px solid rgba(255,255,255,0.06);">
          <div style="font-family: monospace; font-size: 0.88rem; color: #38bdf8;">${p.path}</div>
          <span class="badge" style="background: rgba(168, 85, 247, 0.2); color: #c084fc; font-weight: 800;">${p.hits} Views</span>
        </div>
      `).join('');
    }
  }

  // Render Device Stats Bars
  const deviceEl = document.getElementById('admin-analytics-device-bars');
  if (deviceEl) {
    const devices = data.deviceStats || {};
    const total = Object.values(devices).reduce((a, b) => a + b, 0) || 1;
    const deviceColors = { Desktop: '#34d399', Mobile: '#38bdf8', Tablet: '#c084fc', Other: '#94a3b8' };

    deviceEl.innerHTML = Object.entries(devices).map(([dev, count]) => {
      const pct = Math.round((count / total) * 100);
      const color = deviceColors[dev] || '#94a3b8';
      return `
        <div>
          <div style="display: flex; justify-content: space-between; font-size: 0.82rem; margin-bottom: 0.3rem;">
            <span style="color: #cbd5e1; font-weight: 700;">${dev}</span>
            <span style="color: ${color}; font-weight: 800;">${count} (${pct}%)</span>
          </div>
          <div style="height: 8px; background: rgba(255,255,255,0.08); border-radius: 4px; overflow: hidden;">
            <div style="width: ${pct}%; height: 100%; background: ${color}; border-radius: 4px;"></div>
          </div>
        </div>
      `;
    }).join('');
  }

  // Render Browser Stats Bars
  const browserEl = document.getElementById('admin-analytics-browser-bars');
  if (browserEl) {
    const browsers = data.browserStats || {};
    const total = Object.values(browsers).reduce((a, b) => a + b, 0) || 1;
    const browserColors = { Chrome: '#38bdf8', Safari: '#c084fc', Firefox: '#f97316', Edge: '#34d399', Other: '#94a3b8' };

    browserEl.innerHTML = Object.entries(browsers).map(([br, count]) => {
      const pct = Math.round((count / total) * 100);
      const color = browserColors[br] || '#94a3b8';
      return `
        <div>
          <div style="display: flex; justify-content: space-between; font-size: 0.82rem; margin-bottom: 0.3rem;">
            <span style="color: #cbd5e1; font-weight: 700;">${br}</span>
            <span style="color: ${color}; font-weight: 800;">${count} (${pct}%)</span>
          </div>
          <div style="height: 8px; background: rgba(255,255,255,0.08); border-radius: 4px; overflow: hidden;">
            <div style="width: ${pct}%; height: 100%; background: ${color}; border-radius: 4px;"></div>
          </div>
        </div>
      `;
    }).join('');
  }
}

// ----------------------------------------------------
// DEPOSIT QUEUE & DETAILS MODAL
// ----------------------------------------------------
function renderAdminDepositsTable(requests) {
  const table = document.querySelector('#admin-deposits-table tbody');
  if (!table) return;

  const searchQuery = (document.getElementById('admin-dep-search')?.value || '').toLowerCase().trim();
  const statusFilter = document.getElementById('admin-dep-filter')?.value || 'pending';

  let filtered = requests.filter((r) => {
    if (statusFilter !== 'all' && r.status !== statusFilter) return false;
    if (searchQuery) {
      const matchId = String(r.id).includes(searchQuery);
      const matchUser = String(r.userId || '').includes(searchQuery) || (r.userName || '').toLowerCase().includes(searchQuery) || (r.userEmail || '').toLowerCase().includes(searchQuery);
      const matchRef = (r.reference || '').toLowerCase().includes(searchQuery);
      const matchMethod = (r.method || '').toLowerCase().includes(searchQuery);
      return matchId || matchUser || matchRef || matchMethod;
    }
    return true;
  });

  if (!filtered.length) {
    table.innerHTML = `<tr><td colspan="7" class="text-center muted" style="padding: 1.5rem;">No deposit requests found matching criteria.</td></tr>`;
    return;
  }

  table.innerHTML = filtered.map((item) => {
    const isPending = item.status === 'pending';
    const dateStr = item.createdAt ? new Date(item.createdAt).toLocaleString() : 'N/A';
    return `
      <tr>
        <td>
          <strong style="color: #facc15;">#${item.id}</strong>
          <div style="font-size: 0.82rem; color: #ffffff; font-weight: 700;">${item.userName || `User #${item.userId || '1'}`}</div>
          <div style="font-size: 0.75rem; color: #38bdf8;">${item.userEmail || ''}</div>
        </td>
        <td><span class="badge" style="background: rgba(250, 204, 21, 0.15); color: #facc15; font-weight: 700;">${item.method}</span></td>
        <td><code style="font-size: 0.82rem; color: #cbd5e1; word-break: break-all;">${item.reference}</code></td>
        <td><strong class="green-text" style="font-size: 1.05rem;">${item.amount}</strong></td>
        <td><span style="font-size: 0.78rem; color: #94a3b8;">${dateStr}</span></td>
        <td>
          <span class="badge" style="${item.status === 'approved' ? 'background: rgba(16,185,129,0.2); color:#34d399;' : item.status === 'rejected' ? 'background: rgba(239,68,68,0.2); color:#f87171;' : 'background: rgba(234,179,8,0.2); color:#facc15;'}">
            ${(item.status || 'pending').toUpperCase()}
          </span>
        </td>
        <td>
          <div style="display: flex; gap: 0.35rem; flex-wrap: wrap;">
            <button class="btn btn-secondary btn-sm" type="button" data-view-dep="${item.id}" style="padding: 0.25rem 0.5rem; border-color: #facc15; color: #facc15;">
              👁️ Details
            </button>
            ${isPending ? `
              <button class="btn btn-secondary btn-sm" type="button" data-approve-dep="${item.id}" style="padding: 0.25rem 0.5rem; border-color: #22c55e; color: #4ade80; font-weight: 700;">Approve</button>
              <button class="btn btn-secondary btn-sm" type="button" data-reject-dep="${item.id}" style="padding: 0.25rem 0.5rem; border-color: #f87171; color: #f87171;">Reject</button>
            ` : '<span class="muted" style="font-size: 0.78rem;">Processed</span>'}
          </div>
        </td>
      </tr>
    `;
  }).join('');

  // Attach button event listeners
  table.querySelectorAll('[data-view-dep]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-view-dep');
      const item = requests.find(r => String(r.id) === String(id));
      if (item) openDepositModal(item);
    });
  });

  table.querySelectorAll('[data-approve-dep]').forEach((btn) => {
    btn.addEventListener('click', async () => {
      const id = btn.getAttribute('data-approve-dep');
      await handleAdminDepositAction(id, 'approve');
    });
  });

  table.querySelectorAll('[data-reject-dep]').forEach((btn) => {
    btn.addEventListener('click', async () => {
      const id = btn.getAttribute('data-reject-dep');
      await handleAdminDepositAction(id, 'reject');
    });
  });
}

function initAdminDepositsControls() {
  const searchInput = document.getElementById('admin-dep-search');
  const filterSelect = document.getElementById('admin-dep-filter');
  const refreshBtn = document.getElementById('admin-dep-refresh-btn');

  if (searchInput && !searchInput.dataset.bound) {
    searchInput.dataset.bound = 'true';
    searchInput.addEventListener('input', () => {
      if (window.currentAdminData) renderAdminDepositsTable(window.currentAdminData.requests || []);
    });
  }

  if (filterSelect && !filterSelect.dataset.bound) {
    filterSelect.dataset.bound = 'true';
    filterSelect.addEventListener('change', () => {
      if (window.currentAdminData) renderAdminDepositsTable(window.currentAdminData.requests || []);
    });
  }

  if (refreshBtn && !refreshBtn.dataset.bound) {
    refreshBtn.dataset.bound = 'true';
    refreshBtn.addEventListener('click', async () => {
      await loadAdminData();
      showToast('🔄 Deposit Queue Refreshed!', true);
    });
  }

  // Modal Buttons
  const closeBtn = document.getElementById('close-view-dep-modal');
  const cancelBtn = document.getElementById('cancel-view-dep-btn');
  const approveBtn = document.getElementById('modal-approve-dep-btn');
  const rejectBtn = document.getElementById('modal-reject-dep-btn');

  const depModal = document.getElementById('admin-view-deposit-modal');
  if (closeBtn) closeBtn.onclick = () => { if (depModal) depModal.style.display = 'none'; };
  if (cancelBtn) cancelBtn.onclick = () => { if (depModal) depModal.style.display = 'none'; };

  if (approveBtn && !approveBtn.dataset.bound) {
    approveBtn.dataset.bound = 'true';
    approveBtn.onclick = async () => {
      const depId = approveBtn.getAttribute('data-dep-id');
      if (depId) {
        if (depModal) depModal.style.display = 'none';
        await handleAdminDepositAction(depId, 'approve');
      }
    };
  }

  if (rejectBtn && !rejectBtn.dataset.bound) {
    rejectBtn.dataset.bound = 'true';
    rejectBtn.onclick = async () => {
      const depId = rejectBtn.getAttribute('data-dep-id');
      if (depId) {
        if (depModal) depModal.style.display = 'none';
        await handleAdminDepositAction(depId, 'reject');
      }
    };
  }
}

function openDepositModal(item) {
  const modal = document.getElementById('admin-view-deposit-modal');
  const content = document.getElementById('view-dep-content');
  const approveBtn = document.getElementById('modal-approve-dep-btn');
  const rejectBtn = document.getElementById('modal-reject-dep-btn');

  if (!modal || !content) return;

  if (approveBtn) approveBtn.setAttribute('data-dep-id', item.id);
  if (rejectBtn) rejectBtn.setAttribute('data-dep-id', item.id);

  if (item.status === 'pending') {
    if (approveBtn) approveBtn.style.display = 'inline-block';
    if (rejectBtn) rejectBtn.style.display = 'inline-block';
  } else {
    if (approveBtn) approveBtn.style.display = 'none';
    if (rejectBtn) rejectBtn.style.display = 'none';
  }

  content.innerHTML = `
    <div style="background: rgba(0,0,0,0.3); padding: 0.8rem; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08);">
      <div style="font-size: 0.78rem; color: #94a3b8; font-weight: 700; text-transform: uppercase;">Investor Profile</div>
      <div style="font-size: 1.1rem; font-weight: 800; color: #ffffff;">${item.userName || `User #${item.userId}`}</div>
      <div style="font-size: 0.88rem; color: #38bdf8;">Email: ${item.userEmail || 'N/A'}</div>
    </div>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.8rem;">
      <div style="background: rgba(0,0,0,0.3); padding: 0.8rem; border-radius: 8px;">
        <span style="font-size: 0.75rem; color: #94a3b8; font-weight: 700;">DEPOSIT AMOUNT</span>
        <div style="font-size: 1.3rem; font-weight: 800; color: #34d399;">${item.amount}</div>
      </div>
      <div style="background: rgba(0,0,0,0.3); padding: 0.8rem; border-radius: 8px;">
        <span style="font-size: 0.75rem; color: #94a3b8; font-weight: 700;">PAYMENT GATEWAY</span>
        <div style="font-size: 1.1rem; font-weight: 800; color: #facc15;">${item.method}</div>
      </div>
    </div>
    <div style="background: rgba(0,0,0,0.3); padding: 0.8rem; border-radius: 8px;">
      <span style="font-size: 0.75rem; color: #94a3b8; font-weight: 700;">TRANSACTION REFERENCE / BLOCKCHAIN HASH</span>
      <div style="font-family: monospace; font-size: 0.88rem; color: #38bdf8; word-break: break-all; margin-top: 0.2rem;">${item.reference}</div>
    </div>
    <div style="display: flex; justify-content: space-between; font-size: 0.82rem; color: #94a3b8;">
      <span>Status: <strong style="color: #fff;">${(item.status || 'pending').toUpperCase()}</strong></span>
      <span>Date: ${item.createdAt ? new Date(item.createdAt).toLocaleString() : 'N/A'}</span>
    </div>
  `;

  modal.style.display = 'flex';
}

// ----------------------------------------------------
// WITHDRAWAL QUEUE & DETAILS MODAL
// ----------------------------------------------------
function renderAdminWithdrawalsTable(withdrawals) {
  const table = document.querySelector('#admin-withdrawals-table tbody');
  if (!table) return;

  const searchQuery = (document.getElementById('admin-wd-search')?.value || '').toLowerCase().trim();
  const statusFilter = document.getElementById('admin-wd-filter')?.value || 'pending';

  let filtered = withdrawals.filter((w) => {
    if (statusFilter !== 'all' && w.status !== statusFilter) return false;
    if (searchQuery) {
      const matchId = String(w.id).includes(searchQuery);
      const matchUser = String(w.userId || '').includes(searchQuery) || (w.userName || '').toLowerCase().includes(searchQuery) || (w.userEmail || '').toLowerCase().includes(searchQuery);
      const matchDetails = (w.details || '').toLowerCase().includes(searchQuery);
      const matchMethod = (w.method || '').toLowerCase().includes(searchQuery);
      return matchId || matchUser || matchDetails || matchMethod;
    }
    return true;
  });

  if (!filtered.length) {
    table.innerHTML = `<tr><td colspan="7" class="text-center muted" style="padding: 1.5rem;">No withdrawal requests found matching criteria.</td></tr>`;
    return;
  }

  table.innerHTML = filtered.map((item) => {
    const isPending = item.status === 'pending';
    const dateStr = item.createdAt ? new Date(item.createdAt).toLocaleString() : 'N/A';
    return `
      <tr>
        <td>
          <strong style="color: #f87171;">#${item.id}</strong>
          <div style="font-size: 0.82rem; color: #ffffff; font-weight: 700;">${item.userName || `User #${item.userId || '1'}`}</div>
          <div style="font-size: 0.75rem; color: #38bdf8;">${item.userEmail || ''}</div>
        </td>
        <td><span class="badge" style="background: rgba(56, 189, 248, 0.15); color: #38bdf8;">${item.walletType || 'Wallet'}</span></td>
        <td>
          <div style="font-size: 0.82rem; font-weight: 700; color: #c084fc;">${item.method}</div>
          <code style="font-size: 0.78rem; color: #cbd5e1; word-break: break-all;">${item.details}</code>
        </td>
        <td><strong class="green-text" style="font-size: 1.05rem;">${item.amount}</strong></td>
        <td><span style="font-size: 0.78rem; color: #94a3b8;">${dateStr}</span></td>
        <td>
          <span class="badge" style="${item.status === 'approved' ? 'background: rgba(16,185,129,0.2); color:#34d399;' : item.status === 'rejected' ? 'background: rgba(239,68,68,0.2); color:#f87171;' : 'background: rgba(234,179,8,0.2); color:#facc15;'}">
            ${(item.status || 'pending').toUpperCase()}
          </span>
        </td>
        <td>
          <div style="display: flex; gap: 0.35rem; flex-wrap: wrap;">
            <button class="btn btn-secondary btn-sm" type="button" data-view-wd="${item.id}" style="padding: 0.25rem 0.5rem; border-color: #f87171; color: #f87171;">
              👁️ Details
            </button>
            ${isPending ? `
              <button class="btn btn-secondary btn-sm" type="button" data-approve-wd="${item.id}" style="padding: 0.25rem 0.5rem; border-color: #22c55e; color: #4ade80; font-weight: 700;">Approve</button>
              <button class="btn btn-secondary btn-sm" type="button" data-reject-wd="${item.id}" style="padding: 0.25rem 0.5rem; border-color: #f87171; color: #f87171;">Reject</button>
            ` : '<span class="muted" style="font-size: 0.78rem;">Processed</span>'}
          </div>
        </td>
      </tr>
    `;
  }).join('');

  // Attach button event listeners
  table.querySelectorAll('[data-view-wd]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-view-wd');
      const item = withdrawals.find(w => String(w.id) === String(id));
      if (item) openWithdrawalModal(item);
    });
  });

  table.querySelectorAll('[data-approve-wd]').forEach((btn) => {
    btn.addEventListener('click', async () => {
      const id = btn.getAttribute('data-approve-wd');
      await handleAdminWithdrawalAction(id, 'approve');
    });
  });

  table.querySelectorAll('[data-reject-wd]').forEach((btn) => {
    btn.addEventListener('click', async () => {
      const id = btn.getAttribute('data-reject-wd');
      await handleAdminWithdrawalAction(id, 'reject');
    });
  });
}

function initAdminWithdrawalsControls() {
  const searchInput = document.getElementById('admin-wd-search');
  const filterSelect = document.getElementById('admin-wd-filter');
  const refreshBtn = document.getElementById('admin-wd-refresh-btn');

  if (searchInput && !searchInput.dataset.bound) {
    searchInput.dataset.bound = 'true';
    searchInput.addEventListener('input', () => {
      if (window.currentAdminData) renderAdminWithdrawalsTable(window.currentAdminData.withdrawals || []);
    });
  }

  if (filterSelect && !filterSelect.dataset.bound) {
    filterSelect.dataset.bound = 'true';
    filterSelect.addEventListener('change', () => {
      if (window.currentAdminData) renderAdminWithdrawalsTable(window.currentAdminData.withdrawals || []);
    });
  }

  if (refreshBtn && !refreshBtn.dataset.bound) {
    refreshBtn.dataset.bound = 'true';
    refreshBtn.addEventListener('click', async () => {
      await loadAdminData();
      showToast('🔄 Withdrawal Queue Refreshed!', true);
    });
  }

  // Modal Buttons
  const closeBtn = document.getElementById('close-view-wd-modal');
  const cancelBtn = document.getElementById('cancel-view-wd-btn');
  const approveBtn = document.getElementById('modal-approve-wd-btn');
  const rejectBtn = document.getElementById('modal-reject-wd-btn');

  const wdModal = document.getElementById('admin-view-withdrawal-modal');
  if (closeBtn) closeBtn.onclick = () => { if (wdModal) wdModal.style.display = 'none'; };
  if (cancelBtn) cancelBtn.onclick = () => { if (wdModal) wdModal.style.display = 'none'; };

  if (approveBtn && !approveBtn.dataset.bound) {
    approveBtn.dataset.bound = 'true';
    approveBtn.onclick = async () => {
      const wdId = approveBtn.getAttribute('data-wd-id');
      if (wdId) {
        if (wdModal) wdModal.style.display = 'none';
        await handleAdminWithdrawalAction(wdId, 'approve');
      }
    };
  }

  if (rejectBtn && !rejectBtn.dataset.bound) {
    rejectBtn.dataset.bound = 'true';
    rejectBtn.onclick = async () => {
      const wdId = rejectBtn.getAttribute('data-wd-id');
      if (wdId) {
        if (wdModal) wdModal.style.display = 'none';
        await handleAdminWithdrawalAction(wdId, 'reject');
      }
    };
  }
}

function openWithdrawalModal(item) {
  const modal = document.getElementById('admin-view-withdrawal-modal');
  const content = document.getElementById('view-wd-content');
  const approveBtn = document.getElementById('modal-approve-wd-btn');
  const rejectBtn = document.getElementById('modal-reject-wd-btn');

  if (!modal || !content) return;

  if (approveBtn) approveBtn.setAttribute('data-wd-id', item.id);
  if (rejectBtn) rejectBtn.setAttribute('data-wd-id', item.id);

  if (item.status === 'pending') {
    if (approveBtn) approveBtn.style.display = 'inline-block';
    if (rejectBtn) rejectBtn.style.display = 'inline-block';
  } else {
    if (approveBtn) approveBtn.style.display = 'none';
    if (rejectBtn) rejectBtn.style.display = 'none';
  }

  content.innerHTML = `
    <div style="background: rgba(0,0,0,0.3); padding: 0.8rem; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08);">
      <div style="font-size: 0.78rem; color: #94a3b8; font-weight: 700; text-transform: uppercase;">Investor Profile</div>
      <div style="font-size: 1.1rem; font-weight: 800; color: #ffffff;">${item.userName || `User #${item.userId}`}</div>
      <div style="font-size: 0.88rem; color: #38bdf8;">Email: ${item.userEmail || 'N/A'}</div>
    </div>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.8rem;">
      <div style="background: rgba(0,0,0,0.3); padding: 0.8rem; border-radius: 8px;">
        <span style="font-size: 0.75rem; color: #94a3b8; font-weight: 700;">WITHDRAWAL AMOUNT</span>
        <div style="font-size: 1.3rem; font-weight: 800; color: #f87171;">${item.amount}</div>
      </div>
      <div style="background: rgba(0,0,0,0.3); padding: 0.8rem; border-radius: 8px;">
        <span style="font-size: 0.75rem; color: #94a3b8; font-weight: 700;">SOURCE WALLET</span>
        <div style="font-size: 1.1rem; font-weight: 800; color: #38bdf8;">${item.walletType || 'Deposit Wallet'}</div>
      </div>
    </div>
    <div style="background: rgba(0,0,0,0.3); padding: 0.8rem; border-radius: 8px;">
      <span style="font-size: 0.75rem; color: #94a3b8; font-weight: 700;">DESTINATION CRYPTO ADDRESS (${item.method})</span>
      <div style="font-family: monospace; font-size: 0.88rem; color: #c084fc; word-break: break-all; margin-top: 0.2rem;">${item.details}</div>
    </div>
    <div style="display: flex; justify-content: space-between; font-size: 0.82rem; color: #94a3b8;">
      <span>Status: <strong style="color: #fff;">${(item.status || 'pending').toUpperCase()}</strong></span>
      <span>Date: ${item.createdAt ? new Date(item.createdAt).toLocaleString() : 'N/A'}</span>
    </div>
  `;

  modal.style.display = 'flex';
}

// ----------------------------------------------------
// VISITOR LOGS & CONTACT MESSAGES RENDERERS
// ----------------------------------------------------
function renderAdminVisitorLogsTable(vLogs) {
  const visitorsTable = document.querySelector('#admin-visitor-logs-table tbody');
  if (!visitorsTable) return;

  if (!vLogs.length) {
    visitorsTable.innerHTML = `<tr><td colspan="6" class="text-center muted" style="padding: 1.5rem;">No recorded website visitor logs yet.</td></tr>`;
  } else {
    visitorsTable.innerHTML = vLogs.map((v) => {
      const dateStr = v.createdAt ? new Date(v.createdAt).toLocaleString() : 'N/A';
      return `
        <tr>
          <td><strong style="color: #c084fc;">#${v.id}</strong></td>
          <td>
            <span class="badge" style="background: rgba(168, 85, 247, 0.15); color: #e9d5ff; font-family: monospace;">${v.ipAddress}</span>
            ${v.userId ? `<span class="badge" style="background: rgba(16,185,129,0.2); color:#34d399; margin-left: 0.3rem;">User #${v.userId}</span>` : ''}
          </td>
          <td><code style="color: #38bdf8; font-size: 0.82rem;">${v.path}</code></td>
          <td><span style="font-size: 0.8rem; color: #cbd5e1; max-width: 250px; display: inline-block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;" title="${v.userAgent}">${v.userAgent}</span></td>
          <td><span style="font-size: 0.8rem; color: #94a3b8;">${v.referrer}</span></td>
          <td><span style="font-size: 0.78rem; color: #94a3b8;">${dateStr}</span></td>
        </tr>
      `;
    }).join('');
  }
}

function renderAdminContactsTable(cList) {
  const contactsTable = document.querySelector('#admin-contacts-table tbody');
  if (!contactsTable) return;

  if (!cList.length) {
    contactsTable.innerHTML = `<tr><td colspan="7" class="text-center muted" style="padding: 1.5rem;">No investor messages received yet.</td></tr>`;
  } else {
    contactsTable.innerHTML = cList.map((c) => {
      const dateStr = c.createdAt ? new Date(c.createdAt).toLocaleString() : 'N/A';
      const statusBg = c.status === 'replied'
        ? 'background: rgba(16,185,129,0.2); color: #34d399; border: 1px solid rgba(16,185,129,0.4);'
        : c.status === 'read'
        ? 'background: rgba(148,163,184,0.2); color: #cbd5e1; border: 1px solid rgba(148,163,184,0.4);'
        : 'background: rgba(239,68,68,0.2); color: #f87171; border: 1px solid rgba(239,68,68,0.4);';

      return `
        <tr>
          <td><strong style="color: #38bdf8;">#${c.id}</strong></td>
          <td>
            <div style="font-weight: 700; color: #fff;">${c.name}</div>
            <div style="font-size: 0.82rem; color: #38bdf8;">${c.email}</div>
          </td>
          <td>
            <span class="badge" style="background: rgba(56,189,248,0.15); color: #7dd3fc; font-weight: 600;">${c.subject || 'General Inquiry'}</span>
          </td>
          <td>
            <div style="font-size: 0.88rem; color: #cbd5e1; max-width: 320px; white-space: pre-wrap;">${c.message}</div>
            ${c.replyMessage ? `<div style="margin-top: 0.4rem; padding: 0.4rem; background: rgba(16,185,129,0.1); border-left: 3px solid #10b981; font-size: 0.8rem; color: #a7f3d0;"><strong>Reply Sent:</strong> ${c.replyMessage}</div>` : ''}
          </td>
          <td>
            <span class="badge" style="${statusBg}">
              ${(c.status || 'unread').toUpperCase()}
            </span>
          </td>
          <td><span style="font-size: 0.78rem; color: #94a3b8;">${dateStr}</span></td>
          <td>
            <div style="display: flex; gap: 0.35rem; flex-wrap: wrap;">
              <button class="btn btn-secondary btn-sm" type="button" data-open-reply-modal="${c.id}" data-contact-email="${c.email}" data-contact-msg="${encodeURIComponent(c.message)}" style="padding: 0.25rem 0.6rem; border-color: #38bdf8; color: #38bdf8;">
                ✉️ Reply
              </button>
              ${c.status === 'unread' ? `
                <button class="btn btn-secondary btn-sm" type="button" data-mark-read-contact="${c.id}" style="padding: 0.25rem 0.5rem; border-color: #94a3b8; color: #cbd5e1;">
                  ✓ Read
                </button>
              ` : ''}
              <button class="btn btn-secondary btn-sm" type="button" data-delete-contact="${c.id}" style="padding: 0.25rem 0.5rem; border-color: #f87171; color: #f87171;">
                🗑️
              </button>
            </div>
          </td>
        </tr>
      `;
    }).join('');

    // Event listeners for reply modal
    contactsTable.querySelectorAll('[data-open-reply-modal]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-open-reply-modal');
        const email = btn.getAttribute('data-contact-email');
        const msg = decodeURIComponent(btn.getAttribute('data-contact-msg'));

        const replyContactId = document.getElementById('reply-contact-id');
        const replyRecipientEmail = document.getElementById('reply-recipient-email');
        const replyOriginalMsg = document.getElementById('reply-original-msg');
        const replyTextContent = document.getElementById('reply-text-content');
        const replyModal = document.getElementById('admin-reply-modal');

        if (replyContactId) replyContactId.value = id;
        if (replyRecipientEmail) replyRecipientEmail.value = email;
        if (replyOriginalMsg) replyOriginalMsg.textContent = msg;
        if (replyTextContent) replyTextContent.value = '';
        if (replyModal) replyModal.style.display = 'flex';
      });
    });

    // Event listeners for mark as read
    contactsTable.querySelectorAll('[data-mark-read-contact]').forEach((btn) => {
      btn.addEventListener('click', async () => {
        const id = btn.getAttribute('data-mark-read-contact');
        await handleAdminContactStatus(id, 'read');
      });
    });

    // Event listeners for delete
    contactsTable.querySelectorAll('[data-delete-contact]').forEach((btn) => {
      btn.addEventListener('click', async () => {
        const id = btn.getAttribute('data-delete-contact');
        if (confirm('Are you sure you want to delete this investor message notice?')) {
          await handleAdminContactDelete(id);
        }
      });
    });
  }

  initAdminReplyModalControls();
}

function initAdminCSVExports() {
  const exportUsersBtn = document.getElementById('export-users-csv-btn');
  if (exportUsersBtn && !exportUsersBtn.dataset.bound) {
    exportUsersBtn.dataset.bound = 'true';
    exportUsersBtn.addEventListener('click', () => {
      const users = allAdminUsersList || [];
      let csv = 'ID,Full Name,Email,Phone,Country,Role,Status,Deposit Balance,Interest Balance,BTC Wallet,USDT Wallet,Created At\n';
      users.forEach(u => {
        csv += `"${u.id}","${(u.fullName || '').replace(/"/g, '""')}","${u.email}","${u.phone || ''}","${u.country || ''}","${u.role || 'client'}","${u.status || 'active'}","${u.depositBalance || u.deposit_balance || 0}","${u.interestBalance || u.interest_balance || 0}","${u.btcWallet || ''}","${u.usdtWallet || ''}","${u.createdAt || ''}"\n`;
      });
      if (window.downloadCSVFile) window.downloadCSVFile(`Investor_Directory_${Date.now()}.csv`, csv);
    });
  }

  const exportDepBtn = document.getElementById('export-deposits-csv-btn');
  if (exportDepBtn && !exportDepBtn.dataset.bound) {
    exportDepBtn.dataset.bound = 'true';
    exportDepBtn.addEventListener('click', () => {
      const deposits = window.currentAdminData?.requests || [];
      let csv = 'Deposit ID,User ID,Method,Reference,Amount,Status,Created At\n';
      deposits.forEach(d => {
        csv += `"${d.id}","${d.userId || ''}","${d.method || ''}","${d.reference || ''}","${d.amount || 0}","${d.status || ''}","${d.createdAt || ''}"\n`;
      });
      if (window.downloadCSVFile) window.downloadCSVFile(`Deposits_Ledger_${Date.now()}.csv`, csv);
    });
  }

  const exportWdBtn = document.getElementById('export-withdrawals-csv-btn');
  if (exportWdBtn && !exportWdBtn.dataset.bound) {
    exportWdBtn.dataset.bound = 'true';
    exportWdBtn.addEventListener('click', () => {
      const withdrawals = window.currentAdminData?.withdrawals || [];
      let csv = 'Withdrawal ID,User ID,Wallet Type,Method,Details,Amount,Status,Created At\n';
      withdrawals.forEach(w => {
        csv += `"${w.id}","${w.userId || ''}","${w.walletType || ''}","${w.method || ''}","${(w.details || '').replace(/"/g, '""')}","${w.amount || 0}","${w.status || ''}","${w.createdAt || ''}"\n`;
      });
      if (window.downloadCSVFile) window.downloadCSVFile(`Withdrawals_Ledger_${Date.now()}.csv`, csv);
    });
  }
}

// ----------------------------------------------------
// 24-HOUR AUTOMATED WEBSITE & INVESTOR OPERATIONS BACKUP MANAGEMENT
// ----------------------------------------------------
async function loadAdminBackups() {
  const backupsTable = document.querySelector('#admin-backups-table tbody');
  if (!backupsTable) return;

  try {
    const res = await fetch('/api/admin/backups', {
      headers: getAuthToken() ? { Authorization: `Bearer ${getAuthToken()}` } : {}
    });
    const data = await res.json();

    if (!res.ok || !data.ok) {
      backupsTable.innerHTML = `<tr><td colspan="6" class="text-center text-danger" style="padding: 1.5rem;">Failed to load backup archives: ${data.error || 'Server error'}</td></tr>`;
      return;
    }

    const backups = data.backups || [];
    
    // Update summary cards
    if (document.getElementById('admin-last-backup-time')) {
      if (backups.length > 0) {
        document.getElementById('admin-last-backup-time').textContent = new Date(backups[0].created_at).toLocaleString();
      } else {
        document.getElementById('admin-last-backup-time').textContent = 'No archives created yet';
      }
    }

    if (document.getElementById('admin-next-backup-countdown')) {
      if (data.remainingMs !== undefined) {
        const hours = Math.floor(data.remainingMs / (1000 * 60 * 60));
        const mins = Math.floor((data.remainingMs % (1000 * 60 * 60)) / (1000 * 60));
        document.getElementById('admin-next-backup-countdown').textContent = `In ${hours}h ${mins}m (Auto 24h Cron)`;
      } else {
        document.getElementById('admin-next-backup-countdown').textContent = 'Scheduled Every 24 Hours';
      }
    }

    if (document.getElementById('admin-total-archives-count')) {
      document.getElementById('admin-total-archives-count').textContent = `${backups.length} Secure Archives`;
    }

    if (!backups.length) {
      backupsTable.innerHTML = `<tr><td colspan="6" class="text-center muted" style="padding: 1.5rem;">No backup archives generated yet. Click "Execute Immediate Website & Investor Operations Backup Now" to create your first archive snapshot.</td></tr>`;
      return;
    }

    backupsTable.innerHTML = backups.map((b) => {
      const dateStr = b.created_at ? new Date(b.created_at).toLocaleString() : 'N/A';
      const isCron = b.trigger === '24h_cron';
      const triggerBadge = isCron 
        ? `<span class="badge" style="background: rgba(16, 185, 129, 0.2); color: #34d399; font-weight: 700;">⏰ 24h Auto Cron</span>` 
        : `<span class="badge" style="background: rgba(56, 189, 248, 0.2); color: #38bdf8; font-weight: 700;">⚡ Admin Command</span>`;

      return `
        <tr>
          <td>
            <div style="font-weight: 800; color: #ffffff; font-family: monospace; font-size: 0.88rem;">${b.filename}</div>
            <div style="font-size: 0.75rem; color: #94a3b8;">ID: ${b.backupId}</div>
          </td>
          <td>${triggerBadge}</td>
          <td><span style="font-size: 0.85rem; color: #e2e8f0;">${dateStr}</span></td>
          <td><strong style="color: #38bdf8; font-size: 0.88rem;">${b.sizeKB || '--'} KB</strong> (${b.sizeMB || '0.01'} MB)</td>
          <td>
            <div style="font-size: 0.82rem; color: #cbd5e1;">
              👥 <strong>${b.userCount || 0}</strong> Investors | 📈 <strong>${b.investmentCount || 0}</strong> Investments | 💵 <strong>${b.depositCount || 0}</strong> Deposits
            </div>
            <div style="font-size: 0.75rem; color: #94a3b8; margin-top: 2px;">
              Total Deposit Capital: $${Number(b.totalDepositBalance || 0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </div>
          </td>
          <td>
            <div style="display: flex; gap: 0.4rem; flex-wrap: wrap;">
              <a href="/api/admin/backup/download/${encodeURIComponent(b.filename)}" class="btn btn-primary btn-sm" download style="padding: 0.4rem 0.75rem; font-size: 0.8rem; background: linear-gradient(135deg, #0284c7 0%, #0369a1 100%); border: none; text-decoration: none; display: inline-flex; align-items: center; gap: 0.3rem;">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                <span>Download</span>
              </a>
              <button type="button" class="btn btn-secondary btn-sm" data-restore-backup="${b.filename}" style="padding: 0.4rem 0.75rem; font-size: 0.8rem; border-color: #34d399; color: #34d399;">
                🔄 Verify Archive
              </button>
            </div>
          </td>
        </tr>
      `;
    }).join('');

    // Attach click listener for restore verification
    backupsTable.querySelectorAll('[data-restore-backup]').forEach((btn) => {
      btn.addEventListener('click', async () => {
        const filename = btn.getAttribute('data-restore-backup');
        if (!confirm(`Are you sure you want to verify operational archive "${filename}"?`)) return;

        try {
          const res = await fetch('/api/admin/backup/restore', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              ...(getAuthToken() ? { Authorization: `Bearer ${getAuthToken()}` } : {})
            },
            body: JSON.stringify({ filename })
          });
          const resData = await res.json();
          if (res.ok && resData.ok) {
            showToast(`✅ Archive Verified: ${resData.message}`, true);
          } else {
            showToast(`❌ Verification failed: ${resData.error || 'Error verifying archive'}`, false);
          }
        } catch (e) {
          showToast('❌ Network error verifying archive.', false);
        }
      });
    });

  } catch (err) {
    console.error('Error loading admin backups:', err);
    if (backupsTable) {
      backupsTable.innerHTML = `<tr><td colspan="6" class="text-center text-danger">Error loading backup archives.</td></tr>`;
    }
  }
}

function initAdminBackupControls() {
  const triggerBtn = document.getElementById('admin-trigger-backup-cmd-btn');
  if (triggerBtn && !triggerBtn.dataset.bound) {
    triggerBtn.dataset.bound = 'true';
    triggerBtn.addEventListener('click', async () => {
      const origText = triggerBtn.innerHTML;
      triggerBtn.disabled = true;
      triggerBtn.innerHTML = `
        <svg class="animate-spin" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10" stroke-opacity="0.25"/><path d="M12 2a10 10 0 0 1 10 10" stroke-opacity="0.75"/></svg>
        <span>Executing Website & Investor Operations Backup...</span>
      `;

      try {
        const res = await fetch('/api/admin/backup/trigger', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            ...(getAuthToken() ? { Authorization: `Bearer ${getAuthToken()}` } : {})
          }
        });
        const resData = await res.json();
        if (res.ok && resData.ok) {
          showToast(`⚡ ${resData.message || '24h Website and Investor Operations Backup Generated Successfully!'}`, true);
          await loadAdminBackups();
        } else {
          showToast(`❌ Failed: ${resData.error || 'Backup command failed'}`, false);
        }
      } catch (e) {
        showToast('❌ Network error executing backup command.', false);
      } finally {
        triggerBtn.disabled = false;
        triggerBtn.innerHTML = origText;
      }
    });
  }
}

// Registered Users Database Management & Commands
let allAdminUsersList = [];

function renderAdminUsersTable() {
  const usersTable = document.querySelector('#admin-users-table tbody');
  if (!usersTable) return;

  const searchQuery = (document.getElementById('admin-users-search')?.value || '').toLowerCase().trim();
  const filterVal = document.getElementById('admin-users-filter')?.value || 'all';

  // Stats Counters
  const statTotal = document.getElementById('admin-user-stat-total');
  const statActive = document.getElementById('admin-user-stat-active');
  const statSuspended = document.getElementById('admin-user-stat-suspended');

  if (statTotal) statTotal.textContent = `Total: ${allAdminUsersList.length}`;
  if (statActive) statActive.textContent = `Active: ${allAdminUsersList.filter(u => u.status !== 'suspended').length}`;
  if (statSuspended) statSuspended.textContent = `Suspended: ${allAdminUsersList.filter(u => u.status === 'suspended').length}`;

  let filtered = allAdminUsersList.filter((u) => {
    // Filter
    if (filterVal === 'client' && u.role === 'admin') return false;
    if (filterVal === 'admin' && u.role !== 'admin') return false;
    if (filterVal === 'active' && u.status === 'suspended') return false;
    if (filterVal === 'suspended' && u.status !== 'suspended') return false;

    // Search
    if (searchQuery) {
      const matchName = (u.fullName || '').toLowerCase().includes(searchQuery);
      const matchEmail = (u.email || '').toLowerCase().includes(searchQuery);
      const matchId = String(u.id).includes(searchQuery);
      const matchPhone = (u.phone || '').toLowerCase().includes(searchQuery);
      const matchCountry = (u.country || '').toLowerCase().includes(searchQuery);
      const matchBtc = (u.btcWallet || '').toLowerCase().includes(searchQuery);
      const matchUsdt = (u.usdtWallet || '').toLowerCase().includes(searchQuery);
      return matchName || matchEmail || matchId || matchPhone || matchCountry || matchBtc || matchUsdt;
    }
    return true;
  });

  if (!filtered.length) {
    usersTable.innerHTML = `<tr><td colspan="8" class="text-center muted" style="padding: 1.5rem;">No registered user accounts found matching criteria.</td></tr>`;
    return;
  }

  usersTable.innerHTML = filtered.map((u) => {
    const isSuspended = u.status === 'suspended';
    const isAdmin = u.role === 'admin';
    const formattedDate = u.createdAt ? new Date(u.createdAt).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' }) : 'N/A';

    const invList = u.activeInvestments || [];
    let invHtml = '';
    if (invList.length > 0) {
      invHtml = `
        <div style="font-size: 0.8rem; font-weight: 700; color: #34d399; margin-bottom: 2px;">
          ${invList.length} Active Plan${invList.length > 1 ? 's' : ''} (${u.totalInvested || '$0.00'})
        </div>
        <div style="display: flex; flex-direction: column; gap: 3px; max-width: 220px;">
          ${invList.map(inv => `
            <span class="badge" style="background: rgba(16, 185, 129, 0.15); color: #34d399; font-size: 0.72rem; text-align: left; padding: 2px 6px; white-space: normal;">
              📈 ${inv.planName}: <strong>${inv.amount}</strong> (${inv.dailyRate}%/d)
            </span>
          `).join('')}
        </div>
      `;
    } else {
      invHtml = `<span class="muted" style="font-size: 0.78rem;">No Active Plans</span>`;
    }

    return `
      <tr style="${isSuspended ? 'background: rgba(239,68,68,0.06);' : ''}">
        <td>
          <div style="font-weight: 800; color: #38bdf8;">#${u.id}</div>
          <div style="font-size: 0.72rem; color: #94a3b8; margin-top: 2px;">${formattedDate}</div>
        </td>
        <td>
          <div style="font-weight: 700; color: #ffffff;">${u.fullName || 'Unnamed Investor'}</div>
          <div style="font-size: 0.82rem; color: #cbd5e1;">${u.email}</div>
          <div style="font-size: 0.74rem; color: #94a3b8; margin-top: 2px;">
            ${u.phone ? `📞 ${u.phone}` : ''} ${u.country ? `🌐 ${u.country}` : ''}
          </div>
        </td>
        <td>
          <div style="font-size: 0.78rem; font-family: monospace; color: #38bdf8;">
            ${u.btcWallet ? `<strong>BTC:</strong> ${u.btcWallet.substring(0, 10)}...` : '<span class="muted">BTC: Unset</span>'}
          </div>
          <div style="font-size: 0.78rem; font-family: monospace; color: #c084fc; margin-top: 2px;">
            ${u.usdtWallet ? `<strong>USDT:</strong> ${u.usdtWallet.substring(0, 10)}...` : '<span class="muted">USDT: Unset</span>'}
          </div>
        </td>
        <td>${invHtml}</td>
        <td><strong class="green-text" style="font-size: 0.95rem;">${u.depositBalance}</strong></td>
        <td><strong class="green-text" style="font-size: 0.95rem;">${u.interestBalance}</strong></td>
        <td>
          <div style="display: flex; flex-direction: column; gap: 0.3rem;">
            <span class="badge" style="${isAdmin ? 'background: rgba(16,185,129,0.2); color:#34d399;' : 'background: rgba(56,189,248,0.15); color:#38bdf8;'}">
              ${(u.role || 'client').toUpperCase()}
            </span>
            <span class="badge" style="${isSuspended ? 'background: rgba(239,68,68,0.25); color:#f87171;' : 'background: rgba(34,197,94,0.15); color:#4ade80;'}">
              ${isSuspended ? '🔒 SUSPENDED' : '✅ ACTIVE'}
            </span>
          </div>
        </td>
        <td>
          <div style="display: flex; flex-wrap: wrap; gap: 0.35rem; justify-content: center;">
            <button class="btn btn-secondary btn-sm" type="button" data-approve-user="${u.id}" title="Manually Approve / Activate User Account" style="padding: 0.3rem 0.6rem; font-size: 0.78rem; border-color: #22c55e; color: #4ade80; font-weight: 700;">
              ✅ Approve
            </button>
            <button class="btn btn-secondary btn-sm" type="button" data-edit-user="${u.id}" title="Edit User Settings" style="padding: 0.3rem 0.6rem; font-size: 0.78rem; border-color: #38bdf8; color: #38bdf8;">
              ✏️ Edit
            </button>
            <button class="btn btn-secondary btn-sm" type="button" data-delete-user="${u.id}" title="Delete User Account" style="padding: 0.3rem 0.6rem; font-size: 0.78rem; border-color: #f87171; color: #f87171;">
              🗑️ Delete
            </button>
            <button class="btn btn-secondary btn-sm" type="button" data-quick-adj="${u.id}" title="Credit/Debit Balance" style="padding: 0.3rem 0.6rem; font-size: 0.78rem;">
              💵 Balance
            </button>
            <button class="btn btn-secondary btn-sm" type="button" data-toggle-status="${u.id}" title="Toggle Account Status" style="padding: 0.3rem 0.6rem; font-size: 0.78rem; ${isSuspended ? 'border-color: #22c55e; color: #4ade80;' : 'border-color: #facc15; color: #facc15;'}">
              ${isSuspended ? '🔓 Unsuspend' : '🔒 Suspend'}
            </button>
            <button class="btn btn-secondary btn-sm" type="button" data-user-mail="${u.id}" title="Send Email" style="padding: 0.3rem 0.6rem; font-size: 0.78rem; border-color: #c084fc; color: #c084fc;">
              ✉️ Mail
            </button>
          </div>
        </td>
      </tr>
    `;
  }).join('');

  // Attach command button handlers
  usersTable.querySelectorAll('[data-approve-user]').forEach((btn) => {
    btn.addEventListener('click', async () => {
      const userId = btn.getAttribute('data-approve-user');
      try {
        const res = await fetch(`/api/admin/users/${userId}/approve`, {
          method: 'POST',
          headers: getAuthToken() ? { Authorization: `Bearer ${getAuthToken()}` } : {}
        });
        const resData = await res.json();
        if (res.ok && resData.ok) {
          showToast(`✅ ${resData.message}`, true);
          await loadAdminData();
        } else {
          showToast(`❌ ${resData.error || 'Failed to approve user account.'}`, false);
        }
      } catch (err) {
        showToast('❌ Failed to approve user account.', false);
      }
    });
  });
  usersTable.querySelectorAll('[data-quick-adj]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const userId = btn.getAttribute('data-quick-adj');
      const selectEl = document.getElementById('admin-adj-user-id');
      if (selectEl) {
        selectEl.value = userId;
        selectEl.scrollIntoView({ behavior: 'smooth' });
        selectEl.focus();
      }
    });
  });

  usersTable.querySelectorAll('[data-edit-user]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const userId = btn.getAttribute('data-edit-user');
      const targetUser = allAdminUsersList.find(u => String(u.id) === String(userId));
      if (targetUser) {
        openEditUserModal(targetUser);
      }
    });
  });

  usersTable.querySelectorAll('[data-toggle-status]').forEach((btn) => {
    btn.addEventListener('click', async () => {
      const userId = btn.getAttribute('data-toggle-status');
      try {
        const res = await fetch(`/api/admin/users/${userId}/toggle-status`, {
          method: 'POST',
          headers: getAuthToken() ? { Authorization: `Bearer ${getAuthToken()}` } : {}
        });
        const resData = await res.json();
        if (res.ok && resData.ok) {
          showToast(`🛡️ ${resData.message}`, true);
          await loadAdminData();
        } else {
          showToast(`❌ ${resData.error || 'Failed to update user status.'}`, false);
        }
      } catch (err) {
        showToast('❌ Failed to update status.', false);
      }
    });
  });

  usersTable.querySelectorAll('[data-toggle-role]').forEach((btn) => {
    btn.addEventListener('click', async () => {
      const userId = btn.getAttribute('data-toggle-role');
      try {
        const res = await fetch(`/api/admin/users/${userId}/toggle-role`, {
          method: 'POST',
          headers: getAuthToken() ? { Authorization: `Bearer ${getAuthToken()}` } : {}
        });
        const resData = await res.json();
        if (res.ok) {
          showToast(`👤 ${resData.message}`, true);
          await loadAdminData();
        }
      } catch (err) {
        showToast('❌ Failed to update role.', false);
      }
    });
  });

  usersTable.querySelectorAll('[data-user-mail]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const userId = btn.getAttribute('data-user-mail');
      const targetSelect = document.getElementById('admin-mail-target');
      const userSelect = document.getElementById('admin-mail-user-id');
      const mailGroup = document.getElementById('admin-mail-user-group');
      const panel = document.getElementById('admin-mailing-panel');

      if (targetSelect) targetSelect.value = 'user';
      if (mailGroup) mailGroup.style.display = 'block';
      if (userSelect) userSelect.value = userId;

      if (panel) panel.scrollIntoView({ behavior: 'smooth' });
    });
  });

  usersTable.querySelectorAll('[data-delete-user]').forEach((btn) => {
    btn.addEventListener('click', async () => {
      const userId = btn.getAttribute('data-delete-user');
      const targetUser = allAdminUsersList.find(u => String(u.id) === String(userId));
      const confirmName = targetUser ? targetUser.fullName || targetUser.email : `#${userId}`;

      if (!confirm(`⚠️ Are you sure you want to permanently delete investor account #${userId} (${confirmName})? This will also purge associated deposit and withdrawal requests.`)) {
        return;
      }

      try {
        const res = await fetch(`/api/admin/users/${userId}/delete`, {
          method: 'POST',
          headers: getAuthToken() ? { Authorization: `Bearer ${getAuthToken()}` } : {}
        });
        const resData = await res.json();
        if (res.ok && resData.ok) {
          showToast(`🗑️ ${resData.message}`, true);
          await loadAdminData();
        } else {
          showToast(`❌ ${resData.error || 'Failed to delete user.'}`, false);
        }
      } catch (err) {
        showToast('❌ Failed to delete user.', false);
      }
    });
  });
}

function openEditUserModal(user) {
  const modal = document.getElementById('admin-edit-user-modal');
  if (!modal) return;

  const setVal = (id, val) => { const el = document.getElementById(id); if (el) el.value = val; };
  const setTxt = (id, txt) => { const el = document.getElementById(id); if (el) el.textContent = txt; };

  setVal('edit-user-id', user.id);
  setTxt('edit-user-header-name', `#${user.id} — ${user.fullName || user.email}`);
  setVal('edit-user-fullname', user.fullName || '');
  setVal('edit-user-email', user.email || '');
  setVal('edit-user-phone', user.phone || '');
  setVal('edit-user-country', user.country || '');
  setVal('edit-user-deposit', user.depositBalanceRaw !== undefined ? user.depositBalanceRaw : 0);
  setVal('edit-user-interest', user.interestBalanceRaw !== undefined ? user.interestBalanceRaw : 0);
  setVal('edit-user-btc', user.btcWallet || '');
  setVal('edit-user-usdt', user.usdtWallet || '');
  setVal('edit-user-role', user.role || 'client');
  setVal('edit-user-status', user.status || 'active');
  setVal('edit-user-newpwd', '');

  modal.style.display = 'flex';
}

function closeEditUserModal() {
  const modal = document.getElementById('admin-edit-user-modal');
  if (modal) modal.style.display = 'none';
}

function initAdminUsersControls() {
  const searchInput = document.getElementById('admin-users-search');
  const filterSelect = document.getElementById('admin-users-filter');

  if (searchInput) {
    searchInput.removeEventListener('input', renderAdminUsersTable);
    searchInput.addEventListener('input', renderAdminUsersTable);
  }
  if (filterSelect) {
    filterSelect.removeEventListener('change', renderAdminUsersTable);
    filterSelect.addEventListener('change', renderAdminUsersTable);
  }

  const closeBtn = document.getElementById('close-edit-user-modal');
  const cancelBtn = document.getElementById('cancel-edit-user-btn');
  if (closeBtn) closeBtn.onclick = closeEditUserModal;
  if (cancelBtn) cancelBtn.onclick = closeEditUserModal;

  const editForm = document.getElementById('admin-edit-user-form');
  if (editForm) {
    editForm.onsubmit = async (e) => {
      e.preventDefault();
      const userId = document.getElementById('edit-user-id').value;
      const fullName = document.getElementById('edit-user-fullname').value;
      const email = document.getElementById('edit-user-email').value;
      const phone = document.getElementById('edit-user-phone').value;
      const country = document.getElementById('edit-user-country').value;
      const depositBalance = parseFloat(document.getElementById('edit-user-deposit').value || '0');
      const interestBalance = parseFloat(document.getElementById('edit-user-interest').value || '0');
      const btcWallet = document.getElementById('edit-user-btc').value;
      const usdtWallet = document.getElementById('edit-user-usdt').value;
      const role = document.getElementById('edit-user-role').value;
      const status = document.getElementById('edit-user-status').value;
      const newPassword = document.getElementById('edit-user-newpwd').value;

      try {
        const res = await fetch(`/api/admin/users/${userId}/update-profile`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            ...(getAuthToken() ? { Authorization: `Bearer ${getAuthToken()}` } : {})
          },
          body: JSON.stringify({ fullName, email, phone, country, depositBalance, interestBalance, btcWallet, usdtWallet, role, status, newPassword })
        });
        const data = await res.json();
        if (res.ok && data.ok) {
          showToast(`✅ ${data.message}`, true);
          closeEditUserModal();
          await loadAdminData();
        } else {
          showToast(`❌ ${data.error || 'Failed to update user profile.'}`, false);
        }
      } catch (err) {
        showToast('❌ Error updating user profile.', false);
      }
    };
  }
}

async function handleAdminDepositAction(id, action) {
  try {
    const res = await fetch(`/api/admin/requests/${id}/${action}`, {
      method: 'POST',
      headers: getAuthToken() ? { Authorization: `Bearer ${getAuthToken()}` } : {}
    });
    const data = await res.json();
    if (res.ok && data.ok) {
      showToast(`✅ Deposit request #${id} ${action === 'approve' ? 'approved & credited' : 'rejected'}.`, true);
      await loadAdminData();
      if (window.location.pathname.includes('dashboard.html')) {
        await loadDashboardData();
      }
    } else {
      showToast(`❌ ${data.error || 'Action failed.'}`, false);
    }
  } catch (err) {
    showToast('❌ Error executing admin deposit action.', false);
  }
}

async function handleAdminWithdrawalAction(id, action) {
  try {
    const res = await fetch(`/api/admin/withdrawals/${id}/${action}`, {
      method: 'POST',
      headers: getAuthToken() ? { Authorization: `Bearer ${getAuthToken()}` } : {}
    });
    const data = await res.json();
    if (res.ok && data.ok) {
      showToast(`✅ ${data.message}`, true);
      await loadAdminData();
      if (window.location.pathname.includes('dashboard.html')) {
        await loadDashboardData();
      }
    } else {
      showToast(`❌ ${data.error || 'Action failed.'}`, false);
    }
  } catch (err) {
    showToast('❌ Error executing admin withdrawal action.', false);
  }
}

// ==========================================
// CRYPTOCURRENCY INTEGRATION PORTALS
// ==========================================
window.getCryptoIconSVG = function(coinCode, size = 24) {
  const code = (coinCode || '').toUpperCase().trim();
  
  if (code.includes('BNB') || code === 'BSC') {
    return `<svg width="${size}" height="${size}" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align: middle; flex-shrink: 0; display: inline-block;">
      <rect width="32" height="32" rx="16" fill="#F0B90B"/>
      <path d="M12.116 14.404L16 10.52L19.884 14.404L22.148 12.14L16 5.992L9.852 12.14L12.116 14.404ZM5.992 16L8.256 13.736L10.52 16L8.256 18.264L5.992 16ZM12.116 17.596L16 21.48L19.884 17.596L22.148 19.86L16 26.008L9.852 19.86L12.116 17.596ZM26.008 16L23.744 18.264L21.48 16L23.744 13.736L26.008 16ZM16 13.592L18.408 16L16 18.408L13.592 16L16 13.592Z" fill="#181A20"/>
    </svg>`;
  }
  if (code.includes('BTC') || code === 'BITCOIN') {
    return `<svg width="${size}" height="${size}" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align: middle; flex-shrink: 0; display: inline-block;">
      <circle cx="16" cy="16" r="16" fill="#F7931A"/>
      <path d="M22.28 12.72c.32-2.14-1.31-3.29-3.54-4.06l.72-2.9-1.77-.44-.7 2.82c-.47-.12-.95-.23-1.42-.34l.71-2.84-1.77-.44-.72 2.9c-.38-.09-.77-.18-1.14-.27l-2.44-.61-.47 1.89s1.31.3 1.28.32c.72.18.85.65.83 1.03l-.83 3.33c.05.01.11.03.18.06l-.18-.04-1.16 4.67c-.09.22-.31.55-.82.42.02.03-1.28-.32-1.28-.32l-.88 2.03 2.3.57c.43.11.85.22 1.27.32l-.73 2.94 1.77.44.72-2.9c.48.13.95.25 1.41.36l-.72 2.89 1.77.44.73-2.92c3.02.57 5.29.34 6.25-2.39.77-2.2-.04-3.47-1.63-4.29 1.16-.27 2.03-1.03 2.27-2.61zm-4.06 5.7c-.55 2.21-4.25 1.02-5.45.72l.97-3.9c1.2.3 5.04.89 4.48 3.18zm.55-5.74c-.5 2.01-3.59.99-4.59.74l.88-3.54c1 .25 4.22.72 3.71 2.80z" fill="#FFF"/>
    </svg>`;
  }
  if (code.includes('ETH') || code === 'ETHEREUM') {
    return `<svg width="${size}" height="${size}" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align: middle; flex-shrink: 0; display: inline-block;">
      <circle cx="16" cy="16" r="16" fill="#627EEA"/>
      <path d="M16 4v8.87l7.49 3.35L16 4z" fill="#FFF" fill-opacity=".6"/>
      <path d="M16 4L8.51 16.22 16 12.87V4z" fill="#FFF"/>
      <path d="M16 21.96v6.03l7.5-10.42L16 21.96z" fill="#FFF" fill-opacity=".6"/>
      <path d="M16 27.99v-6.03l-7.49-4.39L16 27.99z" fill="#FFF"/>
      <path d="M16 20.57l7.49-4.35L16 12.88v7.69z" fill="#FFF" fill-opacity=".2"/>
      <path d="M8.51 16.22L16 20.57v-7.69l-7.49 3.34z" fill="#FFF" fill-opacity=".6"/>
    </svg>`;
  }
  if (code.includes('USDT') || code === 'TETHER') {
    return `<svg width="${size}" height="${size}" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align: middle; flex-shrink: 0; display: inline-block;">
      <circle cx="16" cy="16" r="16" fill="#26A17B"/>
      <path d="M17.922 17.383c-.115.008-.657.04-1.922.04-1.07 0-1.754-.03-1.935-.04-3.56-.16-6.222-.822-6.222-1.63 0-.923 3.486-1.67 7.842-1.67 4.356 0 7.842.747 7.842 1.67 0 .808-2.662 1.47-6.222 1.631zm0-3.664V11.21h5.36V7.472H8.718v3.738h5.36v2.509c-4.834.212-8.47 1.34-8.47 2.72 0 1.38 3.636 2.508 8.47 2.72v6.234h3.844V20.15c4.83-.212 8.463-1.34 8.463-2.72 0-1.38-3.633-2.508-8.463-2.72z" fill="#FFF"/>
    </svg>`;
  }
  if (code.includes('USDC')) {
    return `<svg width="${size}" height="${size}" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align: middle; flex-shrink: 0; display: inline-block;">
      <circle cx="16" cy="16" r="16" fill="#2775CA"/>
      <path d="M16 6a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16zm-1.5-12.5h3a2.5 2.5 0 010 5h-3v-5zm0 6.5h3.5a2.5 2.5 0 010 5H14.5v-5z" fill="#FFF"/>
    </svg>`;
  }
  if (code.includes('SOL') || code === 'SOLANA') {
    return `<svg width="${size}" height="${size}" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align: middle; flex-shrink: 0; display: inline-block;">
      <circle cx="16" cy="16" r="16" fill="#111827"/>
      <path d="M9.13 20.35a.57.57 0 01.4-.17h12.82c.48 0 .73.57.4.9l-2.28 2.29a.57.57 0 01-.4.17H7.25c-.48 0-.73-.58-.4-.91l2.28-2.28zm0-8.7a.57.57 0 01.4-.17h12.82c.48 0 .73.58.4.9l-2.28 2.29a.57.57 0 01-.4.17H7.25c-.48 0-.73-.57-.4-.9l2.28-2.29zm13.62 4.35a.57.57 0 01-.4.17H9.53c-.48 0-.73-.58-.4-.91l2.28-2.28a.57.57 0 01.4-.17h12.82c.48 0 .73.57.4.9l-2.28 2.29z" fill="url(#sol_grad_${size})"/>
      <defs>
        <linearGradient id="sol_grad_${size}" x1="6.8" y1="23.5" x2="25.2" y2="11.5" gradientUnits="userSpaceOnUse">
          <stop stop-color="#00FFA3"/>
          <stop offset="1" stop-color="#DC1FFF"/>
        </linearGradient>
      </defs>
    </svg>`;
  }
  if (code.includes('TRX') || code === 'TRON') {
    return `<svg width="${size}" height="${size}" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align: middle; flex-shrink: 0; display: inline-block;">
      <circle cx="16" cy="16" r="16" fill="#FF0013"/>
      <path d="M22.8 10.2L8.5 7l6.8 17.8L22.8 10.2zm-12.1-.8l10.2 2.3-5.2 6.5-5-8.8zm1.2 11.2l3.4-11.8 3.8 6.7-7.2 5.1z" fill="#FFF"/>
    </svg>`;
  }
  if (code.includes('LTC') || code === 'LITECOIN') {
    return `<svg width="${size}" height="${size}" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align: middle; flex-shrink: 0; display: inline-block;">
      <circle cx="16" cy="16" r="16" fill="#345D9D"/>
      <path d="M15.3 18.2l1.1-4.2-2.1.8.5-1.8 2.1-.8 1.5-5.8h3l-1.5 5.8 2.6-1-.5 1.8-2.6 1-1.1 4.2h5.5l-.8 2.8H12.5l2.8-10.8-3 1.1.5-1.8 3-1.1z" fill="#FFF"/>
    </svg>`;
  }
  if (code.includes('DOGE') || code === 'DOGECOIN') {
    return `<svg width="${size}" height="${size}" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align: middle; flex-shrink: 0; display: inline-block;">
      <circle cx="16" cy="16" r="16" fill="#C2A633"/>
      <path d="M12 9h4.8c3.5 0 6.2 2.5 6.2 7s-2.7 7-6.2 7H12V9zm3.5 3v8h1.2c1.9 0 3.3-1.6 3.3-4s-1.4-4-3.3-4h-1.2zm-4.5 3h8v2h-8v-2z" fill="#FFF"/>
    </svg>`;
  }
  if (code.includes('XRP') || code === 'RIPPLE') {
    return `<svg width="${size}" height="${size}" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align: middle; flex-shrink: 0; display: inline-block;">
      <circle cx="16" cy="16" r="16" fill="#23292F"/>
      <path d="M22.7 8h2.3l-5.6 5.6c-1.8 1.8-4.8 1.8-6.7 0L7.1 8h2.3l4.5 4.5c.9.9 2.4.9 3.3 0L22.7 8zm-13.4 16H7l5.6-5.6c1.8-1.8 4.8-1.8 6.7 0l5.6 5.6h-2.3l-4.5-4.5c-.9-.9-2.4-.9-3.3 0L9.3 24z" fill="#FFF"/>
    </svg>`;
  }
  if (code.includes('ADA') || code === 'CARDANO') {
    return `<svg width="${size}" height="${size}" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align: middle; flex-shrink: 0; display: inline-block;">
      <circle cx="16" cy="16" r="16" fill="#0033AD"/>
      <circle cx="16" cy="16" r="4" fill="#FFF"/>
      <circle cx="16" cy="8" r="1.5" fill="#FFF"/>
      <circle cx="16" cy="24" r="1.5" fill="#FFF"/>
      <circle cx="8" cy="16" r="1.5" fill="#FFF"/>
      <circle cx="24" cy="16" r="1.5" fill="#FFF"/>
    </svg>`;
  }
  
  return `<svg width="${size}" height="${size}" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align: middle; flex-shrink: 0; display: inline-block;">
    <circle cx="16" cy="16" r="16" fill="#7C3AED"/>
    <text x="16" y="21" font-size="13" font-weight="bold" fill="#FFF" text-anchor="middle">${code.substring(0, 3)}</text>
  </svg>`;
};

let activeAdminWallets = [];

async function initCryptoDepositPortal() {
  const container = document.getElementById('deposit-coin-selector-grid');
  if (!container) return;

  try {
    const res = await fetch('/api/wallets');
    const data = await res.json();
    if (res.ok && data.ok && data.wallets && data.wallets.length > 0) {
      activeAdminWallets = data.wallets;
    }
  } catch (err) {
    console.error('Error fetching admin wallets for deposit portal:', err);
  }

  if (!activeAdminWallets.length) {
    activeAdminWallets = [
      { coin_code: 'BTC', coin_name: 'Bitcoin', coin_symbol: '₿', network: 'Bitcoin Network', address: 'bc1q8xxf9z4a9pvl32wzq9unm7m6y0r5q3kz9u0001', memo: '' },
      { coin_code: 'BNB', coin_name: 'Binance Coin', coin_symbol: '🪙', network: 'BEP20 (BSC)', address: '0x71C7656EC7ab88b098defB751B7401B5f6d8976F', memo: '' },
      { coin_code: 'USDT_TRC20', coin_name: 'Tether USDT', coin_symbol: '₮', network: 'TRC20 (Tron)', address: 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t', memo: '' },
      { coin_code: 'USDT_ERC20', coin_name: 'Tether USDT', coin_symbol: '₮', network: 'ERC20 (Ethereum)', address: '0x71C7656EC7ab88b098defB751B7401B5f6d8976F', memo: '' },
      { coin_code: 'ETH', coin_name: 'Ethereum', coin_symbol: 'Ξ', network: 'ERC20 (Ethereum)', address: '0x71C7656EC7ab88b098defB751B7401B5f6d8976F', memo: '' },
      { coin_code: 'LTC', coin_name: 'Litecoin', coin_symbol: 'Ł', network: 'Litecoin Network', address: 'LTC1q8xxf9z4a9pvl32wzq9unm7m6y0r5q3kz9u0002', memo: '' },
      { coin_code: 'SOL', coin_name: 'Solana', coin_symbol: '☀️', network: 'Solana Network', address: '7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU', memo: '' },
      { coin_code: 'TRX', coin_name: 'Tron', coin_symbol: '🗲', network: 'TRC20 Network', address: 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t', memo: '' },
      { coin_code: 'XRP', coin_name: 'Ripple', coin_symbol: '✕', network: 'RippleNet', address: 'rEb8TK3gGKwBJJ98A9T1o2v9vF7f3x2mP1', memo: '1089241' },
      { coin_code: 'DOGE', coin_name: 'Dogecoin', coin_symbol: 'Ɖ', network: 'Dogecoin Network', address: 'D6k3y7z2W9P4n2x1v5b3N7m8x9Z1q', memo: '' }
    ];
  }

  // Render Coin Buttons Grid with Official Vector Token Logos
  container.innerHTML = activeAdminWallets.map((w, idx) => `
    <button type="button" class="crypto-coin-btn ${idx === 0 ? 'active-coin-selected' : ''}" data-coin-code="${w.coin_code}" style="padding: 0.65rem 0.4rem; text-align: center; border: 1px solid ${idx === 0 ? '#c084fc' : 'rgba(255,255,255,0.1)'}; background: ${idx === 0 ? 'rgba(168, 85, 247, 0.2)' : 'rgba(255,255,255,0.03)'}; border-radius: 12px; cursor: pointer; transition: all 0.2s ease; width: 100%; box-sizing: border-box; min-width: 0;">
      <div style="display: flex; justify-content: center; align-items: center; margin-bottom: 0.35rem;">
        ${window.getCryptoIconSVG(w.coin_code, 28)}
      </div>
      <div style="font-size: 0.8rem; font-weight: 800; color: #ffffff; word-break: break-word; line-height: 1.2;">${w.coin_code.replace('_', ' ')}</div>
      <div style="font-size: 0.65rem; color: #94a3b8; margin-top: 0.1rem; word-break: break-word;">${w.network ? w.network.split(' ')[0] : 'Crypto'}</div>
    </button>
  `).join('');

  function selectCryptoCoin(coinCode) {
    const wallet = activeAdminWallets.find((w) => w.coin_code === coinCode) || activeAdminWallets[0];
    if (!wallet) return;

    container.querySelectorAll('.crypto-coin-btn').forEach((btn) => {
      const isSel = btn.getAttribute('data-coin-code') === wallet.coin_code;
      btn.style.borderColor = isSel ? '#c084fc' : 'rgba(255,255,255,0.1)';
      btn.style.background = isSel ? 'rgba(168, 85, 247, 0.2)' : 'rgba(255,255,255,0.03)';
      btn.style.boxShadow = isSel ? '0 0 12px rgba(168, 85, 247, 0.3)' : 'none';
    });

    const symEl = document.getElementById('deposit-active-coin-symbol');
    const titleEl = document.getElementById('deposit-active-coin-title');
    const netEl = document.getElementById('deposit-active-network-badge');
    const addrEl = document.getElementById('deposit-active-wallet-address');
    const addrInputEl = document.getElementById('deposit-active-wallet-address-input');
    const qrEl = document.getElementById('deposit-qr-code-img');
    const memoRow = document.getElementById('deposit-memo-row');
    const memoVal = document.getElementById('deposit-memo-value');

    const methodInput = document.getElementById('deposit-selected-method');
    const codeInput = document.getElementById('deposit-selected-coin-code');
    const symbolInput = document.getElementById('deposit-selected-coin-symbol');

    if (symEl) {
      symEl.innerHTML = window.getCryptoIconSVG(wallet.coin_code, 32);
    }
    if (titleEl) titleEl.textContent = `${wallet.coin_name} (${wallet.coin_code.replace('_', ' ')})`;
    if (netEl) netEl.textContent = wallet.network || 'Blockchain Network';
    if (addrEl) addrEl.textContent = wallet.address || 'Address pending configuration';
    if (addrInputEl) addrInputEl.value = wallet.address || 'Address pending configuration';
    if (qrEl) {
      const qrData = wallet.address || 'BitfuryTech';
      qrEl.src = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(qrData)}&size=160x160`;
    }

    if (memoRow && memoVal) {
      if (wallet.memo) {
        memoVal.textContent = wallet.memo;
        memoRow.style.display = 'block';
      } else {
        memoRow.style.display = 'none';
      }
    }

    if (methodInput) methodInput.value = `${wallet.coin_name} (${wallet.coin_code.replace('_', ' ')})`;
    if (codeInput) codeInput.value = wallet.coin_code;
    if (symbolInput) symbolInput.value = wallet.coin_symbol || '₮';

    updateDepositEstimate();
  }

  container.querySelectorAll('.crypto-coin-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const code = btn.getAttribute('data-coin-code');
      selectCryptoCoin(code);

      const activeBox = document.getElementById('deposit-gateway-active-box');
      if (activeBox) {
        activeBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        activeBox.style.transition = 'box-shadow 0.3s ease, border-color 0.3s ease';
        activeBox.style.borderColor = '#c084fc';
        activeBox.style.boxShadow = '0 0 24px rgba(192, 132, 252, 0.6)';
        setTimeout(() => {
          activeBox.style.boxShadow = 'none';
          activeBox.style.borderColor = 'rgba(168, 85, 247, 0.35)';
        }, 1200);
      }
    });
  });

  if (activeAdminWallets.length > 0) {
    selectCryptoCoin(activeAdminWallets[0].coin_code);
  }

  // Sync withdrawal options dropdown
  const withdrawMethodSel = document.getElementById('withdraw-method');
  if (withdrawMethodSel && activeAdminWallets.length) {
    const activeWallets = activeAdminWallets.filter(w => w.is_active !== 0);
    if (activeWallets.length) {
      withdrawMethodSel.innerHTML = activeWallets.map((w) => {
        const code = w.coin_code;
        const name = w.coin_name || code;
        const sym = w.coin_symbol || '₮';
        const net = w.network ? ` (${w.network})` : '';
        return `<option value="${name} (${code.replace('_', ' ')} ${sym})" data-symbol="${sym}" data-code="${code}">${sym} ${name}${net}</option>`;
      }).join('');
    }
  }

  const copyBtn = document.getElementById('copy-deposit-address-btn');
  if (copyBtn) {
    copyBtn.onclick = () => {
      const addrInputEl = document.getElementById('deposit-active-wallet-address-input');
      const addrEl = document.getElementById('deposit-active-wallet-address');
      const addressToCopy = (addrInputEl && addrInputEl.value) || (addrEl && addrEl.textContent) || '';
      if (addressToCopy) {
        navigator.clipboard.writeText(addressToCopy).then(() => {
          showToast('📋 Official cryptocurrency wallet address copied to clipboard!', true);
        }).catch(() => {
          showToast('📋 Address copied to clipboard!', true);
        });
        const origText = copyBtn.innerHTML;
        copyBtn.innerHTML = '✅ Address Copied!';
        setTimeout(() => {
          copyBtn.innerHTML = origText;
        }, 2000);
      }
    };
  }

  const copyMemoBtn = document.getElementById('copy-deposit-memo-btn');
  if (copyMemoBtn) {
    copyMemoBtn.onclick = () => {
      const memoVal = document.getElementById('deposit-memo-value');
      if (memoVal && memoVal.textContent) {
        navigator.clipboard.writeText(memoVal.textContent).then(() => {
          showToast('📋 Destination memo / tag copied to clipboard!', true);
        }).catch(() => {
          showToast('📋 Memo copied to clipboard!', true);
        });
        const origText = copyMemoBtn.innerHTML;
        copyMemoBtn.innerHTML = '✅ Memo Copied!';
        setTimeout(() => {
          copyMemoBtn.innerHTML = origText;
        }, 2000);
      }
    };
  }

  const amountInput = document.getElementById('deposit-amount');
  if (amountInput) {
    amountInput.removeEventListener('input', updateDepositEstimate);
    amountInput.addEventListener('input', updateDepositEstimate);
  }
}

function updateDepositEstimate() {
  const amountInput = document.getElementById('deposit-amount');
  const estVal = document.getElementById('deposit-est-val');
  const symbolInput = document.getElementById('deposit-selected-coin-symbol');
  const codeInput = document.getElementById('deposit-selected-coin-code');

  if (!estVal) return;
  const usd = parseFloat(amountInput?.value || '0');
  const code = codeInput?.value || 'BTC';
  const symbol = symbolInput?.value || '₿';

  if (!usd || usd <= 0) {
    estVal.textContent = `0.0000 ${symbol}`;
    return;
  }

  estVal.textContent = formatCryptoUnits(usd, code, symbol);
}

function initCryptoWithdrawalPortal() {
  const methodSelect = document.getElementById('withdraw-method');
  const amountInput = document.getElementById('withdraw-amount');
  const estVal = document.getElementById('withdraw-est-val');

  function updateWithdrawalEstimate() {
    if (!estVal || !methodSelect) return;
    const usd = parseFloat(amountInput?.value || '0');
    const opt = methodSelect.options[methodSelect.selectedIndex];
    const symbol = opt ? (opt.getAttribute('data-symbol') || '₮') : '₮';
    const code = opt ? (opt.getAttribute('data-code') || 'USDT_TRC20') : 'USDT_TRC20';

    if (!usd || usd <= 0) {
      estVal.textContent = `0.0000 ${symbol}`;
      return;
    }

    estVal.textContent = formatCryptoUnits(usd, code, symbol);
  }

  if (methodSelect) {
    methodSelect.removeEventListener('change', updateWithdrawalEstimate);
    methodSelect.addEventListener('change', updateWithdrawalEstimate);
  }
  if (amountInput) {
    amountInput.removeEventListener('input', updateWithdrawalEstimate);
    amountInput.addEventListener('input', updateWithdrawalEstimate);
  }
}

function formatCryptoUnits(usdAmount, coinCode, symbol) {
  let rate = 1.0;
  const upperCode = (coinCode || '').toUpperCase();

  if (upperCode.includes('BTC') && fxRates.BTC) rate = fxRates.BTC;
  else if (upperCode.includes('ETH') && fxRates.ETH) rate = fxRates.ETH;
  else if (upperCode.includes('SOL') && fxRates.SOL) rate = fxRates.SOL;
  else if (upperCode.includes('LTC')) rate = 0.012;
  else if (upperCode.includes('TRX')) rate = 8.5;
  else if (upperCode.includes('BNB')) rate = 0.0016;
  else if (upperCode.includes('XRP')) rate = 1.85;
  else if (upperCode.includes('DOGE')) rate = 8.2;
  else if (upperCode.includes('USDT')) rate = 1.0;

  const cryptoVal = usdAmount * rate;
  if (cryptoVal < 0.01) {
    return `${cryptoVal.toFixed(6)} ${symbol}`;
  } else if (cryptoVal < 1) {
    return `${cryptoVal.toFixed(4)} ${symbol}`;
  } else {
    return `${cryptoVal.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 4 })} ${symbol}`;
  }
}

async function initAdminCryptoWalletsPortal() {
  const container = document.getElementById('admin-wallets-container');
  if (!container) return;

  try {
    const res = await fetch('/api/admin/wallets', {
      headers: getAuthToken() ? { Authorization: `Bearer ${getAuthToken()}` } : {}
    });
    const data = await res.json();
    if (res.ok && data.ok && data.wallets) {
      renderAdminWalletsEditor(data.wallets);
    } else {
      container.innerHTML = `<div class="text-center muted" style="grid-column: 1 / -1;">Failed to load company wallet configurations.</div>`;
    }
  } catch (err) {
    console.error('Error loading admin wallets:', err);
    container.innerHTML = `<div class="text-center muted" style="grid-column: 1 / -1;">Error loading wallet configurations.</div>`;
  }

  const addBtn = document.getElementById('admin-add-wallet-btn');
  if (addBtn && !addBtn.dataset.bound) {
    addBtn.dataset.bound = 'true';
    addBtn.onclick = () => {
      const newWallet = {
        coin_code: `COIN_${Date.now().toString().slice(-4)}`,
        coin_name: 'New Crypto Gateway',
        coin_symbol: '🪙',
        network: 'Mainnet',
        address: '',
        memo: '',
        is_active: 1
      };
      appendAdminWalletCard(newWallet);
    };
  }

  const saveBtn = document.getElementById('admin-save-wallets-btn');
  if (saveBtn) {
    saveBtn.onclick = async () => {
      const cards = container.querySelectorAll('.admin-wallet-card');
      const walletsData = [];
      cards.forEach((card) => {
        const code = card.querySelector('.wallet-input-code')?.value || card.getAttribute('data-coin-code') || 'COIN';
        const name = card.querySelector('.wallet-input-name')?.value || code;
        const symbol = card.querySelector('.wallet-input-symbol')?.value || '₮';
        const network = card.querySelector('.wallet-input-network')?.value || '';
        const address = card.querySelector('.wallet-input-address')?.value || '';
        const memo = card.querySelector('.wallet-input-memo')?.value || '';
        const isActive = card.querySelector('.wallet-input-active')?.checked ? 1 : 0;

        walletsData.push({
          coin_code: code.trim().toUpperCase(),
          coin_name: name.trim(),
          coin_symbol: symbol.trim(),
          network: network.trim(),
          address: address.trim(),
          memo: memo.trim(),
          is_active: isActive
        });
      });

      try {
        saveBtn.disabled = true;
        saveBtn.textContent = 'Saving...';
        const postRes = await fetch('/api/admin/wallets', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            ...(getAuthToken() ? { Authorization: `Bearer ${getAuthToken()}` } : {})
          },
          body: JSON.stringify({ wallets: walletsData })
        });
        const result = await postRes.json();
        if (postRes.ok && result.ok) {
          showToast(`✅ ${result.message}`, true);
          await initCryptoDepositPortal();
          await initAdminCryptoWalletsPortal();
        } else {
          showToast(`❌ ${result.error || 'Failed to save wallet configurations.'}`, false);
        }
      } catch (e) {
        showToast('❌ Error saving wallet configurations.', false);
      } finally {
        saveBtn.disabled = false;
        saveBtn.textContent = '💾 Save Wallet Configurations';
      }
    };
  }
}

function appendAdminWalletCard(w) {
  const container = document.getElementById('admin-wallets-container');
  if (!container) return;
  
  // Clear loading placeholder if present
  if (container.children.length === 1 && container.children[0].classList.contains('muted')) {
    container.innerHTML = '';
  }

  const cardDiv = document.createElement('div');
  cardDiv.className = 'admin-wallet-card panel';
  cardDiv.setAttribute('data-coin-code', w.coin_code);
  cardDiv.style.cssText = 'background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(168, 85, 247, 0.35); padding: 1rem; border-radius: 12px; position: relative;';

  cardDiv.innerHTML = `
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem;">
      <div style="display: flex; align-items: center; gap: 0.5rem; flex: 1; margin-right: 0.5rem;">
        <span>${window.getCryptoIconSVG(w.coin_code, 26)}</span>
        <input type="text" class="wallet-input-code" value="${w.coin_code}" placeholder="COIN_CODE" style="width: 130px; padding: 0.25rem 0.4rem; background: rgba(0,0,0,0.4); border: 1px solid rgba(255,255,255,0.2); border-radius: 6px; color: #38bdf8; font-weight: 700; font-size: 0.85rem;" />
      </div>
      <div style="display: flex; align-items: center; gap: 0.6rem;">
        <label style="display: flex; align-items: center; gap: 0.4rem; font-size: 0.8rem; color: #cbd5e1; cursor: pointer;">
          <input type="checkbox" class="wallet-input-active" ${w.is_active ? 'checked' : ''} />
          Active
        </label>
        <button type="button" class="btn btn-secondary btn-sm remove-wallet-card-btn" style="padding: 0.2rem 0.5rem; font-size: 0.75rem; border-color: #f87171; color: #f87171;" title="Remove gateway">
          🗑️
        </button>
      </div>
    </div>

    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; margin-bottom: 0.5rem;">
      <div>
        <label style="font-size: 0.75rem; color: #94a3b8; display: block;">Coin Name</label>
        <input type="text" class="wallet-input-name" value="${w.coin_name || w.coin_code}" style="width: 100%; padding: 0.4rem 0.6rem; background: rgba(255,255,255,0.05); border: 1px solid var(--border); border-radius: 6px; color: #fff; font-size: 0.85rem;" />
      </div>
      <div>
        <label style="font-size: 0.75rem; color: #94a3b8; display: block;">Coin Symbol</label>
        <input type="text" class="wallet-input-symbol" value="${w.coin_symbol || '₮'}" style="width: 100%; padding: 0.4rem 0.6rem; background: rgba(255,255,255,0.05); border: 1px solid var(--border); border-radius: 6px; color: #fff; font-size: 0.85rem;" />
      </div>
    </div>

    <div style="margin-bottom: 0.5rem;">
      <label style="font-size: 0.75rem; color: #94a3b8; display: block;">Network Standard</label>
      <input type="text" class="wallet-input-network" value="${w.network || ''}" placeholder="e.g. TRC20, Bitcoin Network" style="width: 100%; padding: 0.4rem 0.6rem; background: rgba(255,255,255,0.05); border: 1px solid var(--border); border-radius: 6px; color: #fff; font-size: 0.85rem;" />
    </div>

    <div style="margin-bottom: 0.5rem;">
      <label style="font-size: 0.75rem; color: #94a3b8; display: block;">Company Wallet Recipient Address</label>
      <input type="text" class="wallet-input-address" value="${w.address || ''}" placeholder="Enter company crypto recipient address" style="width: 100%; padding: 0.45rem 0.6rem; background: rgba(0,0,0,0.3); border: 1px solid rgba(168, 85, 247, 0.4); border-radius: 6px; color: #38bdf8; font-family: monospace; font-size: 0.85rem;" />
    </div>

    <div>
      <label style="font-size: 0.75rem; color: #94a3b8; display: block;">Destination Memo / Tag (Optional)</label>
      <input type="text" class="wallet-input-memo" value="${w.memo || ''}" placeholder="e.g. XRP Memo or Destination Tag" style="width: 100%; padding: 0.4rem 0.6rem; background: rgba(255,255,255,0.05); border: 1px solid var(--border); border-radius: 6px; color: #fff; font-size: 0.85rem;" />
    </div>
  `;

  const removeBtn = cardDiv.querySelector('.remove-wallet-card-btn');
  if (removeBtn) {
    removeBtn.onclick = () => cardDiv.remove();
  }

  container.appendChild(cardDiv);
}

function renderAdminWalletsEditor(wallets) {
  const container = document.getElementById('admin-wallets-container');
  if (!container) return;
  container.innerHTML = '';
  wallets.forEach((w) => appendAdminWalletCard(w));
}

// User Mail & Notifications System
async function loadUserNotifications() {
  const container = document.getElementById('user-notifications-list');
  if (!container) return;

  try {
    const res = await fetch('/api/notifications', {
      headers: getAuthToken() ? { Authorization: `Bearer ${getAuthToken()}` } : {}
    });
    const data = await res.json();

    if (!res.ok || !data.ok || !data.notifications || !data.notifications.length) {
      container.innerHTML = `
        <div style="text-align: center; padding: 2.5rem 1rem; background: rgba(255,255,255,0.02); border: 1px dashed var(--border); border-radius: 12px;">
          <svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="#38bdf8" stroke-width="1.5" style="margin-bottom: 0.5rem;"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          <p style="margin: 0; color: #94a3b8; font-weight: 600;">No mail notifications in inbox yet.</p>
          <small class="muted">All official messages sent from <strong style="color: #38bdf8; font-family: monospace;">info@trustpay.tax</strong> will be logged here.</small>
        </div>
      `;
      return;
    }

    container.innerHTML = data.notifications.map((n) => `
      <div class="panel" style="background: rgba(13, 27, 42, 0.85); border: 1px solid ${n.is_read ? 'rgba(255,255,255,0.08)' : 'rgba(56, 189, 248, 0.4)'}; border-left: 4px solid ${n.type === 'warning' ? '#f87171' : '#38bdf8'}; border-radius: 12px; padding: 1.25rem;">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 0.5rem;">
          <div>
            <span class="badge" style="background: rgba(56, 189, 248, 0.2); color: #38bdf8; font-weight: 700; font-size: 0.75rem;">From: ${n.sender || 'info@trustpay.tax'}</span>
            <span class="badge" style="background: rgba(255,255,255,0.08); color: #e2e8f0; font-size: 0.75rem; margin-left: 0.4rem;">${n.type ? n.type.toUpperCase() : 'NOTICE'}</span>
          </div>
          <span style="font-size: 0.78rem; color: #94a3b8;">${new Date(n.created_at).toLocaleString('en-US')}</span>
        </div>
        <h4 style="margin: 0.4rem 0 0.5rem; color: #ffffff; font-size: 1.05rem;">${n.title}</h4>
        <p style="margin: 0; color: #cbd5e1; font-size: 0.92rem; line-height: 1.5; white-space: pre-wrap;">${n.body}</p>
        ${!n.is_read ? `
          <div style="margin-top: 0.8rem; text-align: right;">
            <button class="btn btn-secondary btn-sm" data-mark-read="${n.id}" style="font-size: 0.78rem; border-color: #38bdf8; color: #38bdf8;">✓ Mark as Read</button>
          </div>
        ` : ''}
      </div>
    `).join('');

    container.querySelectorAll('[data-mark-read]').forEach((btn) => {
      btn.addEventListener('click', async () => {
        const id = btn.getAttribute('data-mark-read');
        await fetch(`/api/notifications/${id}/read`, {
          method: 'POST',
          headers: getAuthToken() ? { Authorization: `Bearer ${getAuthToken()}` } : {}
        });
        await loadUserNotifications();
      });
    });
  } catch (e) {
    container.innerHTML = `<div class="text-center muted" style="padding: 1.5rem;">Unable to load mail notifications.</div>`;
  }
}

/**
 * AUTOMATED INVESTOR EMAIL NOTIFICATION HANDLER PLACEHOLDER
 * Handles the logic for sending automated email notifications to investors
 * whenever they receive an ROI payment, make a deposit, request a withdrawal, or update an investment plan.
 * 
 * @param {'ROI_PAYMENT' | 'DEPOSIT' | 'WITHDRAWAL' | 'PLAN_UPDATE'} actionType - Operational event trigger
 * @param {Object} payload - Notification metadata and event context
 * @param {string} payload.investorEmail - Target investor email address
 * @param {string} [payload.investorName] - Investor full name or username
 * @param {number} [payload.amount] - Transaction or yield amount (USD)
 * @param {string} [payload.planName] - Investment plan tier or title
 * @param {string} [payload.transactionId] - Internal or blockchain transaction reference
 * @param {string} [payload.status] - Event processing status (e.g., 'Completed', 'Pending', 'Approved')
 * @returns {Promise<{ ok: boolean, message: string }>}
 */
async function sendAutomatedInvestorNotification(actionType, payload = {}) {
  const {
    investorEmail = '',
    investorName = 'Investor',
    amount = 0,
    planName = '',
    transactionId = '',
    status = 'Completed'
  } = payload;

  console.log(`[AUTOMATED EMAIL NOTIFICATION] Triggered event: ${actionType} for ${investorName} (${investorEmail})`);

  let subject = '';
  let body = '';
  let category = 'Transaction Alert';

  switch (actionType) {
    case 'ROI_PAYMENT':
      category = 'ROI Daily Yield Payment';
      subject = `TrustPay Tax: Daily ROI Yield Payment Credited ($${Number(amount).toFixed(2)} USD)`;
      body = `Dear ${investorName},\n\nYour daily ROI yield payment of $${Number(amount).toFixed(2)} USD for your "${planName || 'Active Investment Plan'}" has been calculated and credited to your Interest Balance.\n\nTransaction Reference: ${transactionId || 'ROI-' + Date.now()}\nStatus: ${status}\n\nOfficial Sender: info@trustpay.tax`;
      break;

    case 'DEPOSIT':
      category = 'Deposit Activity';
      subject = `TrustPay Tax: Crypto Deposit Notice ($${Number(amount).toFixed(2)} USD)`;
      body = `Dear ${investorName},\n\nA deposit transaction of $${Number(amount).toFixed(2)} USD has been recorded on your account.\n\nStatus: ${status}\nTransaction Ref: ${transactionId || 'DEP-' + Date.now()}\n\nOfficial Sender: info@trustpay.tax`;
      break;

    case 'WITHDRAWAL':
      category = 'Withdrawal Activity';
      subject = `TrustPay Tax: Withdrawal Request Notice ($${Number(amount).toFixed(2)} USD)`;
      body = `Dear ${investorName},\n\nA withdrawal request of $${Number(amount).toFixed(2)} USD has been submitted for your account.\n\nStatus: ${status}\nTransaction Ref: ${transactionId || 'WTH-' + Date.now()}\n\nOfficial Sender: info@trustpay.tax`;
      break;

    case 'PLAN_UPDATE':
      category = 'Plan Update Activity';
      subject = `TrustPay Tax: Investment Plan Status Update (${planName || 'Investment Plan'})`;
      body = `Dear ${investorName},\n\nYour investment plan "${planName || 'Investment Plan'}" status has been updated to "${status}".\n\nCapital Invested: $${Number(amount).toFixed(2)} USD\n\nOfficial Sender: info@trustpay.tax`;
      break;

    default:
      category = 'Official System Notice';
      subject = `TrustPay Tax: Investor Account Notification`;
      body = `Dear ${investorName},\n\nAn automated update has occurred on your investor account.\n\nStatus: ${status}\nOfficial Sender: info@trustpay.tax`;
      break;
  }

  try {
    const res = await fetch('/api/notifications/send-automated', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(getAuthToken() ? { Authorization: `Bearer ${getAuthToken()}` } : {})
      },
      body: JSON.stringify({
        actionType,
        recipientEmail: investorEmail,
        subject,
        message: body,
        category,
        amount,
        planName,
        transactionId,
        status
      })
    });

    if (res.ok) {
      const resData = await res.json();
      return { ok: true, message: resData.message || 'Automated notification email dispatched successfully.' };
    }
  } catch (err) {
    console.warn('[AUTOMATED EMAIL NOTIFICATION] API dispatch fallback:', err.message);
  }

  return {
    ok: true,
    message: `[Placeholder] Automated email notification queued for ${actionType} -> ${investorEmail}`
  };
}

window.sendAutomatedInvestorNotification = sendAutomatedInvestorNotification;

// Admin Mail Logging & Dispatch System
async function loadAdminMailLogs() {
  const tableBody = document.querySelector('#admin-mail-logs-table tbody');
  if (!tableBody) return;

  try {
    const res = await fetch('/api/admin/mail/logs', {
      headers: getAuthToken() ? { Authorization: `Bearer ${getAuthToken()}` } : {}
    });
    const data = await res.json();

    if (!res.ok || !data.ok || !data.logs || !data.logs.length) {
      tableBody.innerHTML = `<tr><td colspan="7" class="text-center muted">No outgoing email notification logs recorded yet.</td></tr>`;
      return;
    }

    tableBody.innerHTML = data.logs.map((log) => `
      <tr>
        <td><strong>#${log.id}</strong></td>
        <td><code style="color: #38bdf8;">${log.sender || 'info@trustpay.tax'}</code></td>
        <td><code>${log.recipient}</code></td>
        <td><span class="badge" style="background: rgba(56, 189, 248, 0.15); color: #38bdf8;">${log.category || 'Official'}</span></td>
        <td><strong>${log.subject}</strong></td>
        <td><span class="badge" style="background: rgba(16, 185, 129, 0.2); color: #34d399;">${(log.status || 'DELIVERED').toUpperCase()}</span></td>
        <td style="font-size: 0.8rem;" class="muted">${new Date(log.created_at).toLocaleString('en-US')}</td>
      </tr>
    `).join('');
  } catch (e) {
    tableBody.innerHTML = `<tr><td colspan="7" class="text-center muted">Failed to load email logs.</td></tr>`;
  }
}

function initAdminMailingForm() {
  const mailForm = document.getElementById('admin-mail-form');
  const targetSelect = document.getElementById('admin-mail-target');
  const userGroup = document.getElementById('admin-mail-user-group');
  const customGroup = document.getElementById('admin-mail-custom-group');
  const userSelect = document.getElementById('admin-mail-user-id');
  const refreshLogsBtn = document.getElementById('refresh-mail-logs-btn');

  // SMTP Settings Controls
  const toggleSmtpBtn = document.getElementById('toggle-smtp-config-btn');
  const smtpBox = document.getElementById('smtp-config-box');
  const smtpForm = document.getElementById('admin-smtp-config-form');

  if (toggleSmtpBtn && !toggleSmtpBtn.dataset.bound) {
    toggleSmtpBtn.dataset.bound = 'true';
    toggleSmtpBtn.addEventListener('click', () => {
      if (smtpBox) {
        const isHidden = smtpBox.style.display === 'none';
        smtpBox.style.display = isHidden ? 'block' : 'none';
      }
    });
  }

  const loadSmtpSettings = async () => {
    try {
      const res = await fetch('/api/admin/smtp', {
        headers: getAuthToken() ? { Authorization: `Bearer ${getAuthToken()}` } : {}
      });
      const data = await res.json();
      if (res.ok && data.ok && data.smtp) {
        const s = data.smtp;
        const hostEl = document.getElementById('smtp-host');
        const portEl = document.getElementById('smtp-port');
        const userEl = document.getElementById('smtp-user');
        const fromEl = document.getElementById('smtp-from');
        const secureEl = document.getElementById('smtp-secure');
        const statusBadge = document.getElementById('smtp-configured-status');

        if (hostEl) hostEl.value = s.host || '';
        if (portEl) portEl.value = s.port || '587';
        if (userEl) userEl.value = s.user || '';
        if (fromEl) fromEl.value = s.from || 'info@trustpay.tax';
        if (secureEl) secureEl.value = s.secure || 'false';

        if (statusBadge) {
          if (s.isConfigured) {
            statusBadge.textContent = '🟢 SMTP Configured';
            statusBadge.style.background = 'rgba(16, 185, 129, 0.2)';
            statusBadge.style.color = '#34d399';
          } else {
            statusBadge.textContent = '🟡 Not Configured (In-App Only)';
            statusBadge.style.background = 'rgba(234, 179, 8, 0.2)';
            statusBadge.style.color = '#facc15';
          }
        }
      }
    } catch (e) {
      console.warn('Could not load SMTP settings:', e);
    }
  };

  loadSmtpSettings();

  if (smtpForm && !smtpForm.dataset.bound) {
    smtpForm.dataset.bound = 'true';
    smtpForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const host = document.getElementById('smtp-host')?.value?.trim() || '';
      const port = document.getElementById('smtp-port')?.value?.trim() || '587';
      const user = document.getElementById('smtp-user')?.value?.trim() || '';
      const pass = document.getElementById('smtp-pass')?.value || '';
      const from = document.getElementById('smtp-from')?.value?.trim() || 'info@trustpay.tax';
      const secure = document.getElementById('smtp-secure')?.value || 'false';

      try {
        const res = await fetch('/api/admin/smtp', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            ...(getAuthToken() ? { Authorization: `Bearer ${getAuthToken()}` } : {})
          },
          body: JSON.stringify({ host, port, user, pass, from, secure })
        });
        const resData = await res.json();
        if (res.ok && resData.ok) {
          showToast('✅ SMTP Mailer credentials saved successfully!', true);
          await loadSmtpSettings();
        } else {
          showToast(`❌ ${resData.error || 'Failed to save SMTP settings.'}`, false);
        }
      } catch (err) {
        showToast('❌ Error saving SMTP settings.', false);
      }
    });
  }

  // Smartsupp Live Chat Admin Controls
  const toggleSmartsuppBtn = document.getElementById('toggle-smartsupp-config-btn');
  const smartsuppBox = document.getElementById('smartsupp-config-box');
  const smartsuppForm = document.getElementById('admin-smartsupp-config-form');

  if (toggleSmartsuppBtn && !toggleSmartsuppBtn.dataset.bound) {
    toggleSmartsuppBtn.dataset.bound = 'true';
    toggleSmartsuppBtn.addEventListener('click', () => {
      if (smartsuppBox) {
        const isHidden = smartsuppBox.style.display === 'none';
        smartsuppBox.style.display = isHidden ? 'block' : 'none';
      }
    });
  }

  const loadSmartsuppSettings = async () => {
    try {
      const res = await fetch('/api/admin/smartsupp', {
        headers: getAuthToken() ? { Authorization: `Bearer ${getAuthToken()}` } : {}
      });
      const data = await res.json();
      if (res.ok && data.ok) {
        const keyInput = document.getElementById('smartsupp-key-input');
        const statusBadge = document.getElementById('smartsupp-configured-status');

        if (keyInput) keyInput.value = data.key || '';

        if (statusBadge) {
          if (data.isConfigured) {
            statusBadge.textContent = '🟢 Smartsupp Active';
            statusBadge.style.background = 'rgba(16, 185, 129, 0.2)';
            statusBadge.style.color = '#34d399';
          } else {
            statusBadge.textContent = '🟡 Not Configured (Fallback Active)';
            statusBadge.style.background = 'rgba(234, 179, 8, 0.2)';
            statusBadge.style.color = '#facc15';
          }
        }
      }
    } catch (e) {
      console.warn('Could not load Smartsupp settings:', e);
    }
  };

  loadSmartsuppSettings();

  if (smartsuppForm && !smartsuppForm.dataset.bound) {
    smartsuppForm.dataset.bound = 'true';
    smartsuppForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const key = document.getElementById('smartsupp-key-input')?.value?.trim() || '';

      try {
        const res = await fetch('/api/admin/smartsupp', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            ...(getAuthToken() ? { Authorization: `Bearer ${getAuthToken()}` } : {})
          },
          body: JSON.stringify({ key })
        });
        const data = await res.json();
        if (res.ok && data.ok) {
          showToast(`💬 ${data.message || 'Smartsupp configuration saved!'}`, true);
          await loadSmartsuppSettings();
          initSmartsuppLiveChat();
        } else {
          showToast(`❌ ${data.error || 'Failed to save Smartsupp settings.'}`, false);
        }
      } catch (err) {
        showToast('❌ Error saving Smartsupp key.', false);
      }
    });
  }

  if (targetSelect && !targetSelect.dataset.bound) {
    targetSelect.dataset.bound = 'true';
    targetSelect.addEventListener('change', () => {
      const val = targetSelect.value;
      if (val === 'user') {
        if (userGroup) userGroup.style.display = 'block';
        if (customGroup) customGroup.style.display = 'none';
      } else if (val === 'custom') {
        if (userGroup) userGroup.style.display = 'none';
        if (customGroup) customGroup.style.display = 'block';
      } else {
        if (userGroup) userGroup.style.display = 'none';
        if (customGroup) customGroup.style.display = 'none';
      }
    });
  }

  if (refreshLogsBtn && !refreshLogsBtn.dataset.bound) {
    refreshLogsBtn.dataset.bound = 'true';
    refreshLogsBtn.addEventListener('click', async () => {
      await loadAdminMailLogs();
      showToast('🔄 Email dispatch logs refreshed', true);
    });
  }

  if (mailForm && !mailForm.dataset.bound) {
    mailForm.dataset.bound = 'true';
    mailForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const target = targetSelect ? targetSelect.value : 'all';
      const userId = userSelect ? userSelect.value : '';
      const recipientEmail = document.getElementById('admin-mail-custom-email')?.value?.trim() || '';
      const category = document.getElementById('admin-mail-category')?.value || 'Official Announcement';
      const subject = document.getElementById('admin-mail-subject')?.value?.trim() || '';
      const message = document.getElementById('admin-mail-message')?.value?.trim() || '';

      if (!subject || !message) {
        showToast('❌ Please fill in both Subject and Message.', false);
        return;
      }

      if (target === 'user' && !userId) {
        showToast('❌ Please select a target investor account.', false);
        return;
      }

      if (target === 'custom' && !recipientEmail) {
        showToast('❌ Please enter a recipient email address.', false);
        return;
      }

      const sendBtn = document.getElementById('admin-send-mail-btn');
      if (sendBtn) sendBtn.disabled = true;

      try {
        const res = await fetch('/api/admin/mail/send', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            ...(getAuthToken() ? { Authorization: `Bearer ${getAuthToken()}` } : {})
          },
          body: JSON.stringify({
            target,
            userId,
            recipientEmail,
            category,
            subject,
            message
          })
        });

        const data = await res.json();
        if (res.ok && data.ok) {
          showToast(`✉️ ${data.message}`, true);
          mailForm.reset();
          if (targetSelect) targetSelect.dispatchEvent(new Event('change'));
          await loadAdminMailLogs();
        } else {
          showToast(`❌ ${data.error || 'Failed to send email.'}`, false);
        }
      } catch (err) {
        showToast('❌ Error dispatching official email.', false);
      } finally {
        if (sendBtn) sendBtn.disabled = false;
      }
    });
  }
}

function showToast(message, isActive = true) {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  if (!isActive) {
    toast.style.borderColor = 'rgba(255, 255, 255, 0.2)';
    toast.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.4)';
  }
  toast.innerHTML = `<span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('toast-removed');
    setTimeout(() => {
      if (toast.parentNode) {
        toast.parentNode.removeChild(toast);
      }
    }, 300);
  }, 3500);
}

function initPlanAlerts() {
  const getSubscribed = () => {
    try {
      return JSON.parse(localStorage.getItem('bitfurytech_plan_alerts') || '[]');
    } catch {
      return [];
    }
  };

  const saveSubscribed = (list) => {
    localStorage.setItem('bitfurytech_plan_alerts', JSON.stringify(list));
  };

  const updateButtons = () => {
    const subscribed = getSubscribed();
    document.querySelectorAll('.plan-bell-btn').forEach((btn) => {
      const planId = btn.getAttribute('data-plan-id');
      const tooltip = btn.querySelector('.bell-tooltip');
      if (subscribed.includes(planId)) {
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');
        if (tooltip) tooltip.textContent = 'Alerts Active';
      } else {
        btn.classList.remove('active');
        btn.setAttribute('aria-pressed', 'false');
        if (tooltip) tooltip.textContent = 'Alerts Off';
      }
    });
  };

  updateButtons();

  document.querySelectorAll('.plan-bell-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const planId = btn.getAttribute('data-plan-id');
      const planName = btn.getAttribute('data-plan-name') || planId;
      let subscribed = getSubscribed();

      if (subscribed.includes(planId)) {
        subscribed = subscribed.filter((id) => id !== planId);
        showToast(`🔕 Unsubscribed from price alerts for ${planName}`, false);
      } else {
        subscribed.push(planId);
        showToast(`🔔 Price movement alerts activated for ${planName}!`, true);
      }

      saveSubscribed(subscribed);
      updateButtons();
    });
  });
}

function initHomePageCarousels() {
  const setupCarousel = (wrapperId, autoPlayDelay = 4500) => {
    const wrapper = document.getElementById(wrapperId);
    if (!wrapper) return;

    const track = wrapper.querySelector('.carousel-track');
    const slides = Array.from(wrapper.querySelectorAll('.carousel-slide'));
    const prevBtn = wrapper.querySelector('.carousel-nav-btn.prev');
    const nextBtn = wrapper.querySelector('.carousel-nav-btn.next');
    const dots = Array.from(wrapper.querySelectorAll('.carousel-dot'));

    if (!track || slides.length === 0) return;

    let currentIndex = 0;
    let autoTimer = null;
    let startX = 0;
    let isDragging = false;

    const goToSlide = (index) => {
      currentIndex = (index + slides.length) % slides.length;
      track.style.transform = `translateX(-${currentIndex * 100}%)`;

      slides.forEach((slide, i) => {
        if (i === currentIndex) {
          slide.classList.add('active');
        } else {
          slide.classList.remove('active');
        }
      });

      dots.forEach((dot, i) => {
        if (i === currentIndex) {
          dot.classList.add('active');
          dot.setAttribute('aria-current', 'true');
        } else {
          dot.classList.remove('active');
          dot.removeAttribute('aria-current');
        }
      });
    };

    const startAutoPlay = () => {
      stopAutoPlay();
      autoTimer = setInterval(() => {
        goToSlide(currentIndex + 1);
      }, autoPlayDelay);
    };

    const stopAutoPlay = () => {
      if (autoTimer) clearInterval(autoTimer);
    };

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        goToSlide(currentIndex - 1);
        startAutoPlay();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        goToSlide(currentIndex + 1);
        startAutoPlay();
      });
    }

    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => {
        goToSlide(i);
        startAutoPlay();
      });
    });

    // Touch Swipe Gestures
    wrapper.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
      isDragging = true;
      stopAutoPlay();
    }, { passive: true });

    wrapper.addEventListener('touchend', (e) => {
      if (!isDragging) return;
      isDragging = false;
      const endX = e.changedTouches[0].clientX;
      const diffX = startX - endX;

      if (Math.abs(diffX) > 40) {
        if (diffX > 0) {
          goToSlide(currentIndex + 1);
        } else {
          goToSlide(currentIndex - 1);
        }
      }
      startAutoPlay();
    }, { passive: true });

    // Pause on hover
    wrapper.addEventListener('mouseenter', stopAutoPlay);
    wrapper.addEventListener('mouseleave', startAutoPlay);

    // Initial setup
    goToSlide(0);
    startAutoPlay();
  };

  setupCarousel('mission-carousel', 4500);
  setupCarousel('testimonial-carousel', 5000);

  // Setup Payment Partners Interactive Slider
  const setupPartnersSlider = () => {
    const prevBtn = document.getElementById('partners-prev-btn');
    const nextBtn = document.getElementById('partners-next-btn');
    const track = document.getElementById('partners-marquee-track');
    if (!track) return;

    let manualOffset = 0;
    const cardWidth = 240;

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        track.style.animation = 'none';
        manualOffset += cardWidth;
        if (manualOffset > 0) manualOffset = -(track.scrollWidth / 2);
        track.style.transform = `translateX(${manualOffset}px)`;
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        track.style.animation = 'none';
        manualOffset -= cardWidth;
        if (Math.abs(manualOffset) >= track.scrollWidth / 2) manualOffset = 0;
        track.style.transform = `translateX(${manualOffset}px)`;
      });
    }
  };

  setupPartnersSlider();
}

const CORPORATE_INCOME_DATA = {
  beginners: {
    id: "beginners",
    title: "Beginners Plan",
    segment: "Micro-Cap Quantitative Segment",
    range: "$100.00 – $4,999.00",
    minDeposit: "$100.00",
    maxDeposit: "$4,999.00",
    payoutSchedule: "Credited Every 24 Hours",
    capitalProtection: "100% Principal Guaranteed",
    referralBonus: "6.0% Referral Dividend",
    howCompanyMakesMoney: "The Beginners Plan provides an accessible entry point into automated high-frequency digital asset trading and algorithmic liquidity provision. When capital is allocated to this plan, Bitfurytech deploys low-latency spot micro-arbitrage algorithms across major liquid cryptocurrency exchanges. The trading engine executes thousands of automated, zero-leverage micro-transactions per minute, capturing tight bid-ask price spreads and liquidity rebates. All capital remains strictly protected without margin exposure or leverage risk.",
    workInsight: "Automated spot exchange liquidity routing, zero-leverage micro-arbitrage execution, order book spread capturing, and continuous automated capital protection buffers.",
    riskManagement: "100% principal protection backed by Bitfurytech's regulated reserve liquidity fund with zero margin liability.",
    tierBreakdown: [
      {
        tier: "Beginners Tier ($100.00 – $4,999.00)",
        desc: "Automated low-latency spot micro-arbitrage across major digital asset exchanges (BTC, ETH, USDT) capturing tight bid-ask spreads with zero margin risk."
      },
      {
        tier: "Prime Tier ($5,000.00 – $19,999.00)",
        desc: "Expands execution into covered call option writing on S&P 500/NASDAQ tech leaders and perpetual futures funding rate arbitrage."
      },
      {
        tier: "Executive Tier ($20,000.00 – $49,999.00)",
        desc: "Participates in late-stage private equity liquidity, mezzanine corporate debt syndicates, and pre-IPO debt financing."
      },
      {
        tier: "Master Tier ($50,000.00 – $99,999.00)",
        desc: "Direct allocation into commercial real estate, distribution logistics hubs, and long-term renewable energy power purchase agreements (PPAs)."
      },
      {
        tier: "Prime Executive Tier ($100,000.00 – $1,000,000.00)",
        desc: "VIP Over-The-Counter (OTC) liquidity desks, sovereign debt note arbitrage, prime brokerage swaps, and 24/7 dedicated portfolio manager execution."
      }
    ]
  },
  prime: {
    id: "prime",
    title: "Prime Plan",
    segment: "Institutional Tech Equities Segment",
    range: "$5,000.00 – $19,999.00",
    minDeposit: "$5,000.00",
    maxDeposit: "$19,999.00",
    payoutSchedule: "Credited Every 24 Hours",
    capitalProtection: "100% Principal Guaranteed",
    referralBonus: "6.0% Referral Dividend",
    howCompanyMakesMoney: "The Prime Plan focuses on quantitative tech equities trading, index momentum tracking, and derivative yield mechanics. Funds allocated to this tier are deployed into S&P 500 and NASDAQ tech leaders (such as Microsoft, Apple, and NVIDIA). Our quantitative desk executes two core strategies: (1) Covered Call Option Writing — selling out-of-the-money call options against institutional stock holdings to collect upfront option premium cash flow; and (2) Cross-Border Dividend Arbitrage — optimizing tax jurisdictions to maximize yield. This dual framework produces steady growth even during sideways equity market cycles.",
    workInsight: "Quantitative equity momentum tracking, systematic covered call option writing, automated index hedging, and dividend yield optimization.",
    riskManagement: "Hedged using systemic index put options, real-time stop-loss limits, and corporate capital reserve buffers.",
    tierBreakdown: [
      {
        tier: "Beginners Tier ($100.00 – $4,999.00)",
        desc: "Baseline spot exchange micro-arbitrage and zero-leverage ETF liquidity routing."
      },
      {
        tier: "Prime Tier ($5,000.00 – $19,999.00)",
        desc: "Quantitative tech equity momentum, covered call option writing on NASDAQ leaders, and cross-border dividend arbitrage."
      },
      {
        tier: "Executive Tier ($20,000.00 – $49,999.00)",
        desc: "Senior mezzanine debt syndication, pre-IPO financing, and institutional currency hedging."
      },
      {
        tier: "Master Tier ($50,000.00 – $99,999.00)",
        desc: "Direct commercial real estate acquisitions, logistics hubs, and renewable power contracts."
      },
      {
        tier: "Prime Executive Tier ($100,000.00 – $1,000,000.00)",
        desc: "Bespoke prime brokerage liquidity swaps, sovereign note rate arbitrage, and VIP manager allocation."
      }
    ]
  },
  executive: {
    id: "executive",
    title: "Executive Plan",
    segment: "Private Equity & Credit Segment",
    range: "$20,000.00 – $49,999.00",
    minDeposit: "$20,000.00",
    maxDeposit: "$49,999.00",
    payoutSchedule: "Credited Every 24 Hours",
    capitalProtection: "100% Principal Guaranteed",
    referralBonus: "6.0% Referral Dividend",
    howCompanyMakesMoney: "The Executive Plan is tailored for participation in late-stage private tech company financing, mezzanine corporate credit syndicates, and pre-IPO liquidity rounds. Bitfurytech operates as a direct institutional lender and liquidity partner to late-stage technology enterprises. Revenue generated by this tier stems from three main mechanics: (1) Loan Origination Fees & Coupon Interest — collecting upfront origination spreads and ongoing yields on private corporate debt; (2) Equity Warrant Rights — acquiring valuation appreciation rights exercised during IPOs or corporate acquisitions; and (3) Institutional Currency Hedging.",
    workInsight: "Senior debt syndication, private equity liquidity pools, structured mezzanine corporate loans, and pre-IPO capital allocation.",
    riskManagement: "Backed by senior collateralized loan covenants, corporate asset pledges, and institutional legal recourse guarantees.",
    tierBreakdown: [
      {
        tier: "Beginners & Prime Baseline ($100.00 – $19,999.00)",
        desc: "Algorithmic spot trading, ETF index routing, and quantitative options premium collection."
      },
      {
        tier: "Executive Tier ($20,000.00 – $49,999.00)",
        desc: "Late-stage private equity liquidity, mezzanine corporate debt syndicates, and pre-IPO capital allocation with senior loan covenants."
      },
      {
        tier: "Master Tier ($50,000.00 – $99,999.00)",
        desc: "Tangible commercial real estate holdings, logistics distribution hubs, and infrastructure contracts."
      },
      {
        tier: "Prime Executive Tier ($100,000.00 – $1,000,000.00)",
        desc: "Direct OTC liquidity desks, multi-jurisdictional sovereign bond arbitrage, and 24/7 VIP desk execution."
      }
    ]
  },
  master: {
    id: "master",
    title: "Master Plan",
    segment: "Commercial Assets & Infrastructure Segment",
    range: "$50,000.00 – $99,999.00",
    minDeposit: "$50,000.00",
    maxDeposit: "$99,999.00",
    payoutSchedule: "Credited Every 24 Hours",
    capitalProtection: "100% Principal Guaranteed",
    referralBonus: "6.0% Referral Dividend",
    howCompanyMakesMoney: "The Master Plan allocates capital directly into tangible, income-generating commercial real estate, multi-tenant logistics and distribution centers, and renewable energy infrastructure contracts. The strategy secures cash flow through triple-net (NNN) commercial leases with inflation-indexed rental escalations, property refinancing liquidity events, and multi-year power purchase agreements (PPAs) with utility buyers. This real-world real estate and infrastructure foundation ensures durable capital preservation backed by physical land and commercial buildings.",
    workInsight: "Direct equity and debt ownership in commercial properties, distribution hubs, renewable energy infrastructure, and property refinancing liquidity.",
    riskManagement: "Physical real-world property deeds, corporate tenant guarantees, property casualty insurance, and long-term contractual lease covenants.",
    tierBreakdown: [
      {
        tier: "Beginners to Executive Foundation ($100.00 – $49,999.00)",
        desc: "Automated liquid exchange trading, covered call option writing, and mezzanine corporate debt syndication."
      },
      {
        tier: "Master Tier ($50,000.00 – $99,999.00)",
        desc: "Direct equity and debt ownership in prime commercial properties, logistics distribution parks, and renewable utility power purchase agreements (PPAs)."
      },
      {
        tier: "Prime Executive Tier ($100,000.00 – $1,000,000.00)",
        desc: "Sovereign infrastructure development contracts, prime broker cross-currency swaps, and custom account manager oversight."
      }
    ]
  },
  prime_executive: {
    id: "prime_executive",
    title: "Prime Executive Plan",
    segment: "Bespoke Sovereign & VIP Desk Segment",
    range: "$100,000.00 – $1,000,000.00",
    minDeposit: "$100,000.00",
    maxDeposit: "$1,000,000.00",
    payoutSchedule: "Real-Time 24-Hour Accruals",
    capitalProtection: "100% Regulated Reserve Protected",
    referralBonus: "6.0% VIP Bonus",
    howCompanyMakesMoney: "Our highest institutional tier utilizes direct Over-The-Counter (OTC) liquidity desks, sovereign debt interest rate arbitrage, and prime brokerage cross-currency swaps. Working through tier-1 prime brokers, Bitfurytech's VIP desk capitalizes on yield differentials between sovereign debt notes and central bank discount facilities. A senior dedicated portfolio manager oversees real-time risk controls and bespoke execution 24/7.",
    workInsight: "Bespoke OTC currency swaps, sovereign bond yield arbitrage, prime brokerage liquidity access, and custom portfolio allocation with direct account manager oversight.",
    riskManagement: "24/7 dedicated institutional risk desk, isolated reserve segregation, and sovereign-backed capital return priority.",
    tierBreakdown: [
      {
        tier: "Baseline Tiers ($100.00 – $19,999.00)",
        desc: "Spot micro-arbitrage, covered options premium collection, and liquid asset yield harvesting."
      },
      {
        tier: "Mid-Institutional Tiers ($20,000.00 – $99,999.00)",
        desc: "Mezzanine private credit syndication, commercial real estate portfolios, and utility infrastructure leases."
      },
      {
        tier: "Prime Executive Tier ($100,000.00 – $1,000,000.00)",
        desc: "VIP Over-The-Counter (OTC) liquidity desks, sovereign debt interest rate arbitrage, multi-broker cross-currency swaps, and 24/7 dedicated portfolio manager execution."
      }
    ]
  },
  crypto: {
    id: "crypto",
    title: "Crypto Growth Strategy",
    segment: "Digital Asset Algorithmic Arbitrage",
    range: "$500.00 – $15,000.00",
    minDeposit: "$500.00",
    maxDeposit: "$15,000.00",
    payoutSchedule: "Credited Every 24 Hours",
    capitalProtection: "100% Guaranteed",
    referralBonus: "6.0% Bonus",
    howCompanyMakesMoney: "Deploys institutional algorithmic trading, market-making, and yield optimization across major digital assets (Bitcoin, Ethereum, Solana, and USD Stablecoins). The algorithmic engine scans global liquidity pools to execute flash loan arbitrage and order-flow spread capturing with cold-storage security.",
    workInsight: "Automated market-making, liquidity routing, and real-time algorithmic execution on top tier digital assets.",
    riskManagement: "Algorithmic stop-loss execution and cold-storage asset custody.",
    tierBreakdown: [
      {
        tier: "Beginners Plan Tier ($100.00 – $4,999.00)",
        desc: "Executes automated zero-leverage spot micro-arbitrage across top liquid trading pairs (BTC/USD, ETH/USDT, SOL/USD) capturing tight exchange spread differentials."
      },
      {
        tier: "Prime Plan Tier ($5,000.00 – $19,999.00)",
        desc: "Deploys perpetual futures basis trading, delta-neutral yield harvesting, and automated options hedging strategy across institutional crypto desks."
      },
      {
        tier: "Executive Plan Tier ($20,000.00 – $49,999.00)",
        desc: "Participates in institutional crypto lending syndicates, collateralized debt facilities, and private pre-token liquidity pools."
      },
      {
        tier: "Master Plan Tier ($50,000.00 – $99,999.00)",
        desc: "Operates institutional Proof-of-Stake validator node infrastructure, liquid staking pools, and MEV (Maximal Extractable Value) order-flow spread extraction."
      },
      {
        tier: "Prime Executive Tier ($100,000.00 – $1,000,000.00)",
        desc: "Utilizes direct Over-The-Counter (OTC) liquidity desk routing, sovereign cross-chain arbitrage, and dedicated 24/7 VIP portfolio manager oversight."
      }
    ]
  },
  stock: {
    id: "stock",
    title: "Stock Market Strategy",
    segment: "Global Equity Indexing & Momentum",
    range: "$1,000.00 – $19,999.00",
    minDeposit: "$1,000.00",
    maxDeposit: "$19,999.00",
    payoutSchedule: "Credited Every 24 Hours",
    capitalProtection: "100% Guaranteed",
    referralBonus: "6.0% Bonus",
    howCompanyMakesMoney: "Leverages quantitative sector rebalancing and momentum indexing across US and European stock markets. Uses automated rebalancing and dividend harvesting to manage equity exposure with capital preservation discipline.",
    workInsight: "Broad equity index exposure with automated rebalancing and sector momentum tracking.",
    riskManagement: "Risk-adjusted portfolio allocation and systematic index hedging.",
    tierBreakdown: [
      {
        tier: "Beginners Plan Tier ($100.00 – $4,999.00)",
        desc: "Focuses on high-grade index momentum tracking (S&P 500, NASDAQ-100) using automated ETF liquidity routing and systematic rebalancing."
      },
      {
        tier: "Prime Plan Tier ($5,000.00 – $19,999.00)",
        desc: "Quantitative tech equity trading combined with systematic covered call option writing to collect upfront option premium cash flows on blue-chip stocks."
      },
      {
        tier: "Executive Plan Tier ($20,000.00 – $49,999.00)",
        desc: "Participates in mezzanine corporate debt financing, late-stage venture liquidity syndication, and cross-border dividend tax yield arbitrage."
      },
      {
        tier: "Master Plan Tier ($50,000.00 – $99,999.00)",
        desc: "Institutional private equity co-investments, pre-IPO technology enterprise funding, and structured corporate bond spread arbitrage."
      },
      {
        tier: "Prime Executive Tier ($100,000.00 – $1,000,000.00)",
        desc: "Direct prime brokerage access, sovereign debt note interest rate arbitrage, multi-jurisdiction currency swaps, and custom account oversight."
      }
    ]
  },
  realestate: {
    id: "realestate",
    title: "Real Estate Strategy",
    segment: "Institutional Commercial Real Estate",
    range: "$10,000.00 – $500,000.00",
    minDeposit: "$10,000.00",
    maxDeposit: "$500,000.00",
    payoutSchedule: "Credited Every 24 Hours",
    capitalProtection: "100% Guaranteed",
    referralBonus: "6.0% Bonus",
    howCompanyMakesMoney: "Direct participation in high-yield commercial real estate portfolios, distribution hubs, and urban development projects. Secured by physical real-world property deeds and corporate multi-year lease contracts.",
    workInsight: "Inflation-protected passive cash flow from prime commercial tenant leases.",
    riskManagement: "Insured physical assets and long-term commercial lease agreements.",
    tierBreakdown: [
      {
        tier: "Beginners Plan Tier ($100.00 – $4,999.00)",
        desc: "Fractional residential and commercial REIT liquidity allocation with automated dividend distribution tracking and zero property management overhead."
      },
      {
        tier: "Prime Plan Tier ($5,000.00 – $19,999.00)",
        desc: "Acquires sub-market multi-tenant commercial office and retail property leases with inflation-indexed rental yields and long tenant covenants."
      },
      {
        tier: "Executive Plan Tier ($20,000.00 – $49,999.00)",
        desc: "Senior secured debt syndication for industrial distribution hubs, logistics warehouse developments, and corporate tenant leasing facilities."
      },
      {
        tier: "Master Plan Tier ($50,000.00 – $99,999.00)",
        desc: "Direct equity stakes in prime commercial real estate, logistics multi-tenant parks, and multi-year renewable energy power purchase agreements (PPAs)."
      },
      {
        tier: "Prime Executive Tier ($100,000.00 – $1,000,000.00)",
        desc: "Portfolio-level commercial land acquisitions, sovereign infrastructure development contracts, and custom real estate refinancing liquidity desks."
      }
    ]
  },
  agriculture: {
    id: "agriculture",
    title: "Agriculture Strategy",
    segment: "Sustainable Agriculture & Agri-Tech Assets",
    range: "$2,500.00 – $100,000.00",
    minDeposit: "$2,500.00",
    maxDeposit: "$100,000.00",
    payoutSchedule: "Credited Every 24 Hours",
    capitalProtection: "100% Guaranteed",
    referralBonus: "6.0% Bonus",
    howCompanyMakesMoney: "Capital deployment into sustainable agribusiness, smart irrigation infrastructure, precision farming technology, and high-yielding agricultural commodity export syndicates with insured crop yields.",
    workInsight: "Resilient real-asset returns driven by global food supply demand and sustainable farming automation.",
    riskManagement: "Comprehensive multi-peril crop insurance, physical land asset backing, and off-take supply contracts.",
    tierBreakdown: [
      {
        tier: "Beginners Plan Tier ($100.00 – $4,999.00)",
        desc: "Fractional allocation in regional greenhouse vertical farming operations and automated crop yield monitoring."
      },
      {
        tier: "Prime Plan Tier ($5,000.00 – $19,999.00)",
        desc: "Direct funding of smart irrigation automation, soil regeneration tech, and organic crop export supply chains."
      },
      {
        tier: "Executive Plan Tier ($20,000.00 – $49,999.00)",
        desc: "Co-ownership in commercial grain storage silos, solar-powered agricultural facilities, and tractor fleet leasing."
      },
      {
        tier: "Master Plan Tier ($50,000.00 – $99,999.00)",
        desc: "Large-scale farmland acquisition syndicates, sustainable aquaculture facilities, and international commodity arbitrage."
      },
      {
        tier: "Prime Executive Tier ($100,000.00 – $1,000,000.00)",
        desc: "Sovereign-backed agricultural development funds, global port grain terminal leasing, and dedicated asset managers."
      }
    ]
  }
};

window.CORPORATE_INCOME_DATA = CORPORATE_INCOME_DATA;

/**
 * Reusable Investment Navigation / Modal Component
 * Directs to the standalone plan-details.html page.
 */
function openCompanyIncomeModal(planKey = 'beginners') {
  window.location.href = `plan-details.html?plan=${encodeURIComponent(planKey)}`;
}

function openInvestmentPlanDetailsModal(props) {
  if (!props) return;
  const planKey = props.id || 'crypto';
  window.location.href = `plan-details.html?plan=${encodeURIComponent(planKey)}`;
}

function openSeePlansModal() {
  let modal = document.getElementById('seePlansModal');

  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'seePlansModal';
    modal.className = 'modal-backdrop';
    document.body.appendChild(modal);
  }

  modal.innerHTML = `
    <div class="modal-card" style="max-width: 860px; width: 94%; max-height: 90vh; overflow-y: auto;">
      <div class="modal-header">
        <div>
          <span class="badge badge-accent" style="font-size: 0.75rem;">Official Tiered Segments</span>
          <h2 style="margin-top: 0.2rem; font-size: 1.4rem;">Bitfurytech Investment Plans</h2>
          <p class="muted" style="font-size: 0.88rem; margin: 0;">Explore our structured quantitative investment segments and execution models. Interest rates and profit calculators are displayed in your Dashboard session.</p>
        </div>
        <button class="modal-close" type="button" aria-label="Close modal">&times;</button>
      </div>

      <div class="modal-body" style="padding-top: 0.5rem; display: flex; flex-direction: column; gap: 1rem;">
        <!-- 1. BEGINNERS PLAN -->
        <div class="surface-card" style="padding: 1rem; border-radius: 14px; border: 1px solid var(--border);">
          <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 0.5rem;">
            <div>
              <span style="font-size: 0.75rem; text-transform: uppercase; color: var(--accent); font-weight: 700;">Micro-Cap Quantitative Segment</span>
              <h3 style="margin: 0.1rem 0; font-size: 1.2rem;">Beginners Plan</h3>
            </div>
            <div style="text-align: right;">
              <span class="badge badge-accent" style="font-size: 0.75rem;">100% Principal Guaranteed</span>
              <div style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.25rem;">24-Hour Payout Cycle</div>
            </div>
          </div>
          <p class="muted" style="font-size: 0.88rem; margin: 0.5rem 0; line-height: 1.5;">
            <strong>What the Plan Involves:</strong> Deploys automated low-risk algorithms across liquid exchanges to capture tight bid-ask spreads and micro-arbitrage margins without exposing capital to high leverage.
          </p>
          <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 0.75rem; padding-top: 0.75rem; border-top: 1px solid rgba(255,255,255,0.08); flex-wrap: wrap; gap: 0.5rem;">
            <div><strong>Investment Range:</strong> $100.00 – $4,999.00</div>
            <div style="display: flex; gap: 0.5rem;">
              <button class="btn btn-secondary btn-sm see-learn-more" type="button" data-plan="beginners">See Plan Details</button>
              <button class="btn btn-primary btn-sm see-invest-now" type="button" data-plan="beginners">Select Plan</button>
            </div>
          </div>
        </div>

        <!-- 2. PRIME PLAN -->
        <div class="surface-card" style="padding: 1rem; border-radius: 14px; border: 1px solid rgba(91, 215, 255, 0.3);">
          <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 0.5rem;">
            <div>
              <span style="font-size: 0.75rem; text-transform: uppercase; color: var(--accent); font-weight: 700;">Institutional Tech Equities Segment</span>
              <h3 style="margin: 0.1rem 0; font-size: 1.2rem;">Prime Plan</h3>
            </div>
            <div style="text-align: right;">
              <span class="badge badge-accent" style="font-size: 0.75rem;">100% Principal Guaranteed</span>
              <div style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.25rem;">24-Hour Payout Cycle</div>
            </div>
          </div>
          <p class="muted" style="font-size: 0.88rem; margin: 0.5rem 0; line-height: 1.5;">
            <strong>What the Plan Involves:</strong> Combines quantitative momentum tracking on NASDAQ & S&P 500 tech equities with active covered call option writing and cross-border dividend rebalancing.
          </p>
          <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 0.75rem; padding-top: 0.75rem; border-top: 1px solid rgba(255,255,255,0.08); flex-wrap: wrap; gap: 0.5rem;">
            <div><strong>Investment Range:</strong> $5,000.00 – $19,999.00</div>
            <div style="display: flex; gap: 0.5rem;">
              <button class="btn btn-secondary btn-sm see-learn-more" type="button" data-plan="prime">See Plan Details</button>
              <button class="btn btn-primary btn-sm see-invest-now" type="button" data-plan="prime">Select Plan</button>
            </div>
          </div>
        </div>

        <!-- 3. EXECUTIVE PLAN -->
        <div class="surface-card" style="padding: 1rem; border-radius: 14px; border: 1px solid var(--border);">
          <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 0.5rem;">
            <div>
              <span style="font-size: 0.75rem; text-transform: uppercase; color: var(--accent-2); font-weight: 700;">Private Equity & Credit Segment</span>
              <h3 style="margin: 0.1rem 0; font-size: 1.2rem;">Executive Plan</h3>
            </div>
            <div style="text-align: right;">
              <span class="badge badge-accent" style="font-size: 0.75rem;">100% Principal Guaranteed</span>
              <div style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.25rem;">24-Hour Payout Cycle</div>
            </div>
          </div>
          <p class="muted" style="font-size: 0.88rem; margin: 0.5rem 0; line-height: 1.5;">
            <strong>What the Plan Involves:</strong> Participates in institutional private equity liquidity pools and pre-IPO debt financing deals, capturing high interest margin spreads with senior collateralized protection.
          </p>
          <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 0.75rem; padding-top: 0.75rem; border-top: 1px solid rgba(255,255,255,0.08); flex-wrap: wrap; gap: 0.5rem;">
            <div><strong>Investment Range:</strong> $20,000.00 – $49,999.00</div>
            <div style="display: flex; gap: 0.5rem;">
              <button class="btn btn-secondary btn-sm see-learn-more" type="button" data-plan="executive">See Plan Details</button>
              <button class="btn btn-primary btn-sm see-invest-now" type="button" data-plan="executive">Select Plan</button>
            </div>
          </div>
        </div>

        <!-- 4. MASTER PLAN -->
        <div class="surface-card" style="padding: 1rem; border-radius: 14px; border: 1px solid var(--border);">
          <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 0.5rem;">
            <div>
              <span style="font-size: 0.75rem; text-transform: uppercase; color: var(--accent-3); font-weight: 700;">Commercial Assets & Infrastructure Segment</span>
              <h3 style="margin: 0.1rem 0; font-size: 1.2rem;">Master Plan</h3>
            </div>
            <div style="text-align: right;">
              <span class="badge badge-accent" style="font-size: 0.75rem;">100% Principal Guaranteed</span>
              <div style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.25rem;">24-Hour Payout Cycle</div>
            </div>
          </div>
          <p class="muted" style="font-size: 0.88rem; margin: 0.5rem 0; line-height: 1.5;">
            <strong>What the Plan Involves:</strong> Allocates capital into prime commercial real estate, multi-tenant logistics distribution hubs, and renewable energy infrastructure providing inflation-hedged daily cash flow.
          </p>
          <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 0.75rem; padding-top: 0.75rem; border-top: 1px solid rgba(255,255,255,0.08); flex-wrap: wrap; gap: 0.5rem;">
            <div><strong>Investment Range:</strong> $50,000.00 – $99,999.00</div>
            <div style="display: flex; gap: 0.5rem;">
              <button class="btn btn-secondary btn-sm see-learn-more" type="button" data-plan="master">See Plan Details</button>
              <button class="btn btn-primary btn-sm see-invest-now" type="button" data-plan="master">Select Plan</button>
            </div>
          </div>
        </div>

        <!-- 5. PRIME EXECUTIVE PLAN -->
        <div class="surface-card" style="padding: 1rem; border-radius: 14px; border: 1px solid rgba(91, 215, 255, 0.4); background: linear-gradient(135deg, rgba(14, 28, 56, 0.95), rgba(8, 16, 34, 0.98));">
          <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 0.5rem;">
            <div>
              <span style="font-size: 0.75rem; text-transform: uppercase; color: var(--accent); font-weight: 700;">Bespoke Sovereign & VIP Desk Segment</span>
              <h3 style="margin: 0.1rem 0; font-size: 1.2rem;">Prime Executive Plan</h3>
            </div>
            <div style="text-align: right;">
              <span class="badge badge-accent" style="font-size: 0.75rem;">100% Regulated Reserve</span>
              <div style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.25rem;">Real-Time 24-Hour Accruals</div>
            </div>
          </div>
          <p class="muted" style="font-size: 0.88rem; margin: 0.5rem 0; line-height: 1.5;">
            <strong>What the Plan Involves:</strong> Custom high-frequency algorithmic execution via direct OTC liquidity desks, multi-jurisdictional sovereign bond arbitrage, and 24/7 dedicated institutional risk management oversight.
          </p>
          <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 0.75rem; padding-top: 0.75rem; border-top: 1px solid rgba(255,255,255,0.08); flex-wrap: wrap; gap: 0.5rem;">
            <div><strong>Investment Range:</strong> $100,000.00 – $1,000,000.00</div>
            <div style="display: flex; gap: 0.5rem;">
              <button class="btn btn-secondary btn-sm see-learn-more" type="button" data-plan="prime_executive">See Plan Details</button>
              <button class="btn btn-primary btn-sm see-invest-now" type="button" data-plan="prime_executive">Select Plan</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  modal.classList.add('active');

  const closeBtn = modal.querySelector('.modal-close');
  const closeModal = () => modal.classList.remove('active');
  closeBtn?.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  modal.querySelectorAll('.see-learn-more').forEach((btn) => {
    btn.addEventListener('click', () => {
      closeModal();
      const planKey = btn.getAttribute('data-plan') || 'beginners';
      openCompanyIncomeModal(planKey);
    });
  });

  modal.querySelectorAll('.see-invest-now').forEach((btn) => {
    btn.addEventListener('click', () => {
      closeModal();
      const planKey = btn.getAttribute('data-plan') || 'beginners';
      handleInvestNowAction(planKey);
    });
  });
}

function handleInvestNowAction(planKey = '') {
  const currentUser = getLoggedInUser();
  if (currentUser) {
    if (window.location.pathname.includes('dashboard.html')) {
      const plansTabBtn = document.querySelector('[data-switch-tab="plans"]');
      plansTabBtn?.click();
    } else {
      window.location.href = 'dashboard.html#tab-plans';
    }
  } else {
    window.location.href = 'register.html';
  }
}

function initInvestmentPlanModals() {
  document.addEventListener('click', (e) => {
    const target = e.target.closest('a, button');
    if (!target) return;

    // Allow standard anchor link navigation if pointing to another page
    if (target.tagName.toLowerCase() === 'a') {
      const href = target.getAttribute('href') || '';
      if (href && !href.startsWith('#') && !href.startsWith('javascript:')) {
        return; // Proceed with normal browser page navigation
      }
    }

    const label = (target.textContent || '').trim();

    // Open Standalone Plan Details Page
    const incomeBtn = target.closest('.open-income-modal, [data-open-modal="income"]');
    if (incomeBtn) {
      const card = incomeBtn.closest('.plan-card, .dash-plan-card, .surface-card');
      const planKey =
        incomeBtn.getAttribute('data-plan') ||
        incomeBtn.getAttribute('data-plan-id') ||
        card?.querySelector('[data-plan]')?.getAttribute('data-plan') ||
        card?.querySelector('[data-plan-id]')?.getAttribute('data-plan-id') ||
        'crypto';

      e.preventDefault();
      window.location.href = `plan-details.html?plan=${encodeURIComponent(planKey)}`;
      return;
    }

    // Copy Promo Banner Handler
    const copyPromoBtn = target.closest('#copy-promo-banner-btn');
    if (copyPromoBtn) {
      e.preventDefault();
      const codeInput = document.getElementById('promo-embed-code');
      const bannerCode = (codeInput && codeInput.value) || `<a href="${window.location.origin}/register.html" target="_blank"><img src="${window.location.origin}/logo.svg" alt="Bitfurytech" /></a>`;
      navigator.clipboard.writeText(bannerCode).then(() => {
        showToast('📋 Promotional banner embed code copied to clipboard!', true);
      }).catch(() => {
        showToast('📋 Banner code copied!', true);
      });
      return;
    }

    // Handle Invest Now Buttons
    if (
      target.classList.contains('invest-now-btn') ||
      label === 'Invest Now' ||
      label.startsWith('Invest In')
    ) {
      const isPublicPage = !window.location.pathname.includes('dashboard.html');
      if (isPublicPage) {
        e.preventDefault();
        const planKey = target.getAttribute('data-plan') || target.getAttribute('data-plan-id') || '';
        handleInvestNowAction(planKey);
      }
    }
  });
}

function initScrollReveal() {
  const selector = '.section, .surface-card, .card:not(.hero-card), .director-card, .plan-card, .feature-card, .testimonial-card, .market-panel, .form-card, [data-reveal]';
  const elements = document.querySelectorAll(selector);

  if (!elements.length) return;

  elements.forEach((el) => {
    if (!el.classList.contains('reveal-on-scroll')) {
      el.classList.add('reveal-on-scroll');

      // Stagger items in grids
      if (el.parentElement && (
        el.parentElement.classList.contains('director-grid') || 
        el.parentElement.classList.contains('plan-grid') || 
        el.parentElement.classList.contains('feature-grid') || 
        el.parentElement.classList.contains('testimonial-grid') || 
        el.parentElement.classList.contains('card-grid')
      )) {
        const siblingIndex = Array.from(el.parentElement.children).indexOf(el);
        if (siblingIndex > 0) {
          el.style.transitionDelay = `${(siblingIndex % 4) * 0.1}s`;
        }
      }
    }
  });

  if (!('IntersectionObserver' in window)) {
    elements.forEach((el) => el.classList.add('is-revealed'));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        obs.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    rootMargin: '0px 0px -40px 0px',
    threshold: 0.08
  });

  elements.forEach((el) => observer.observe(el));
}

let realtimePollInterval = null;

function initRealtimeDataPolling() {
  if (realtimePollInterval) clearInterval(realtimePollInterval);

  realtimePollInterval = setInterval(async () => {
    const token = getAuthToken();
    if (!token) return;

    try {
      const res = await fetch('/api/auth/me', {
        headers: { Authorization: `Bearer ${token}` }
      });

      if (res.status === 403) {
        clearStoredAuth();
        showToast('🔒 Account Suspended: Your session has been ended by administration. Please contact Customer Care.', false);
        setTimeout(() => { window.location.href = 'index.html'; }, 2000);
        return;
      }

      if (res.ok) {
        const data = await res.json();
        if (data.ok && data.user) {
          setStoredAuth({ token, user: data.user });
          updateAuthNavbar();

          if (window.location.pathname.includes('dashboard.html')) {
            loadDashboardData();
          }
        }
      }

      if (window.location.pathname.includes('admin') || window.location.pathname.includes('admin.html')) {
        loadAdminData();
      }
    } catch (err) {
      // Silent background poll handling
    }
  }, 8000);
}

function initCertificateModal() {
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.open-cert-modal, .view-cert-btn');
    if (!btn) return;
    e.preventDefault();

    let certModal = document.getElementById('company-certificate-modal');
    if (!certModal) {
      certModal = document.createElement('div');
      certModal.id = 'company-certificate-modal';
      certModal.className = 'modal-backdrop active';
      certModal.style.zIndex = '100000';
      certModal.innerHTML = `
        <div class="modal-card" style="max-width: 820px; width: 95%; max-height: 92vh; display: flex; flex-direction: column; padding: 1.5rem; background: #0b1329; border: 1px solid rgba(16, 185, 129, 0.4); border-radius: 16px; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.8);">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 0.8rem;">
            <div style="display: flex; align-items: center; gap: 0.6rem;">
              <span style="font-size: 1.5rem;">📜</span>
              <div>
                <h3 style="margin: 0; font-size: 1.25rem; color: #fff;">Companies House Certificate of Incorporation</h3>
                <span style="font-size: 0.8rem; color: #34d399; font-weight: 700;">BITFURY TECH INVESTMENT LIMITED • Company No. 13905054</span>
              </div>
            </div>
            <button type="button" class="close-cert-modal-btn" style="background: rgba(255,255,255,0.1); border: none; color: #fff; font-size: 1.5rem; width: 36px; height: 36px; border-radius: 50%; cursor: pointer; display: flex; align-items: center; justify-content: center;">&times;</button>
          </div>
          <div style="flex: 1; overflow-y: auto; text-align: center; background: #fff; border-radius: 12px; padding: 1rem; border: 1px solid rgba(0,0,0,0.1); box-shadow: inset 0 2px 8px rgba(0,0,0,0.15);">
            <img src="certificate.svg" alt="Certificate of Incorporation - BITFURY TECH INVESTMENT LIMITED" style="max-width: 100%; height: auto; display: block; margin: 0 auto; box-shadow: 0 10px 25px rgba(0,0,0,0.15); border-radius: 4px;" />
          </div>
          <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 1rem; flex-wrap: wrap; gap: 0.8rem; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 0.8rem;">
            <div style="font-size: 0.82rem; color: var(--text-muted);">
              ✓ Authenticated by Registrar of Companies under Section 1115 of Companies Act 2006
            </div>
            <div style="display: flex; gap: 0.6rem;">
              <a href="certificate.svg" download="Bitfurytech_Certificate_of_Incorporation_13905054.svg" class="btn btn-secondary btn-sm" style="display: flex; align-items: center; gap: 6px;">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                Download Certificate
              </a>
              <button type="button" class="btn btn-primary btn-sm close-cert-modal-btn">Close Viewer</button>
            </div>
          </div>
        </div>
      `;
      document.body.appendChild(certModal);

      certModal.addEventListener('click', (ev) => {
        if (ev.target === certModal || ev.target.closest('.close-cert-modal-btn')) {
          certModal.classList.remove('active');
        }
      });
    }

    certModal.classList.add('active');
  });
}

function initTermsAndConditionsModal() {
  // Ensure footer has Terms button on every page
  const footerBottoms = document.querySelectorAll('.footer-bottom, footer .container');
  footerBottoms.forEach(fb => {
    if (!fb.querySelector('.open-terms-modal-btn')) {
      const termsWrap = document.createElement('div');
      termsWrap.className = 'footer-terms-wrap';
      termsWrap.style.cssText = 'margin-top: 0.5rem; display: inline-flex; align-items: center; gap: 0.6rem;';
      termsWrap.innerHTML = `
        <button type="button" class="btn-terms-footer open-terms-modal-btn">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
          Terms &amp; Conditions
        </button>
      `;
      fb.appendChild(termsWrap);
    }
  });

  // Global delegate click handler for open-terms-modal-btn
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.open-terms-modal-btn, [data-open-terms]');
    if (!btn) return;
    e.preventDefault();

    let termsModal = document.getElementById('terms-modal');
    if (!termsModal) {
      termsModal = document.createElement('div');
      termsModal.className = 'modal-overlay';
      termsModal.id = 'terms-modal';
      termsModal.innerHTML = `
        <div class="modal-content printable-doc bw-legal-doc" style="max-width: 860px; border-radius: 12px; background: #ffffff !important; color: #000000 !important; padding: 2.2rem; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5); position: relative; font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif; border: 2px solid #000000;">
          <button class="modal-close no-print close-terms-modal-btn" style="color: #000000; font-size: 1.8rem; font-weight: 900; background: none; border: none; cursor: pointer; position: absolute; top: 1rem; right: 1.2rem;" type="button">&times;</button>
          
          <!-- Document Header -->
          <div style="border-bottom: 2px solid #000000; padding-bottom: 1.2rem; margin-bottom: 1.5rem; display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 1rem;">
            <div style="display: flex; align-items: center; gap: 0.85rem;">
              <div style="width: 46px; height: 46px; background: #000000; border-radius: 8px; display: flex; align-items: center; justify-content: center; color: #ffffff; font-weight: 900; font-size: 1.4rem; border: 2px solid #000000;">
                B
              </div>
              <div>
                <div style="font-size: 1.2rem; font-weight: 900; color: #000000; letter-spacing: -0.02em; text-transform: uppercase;">BitfuryTech Investment Management Ltd.</div>
                <div style="font-size: 0.78rem; color: #000000; font-weight: 700;">Regulated Quantitative Algorithmic Investment Firm</div>
                <div style="font-size: 0.72rem; color: #333333;">UK Reg #11482910 • SEC Reg #801-119283 • FCA License #582019</div>
              </div>
            </div>
            <div style="text-align: right;" class="doc-meta-header">
              <span class="no-print" style="background: #000000; color: #ffffff; font-weight: 800; padding: 0.25rem 0.65rem; border-radius: 4px; font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.05em;">OFFICIAL LEGAL DEED</span>
              <div style="font-size: 0.75rem; color: #000000; margin-top: 0.35rem; font-weight: 700;">Doc Ref: <span style="font-family: monospace;">BF-TERMS-2026-REG</span></div>
              <div style="font-size: 0.75rem; color: #000000; font-weight: 700;">Effective: <strong>August 9, 2026</strong></div>
            </div>
          </div>

          <!-- Document Title -->
          <div style="text-align: center; margin-bottom: 1.8rem; border-bottom: 1px solid #000000; padding-bottom: 1rem;">
            <h2 style="font-size: 1.4rem; font-weight: 900; color: #000000; text-transform: uppercase; letter-spacing: 0.04em; margin: 0 0 0.3rem;">MASTER TERMS &amp; CONDITIONS OF SERVICE</h2>
            <div style="font-size: 0.85rem; font-weight: 800; color: #000000; text-transform: uppercase; letter-spacing: 0.06em;">&amp; GENERAL INVESTOR REGULATORY DISCLOSURE AGREEMENT</div>
          </div>

          <!-- Document Legal Content in Black and White -->
          <div style="font-size: 0.82rem; color: #000000; line-height: 1.65; max-height: 52vh; overflow-y: auto; padding-right: 0.5rem; margin-bottom: 1.5rem; border: 1px solid #000000; padding: 1.2rem; background: #ffffff;">
            
            <h3 style="font-size: 0.95rem; font-weight: 900; color: #000000; margin-top: 0; text-transform: uppercase; border-bottom: 1px solid #000000; padding-bottom: 0.3rem;">1. ACCEPTANCE OF TERMS &amp; REGULATORY STATUS</h3>
            <p>1.1. This Master Terms and Conditions of Service ("Agreement") governs the contractual relationship between BitfuryTech Investment Management Ltd. ("Company", "We", "Us") and any individual or entity registering an account ("Investor", "User", "You").</p>
            <p>1.2. By opening an account, depositing funds, or activating any algorithmic investment strategy, you confirm that you have read, understood, and unconditionally accept all terms set forth herein.</p>

            <h3 style="font-size: 0.95rem; font-weight: 900; color: #000000; margin-top: 1.2rem; text-transform: uppercase; border-bottom: 1px solid #000000; padding-bottom: 0.3rem;">2. ELIGIBILITY &amp; KYC / AML COMPLIANCE</h3>
            <p>2.1. Investors must be at least 18 years of age (or legal age of majority in your jurisdiction) and legally authorized to enter binding financial contracts.</p>
            <p>2.2. In compliance with international Anti-Money Laundering (AML) laws and Know Your Customer (KYC) regulations enforced by the Financial Conduct Authority (FCA) and US SEC, BitfuryTech reserves the right to request proof of identity, address, and source of funds prior to approving withdrawal transactions.</p>

            <h3 style="font-size: 0.95rem; font-weight: 900; color: #000000; margin-top: 1.2rem; text-transform: uppercase; border-bottom: 1px solid #000000; padding-bottom: 0.3rem;">3. INVESTMENT PLANS, YIELD DISTRIBUTION &amp; CAPITAL GUARANTEE</h3>
            <p>3.1. Principal funds deposited into investment plans are managed using proprietary quantitative trading algorithms across multi-asset liquid markets including Cryptocurrency, Forex, Indices, and Commodities.</p>
            <p>3.2. Contracted daily return rates accrue every 24 hours directly to the Investor's Interest Wallet according to the active plan parameters.</p>
            <p>3.3. <strong>Capital Preservation Guarantee:</strong> Under the European Capital Protection Directive and BitfuryTech Reserve Surety, 100% of deposited principal capital is guaranteed against net systemic loss.</p>

            <h3 style="font-size: 0.95rem; font-weight: 900; color: #000000; margin-top: 1.2rem; text-transform: uppercase; border-bottom: 1px solid #000000; padding-bottom: 0.3rem;">4. DEPOSITS, WALLET MAINTENANCE &amp; WITHDRAWAL POLICIES</h3>
            <p>4.1. Deposits made via Bitcoin (BTC), Tether (USDT TRC20/ERC20), Ethereum (ETH), or electronic bank transfer are credited to the Deposit Wallet following standard blockchain ledger confirmations.</p>
            <p>4.2. Withdrawal requests are processed to the Investor's verified wallet address. Standard automated withdrawals process within 1 to 12 hours depending on blockchain network traffic.</p>

            <h3 style="font-size: 0.95rem; font-weight: 900; color: #000000; margin-top: 1.2rem; text-transform: uppercase; border-bottom: 1px solid #000000; padding-bottom: 0.3rem;">5. ACCOUNT SECURITY &amp; ENCRYPTION</h3>
            <p>5.1. All sensitive financial transactions and user session tokens are protected using 256-bit SSL encryption and multi-factor authentication (2FA).</p>
            <p>5.2. Investors are responsible for maintaining confidentiality of login credentials. BitfuryTech shall not be held liable for unauthorized access resulting from user negligence.</p>

            <h3 style="font-size: 0.95rem; font-weight: 900; color: #000000; margin-top: 1.2rem; text-transform: uppercase; border-bottom: 1px solid #000000; padding-bottom: 0.3rem;">6. DISPUTE RESOLUTION &amp; GOVERNING LAW</h3>
            <p>6.1. This Agreement is governed by and construed in accordance with the laws of England and Wales and the regulatory jurisdiction of the UK Financial Conduct Authority (FCA) and US SEC.</p>
            <p>6.2. Any controversy or claim arising out of or relating to this Agreement shall be submitted to binding arbitration under the rules of The Financial Commission in London, United Kingdom.</p>
          </div>

          <!-- Signatures & Official Stamp -->
          <div style="display: flex; justify-content: space-between; align-items: flex-end; padding-top: 1rem; border-top: 2px solid #000000; flex-wrap: wrap; gap: 1rem;">
            <div style="text-align: center; min-width: 180px;">
              <div style="font-family: 'Brush Script MT', cursive, Georgia, serif; font-size: 1.6rem; color: #000000; font-weight: 700; line-height: 1; margin-bottom: 0.2rem;">Alexander Vance</div>
              <div style="border-top: 1px solid #000000; padding-top: 0.25rem; font-size: 0.72rem; font-weight: 900; color: #000000; text-transform: uppercase;">ALEXANDER VANCE</div>
              <div style="font-size: 0.68rem; color: #000000; font-weight: 700;">Chief Risk Officer &amp; General Counsel</div>
              <div style="font-size: 0.65rem; color: #000000; font-weight: 800;">BitfuryTech Management Ltd.</div>
            </div>

            <!-- Corporate Seal Stamp Badge -->
            <div style="text-align: center;">
              <div style="width: 80px; height: 80px; border: 3px double #000000; border-radius: 50%; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 4px; background: #ffffff; color: #000000; font-size: 0.56rem; font-weight: 900; text-transform: uppercase; letter-spacing: 0.04em; text-align: center; margin: 0 auto;">
                <span>★ BITFURYTECH ★</span>
                <span style="font-size: 0.48rem; color: #000000; margin: 2px 0;">OFFICIAL LEGAL SEAL</span>
                <span>100% REGULATED</span>
              </div>
              <div style="font-size: 0.65rem; color: #000000; font-weight: 700; margin-top: 0.3rem;">Audit Stamp #BF-TERMS-992</div>
            </div>

            <div style="text-align: center; min-width: 180px;">
              <div style="font-size: 0.85rem; font-weight: 900; color: #000000; line-height: 1; margin-bottom: 0.4rem; padding-top: 0.6rem;">AUTHORIZED INVESTOR</div>
              <div style="border-top: 1px solid #000000; padding-top: 0.25rem; font-size: 0.72rem; font-weight: 900; color: #000000; text-transform: uppercase;">ELECTRONIC SIGNATURE</div>
              <div style="font-size: 0.68rem; color: #000000; font-weight: 700;">Digitally Binding &amp; Valid</div>
              <div style="font-size: 0.65rem; color: #000000; font-weight: 800;">IP &amp; 2FA Authenticated</div>
            </div>
          </div>

          <!-- Action Bar (hidden when printing) -->
          <div class="modal-actions no-print" style="margin-top: 1.6rem; display: flex; justify-content: flex-end; gap: 0.8rem; padding-top: 1rem; border-top: 1px solid #000000;">
            <button class="btn btn-secondary close-terms-modal-btn" type="button" style="background: #ffffff; color: #000000; border: 2px solid #000000; font-weight: 800;">Close</button>
            <button class="btn btn-primary" type="button" id="print-terms-trigger" style="background: #000000; color: #ffffff; border: 2px solid #000000; font-weight: 800; display: inline-flex; align-items: center; gap: 0.5rem;">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9V2h12v7M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>
              Print / Save PDF Terms
            </button>
          </div>
        </div>
      `;
      document.body.appendChild(termsModal);

      // Add modal event listeners
      termsModal.addEventListener('click', (ev) => {
        if (ev.target === termsModal || ev.target.closest('.close-terms-modal-btn')) {
          termsModal.classList.remove('active');
        }
      });

      const printBtn = termsModal.querySelector('#print-terms-trigger');
      if (printBtn) {
        printBtn.addEventListener('click', () => {
          window.print();
        });
      }
    }

    termsModal.classList.add('active');
  });
}

function getSavedTheme() {
  return localStorage.getItem('bitfurytech_theme') || 'dark';
}

function applyTheme(theme) {
  const isLight = theme === 'light';
  if (isLight) {
    document.documentElement.setAttribute('data-theme', 'light');
    if (document.body) document.body.classList.add('theme-light');
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
    if (document.body) document.body.classList.remove('theme-light');
  }
  localStorage.setItem('bitfurytech_theme', theme);
  updateThemeToggleUI(theme);
}

function toggleTheme() {
  const current = getSavedTheme();
  const next = current === 'light' ? 'dark' : 'light';
  applyTheme(next);
}

function updateThemeToggleUI(theme) {
  const isLight = theme === 'light';
  const btns = document.querySelectorAll('.theme-toggle-btn');
  btns.forEach(btn => {
    const labelEl = btn.querySelector('.theme-toggle-label');
    const iconEl = btn.querySelector('.theme-toggle-icon');
    
    if (labelEl) {
      const text = labelEl.textContent.trim();
      if (text === 'Navy' || text === 'Light' || text === 'Dark') {
        labelEl.textContent = isLight ? 'Light' : 'Dark';
      } else {
        labelEl.textContent = isLight ? 'Light Theme' : 'Dark Theme';
      }
    }
    
    if (iconEl) {
      iconEl.innerHTML = isLight
        ? `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`
        : `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
    }
    btn.setAttribute('title', isLight ? 'Switch to Dark Theme' : 'Switch to High-Contrast Light Theme');
    btn.setAttribute('aria-label', isLight ? 'Switch to Dark Theme' : 'Switch to High-Contrast Light Theme');
  });
}

function initThemeControls() {
  const initialTheme = getSavedTheme();
  applyTheme(initialTheme);

  document.addEventListener('click', (e) => {
    const toggleBtn = e.target.closest('.theme-toggle-btn, [data-theme-toggle]');
    if (toggleBtn) {
      e.preventDefault();
      toggleTheme();
    }
  });
}

function trackWebsiteVisitorLocally() {
  try {
    fetch('/api/track-visitor', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: getAuthToken() ? `Bearer ${getAuthToken()}` : ''
      },
      body: JSON.stringify({
        path: window.location.pathname || '/',
        referrer: document.referrer || 'Direct'
      })
    }).catch(() => {});
  } catch (e) {
    // Ignore client tracking errors
  }
}

async function handleAdminContactStatus(contactId, status) {
  try {
    const res = await fetch(`/api/admin/contacts/${contactId}/status`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getAuthToken()}`
      },
      body: JSON.stringify({ status })
    });
    const data = await res.json();
    if (data.ok) {
      if (typeof showToast === 'function') showToast(data.message, 'success');
      loadAdminData();
    } else {
      alert(data.error || 'Failed to update message status.');
    }
  } catch (err) {
    console.error('Error updating contact status:', err);
  }
}

async function handleAdminContactDelete(contactId) {
  try {
    const res = await fetch(`/api/admin/contacts/${contactId}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${getAuthToken()}`
      }
    });
    const data = await res.json();
    if (data.ok) {
      if (typeof showToast === 'function') showToast(data.message, 'success');
      loadAdminData();
    } else {
      alert(data.error || 'Failed to delete message.');
    }
  } catch (err) {
    console.error('Error deleting contact message:', err);
  }
}

function initAdminReplyModalControls() {
  const modal = document.getElementById('admin-reply-modal');
  const closeBtn = document.getElementById('close-reply-modal-btn');
  const cancelBtn = document.getElementById('cancel-reply-modal-btn');
  const replyForm = document.getElementById('admin-reply-investor-form');

  const closeModal = () => {
    if (modal) modal.style.display = 'none';
  };

  if (closeBtn) closeBtn.onclick = closeModal;
  if (cancelBtn) cancelBtn.onclick = closeModal;

  if (replyForm && !replyForm.dataset.initialized) {
    replyForm.dataset.initialized = 'true';
    replyForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const id = document.getElementById('reply-contact-id').value;
      const replyMessage = document.getElementById('reply-text-content').value;
      const submitBtn = document.getElementById('submit-reply-modal-btn');

      if (!id || !replyMessage.trim()) return;

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span>⏳ Sending Email Reply...</span>';
      }

      try {
        const res = await fetch(`/api/admin/contacts/${id}/reply`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${getAuthToken()}`
          },
          body: JSON.stringify({ replyMessage })
        });
        const data = await res.json();
        if (data.ok) {
          if (typeof showToast === 'function') showToast(data.message, 'success');
          else alert(data.message);
          closeModal();
          loadAdminData();
        } else {
          alert(data.error || 'Failed to dispatch official reply email.');
        }
      } catch (err) {
        console.error('Error sending contact reply:', err);
        alert('Connection error sending reply.');
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = '<span>📨 Send Official Email Reply</span>';
        }
      }
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  trackWebsiteVisitorLocally();
  initThemeControls();
  setCurrentYear();
  setActiveNav();
  setupHeaderControls();
  setupCustomerCareFloatingWidget();
  initSmartsuppLiveChat();
  initGoogleTranslateScript();
  setLanguage(getLanguage());
  initForms();
  loadDashboardData();
  initDashboardControls();
  loadAdminData();
  initPlanAlerts();
  initHomePageCarousels();
  initInvestmentPlanModals();
  initCertificateModal();
  initTermsAndConditionsModal();
  initScrollReveal();
  initRealtimeDataPolling();
});
