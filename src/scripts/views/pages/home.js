const Home = {
  async render() {
    return `
    <div class="main-container" id="beranda">
        <div class="container1">
          <h2>Waktunya Upgrade Skill dan Value Kamu!</h2>
          <p>
            Semakin tinggi value kamu, semakin berkualitas dirimu. Belajar
            setinggi mungkin, karena gender bukanlah halangan.
          </p>
          <div class="start-learn-container">
            <a class="start-learn">Mulai Belajar</a>
          </div>
        </div>
        <div class="container2">
          <img src="./image1.png" />
        </div>
      </div>
      <div class="course-container">
        <div class="line1"></div>
        <h3 class="course-title" id="kursus">Kursus</h3>
        <div class="line2"></div>
      </div>

      <div class="card-container">
        <div class="card">
          <div class="card-header">
            <img src="./uidesign.jpg" alt="UI-Design" />
          </div>
          <div class="card-content">
            <h4>UI/UX Research & Design</h4>
            <div class="rating-container">
              <p>⭐️<span class="card-rating">4.8</span></p>
            </div>
            <div class="button-container">
              <a class="button" href="#/uiux"
                >Belajar</a
              >
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <img src="./front-end.jpg" alt="Front-End" />
          </div>
          <div class="card-content">
            <h4>Front-End Web Development</h4>
            <div class="rating-container">
              <p>⭐️<span class="card-rating">4.9</span></p>
            </div>
            <div class="button-container">
              <a class="button" href="#/frontend"
                >Belajar</a
              >
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <img src="./presentation.jpg" alt="Soft Skill" />
          </div>
          <div class="card-content">
            <h4>Soft Skill</h4>
            <div class="rating-container">
              <p>⭐️<span class="card-rating">4.9</span></p>
            </div>
            <div class="button-container">
              <a class="button" href="#/softskill">Belajar</a>
            </div>
          </div>
        </div>
      </div>
      <div class="course-container">
        <div class="line1"></div>
        <h3 class="course-title" id="kontak">Kontak</h3>
        <div class="line2"></div>
      </div>

      <div class="contact-card-container">
        <div class="contact-card">
          <div class="contact-header">
            <img src="./adi.png" alt="Rosyadi-Aulawi" />
          </div>
          <div class="contact-content">
            <h4>Muhammad Rosyadi Aulawi</h4>
            <p class="contact-role">Full Stack Developer</p>
            <p class="contact-university">Universitas Mataram</p>
            <div class="button-contact-container">
              <a
                class="button-contact"
                href="https://www.linkedin.com/in/m-rosyadi-aulawi-833392222/"
                >Kontak Saya</a
              >
            </div>
          </div>
        </div>
        <div class="contact-card">
          <div class="contact-header">
            <img src="./adhe.png" alt="Adhe-Nur-Ihsan" />
          </div>
          <div class="contact-content">
            <h4>Muhammad Adhe Nur Ichsan</h4>
            <p class="contact-role">Back-End Developer</p>
            <p class="contact-university">Universitas Esa Unggul</p>
            <div class="button-contact-container">
              <a
                class="button-contact"
                href="https://instagram.com/adheichsn?igshid=ZGUzMzM3NWJiOQ=="
                >Kontak Saya</a
              >
            </div>
          </div>
        </div>
        <div class="contact-card">
          <div class="contact-header">
            <img src="./fildza.png" alt="Fildza-Syahid" />
          </div>
          <div class="contact-content">
            <h4>M. Fildza Syahid Muttaqien</h4>
            <p class="contact-role">Front-End Developer</p>
            <p class="contact-university">Universitas Gunadarma</p>
            <div class="button-contact-container">
              <a
                class="button-contact"
                href="https://www.linkedin.com/in/fildza-syahid-134292268/"
                >Kontak Saya</a
              >
            </div>
          </div>
        </div>
        <div class="contact-card">
          <div class="contact-header">
            <img src="./dimas.png" alt="Dimas-Agung" />
          </div>
          <div class="contact-content">
            <h4>Dimas Agung Prihandoko</h4>
            <p class="contact-role">UI/UX Designer</p>
            <p class="contact-university">Universitas Ahmad Dahlan</p>
            <div class="button-contact-container">
              <a
                class="button-contact"
                href="https://www.linkedin.com/in/dimas-agung-prihandoko/"
                >Kontak Saya</a
              >
            </div>
          </div>
        </div>
      </div>
      `;
  },
};
export default Home;
