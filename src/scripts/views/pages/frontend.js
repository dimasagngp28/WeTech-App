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
              <a href="#">Apa itu Javascript</a>
            </li>
            <li class="item">
              <a href="#">Sejarah Javascript</a>
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
    <div id="pengertianUIUX">
      <h2>Pengertian HTML</h2>
      <p>
      HTML adalah singkatan dari Hypertext Mark Up Language yang merupakan bahasa standar pemrograman untuk membuat suatu website yang bisa diakses dengan internet. Dengan kata lain halaman website yang kita lihat dan kita baca disusun dengan menggunakan bahasa ini dan kemudian diterjemahkan oleh komputer agar dapat dipahami oleh penggunanya.
      </p>

      <p>
      Menurut Astamal (2006:8), HTML (Hyper Text Markup Language) adalah simbol-simbol atau tag-tag yang dituliskan dalam sebuah file yang dimaksudkan untuk menampilkan halaman pada web browser. Tag-tag HTML selalu diawali dengan dan diakhiri dengan dimana x tag HTML seperti b, i, u dan sebagainya. Namun ada juga tag yang tidak diakhiri dengan tanda..
      </p>
    </div>

    <div id="perbedaanUIUX">
      <h2>Pengertian CSS</h2>
      <p>
      UX Design adalah proses menciptakan produk yang memberikan pengalaman bermakna dan relevan bagi pengguna. Menurut Dor Norman UX (User Experience) mencakup semua aspek interaksi pengguna akhir dengan perusahaan, layanannya, dan produknya. UX Design juga melibatkan desain dari seluruh proses memperoleh dan mengintegrasikan produk, termasuk aspek branding, desain, kegunaan, dan fungsi.
      </p>

      <p>
      Sedangkan UX (User Experience) adalah sebuah proses untuk mempermudah pengguna dalam mencapai tujuannya saat menggunakan semua aspek dari sebuah produk, baik itu produk digital ataupun produk non-digital, dan diselarasikan dengan tujuan bisnis dari perusahaan produsen produk tersebut.
      </p>
    </div>

    <div id="perbedaanUIUX">
    <h2>Apa itu Javascript</h2>
    <p>
    JavaScript adalah bahasa pemrograman yang digunakan untuk mengembangkan fitur interaktif pada halaman web. Dengan JavaScript, Anda dapat mengontrol elemen HTML, memanipulasi tampilan, merespons tindakan pengguna, dan berkomunikasi dengan server. Hal ini memungkinkan pembuatan halaman web yang dinamis dan interaktif, meningkatkan pengalaman pengguna dan fungsionalitas situs.s
    </p>

    <p>
    Selain itu, JavaScript juga memiliki fitur yang memungkinkan penggunaan asynchronous programming, yaitu kemampuan untuk menjalankan tugas secara bersamaan tanpa harus menunggu tugas sebelumnya selesai. Hal ini memungkinkan pengembangan aplikasi yang responsif dan efisien, terutama saat melakukan operasi jaringan seperti pengambilan data dari server atau pemrosesan data yang membutuhkan waktu lama.
    </p>
  </div>

  <div id="perbedaanUIUX">
  <h2>Sejarah Javascript</h2>
  <p>
  JavaScript dibuat pada tahun 1995 oleh Brendan Eich ketika ia bekerja di Netscape Communications Corporation. Awalnya dikenal sebagai "Mocha" dan kemudian diubah namanya menjadi "LiveScript" sebelum akhirnya menjadi JavaScript. JavaScript dirancang sebagai bahasa scripting untuk memberikan interaktivitas pada halaman web. Dalam beberapa tahun, JavaScript mendapatkan popularitas yang besar dan menjadi bahasa pemrograman yang paling penting dalam pengembangan web. Standarisasi JavaScript dilakukan oleh European Computer Manufacturers Association (ECMA), yang menghasilkan spesifikasi standar ECMAScript. ECMAScript terus mengalami perkembangan dan pembaruan, dengan versi terbaru seperti ECMAScript 6 (ES6) memperkenalkan fitur-fitur baru yang memperluas kemampuan bahasa JavaScript. Saat ini, JavaScript digunakan secara luas dalam pengembangan web modern, dari pembuatan efek interaktif sederhana hingga pengembangan aplikasi web yang kompleks dan responsif.
  </p>

  <p>
  JavaScript telah menjadi bahasa pemrograman yang tidak terpisahkan dari pengembangan web modern. Dalam sejarahnya, JavaScript telah mengalami evolusi yang signifikan dan menjadi landasan utama dalam menciptakan pengalaman interaktif di web. Dalam perkembangan web saat ini, JavaScript tidak hanya digunakan di sisi klien (client-side), tetapi juga di sisi server (server-side) melalui platform seperti Node.js. Dengan dukungan dari berbagai library dan framework seperti React, Angular, dan Vue.js, JavaScript memungkinkan pengembang untuk membangun aplikasi web yang kompleks dengan kode yang lebih terstruktur dan terkelola. Dengan terus berkembangnya teknologi web, JavaScript terus beradaptasi dan menjadi bahasa pemrograman yang penting dalam menghadirkan pengalaman pengguna yang interaktif, fungsionalitas yang kaya, dan aplikasi web yang inovatif.
  </p>
</div>
  </main>
      `;
  },
};
export default FrontEnd;
