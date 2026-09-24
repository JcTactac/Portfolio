import { skills } from '../data/portfolio';

function Skills() {
  const languages = skills.filter((s) => s.category === 'language');
  const tools = skills.filter((s) => s.category === 'tool');
  const frameworks = skills.filter((s) => s.category === 'framework');

  const renderGroup = (title: string, items: typeof skills) => (
    <div className="skills-group">
      <h3>{title}</h3>
      <div className="skills-grid">
        {items.map((skill) => (
          <div className="skill-card" key={skill.name}>
            {skill.icon ? (
              <img className="skill-icon" src={skill.icon} alt={skill.name} loading="lazy" decoding="async" />
            ) : (
              <div className="skill-icon-placeholder">{skill.name[0]}</div>
            )}
            <span className="skill-name">{skill.name}</span>
            {skill.tag && <span className="skill-tag">{skill.tag}</span>}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="section skills" id="skills">
      <div className="section-container">
        <h2 className="section-heading">Compétences</h2>
        {renderGroup('Langages', languages)}
        {renderGroup('Frameworks', frameworks)}
        {renderGroup('Outils', tools)}
      </div>
    </section>
  );
}

export default Skills;
