const burgerBtn = document.getElementById('menu-bar');
const nav = document.getElementById('navbar');

burgerBtn.onclick = function () {
    if (nav.style.visibility === "visible") {
        nav.style.visibility = "hidden";
    } else {
        nav.style.visibility = "visible";
    }
}

const portafolioBtn = document.getElementById('menu-portafolio');
const subMenu = document.getElementById('submenu');

portafolioBtn.onclick = function () {
    if (subMenu.style.display === "block") {
        subMenu.style.display = "none";
    } else {
        subMenu.style.display = "block";
    }
}

