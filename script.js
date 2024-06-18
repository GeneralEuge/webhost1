document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.getElementById('navbar');
    const heroContent = document.querySelector('.hero-content');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        } else {
            navbar.style.backgroundColor = 'transparent';
        }
    });

    setTimeout(function () {
        heroContent.classList.add('visible');
    }, 500);
});

function showPdfAlert() {
    alert("This is a PDF. You will be redirected soon.");
}
