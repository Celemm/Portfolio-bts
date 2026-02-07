const headerHTML = `
<header>
    <h1>Mon Portfolio</h1>
    
    <!-- Bouton burger pour mobile -->
    <button class="burger-menu" aria-label="Menu de navigation">
        <span></span>
        <span></span>
        <span></span>
    </button>
    
    <nav>
        <ul class="nav-links">
            <li><a href="index.html" class="nav-link">Accueil</a></li>
            <li><a href="./profil.html" class="nav-link">Profil</a></li>
            <li><a href="./contact.html" class="nav-link">Contact</a></li>
            <li><a href="./projet.html" class="nav-link">Projets</a></li>
            <li><a href="./veille.html" class="nav-link">Veille Techno</a></li>
        </ul>
    </nav>
</header>
`;

// Insère le header au début de chaque page
document.body.insertAdjacentHTML('afterbegin', headerHTML);

// Active le menu burger après l'insertion du HTML
document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger-menu');
    const navLinks = document.querySelector('nav');
    
    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        burger.classList.toggle('active');
        document.body.classList.toggle('menu-open');
    });
    
    // Ferme le menu quand on clique sur un lien
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            burger.classList.remove('active');
            document.body.classList.remove('menu-open');
        });
    });
    
    // Ferme le menu si on clique sur l'overlay
    document.addEventListener('click', (e) => {
        if (document.body.classList.contains('menu-open') && 
            !navLinks.contains(e.target) && 
            !burger.contains(e.target)) {
            navLinks.classList.remove('active');
            burger.classList.remove('active');
            document.body.classList.remove('menu-open');
        }
    });
});