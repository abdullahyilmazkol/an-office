// styles.js
const getStyles = (width) => {
    const isMobile = width <= 768;
    return {
      projectListContainer: {
        overflow: 'hidden',
      },
      projectList: {
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fill, minmax(320px, 1fr))',
        padding: '4%',
        gap: '20px',
        margin: '0 auto',
        maxWidth: '1200px',
      },
      projectDetail: {
        padding: '20px',
      },
      gallery: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '10px',
      },
      galleryImage: {
        width: '45%',
        borderRadius: '5px',
      },
      projectCard: {
        border: '1px solid #0000',
        borderRadius: '5px',
        padding: '10px',
        textAlign: 'start',
        textDecoration: 'none',
      },
      image: {
        width: '100%',
        height: 'auto',
      },
      link: {
        textDecoration: 'none',
        color: '#262525',
      },
    };
  };
  
  export default getStyles;
  