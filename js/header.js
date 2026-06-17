/**
 * header.js — Celeste Ngola
 * Génère la navigation commune à toutes les pages.
 * Le lien actif est détecté automatiquement d'après l'URL courante.
 */

(function () {
  /* ── Liens de navigation ─────────────────────────────────── */
  const navLinks = [
    { label: 'Accueil', href: 'index.html' },
    { label: 'Profil',  href: 'profil.html' },
    { label: 'Projets', href: 'projet.html' },
    { label: 'Veille',  href: 'veille-iot.html' },
    { label: 'Contact', href: 'contact.html' },
  ];

  /* ── Détection de la page active ────────────────────────── */
  const currentFile = window.location.pathname.split('/').pop() || 'index.html';

  /* Pages qui appartiennent à la section Projets */
  const projetsPages = ['projet.html', 'dev.html', 'res.html', 'projetSchool.html', 'projetSkystorm.html'];

  function isActive(href) {
    if (href === 'projet.html' && projetsPages.includes(currentFile)) return true;
    return currentFile === href;
  }

  /* ── Construction du HTML ───────────────────────────────── */
  const linksHTML = navLinks
    .map(function (item) {
      const active = isActive(item.href) ? ' class="active"' : '';
      return '<a href="' + item.href + '"' + active + '>' + item.label + '</a>';
    })
    .join('\n      ');

  const navHTML =
    '<nav>' +
    '<div class="logo">Portfolio</div>' +
    '<button class="burger" id="burger" aria-label="Menu de navigation">' +
    '<span></span><span></span><span></span>' +
    '</button>' +
    '<div class="nav-links" id="navLinks">' +
    linksHTML +
    '</div>' +
    '</nav>';

  /* ── Insertion avant tout le contenu du body ────────────── */
  document.body.insertAdjacentHTML('afterbegin', navHTML);

  /* ── Gestion du menu burger (mobile) ────────────────────── */
  document.addEventListener('DOMContentLoaded', function () {
    const burger   = document.getElementById('burger');
    const navPanel = document.getElementById('navLinks');

    if (!burger || !navPanel) return;

    burger.addEventListener('click', function () {
      navPanel.classList.toggle('open');
      burger.classList.toggle('active');
    });

    navPanel.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navPanel.classList.remove('open');
        burger.classList.remove('active');
      });
    });

    document.addEventListener('click', function (e) {
      if (
        navPanel.classList.contains('open') &&
        !navPanel.contains(e.target) &&
        !burger.contains(e.target)
      ) {
        navPanel.classList.remove('open');
        burger.classList.remove('active');
      }
    });
  });
})();
