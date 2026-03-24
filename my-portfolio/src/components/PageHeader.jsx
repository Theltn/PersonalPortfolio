import React from 'react';

const PageHeader = ({ title, subtitle }) => {
  return (
    <div className="section-header">
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="muted">{subtitle}</p>}
    </div>
  );
};

export default PageHeader;
