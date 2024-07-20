document.addEventListener("DOMContentLoaded", function() {
    document.body.classList.add('visible');

    const links = document.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');

            document.body.classList.remove('visible');
            setTimeout(() => {
                window.location.href = href;
            }, 500); // Match the duration with the CSS transition
        });
    });
});


