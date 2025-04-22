document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger-menu');
    const navBar = document.querySelector('.nav-bar');

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navBar.classList.toggle('active');
    });

    // Close menu when clicking on a nav link
    const navLinks = document.querySelectorAll('.nav-bar a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navBar.classList.remove('active');
        });
    });
}); 