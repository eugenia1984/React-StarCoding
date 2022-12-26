import React from "react";
import NextButton from "./NextButton";
import PrevButton from "./PrevButton";
import { carrouselItems } from "./carrouselItems";
import "./style.css";

const Carousel = () => {
  
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide mb-5"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        {carrouselItems.map((element) => {
          return (
            <div className="carousel-item active" key={element.id}>
              <img
                src={element.src}
                className="d-block w-100 img-carousel"
                alt={element.alt}
              />
            </div>
          );
        })}
      </div>
      <PrevButton text="Previous" />
      <NextButton text="Next" />
    </div>
  );
};

export default Carousel;
