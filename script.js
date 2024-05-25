const mobileMenuButton = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav');
const menuBars = document.querySelectorAll('.bar');

const toggleMenu = () => {
    navMenu.classList.toggle('nav-active');
    menuBars.forEach(bar => bar.classList.toggle('active'));
};

mobileMenuButton.addEventListener('click', toggleMenu);
