const Uiux = {
  async render() {
    return `
    <nav class="sidebar">
    <a href="#" class="logo">CodingLab</a>

    <div class="menu-content">
      <ul class="menu-items">
        <div class="menu-title">Your menu title</div>

        <li class="item">
          <a href="#">Your first link</a>
        </li>

        <li class="item">
          <div class="submenu-item">
            <span>First submenu</span>
            <i class="fa-solid fa-chevron-right"></i>
          </div>

          <ul class="menu-items submenu">
            <div class="menu-title">
              <i class="fa-solid fa-chevron-left"></i>
              Your submenu title
            </div>
            <li class="item">
              <a href="#">First sublink</a>
            </li>
            <li class="item">
              <a href="#">First sublink</a>
            </li>
            <li class="item">
              <a href="#">First sublink</a>
            </li>
          </ul>
        </li>
        <li class="item">
          <div class="submenu-item">
            <span>Second submenu</span>
            <i class="fa-solid fa-chevron-right"></i>
          </div>

          <ul class="menu-items submenu">
            <div class="menu-title">
              <i class="fa-solid fa-chevron-left"></i>
              Your submenu title
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
            <li class="item">
              <a href="#">Second sublink</a>
            </li>
          </ul>
        </li>

        <li class="item">
          <a href="#">Your second link</a>
        </li>

        <li class="item">
          <a href="#">Your third link</a>
        </li>
      </ul>
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
