import { personalInfo } from '../data/portfolio';

function ContactForm() {
  return (
    <section className="section contact-page">
      <div className="section-container">
        <h2 className="section-heading">Contact</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Mes coordonnées</h3>
            <p>
              <strong>Email :</strong>{' '}
              <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
            </p>
            <p>
              <strong>Téléphone :</strong> {personalInfo.phone}
            </p>
            <div className="contact-socials">
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
    </section>
  );
}

export default ContactForm;
