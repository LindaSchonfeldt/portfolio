document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.menu-button');
    const navMenu = document.querySelector('.nav-menu');

    menuButton.addEventListener('click', function() {
        if (navMenu.classList.contains('active')) {
            // If the menu is already open, close it
            navMenu.classList.remove('active');
        } else {
            // If the menu is closed, open it
            navMenu.classList.add('active');
        }
    });
});