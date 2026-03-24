import React from 'react';
import PageHeader from '../components/PageHeader';
import SkillList from '../components/SkillList';
import { Link } from 'react-router-dom';

const Home = () => {
  const skills = [
    'Python', 'JavaScript', 'HTML/CSS', 'React', 'SQL',
    'Dataiku DSS', 'Machine Learning', 'AI Agent Orchestration',
    'iOS Engineering', 'Git/GitHub', 'Agile'
  ];

  return (
    <section>
      <PageHeader title="About Me" subtitle="Welcome to my portfolio!" />
      <div className="card" style={{ marginBottom: '20px' }}>
        <p>
          I am a Senior Computer Science student at Northern Kentucky University and the Founder of Thelton Development.
          I am proficient in the end-to-end software development and machine learning lifecycle, AI agent orchestration, and iOS engineering.
        </p>
        <p style={{ marginTop: '10px' }}>
          My goal is to leverage data and technology to solve complex problems, build scalable pipelines, and deliver impactful, user-centric software solutions.
        </p>
      </div>

      <PageHeader title="Technical Skills" />
      <div className="card" style={{ marginBottom: '20px' }}>
        <SkillList skills={skills} />
      </div>

      <div className="actions" style={{ marginTop: '30px' }}>
        <Link to="/projects" className="btn btn--primary">View My Projects</Link>
        <Link to="/experience" className="btn">See My Experience</Link>
      </div>
    </section>
  );
};

export default Home;
