import 'regenerator-runtime';
import '../styles/style.css';
import '../styles/responsive.css';
import '../styles/belajar.css';
import '../styles/responsive-modul.css';
import App from './views/app';

const app = new App({
  button: document.querySelector('#hamburger', '#sidebar-close'),
  drawer: document.querySelector('#drawer', '.sidebar'),
  content: document.querySelector('#mainContent', '#main'),
});
window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});
