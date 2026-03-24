import React from 'react';

const SkillList = ({ skills }) => {
  if (!skills || skills.length === 0) return null;

  return (
    <div className="chips">
      {skills.map((skill, index) => (
        <span key={index} className="chip">{skill}</span>
      ))}
    </div>
  );
};

export default SkillList;
