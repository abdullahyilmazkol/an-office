// ProjectCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import getStyles from './styles';

const ProjectCard = ({ project }) => {
  const styles = getStyles(window.innerWidth);

  return (
    <div style={styles.projectCard}>
      <Link to={`/projects/${project.id}`} style={styles.link}>
        <img src={project.image} alt={project.title} style={styles.image} />
        <h3>{project.title}</h3>
      </Link>
    </div>
  );
};

export default ProjectCard;
