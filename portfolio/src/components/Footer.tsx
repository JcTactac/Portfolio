import { personalInfo } from '../data/portfolio';

function Footer() {
  return (
    <footer className="footer">
      <div className="section-container">
        <p>&copy; {new Date().getFullYear()} {personalInfo.shortName}. Tous droits réservés.</p>
      </div>
    </footer>
  );
}

export default Footer;
