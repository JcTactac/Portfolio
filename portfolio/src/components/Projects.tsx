import { Link } from 'react-router-dom';
import { projects, projectCategories } from '../data/portfolio';

function Projects() {
  const categories = Object.entries(projectCategories) as [
    keyof typeof projectCategories,
    string,
  ][];

  return (
    <section className="section projects" id="projects">
      <div className="section-container">
        <h2 className="section-heading">Projets</h2>
        {categories.map(([key, label]) => {
          const items = projects.filter((p) => p.category === key);
          if (items.length === 0) return null;
          return (
            <div className="project-category" key={key}>
              <h3>{label}</h3>
              <div className="projects-grid">
                {items.map((project) => (
                  <Link
                    to={`/projet/${project.slug}`}
                    className="project-card"
                    key={project.slug}
                  >
                    <div className="project-image">
                      {project.image ? (
                        <img src={project.image} alt={project.title} loading="lazy" decoding="async" />
                      ) : (
                        <div className="project-image-placeholder">
                          {project.title}
                        </div>
                      )}
                      <div className="project-overlay">
                        <h4>{project.title}</h4>
                        <p>{project.description}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
