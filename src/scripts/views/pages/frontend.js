const FrontEnd = {
  async render() {
    return `
    <nav class="sidebar">
    <a href="#" class="logo">WeTech</a>

    <div class="menu-content">
      <ul class="menu-items">
        <div class="menu-title">Front-End Web</div>

        <li class="item">
          <div class="submenu-item">
            <span>Dasar Front-End Web</span>
            <i class="fa-solid fa-chevron-right"></i>
          </div>

          <ul class="menu-items submenu">
            <div class="menu-title">
              <i class="fa-solid fa-chevron-left"></i>
              Dasar Front-End Web
            </div>
            <li class="item">
              <a href="#">Pengertian HTML</a>
            </li>
            <li class="item">
              <a href="#">Pengertian CSS</a>
            </li>
          </ul>
        </li>
        <li class="item">
          <div class="submenu-item">
            <span>Dasar-Dasar JavaScript</span>
            <i class="fa-solid fa-chevron-right"></i>
          </div>

          <ul class="menu-items submenu">
            <div class="menu-title">
              <i class="fa-solid fa-chevron-left"></i>
              Dasar-Dasar JavaScript
            </div>
            <li class="item">
              <a href="#">Second sublink</a>
            </li>
            <li class="item">
              <a href="#">Second sublink</a>
            </li>
            <li class="item">
              <a href="#">Second sublink</a>
            </li>
            <li class="item">
              <a href="#">Second sublink</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>

  <nav class="navbar">
    <i class="fa-solid fa-bars" id="sidebar-close"></i>
  </nav>

  <main class="main">
  <div id="uiux-container"></div>
  </main>
      `;
  },
};
export default FrontEnd;
