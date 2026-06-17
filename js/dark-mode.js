/**
 * dark-mode.js — Celeste Ngola
 * Bascule le dark mode via la classe "dark-mode" sur <body>.
 * La préférence est sauvegardée dans localStorage.
 */
(function () {
  const btn = document.createElement('button');
  btn.id = 'dark-mode-toggle';
  btn.setAttribute('aria-label', 'Basculer le mode sombre');

  Object.assign(btn.style, {
    position: 'fixed',
    bottom: '28px',
    right: '28px',
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    border: '1.5px solid rgba(0,0,0,.12)',
    background: '#ffffff',
    color: '#111',
    fontSize: '20px',
    cursor: 'pointer',
    zIndex: '9999',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 16px rgba(0,0,0,.1)',
    transition: 'background .25s, color .25s, border-color .25s, transform .2s',
  });

  document.body.appendChild(btn);

  function applyDark(enable) {
    if (enable) {
      document.body.classList.add('dark-mode');
      btn.textContent = '☀️';
      btn.style.background   = '#1a1a1a';
      btn.style.borderColor  = 'rgba(255,255,255,.14)';
      localStorage.setItem('darkMode', 'enabled');
    } else {
      document.body.classList.remove('dark-mode');
      btn.textContent = '🌙';
      btn.style.background   = '#ffffff';
      btn.style.borderColor  = 'rgba(0,0,0,.12)';
      localStorage.setItem('darkMode', 'disabled');
    }
  }

  applyDark(localStorage.getItem('darkMode') === 'enabled');

  btn.addEventListener('click', function () {
    applyDark(!document.body.classList.contains('dark-mode'));
    btn.style.transform = 'scale(1.15)';
    setTimeout(function () { btn.style.transform = 'scale(1)'; }, 180);
  });
})();
