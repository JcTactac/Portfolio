import { Link } from 'react-router-dom';
import { experiences } from '../data/portfolio';

function Experience() {
  const hasContent = experiences.some((e) => e.company);

  return (
    <section className="section experience" id="experience">
      <div className="section-container">
        <h2 className="section-heading">Expériences</h2>
        {hasContent ? (
          <div className="experience-list">
            {experiences.map((exp) => (
              <Link
                to={`/experience/${exp.slug}`}
                className="experience-card experience-card-link"
                key={exp.slug}
              >
                <div className="experience-card-image">
                  {exp.image ? (
                    <img src={exp.image} alt={exp.company} loading="lazy" decoding="async" />
                  ) : (
                    <div className="project-image-placeholder">{exp.company}</div>
                  )}
                  <div className="project-overlay">
                    <h4>{exp.company}</h4>
                    <p>{exp.description}</p>
                  </div>
                </div>
                <div className="experience-card-info">
                  <span className="experience-period">{exp.period}</span>
                  <h3>{exp.role}</h3>
                  <h4>{exp.company}</h4>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p className="placeholder-text">Expériences à venir...</p>
        )}
      </div>
    </section>
  );
}

export default Experience;
