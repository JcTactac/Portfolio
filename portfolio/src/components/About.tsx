import { personalInfo, aboutText } from '../data/portfolio';

function About() {
  return (
    <section className="section about" id="about">
      <div className="section-container">
        <h2 className="section-heading">À Propos de moi</h2>
        <div className="about-content">
          <div className="about-image">
            <img src="/images/profil.webp" alt={personalInfo.name} loading="lazy" decoding="async" />
          </div>
          <div className="about-text">
            <p>{aboutText}</p>
            <div className="about-contact-row">
              <div className="about-contact">
                <div className="about-contact-item">
                  <span className="about-contact-label">Email</span>
                  <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
                </div>
                <div className="about-contact-item">
                  <span className="about-contact-label">Téléphone</span>
                  <span>{personalInfo.phone}</span>
                </div>
              </div>
              <div className="about-socials">
                <a href={personalInfo.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
                <a href={personalInfo.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
