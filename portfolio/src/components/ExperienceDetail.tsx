import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { experiences, techLogos } from '../data/portfolio';

function ExperienceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const experience = experiences.find((e) => e.slug === slug);
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [galleryFilter, setGalleryFilter] = useState<string>('Tout');

  if (!experience) {
    return (
      <section className="section project-detail">
        <div className="section-container">
          <p>Expérience introuvable.</p>
          <Link to="/" state={{ scrollTo: 'experience' }} className="btn-back">Retour aux expériences</Link>
        </div>
      </section>
    );
  }

  const galleryItems = experience.gallery?.filter((g) => g.src) ?? [];

  return (
    <>
      <section className="section project-detail">
        <div className="section-container">
          <Link to="/" state={{ scrollTo: 'experience' }} className="btn-back">&larr; Retour aux expériences</Link>
          <div className="project-detail-header">
            <h1>{experience.company}</h1>
            <p className="experience-detail-meta">
              <span className="experience-period">{experience.period}</span>
              <span className="experience-role">{experience.role}</span>
            </p>
          </div>
          <div className="project-detail-content">
            <div className="project-detail-image">
              {experience.image ? (
                <img src={experience.image} alt={experience.company} decoding="async" />
              ) : (
                <div className="project-image-placeholder project-detail-placeholder">
                  {experience.company}
                </div>
              )}
            </div>
            <div className="project-detail-info">
              <div className="project-detail-description">
                <h2>Description</h2>
                {(experience.details || experience.description).split('\n').map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>

          {galleryItems.length > 0 && (() => {
            const tags = [...new Set(galleryItems.map((g) => g.tag).filter(Boolean))];
            const hasTags = tags.length > 1;
            const filtered = galleryFilter === 'Tout'
              ? galleryItems
              : galleryItems.filter((g) => g.tag === galleryFilter);

            return (
              <div className="project-detail-gallery">
                <h2>Images du projet</h2>
                {hasTags && (
                  <div className="gallery-tabs">
                    <button
                      className={`gallery-tab ${galleryFilter === 'Tout' ? 'active' : ''}`}
                      onClick={() => setGalleryFilter('Tout')}
                    >
                      Tout
                    </button>
                    {tags.map((tag) => (
                      <button
                        className={`gallery-tab ${galleryFilter === tag ? 'active' : ''}`}
                        key={tag}
                        onClick={() => setGalleryFilter(tag!)}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                )}
                <div className="gallery-grid">
                  {filtered.map((item, i) => (
                    <button
                      className="gallery-item"
                      key={i}
                      onClick={() => setLightbox(item.src)}
                    >
                      <img src={item.src} alt={item.caption} loading="lazy" decoding="async" />
                      <span className="gallery-caption">{item.caption}</span>
                    </button>
                  ))}
                </div>
              </div>
            );
          })()}

          <div className="project-detail-bottom">
            {experience.technologies.length > 0 && (
              <div className="project-detail-tech">
                <h2>Technologies utilisées</h2>
                <div className="tech-tags">
                  {experience.technologies.map((tech) => (
                    <span className="tech-tag" key={tech}>
                      {techLogos[tech] && (
                        <img src={techLogos[tech]} alt={tech} className="tech-tag-icon" loading="lazy" decoding="async" />
                      )}
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {experience.learnings && experience.learnings.length > 0 && (
              <div className="project-detail-learnings">
                <h2>Ce que j'ai appris</h2>
                <ul>
                  {experience.learnings.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
            {experience.link && (
              <a
                href={experience.link}
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                Voir le projet
              </a>
            )}
          </div>
        </div>
      </section>

      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <button className="lightbox-close" onClick={() => setLightbox(null)}>&times;</button>
          <img src={lightbox} alt="Agrandissement" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </>
  );
}

export default ExperienceDetail;
