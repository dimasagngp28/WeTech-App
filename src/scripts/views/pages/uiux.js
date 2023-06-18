const Uiux = {
  async render() {
    return `
    <nav class="sidebar">
    <a href="#" class="logo">WeTech</a>

    <div class="menu-content">
      <ul class="menu-items">
        <div class="menu-title">UI/UX Design</div>

        <li class="item">
          <div class="submenu-item">
            <span>Pengenalan UI/UX</span>
            <i class="fa-solid fa-chevron-right"></i>
          </div>

          <ul class="menu-items submenu">
            <div class="menu-title">
              <i class="fa-solid fa-chevron-left"></i>
              Pengenalan UI/UX
            </div>
            <li class="item">
              <a href="#">Apa itu UI/UX</a>
            </li>
            <li class="item">
              <a href="#">Perbedaan UI dan UX</a>
            </li>
          </ul>
        </li>
        <li class="item">
          <div class="submenu-item">
            <span>Dasar-Dasar UI/UX</span>
            <i class="fa-solid fa-chevron-right"></i>
          </div>

          <ul class="menu-items submenu">
            <div class="menu-title">
              <i class="fa-solid fa-chevron-left"></i>
              Dasar-Dasar UI/UX
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
export default Uiux;
