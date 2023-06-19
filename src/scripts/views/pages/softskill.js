const Softskill = {
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
            <a href="#/frontend">Front-End Web</a>
            <i class="fa-solid fa-chevron"></i>
          </div>
        </li>
    </div>
  </nav>

  <nav class="navbar">
    <i class="fa-solid fa-bars" id="sidebar-close"></i>
  </nav>

  <main class="main">
  <div id="modul-container"></div>
  </main>
  <script src="./belajar.js"></script>
      `;
  },
};
export default Softskill;
