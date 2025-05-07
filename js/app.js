document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.fade-in-section');

    const options = {
        root: null, // Cela signifie l'observateur se base sur la fenêtre de visualisation
        rootMargin: '0px',
        threshold: 0.1 // Déclenche l'apparition quand 10% de l'élément est visible
    };

    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // L'élément est visible, on l'affiche avec la classe 'visible'
                entry.target.classList.add('visible');
            } else {
                // L'élément n'est plus visible, on cache avec la classe 'visible' (retire la classe)
                entry.target.classList.remove('visible');
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});
