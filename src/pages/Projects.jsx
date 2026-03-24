import React from 'react';
import PageHeader from '../components/PageHeader';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  return (
    <section>
      <PageHeader title="Projects" subtitle="Showcasing my recent work and creations." />
      
      <div className="grid">
        <ProjectCard
          title="Dynamic Site Mapping System"
          description="Designed and implemented an interactive GIS mapping system that transforms complex SQL data into layered, real-time visualization of site and infrastructure data for improved inspection accuracy and planning. Centralized critical job-site information into a single interface to improve field efficiency."
          technologies={['JavaScript', 'ArcGIS Online API', 'SQL', 'GIS']}
        />
        <ProjectCard
          title="Currensee – Hackathon Project"
          description="Architected an AI-driven simulation platform featuring real-time dashboards and a custom agent that automates in-depth stock analysis and provides context-aware guidance based on individual user portfolios. The platform features real time metrics, automated portfolio management and auditing."
          technologies={['AI Agents', 'Dashboard', 'Stock Analysis']}
        />
        <ProjectCard
          title="WaitIn – Square1 Next 2022 Entrepreneurship Challenge"
          description="Developed a full-stack hospitality platform designed to automate kitchen-to-dining workflow. Won 3rd Place out of all participants."
          technologies={['Full-Stack', 'Web Development']}
        />
      </div>
    </section>
  );
};

export default Projects;
