import { personalInfo } from '../data/portfolio';

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-overlay" />
      <div className="hero-content">
        <h1>{personalInfo.name}</h1>
        <p className="hero-subtitle">{personalInfo.title}</p>
        <a href="/CV - Lay Jean-Christophe.pdf" download className="hero-cta">Télécharger mon CV</a>
      </div>
    </section>
  );
}

export default Hero;
