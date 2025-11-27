// dark-mode.js - Script pour le mode sombre (style Claude AI)

// Créer le bouton de mode sombre
const darkModeButton = document.createElement('button');
darkModeButton.id = 'dark-mode-toggle';
darkModeButton.innerHTML = '🌙';
darkModeButton.setAttribute('aria-label', 'Basculer le mode sombre');

// Styles du bouton - Style Claude AI
darkModeButton.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 1px solid rgba(0, 0, 0, 0.1);
    background: rgba(255, 255, 255, 0.95);
    color: #1f1f1f;
    font-size: 24px;
    cursor: pointer;
    z-index: 1000;
    transition: all 0.3s ease;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    backdrop-filter: blur(10px);
    display: flex;
    align-items: center;
    justify-content: center;
`;

// Ajouter le bouton au body
document.body.appendChild(darkModeButton);

// Vérifier si le mode sombre est déjà activé (sauvegarde dans localStorage)
const isDarkMode = localStorage.getItem('darkMode') === 'enabled';

// Fonction pour activer le mode sombre
function enableDarkMode() {
    document.body.classList.add('dark-mode');
    localStorage.setItem('darkMode', 'enabled');
    darkModeButton.innerHTML = '☀️';
    darkModeButton.style.background = 'rgba(42, 42, 42, 0.95)';
    darkModeButton.style.color = '#f5f5f5';
    darkModeButton.style.border = '1px solid #3a3a3a';
}

// Fonction pour désactiver le mode sombre
function disableDarkMode() {
    document.body.classList.remove('dark-mode');
    localStorage.setItem('darkMode', 'disabled');
    darkModeButton.innerHTML = '🌙';
    darkModeButton.style.background = 'rgba(255, 255, 255, 0.95)';
    darkModeButton.style.color = '#1f1f1f';
    darkModeButton.style.border = '1px solid rgba(0, 0, 0, 0.1)';
}

// Appliquer le mode au chargement de la page
if (isDarkMode) {
    enableDarkMode();
}

// Effet de survol - Style Claude AI
darkModeButton.addEventListener('mouseenter', () => {
    if (document.body.classList.contains('dark-mode')) {
        darkModeButton.style.transform = 'scale(1.05)';
        darkModeButton.style.background = 'rgba(52, 52, 52, 0.95)';
        darkModeButton.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.4)';
    } else {
        darkModeButton.style.transform = 'scale(1.05)';
        darkModeButton.style.background = 'rgba(245, 245, 245, 0.98)';
        darkModeButton.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
    }
});

darkModeButton.addEventListener('mouseleave', () => {
    if (document.body.classList.contains('dark-mode')) {
        darkModeButton.style.transform = 'scale(1)';
        darkModeButton.style.background = 'rgba(42, 42, 42, 0.95)';
        darkModeButton.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.3)';
    } else {
        darkModeButton.style.transform = 'scale(1)';
        darkModeButton.style.background = 'rgba(255, 255, 255, 0.95)';
        darkModeButton.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.15)';
    }
});

// Basculer le mode au clic
darkModeButton.addEventListener('click', () => {
    const isDark = document.body.classList.contains('dark-mode');
    
    if (isDark) {
        disableDarkMode();
    } else {
        enableDarkMode();
    }
    
    // Animation subtile du bouton
    darkModeButton.style.transform = 'rotate(180deg) scale(1.1)';
    setTimeout(() => {
        darkModeButton.style.transform = 'scale(1)';
    }, 300);
});