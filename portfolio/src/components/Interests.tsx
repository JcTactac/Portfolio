import { interests } from '../data/portfolio';

function Interests() {
  return (
    <section className="section interests" id="interests">
      <div className="section-container">
        <h2 className="section-heading">Centres d'intérêt</h2>
        <div className="interests-grid">
          {interests.map((interest) => (
            <div className="interest-card" key={interest.name}>
              <div className="interest-image">
                {interest.image ? (
                  <img src={interest.image} alt={interest.name} />
                ) : (
                  <div className="interest-image-placeholder">
                    {/* TODO: ajouter image */}
                    {interest.name}
                  </div>
                )}
              </div>
              <h3>{interest.name}</h3>
              <p>{interest.description || 'Description à venir'}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Interests;
