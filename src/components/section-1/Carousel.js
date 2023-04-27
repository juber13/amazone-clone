import React, { useEffect, useState } from "react";
import "./carousel.css";
import FirstImg from './images/Deals-PC-3000-Unrec._CB592487741_.jpg'
import secondImg from './images/Haircare-Herofader-PC11._CB592208139_.jpg'
import fourthImg from './images/61aURrton0L._SX3000_.jpg'
import fifthImg from './images/WA3000._CB592962828_.jpg'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftSharpIcon from '@mui/icons-material/ChevronLeftSharp';


const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const item = [
    {
      id: 1,
      content: (
        <div className="itemSlider">
           <img src={FirstImg} alt="" />
        </div>
      ),
    },
    {
      id: 2,
      content: (
        <div className="itemSlider">
          <img src={secondImg} alt="" />
        </div>
      ),
    },
    {
      id: 3,
      content: (
        <div className="itemSlider">
          <img src={fourthImg} alt="" />
        </div>
      ),
    },
    {
      id: 3,
      content: (
        <div className="itemSlider">
          <img src={fifthImg} alt="" />
        </div>
      ),
    },
    {
      id: 3,
      content: (
        <div className="itemSlider">
          <img src={fifthImg} alt="" />
        </div>
      ),
    },
  ];

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % item.length);
    }, 5000);

    setIntervalId(id);
    return () => clearInterval(id);
  }, [currentIndex, item.length]);

  const handlerPrev = () => {
    clearInterval(intervalId);
    setCurrentIndex((currentIndex - 1) % item.length);
  };

  const handlerNext = () => {
    clearInterval(intervalId);
    setCurrentIndex((currentIndex + 1) % item.length);
  };



  return (
    <>
      <div className="slider">
        {item.map((itemContent, index) => {
          const isActive = index === currentIndex;
          const className = `slider-item ${isActive ? "active" : ""}`;
          return (
            <div className={className} key={index}>
              {itemContent.content}
            </div>
          );
        })}
        <div className="slider-controls">
           <ChevronLeftSharpIcon onClick={handlerPrev} className="icon"/>
          <ChevronRightIcon onClick={handlerNext} className="icon"/>
        </div>
      </div>


    </>
  );
};

export default Carousel;
