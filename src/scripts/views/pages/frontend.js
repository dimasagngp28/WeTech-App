const FrontEnd = {
  async render() {
    return `
    <nav class="sidebar">
    <a href="#" class="logo">Kembali</a>

    <div class="menu-content">
      <ul class="menu-items">
        <div class="menu-title1">Daftar Kursus</div>

        <li class="item">
          <div class="submenu-item">
            <a href="#/uiux">UI/UX Design & Research</a>
            <i class="fa-solid fa-chevron"></i>
          </div>

        </li>
        <li class="item">
          <div class="submenu-item">
            <a href="#/softskill">Soft Skill</a>
            <i class="fa-solid fa-chevron"></i>
          </div>
        </li>
      </ul>
    </div>
  </nav>

  <nav class="navbar">
    <i class="fa-solid fa-bars" id="sidebar-close"></i>
  </nav>

  <main class="main">
  <div id="modul-container"></div>
  </main>
      `;
  },
};
export default FrontEnd;
