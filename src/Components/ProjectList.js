import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projectData';
import getStyles from './styles';
import { Fade, Grow } from '@mui/material';

const ProjectList = () => {
  const [styles, setStyles] = useState(getStyles(window.innerWidth));
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true); // Bileşen yüklendiğinde görünür hale getirir

    const handleResize = () => setStyles(getStyles(window.innerWidth));
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Fade in={isVisible} timeout={800}>
      <div style={styles.projectListContainer}>
        <br />
        <br />
        <div style={styles.projectList}>
          {projects.map((project) => (
            <Grow in={isVisible} timeout={800} key={project.id}>
              <div>
                <ProjectCard project={project} />
              </div>
            </Grow>
          ))}
        </div>
      </div>
    </Fade>
  );
};

export default ProjectList;
