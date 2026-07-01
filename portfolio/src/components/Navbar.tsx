import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { personalInfo } from '../data/portfolio';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  const handleSection = (id: string) => {
    setMenuOpen(false);
    if (isHome) {
      const el = document.getElementById(id);
      if (el) {
        const section = el.closest('.section');
        if (section) section.classList.add('visible');
        window.scrollTo({ top: el.offsetTop - 70, behavior: 'smooth' });
      }
    } else {
      navigate('/', { state: { scrollTo: id } });
    }
  };

  const sections = [
    { id: 'about', label: 'À Propos' },
    { id: 'interests', label: 'Centres d\'intérêt' },
    { id: 'skills', label: 'Compétences' },
    { id: 'projects', label: 'Projets' },
    { id: 'education', label: 'Parcours' },
    { id: 'experience', label: 'Expériences' },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">{personalInfo.shortName}</Link>
        <button
          className={`navbar-toggle ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span />
          <span />
          <span />
        </button>
        <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          {sections.map((s) => (
            <li key={s.id}>
              <a
                href={`/#${s.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleSection(s.id);
                }}
              >
                {s.label}
              </a>
            </li>
          ))}
          <li>
            <Link
              to="/contact"
              className={location.pathname === '/contact' ? 'active' : ''}
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
