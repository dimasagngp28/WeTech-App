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
  <div id="pengertianUIUX">
      <h2>Pengertian Soft Skill</h2>
      <p>
      Soft skill adalah salah satu hal penting yang harus dikembangkan di dalam kehidupan ataupun dalam dunia kerja.
      Soft skill sangat berbeda dengan hard skill. Kemampuan ini lebih cenderung kepada keterampilan sosial, komunikasi, kecerdasan sosial, dan lain-lain.
      Dilansir dari The Balance Careers, soft skill adalah kemampuan komunikasi, karakteristik seseorang, kecerdasan sosial yang melekat, serta kemampuan 
      beradaptasi dengan baik di dalam kehidupan maupun dunia kerja.
      </p>

      <p>
      Tidak seperti hard skill yang dipelajari dan dilatih, kemampuan ini lebih mengarah kepada emosi dan wawasan dalam memperlakukan orang lain.
      Secara sederhana, keahlian ini merupakan pelengkap dari hard skill. Tanpa soft skill, kamu akan kesulitan dalam beradaptasi dan berkomunikasi.
      </p>
    </div>

    <div id="perbedaanUIUX">
      <h2>Contoh Soft Skill</h2>
      <p>
      Setelah mengetahui pengertian dari soft skill, berikut beberapa contoh dari keahlian ini yang mungkin bisa kamu terapkan dan pelajari di dalam dunia kerja maupun kehidupan sehari-hari.
      </p>
      <h3>1. Komunikasi</h3>
      <p>
      Dilansir dari The Balance Careers, komunikasi merupakan salah satu unsur penting dalam hampir setiap pekerjaan. Dengan demikian, kamu harus mengasahnya secara rutin.
      Beberapa kemampuan komunikasi yang bisa kamu asah, seperti mendengar aktif, negosiasi, public speaking, storytelling, komunikasi nonverbal, komunikasi verbal, presentasi, dan organisasi.
      </p>
      <h3>2. Problem Solving</h3>
      <p>
      Perusahaan tentu sangat menghargai orang-orang yang mempunyai kemampuan problem solving atau memecahkan masalah dengan baik.
      Soft skill di bidang problem solving misalnya adalah kreativitas, research, manajemen risiko, kerja sama tim, dan berpikir kritis.
      </p>
      <h3>3. Kepemimpinan/Leadership</h3>
      <p>
      Kemampuan kepemimpinan/leadership juga sangat penting untuk dimiliki, meskipun kamu bukan seorang manajer ataupun pemimpin perusahaan.
      Pasalnya, perusahaan ingin mengetahui seberapa cerdas kamu dalam mengambil keputusan. Berikut ada beberapa keterampilan dalam leadership:
      manajemen konflik, delegasi, membuat keputusan, manajemen proyek, dan mentoring.
      </p>
      <h3>4. Adaptasi</h3>
      <p>
      Seberapa cepat kamu beradaptasi dengan lingkungan baru? Memiliki kemampuan adaptasi sangat penting, terlebih jika kamu bekerja di perusahaan yang pergerakannya sangat dinamis.
      Berikut kemampuan adaptasi yang bisa kamu pelajari konsistensi, seperti organisasi, optimisme, fleksibel, dan komunikasi.     </p>
    </div>
  </main>
  <script src="./belajar.js"></script>
      `;
  },
};
export default Softskill;
