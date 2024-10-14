// src/pages/AboutPage.js
import React from 'react';
import AboutHeader from '../Components/AboutHeader';
import AboutContent from '../Components/AboutContent';
import AboutTeam from '../Components/AboutTeam';
import aboutData from '../data/aboutData';

const About = () => {
  const { header, content, team } = aboutData;

  return (
    <div>
      <AboutHeader title={header.title} subtitle={header.subtitle} image={header.image} />
      <AboutContent
        about={content.about}
        mission={content.mission}
        vision={content.vision}
      />
      <AboutTeam team={team} />
    </div>
  );
};

export default About;
