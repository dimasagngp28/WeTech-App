const Uiux = {
  async render() {
    return `
    <nav class="sidebar">
    <a href="#" class="logo">Beranda</a>

    <div class="menu-content">
      <ul class="menu-items">
        <div class="menu-title1">Daftar Kursus</div>

        <li class="item">
          <div class="submenu-item">
            <a href="#/frontend">Front-End Web Development</a>
            <i class="fa-solid fa-chevron"></i>
          </div>
        </li>
        <li class="item">
          <div class="submenu-item">
            <a href="#/softskill">Soft Skill</a>
            <i class="fa-solid fa-chevron"></i>
          </div>

          <ul class="menu-items submenu">
            <div class="menu-title">
              <i class="fa-solid fa-chevron-left"></i>
              Kembali
            </div>
          </ul>
        </li>
    </div>
  </nav>

  <nav class="navbar">
    <button class="fa-solid fa-bars" id="sidebar-close"></button>
  </nav>

  <main class="main" id="main">
    <div class="modul" id="modul1">
      <h2>Apa itu UI/UX</h2>
      <p>UI (User Interface) adalah sebuah proses desain yang digunakan untuk membangun tampilan antarmuka di layar aplikasi atau komputer yang berfokus pada penampilan atau gaya. UI Designer bertujuan untuk membuat antarmuka yang menurut pengguna mudah digunakan dan menyenangkan. Desain UI mengacu pada grafis antarmuka pengguna dan bentuk lainnya.</p>
      <p>
      Sedangkan UX (User Experience) adalah sebuah proses untuk mempermudah pengguna dalam mencapai tujuannya saat menggunakan semua aspek dari sebuah produk, baik itu produk digital ataupun produk non-digital, dan diselarasikan dengan tujuan bisnis dari perusahaan produsen produk tersebut.
      </p>
    </div>

    <div class="modul" id="modul2">
      <h2>Perbedaan UI dan UX</h2>
      <p>UX Design adalah proses menciptakan produk yang memberikan pengalaman bermakna dan relevan bagi pengguna. Menurut Dor Norman UX (User Experience) mencakup semua aspek interaksi pengguna akhir dengan perusahaan, layanannya, dan produknya. UX Design juga melibatkan desain dari seluruh proses memperoleh dan mengintegrasikan produk, termasuk aspek branding, desain, kegunaan, dan fungsi.</p>
      <p>
      Sedangkan UX (User Experience) adalah sebuah proses untuk mempermudah pengguna dalam mencapai tujuannya saat menggunakan semua aspek dari sebuah produk, baik itu produk digital ataupun produk non-digital, dan diselarasikan dengan tujuan bisnis dari perusahaan produsen produk tersebut.
      </p>
    </div>

  </main>
      `;
  },
};
export default Uiux;
