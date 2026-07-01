import { education } from '../data/portfolio';

function Education() {
  return (
    <section className="section education" id="education">
      <div className="section-container">
        <h2 className="section-heading">Parcours</h2>
        <div className="timeline">
          {education.map((entry, index) => (
            <div
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              key={entry.period}
            >
              <div className="timeline-dot" />
              <div className="timeline-content">
                <span className="timeline-period">{entry.period}</span>
                <h3>{entry.diploma}</h3>
                <h4>{entry.school}</h4>
                <p>{entry.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
