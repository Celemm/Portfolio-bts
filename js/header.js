
const headerHTML = `
<header>
    <h1>Mon Portfolio</h1>
    <nav>
        <ul>
            <li><a href="index.html" class="nav-link">Accueil</a></li>
                <li><a href="./profil.html" class="nav-link">Profil</a></li>
                <li><a href="./contact.html" class="nav-link">Contact</a></li>
                <li><a href="./projet.html" class="nav-link">Projets</a></li>
                <li><a href="./veille.html" class="nav-link">Veille Techno</a></li>
        </ul>
    </nav>
</header>
`;

// Cette ligne insère automatiquement le header au début de chaque page
document.body.insertAdjacentHTML('afterbegin', headerHTML);