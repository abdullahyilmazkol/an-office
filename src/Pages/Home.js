import React from 'react';
import Slider from '../Components/Slider';

const Home = () => {
  return (
    <div className="Home">
      <Slider />
      {/* <Contact/> */}
    </div>
    //   <Box 
    //     justifyContent="center" 
    //     alignItems="center" 
    //     minHeight="100vh"  // Tam ekran yüksekliği sağlamak için
    //     bgcolor="#f0f0f0"
    //   >
    //     <img 
    //       src="https://www.guncuturizm.com/img/s-3.avif" 
    //       alt="My" 
    //       style={{ 
    //         maxWidth: '100%',  // Görselin taşmaması için
    //         height: 'auto'     // Yükseklik oranının korunması için
    //       }}
    //     />
    //   </Box>
  );
}

export default Home;
