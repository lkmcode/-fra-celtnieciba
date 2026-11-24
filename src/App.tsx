
import { useState } from 'react';

const projects = [
  {
    title: 'Modernas mājas būvniecība',
    category: 'Privātmājas',
    image:
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=85',
    description: 'Mūsdienīga arhitektūra un kvalitatīvs izpildījums.',
  },
  {
    title: 'Dzīvojamās telpas renovācija',
    category: 'Remontdarbi',
    image:
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=900&q=85',
    description: 'Pārdomāts telpu dizains un rūpīgi paveikti darbi.',
  },
  {
    title: 'Vannas istabas izbūve',
    category: 'Iekšdarbi',
    image:
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=900&q=85',
    description: 'Precīzas detaļas un mūsdienīgs rezultāts.',
  },
  {
    title: 'Virtuves remonts',
    category: 'Remontdarbi',
    image:
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=900&q=85',
    description: 'Funkcionāla un skaista telpa ikdienai.',
  },
  {
    title: 'Mājas fasādes darbi',
    category: 'Ārdarbi',
    image:
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=900&q=85',
    description: 'Kopts un izturīgs mājas ārējais izskats.',
  },
  {
    title: 'Grīdas un apdares darbi',
    category: 'Iekšdarbi',
    image:
      'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=900&q=85',
    description: 'Kvalitatīva apdare līdz pēdējai detaļai.',
  },
];

const services = [
  {
    number: '01',
    title: 'Celtniecība',
    description:
      'Celtniecības darbi un dažādu būvniecības projektu realizācija.',
  },
  {
    number: '02',
    title: 'Remontdarbi',
    description:
      'Dzīvokļu, māju un citu telpu remonts un atjaunošana.',
  },
  {
    number: '03',
    title: 'Iekšējā apdare',
    description:
      'Telpu apdares darbi, grīdas, sienas un citas detaļas.',
  },
  {
    number: '04',
    title: 'Ārējā apdare',
    description:
      'Fasādes un citi ēku ārējās apdares darbi.',
  },
  {
    number: '05',
    title: 'Vannas istabas',
    description:
      'Vannas istabu remonts, atjaunošana un labiekārtošana.',
  },
  {
    number: '06',
    title: 'Individuāli projekti',
    description:
      'Darbi pēc klienta vajadzībām un konkrētā projekta prasībām.',
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(
    null,
  );

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="topbar">
        <div className="container nav">
          <a className="logo" href="#sakums" onClick={closeMenu}>
            +<span>FRA</span>
          </a>

          <nav className={`nav-links ${menuOpen ? 'mobile-open' : ''}`}>
            <a href="#sakums" onClick={closeMenu}>Sākums</a>
            <a href="#darbi" onClick={closeMenu}>Mūsu darbi</a>
            <a href="#pakalpojumi" onClick={closeMenu}>Pakalpojumi</a>
            <a href="#par-mums" onClick={closeMenu}>Par mums</a>
            <a href="#kontakti" onClick={closeMenu}>Kontakti</a>
          </nav>

          <a className="gold-button nav-contact" href="#kontakti">
            SAZINĀTIES
          </a>

          <button
            className="mobile-menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Atvērt izvēlni"
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </header>

      <main>
        <section className="hero" id="sakums">
          <div className="container hero-content">
            <div className="eyebrow">
              CELTNIECĪBA · REMONTS · KVALITĀTE
            </div>

            <h1>
              MĒS RADĀM.
              <br />
              JŪS <span>IZBAUDĀT.</span>
            </h1>

            <p>
              Profesionāli celtniecības un remonta darbi.
              Mūsu mērķis ir kvalitatīvs rezultāts, rūpīga
              attieksme un apmierināts klients.
            </p>

            <div className="hero-actions">
              <a className="gold-button" href="#darbi">
                APSKATĪT MŪSU DARBUS →
              </a>
              <a className="outline-button" href="#kontakti">
                SAZINĀTIES AR MUMS
              </a>
            </div>
          </div>
        </section>

        <section className="section" id="darbi">
          <div className="container">
            <div className="section-heading">
              <div className="eyebrow">MŪSU PORTFOLIO</div>
              <h2>PADARĪTAIS RUNĀ PATS PAR SEVI.</h2>
              <p>
                Apskati mūsu darbu piemērus un iepazīsti
                paveikto. Katrs projekts ir iespēja radīt
                kaut ko kvalitatīvu un paliekošu.
              </p>
            </div>

            <div className="project-grid">
              {projects.map((project, index) => (
                <button
                  className="project-card"
                  key={project.title}
                  onClick={() => setSelectedProject(index)}
                >
                  <div className="project-image-wrap">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                    />
                    <span className="project-view">APSKATĪT +</span>
                  </div>
                  <div className="project-info">
                    <div className="eyebrow">{project.category}</div>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="section services-section" id="pakalpojumi">
          <div className="container">
            <div className="section-heading">
              <div className="eyebrow">KO MĒS DARĀM</div>
              <h2>MŪSU PAKALPOJUMI.</h2>
              <p>
                Dažādi celtniecības un remontdarbi,
                pielāgoti katra klienta vajadzībām.
              </p>
            </div>

            <div className="services-grid">
              {services.map((service) => (
                <article className="service-card" key={service.number}>
                  <div className="service-number">{service.number}</div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section about-section" id="par-mums">
          <div className="container about-grid">
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1100&q=85"
              alt="Celtniecības darbi objektā"
              loading="lazy"
            />

            <div>
              <div className="eyebrow">PAR +FRA</div>
              <h2>UZMANĪBA KATRAI DETAĻAI.</h2>
              <p>
                Mēs ticam, ka labs rezultāts sākas ar
                atbildīgu attieksmi pret katru darbu.
                No pirmās sarunas līdz projekta
                noslēgumam svarīga ir kvalitāte,
                komunikācija un rūpīgs izpildījums.
              </p>
              <p>
                Katrs projekts tiek izvērtēts individuāli,
                lai atrastu klientam piemērotāko risinājumu.
              </p>
              <a className="gold-button" href="#kontakti">
                PARUNĀSIM PAR TAVU PROJEKTU →
              </a>
            </div>
          </div>
        </section>

        <section className="section contact-section" id="kontakti">
          <div className="container">
            <div className="contact-panel">
              <div className="eyebrow">SĀKSIM SADARBĪBU</div>
              <h2>TEV IR IDEJA? MĒS VARAM PALĪDZĒT.</h2>
              <p>
                Pastāsti mums par savu projektu.
                Sazinies ar meistaru, lai pārrunātu
                darbu, iespējas un nākamos soļus.
              </p>

              <div className="contact-actions">
                <a className="gold-button" href="mailto:">
                  UZRAKSTĪT E-PASTU →
                </a>
                <a className="outline-button" href="#sakums">
                  UZ AUGŠU ↑
                </a>
              </div>

              <div className="contact-note">
                Kontaktinformāciju pievienosim nākamajā solī.
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <a className="logo" href="#sakums">
            +<span>FRA</span>
          </a>
          <span>© {new Date().getFullYear()} +FRA. Visas tiesības aizsargātas.</span>
          <a href="#kontakti">Sazināties</a>
        </div>
      </footer>

      {selectedProject !== null && (
        <div
          className="project-modal"
          onClick={() => setSelectedProject(null)}
          role="presentation"
        >
          <div
            className="project-modal-content"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={projects[selectedProject].title}
          >
            <button
              className="modal-close"
              onClick={() => setSelectedProject(null)}
              aria-label="Aizvērt"
            >
              ✕
            </button>
            <img
              src={projects[selectedProject].image}
              alt={projects[selectedProject].title}
            />
            <div className="project-info">
              <div className="eyebrow">
                {projects[selectedProject].category}
              </div>
              <h3>{projects[selectedProject].title}</h3>
              <p>{projects[selectedProject].description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
