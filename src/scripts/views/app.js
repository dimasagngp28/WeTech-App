import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  constructor({ button, drawer, content }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;

    this._initialAppShell();
  }

  _initialAppShell() {
    // initial Drawer
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });
    // kita bisa menginisiasikan komponen lain bila ada
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    const sidebar = this._content.querySelector('.sidebar');
    if (sidebar) {
      const sidebarClose = this._content.querySelector('#sidebar-close');
      const menu = this._content.querySelector('.menu-content');
      const menuItems = this._content.querySelectorAll('.submenu-item');
      const subMenuTitles = this._content.querySelectorAll('.submenu .menu-title');
      sidebarClose.addEventListener('click', () => sidebar.classList.toggle('close'));
      menuItems.forEach((item, index) => {
        item.addEventListener('click', () => {
          menu.classList.add('submenu-active');
          item.classList.add('show-submenu');
          menuItems.forEach((item2, index2) => {
            if (index !== index2) {
              item2.classList.remove('show-submenu');
            }
          });
        });
      });
      subMenuTitles.forEach((title) => {
        title.addEventListener('click', () => {
          menu.classList.remove('submenu-active');
        });
      });
    }
  }
}

export default App;
