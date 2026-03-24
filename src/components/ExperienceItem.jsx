import React from 'react';

const ExperienceItem = ({ role, organization, dates, description, accomplishments }) => {
  return (
    <div className="timeline-item card" style={{ marginBottom: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
        <h3 className="timeline-item__title">{role}</h3>
        <span className="muted">{dates}</span>
      </div>
      <p className="strong" style={{ color: 'var(--accent-2)' }}>{organization}</p>
      <p style={{ marginTop: '10px' }}>{description}</p>
      
      {accomplishments && accomplishments.length > 0 && (
        <ul className="list bullets" style={{ marginTop: '12px' }}>
          {accomplishments.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ExperienceItem;
