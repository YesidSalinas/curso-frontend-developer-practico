const menuEmail = document.querySelector('.navbar-email');
const deskTopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const burguerMenu = document.querySelector('.menu');

menuEmail.addEventListener('click', toggleDesktopMenu);
burguerMenu.addEventListener('click', toggleMobileMenu);
function toggleDesktopMenu() {
    deskTopMenu.classList.toggle('inactive')
};
function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive')
}

