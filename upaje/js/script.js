const menu = document.querySelector('#menu');
const submenu = document.querySelector('#submenu');
const menuBar = document.querySelector('#menu-bar');
const submenuPortafolio = document.querySelector('#menu-portafolio');

menuBar.addEventListener('click', function() {
    menu.classList.toggle('menu-toogle')
})

submenuPortafolio.addEventListener('click', function() {
    submenu.classList.toggle('submenu-toogle')
}); 