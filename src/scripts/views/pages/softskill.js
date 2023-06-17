const Softskill = {
  async render() {
    return `
    <nav class="sidebar">
    <a href="#" class="logo">Kembali</a>

    <div class="menu-content">
      <ul class="menu-items">
        <div class="menu-title1">Daftar Modul</div>

        <li class="item">
          <div class="submenu-item">
            <span>Public Speaking</span>
            <i class="fa-solid fa-chevron-right"></i>
          </div>

          <ul class="menu-items submenu">
            <div class="menu-title">
              <i class="fa-solid fa-chevron-left"></i>
              Kembali
            </div>
            <li class="item">
              <a href="#">Apa itu Public Speaking?</a>
            </li>
            <li class="item">
              <a href="#">Pentingnya Belajar Public Speaking</a>
            </li>
          </ul>
        </li>
        <li class="item">
          <div class="submenu-item">
            <span>Time Management</span>
            <i class="fa-solid fa-chevron-right"></i>
          </div>

          <ul class="menu-items submenu">
            <div class="menu-title">
              <i class="fa-solid fa-chevron-left"></i>
              Kembali
            </div>
            <li class="item">
              <a href="#">Apa itu Time Management ?</a>
            </li>
            <li class="item">
              <a href="#">Pentingnya Time Management</a>
            </li>
            <li class="item">
              <a href="#">Bagaimana Cara Manage Waktu yang Baik ?</a>
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
export default Softskill;
