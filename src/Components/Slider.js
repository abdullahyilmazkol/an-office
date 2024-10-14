// src/components/Slider.jsx


import React, { useState, useEffect ,useCallback} from 'react';
import '../Styles/Slider.css';

const slideData = [
  {
    src:  '../Uploads/3.jpeg',
    title: 'Slide 1',
    copy: 'DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT.'
  },
  {
    src:'../Uploads/2.jpeg',
    title: 'Slide 2',
    copy: 'DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT.'
  },
  {
    src: '../Uploads/1.jpeg',
    title: 'Slide 3',
    copy: 'DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT.'
  },
  {
    src:  '../Uploads/4.jpeg',
    title: 'Slide 4',
    copy: 'DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT.'
  },
];

const Slider = () => {
    const [current, setCurrent] = useState(0);
    const slideCount = slideData.length;
  
    const nextSlide = useCallback(() => {
      setCurrent((prev) => (prev + 1) % slideCount);
    }, [slideCount]);
  
    useEffect(() => {
      const autoplay = setInterval(nextSlide, 5000);
      return () => clearInterval(autoplay);
    }, [nextSlide]);
  
    const prevSlide = () => {
      setCurrent((prev) => (prev - 1 + slideCount) % slideCount);
    };

    return (
        <div className="container" id="container">
          <div className="caption" id="slider-caption">
            <div className="caption-heading">
              <h1>{slideData[current].title}</h1>
            </div>
            <div className="caption-subhead">
              <span>{slideData[current].copy}</span>
            </div>
          </div>
          <div className="left-col" id="left-col">
            {slideData.map((slide, index) => {
              let slideClass = 'slide';
              if (index === current) {
                slideClass += ' current';
              } else if (index === (current + 1) % slideCount) {
                slideClass += ' next';
              } else if (index === (current - 1 + slideCount) % slideCount) {
                slideClass += ' previous';
              }
    
              return (
                <div key={index} >
                <img src={slide.src} className={slideClass} alt='alt' />
              </div>
              );
            })}
          </div>
          <ul className="nav">
  <li className="slide-up">
    <button className="btn" onClick={(e) => { e.preventDefault(); prevSlide(); }}>&#60;</button>
  </li>
  <li className="slide-down">
    <button className="btn" onClick={(e) => { e.preventDefault(); nextSlide(); }}>&#62;</button>
  </li>
</ul>

        </div>
      );
    };

export default Slider;
