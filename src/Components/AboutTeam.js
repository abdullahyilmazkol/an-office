// components/AboutTeam.js
import React from 'react';

const AboutTeam = ({ team }) => (
  <section style={styles.section}>
    <h2 style={styles.heading}>Meet Our Team</h2>
    <div style={styles.teamContainer}>
      {team.map((member, index) => (
        <div key={index} style={styles.card}>
          <h3 style={styles.name}>{member.name}</h3>
          <p style={styles.role}>{member.role}</p>
          <p style={styles.description}>{member.description}</p>
        </div>
      ))}
    </div>
  </section>
);

const styles = {
  section: {
    padding: '20px',
    backgroundColor: '#f4f4f4',
  },
  heading: {
    fontSize: '2rem',
    color: '#333',
    textAlign: 'center',
  },
  teamContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    marginTop: '20px',
  },
  card: {
    width: '250px',
    padding: '15px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    marginBottom: '20px',
  },
  name: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#333',
  },
  role: {
    fontSize: '1rem',
    color: '#555',
  },
  description: {
    fontSize: '0.9rem',
    color: '#666',
  },
};

export default AboutTeam;
