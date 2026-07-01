import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects, techLogos } from '../data/portfolio';

function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [galleryFilter, setGalleryFilter] = useState<string>('Tout');

  if (!project) {
    return (
      <section className="section project-detail">
        <div className="section-container">
          <p>Projet introuvable.</p>
          <Link to="/#projects" className="btn-back">Retour aux projets</Link>
        </div>
      </section>
    );
  }

  const otherProjects = projects.filter((p) => p.slug !== slug).slice(0, 3);
  const galleryItems = project.gallery?.filter((g) => g.src) ?? [];

  return (
    <>
      <section className="section project-detail">
        <div className="section-container">
          <Link to="/#projects" className="btn-back">&larr; Retour aux projets</Link>
          <div className="project-detail-header">
            <h1>{project.title}</h1>
          </div>
          <div className="project-detail-content">
            <div className="project-detail-image">
              {project.image ? (
                <img src={project.image} alt={project.title} />
              ) : (
                <div className="project-image-placeholder project-detail-placeholder">
                  {project.title}
                </div>
              )}
            </div>
            <div className="project-detail-info">
              <div className="project-detail-description">
                <h2>Description</h2>
                {(project.details || project.description || 'Description à venir...').split('\n').map((paragraph, i) => (
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
                      <img src={item.src} alt={item.caption} />
                      <span className="gallery-caption">{item.caption}</span>
                    </button>
                  ))}
                </div>
              </div>
            );
          })()}

          <div className="project-detail-bottom">
            {project.technologies.length > 0 && (
              <div className="project-detail-tech">
                <h2>Technologies utilisées</h2>
                <div className="tech-tags">
                  {project.technologies.map((tech) => (
                    <span className="tech-tag" key={tech}>
                      {techLogos[tech] && (
                        <img src={techLogos[tech]} alt={tech} className="tech-tag-icon" />
                      )}
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {project.learnings && project.learnings.length > 0 && (
              <div className="project-detail-learnings">
                <h2>Ce que j'ai appris</h2>
                <ul>
                  {project.learnings.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
            {project.link && (
              <a
                href={project.link}
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

      <section className="section other-projects">
        <div className="section-container">
          <h2 className="section-heading">Autres projets</h2>
          <div className="projects-grid">
            {otherProjects.map((p) => (
              <Link to={`/projet/${p.slug}`} className="project-card" key={p.slug}>
                <div className="project-image">
                  {p.image ? (
                    <img src={p.image} alt={p.title} />
                  ) : (
                    <div className="project-image-placeholder">{p.title}</div>
                  )}
                  <div className="project-overlay">
                    <h4>{p.title}</h4>
                    <p>{p.description}</p>
                  </div>
                </div>
              </Link>
            ))}
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

export default ProjectDetail;
