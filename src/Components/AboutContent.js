// components/AboutContent.js
import React from 'react';

const AboutContent = ({ about, mission, vision }) => (
  <section style={styles.section}>
    <h2 style={styles.heading}>About Our Firm</h2>
    <p style={styles.paragraph}>{about}</p>
    <h3 style={styles.subheading}>Our Mission</h3>
    <p style={styles.paragraph}>{mission}</p>
    <h3 style={styles.subheading}>Our Vision</h3>
    <p style={styles.paragraph}>{vision}</p>
  </section>
);

const styles = {
  section: {
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto',
  },
  heading: {
    fontSize: '2rem',
    color: '#333',
  },
  subheading: {
    fontSize: '1.5rem',
    color: '#444',
  },
  paragraph: {
    fontSize: '1rem',
    color: '#666',
    lineHeight: '1.6',
  },
};

export default AboutContent;
