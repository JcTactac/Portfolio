import { useState, type FormEvent } from 'react';
import { personalInfo } from '../data/portfolio';

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // TODO: intégrer EmailJS ou un service d'envoi
    setSubmitted(true);
  };

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
          <form className="contact-form" onSubmit={handleSubmit}>
            {submitted ? (
              <div className="contact-success">
                <p>Merci pour votre message ! Je vous répondrai dès que possible.</p>
              </div>
            ) : (
              <>
                <div className="form-group">
                  <label htmlFor="name">Nom</label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Objet</label>
                  <input
                    id="subject"
                    type="text"
                    required
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    rows={6}
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                </div>
                <button type="submit" className="btn-primary">Envoyer</button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
