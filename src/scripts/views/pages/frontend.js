const FrontEnd = {
  async render() {
    return `
    <nav class="sidebar">
    <a href="#" class="logo">Kembali</a>

    <div class="menu-content">
      <ul class="menu-items">
        <div class="menu-title1">Daftar Modul</div>

        <li class="item">
          <div class="submenu-item">
            <span>Pengenalan Front-End Web</span>
            <i class="fa-solid fa-chevron-right"></i>
          </div>

          <ul class="menu-items submenu">
            <div class="menu-title">
              <i class="fa-solid fa-chevron-left"></i>
              Kembali
            </div>
            <li class="item">
              <a href="#">Apa itu Website ?</a>
            </li>
            <li class="item">
              <a href="#">Bagaimana Website bekerja ?</a>
            </li>
          </ul>
        </li>
        <li class="item">
          <div class="submenu-item">
            <span>Dasar Front-End Web</span>
            <i class="fa-solid fa-chevron-right"></i>
          </div>

          <ul class="menu-items submenu">
            <div class="menu-title">
              <i class="fa-solid fa-chevron-left"></i>
              Kembali
            </div>
            <li class="item">
              <a href="#">Pengertian HTML</a>
            </li>
            <li class="item">
              <a href="#">Pengertian CSS</a>
            </li>
            <li class="item">
              <a href="#">Pengertian Javascripts</a>
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
export default FrontEnd;
