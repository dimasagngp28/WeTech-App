const Uiux = {
  async render() {
    return `
    <nav class="sidebar">
    <a href="#" class="logo">Kembali</a>

    <div class="menu-content">
      <ul class="menu-items">
        <div class="menu-title1">Daftar Modul</div>

        <li class="item">
          <div class="submenu-item">
            <span>Pengenalan UI/UX</span>
            <i class="fa-solid fa-chevron-right"></i>
          </div>

          <ul class="menu-items submenu">
            <div class="menu-title">
              <i class="fa-solid fa-chevron-left"></i>
              Kembali
            </div>
            <li class="item">
              <a href="#">Apa itu UI/UX ?</a>
            </li>
            <li class="item">
              <a href="#">Perbedaan UI dan UX</a>
            </li>
          </ul>
        </li>
        <li class="item">
          <div class="submenu-item">
            <span>Dasar UI/UX</span>
            <i class="fa-solid fa-chevron-right"></i>
          </div>

          <ul class="menu-items submenu">
            <div class="menu-title">
              <i class="fa-solid fa-chevron-left"></i>
              Kembali
            </div>
            <li class="item">
              <a href="#">Sejarah UI dan UX</a>
            </li>
            <li class="item">
              <a href="#">Peran UI dan UX</a>
            </li>
          </ul>
        </li>
    </div>
  </nav>

  <nav class="navbar">
    <i class="fa-solid fa-bars" id="sidebar-close"></i>
  </nav>

  <main class="main">
    <h1>Admin Dashboard Content</h1>
  </main>
  <script src="./belajar.js"></script>
      `;
  },
};
export default Uiux;
