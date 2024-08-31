const menu = document.getElementById("mobile-menu-open");
const menuMega = document.getElementById("mobile-menu");
const closeMenu = document.getElementById("closeMenu");
const openMenu = document.getElementById("openMenu");

function mobileMenuOpen() {
    menuMega.style.height = "100vh";
    menu.style.display = "block";
    closeMenu.style.display = "block";
    openMenu.style.display = "none";
}

function mobileMenuClose() {
    menuMega.style.height = "unset";
    menu.style.display = "none";
    openMenu.style.display = "block";
    closeMenu.style.display = "none";
}