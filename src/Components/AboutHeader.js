// components/AboutHeader.js
import React from 'react';

const AboutHeader = ({ title, subtitle, image }) => (
  <header style={{ ...styles.header, backgroundImage: `url(${image})` }}>
    <h1 style={styles.title}>{title}</h1>
    <p style={styles.subtitle}>{subtitle}</p>
  </header>
);

const styles = {
  header: {
    textAlign: 'center',
    padding: '40px 20px',
    backgroundColor: '#f4f4f4',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: '1.2rem',
    color: '#555',
  },
};

export default AboutHeader;
