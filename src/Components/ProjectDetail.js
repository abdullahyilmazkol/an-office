// ProjectDetail.js
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { projects } from '../data/projectData';
import getStyles from './styles';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));
  const [styles, setStyles] = useState(getStyles(window.innerWidth));

  useEffect(() => {
    const handleResize = () => setStyles(getStyles(window.innerWidth));
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={styles.projectDetail}>
        <br></br>
        <br></br>
        <br></br>
      <h4>{project.title}</h4>
      <p>{project.description}</p>
      <div style={styles.gallery}>
        {project.gallery.map((image, index) => (
          <img key={index} src={image} alt={`Gallery image ${index}`} style={styles.galleryImage} />
        ))}
      </div>
      <Link to="/projects">← Geri Dön</Link>
    </div>
  );
};

export default ProjectDetail; // `export default` kullanıyoruz
