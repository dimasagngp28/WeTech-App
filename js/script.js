// toggle class active
const drawer = document.querySelector('.drawer');

// ketika humberger menu dikliik
document.querySelector('#hamburger').onclick = () => {
    drawer.classList.toggle('open');
};