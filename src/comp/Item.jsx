import React, { useState } from "react";
import jacket from "./../img/jacket.png";
import sweater from "./../img/sweater.png";
import sweater1 from "./../img/sweater-1.png";
import tShirt from "./../img/t-shirt.png";

import "./item.css";

const Item = () => {
  const images = [jacket, sweater, sweater1, tShirt];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleArrowClick = (direction) => {
    if (direction === "prev") {
      setActiveIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    } else if (direction === "next") {
      setActiveIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const handleMouseEnter = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="carousel">
      <div className="container">
        <div className="carousel-inner">
          <div className="main-img">
            <img src={images[activeIndex]} alt={`Slide ${activeIndex}`} />

            <div className="carousel-btn">
              <button
                className="left-btn"
                onClick={() => handleArrowClick("prev")}
              >
                ←
              </button>
              <button
                className="right-btn"
                onClick={() => handleArrowClick("next")}
              >
                →
              </button>
            </div>
          </div>
          <div className="carousel-img">
            {images.map((item, index) => (
              <img
                key={index}
                src={item}
                alt={item}
                onMouseEnter={() => handleMouseEnter(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
