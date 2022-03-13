const menu = document.querySelector('#menu');
const menuBar = document.querySelector('#menu-bar');

menuBar.addEventListener('click', function() {
    menu.classList.toggle('menu-toogle')
})