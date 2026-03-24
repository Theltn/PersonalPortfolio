import React from 'react';
import PageHeader from '../components/PageHeader';
import ExperienceItem from '../components/ExperienceItem';
import QuoteWidget from '../components/QuoteWidget';

const Experience = () => {
  return (
    <section>
      <PageHeader title="Experience" subtitle="My professional journey and background." />
      
      <ExperienceItem
        role="Data Science Intern"
        organization="Pfizer, New York, NY (Global Commercial Analytics)"
        dates="May 2025 – August 2025"
        description="Supported the Dynamic Targeting Global Team in developing a reusable toolkit to standardize and simplify data science workflows across Pfizer’s brand teams, improving maintainability and scalability."
        accomplishments={[
          'Built and maintained scalable data science pipelines in Python and Dataiku DSS, applying EDA, preprocessing, feature selection, modeling, scenario-generation, optimization, and post-processing.',
          'Collaborated cross-functionally in an Agile environment with bi-weekly sprints, stakeholder meetings, and cross-team check-ins; utilized GitHub, Jira, and Confluence for workflow management.'
        ]}
      />

      <ExperienceItem
        role="Software Developer Intern"
        organization="SWPPPTrack, Akron, OH"
        dates="March 2024 – April 2025"
        description="Developed and maintained full-stack application features using Alpha Software, SQL, JavaScript, HTML, collaborating cross-functionally to gather requirements, resolve issues, and optimize performance."
        accomplishments={[
          'Designed and implemented location-aware inspection tools, using device orientation, geolocation plugins, and SQL data to help inspectors quickly locate job-site items and improve field workflows.',
          'Built dynamic mapping and visualization features with JavaScript and the ArcGIS Online API to display SQL-backed datasets (blueprints, water and storm infrastructure) on interactive maps for planning.'
        ]}
      />

      {/* Quote Widget integrated into the Experience page naturally */}
      <QuoteWidget />

    </section>
  );
};

export default Experience;
