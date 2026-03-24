import React from 'react';

const ProjectCard = ({ title, description, technologies, link }) => {
  return (
    <article className="project">
      <div className="project__top">
        <h3 className="project__title">{title}</h3>
      </div>
      <p style={{ marginTop: '10px' }}>{description}</p>
      
      {technologies && technologies.length > 0 && (
        <div className="chips" style={{ marginTop: '12px' }}>
          {technologies.map((tech, index) => (
            <span key={index} className="pill">{tech}</span>
          ))}
        </div>
      )}

      {link && (
        <div className="project__links">
          <a href={link} className="link" target="_blank" rel="noopener noreferrer">View Project &rarr;</a>
        </div>
      )}
    </article>
  );
};

export default ProjectCard;
