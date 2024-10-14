// src/components/Slider.jsx


import React, { useState, useEffect ,useCallback} from 'react';
import '../Styles/Slider.css';

const slideData = [
  {
    src:  'http://www.anilbicer.com/wp-content/uploads/2014/08/01-copy-copy-1.jpg',
    title: 'Slide 1',
    copy: 'DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT.'
  },
  {
    src:'https://cdn.myportfolio.com/5084143c-52fc-4180-96ca-ba753d57e601/7cdaacfb-5872-4970-8904-afe91fee1180.jpg?h=d365297fd6e3adf7e5a3e05f2aeb8286',
    title: 'Slide 2',
    copy: 'DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT.'
  },
  {
    src: 'https://cdn.myportfolio.com/5084143c-52fc-4180-96ca-ba753d57e601/94f7f06e-5f10-4424-aab0-d4e06618d2a8.jpg?h=11d6d464ea046cc6e33c3c536f97f83a',
    title: 'Slide 3',
    copy: 'DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT.'
  },
  {
    src:  'https://cdn.myportfolio.com/5084143c-52fc-4180-96ca-ba753d57e601/fa59a154-9af2-40a1-ac51-deb1b76b681c.jpg?h=650d3ed6b6562112472ce2babe5f3ece',
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
