import React from 'react';
import PageHeader from '../components/PageHeader';

const Contact = () => {
  return (
    <section>
      <PageHeader title="Contact Me" subtitle="Let's build something great together." />
      
      <div className="card">
        <p style={{ marginBottom: '20px' }}>
          I am currently open for opportunities and collaborations. Feel free to reach out via email or connect with me on LinkedIn!
        </p>

        <ul className="list">
          <li>
            <span className="label">Email:</span>
            <a href="mailto:thelt976@outlook.com" className="strong">thelt976@outlook.com</a>
          </li>
          <li>
            <span className="label">Phone:</span>
            <span className="strong">(859)-414-5502</span>
          </li>
          <li>
            <span className="label">Location:</span>
            <span className="strong">Edgewood, KY</span>
          </li>
          <li>
            <span className="label">LinkedIn:</span>
            <a href="https://linkedin.com/in/theodorehelton/" target="_blank" rel="noopener noreferrer" className="strong">
              linkedin.com/in/theodorehelton/
            </a>
          </li>
        </ul>
        
        <div style={{ marginTop: '25px' }}>
          <a href="mailto:thelt976@outlook.com" className="btn btn--primary">Send me an Email</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
