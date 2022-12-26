import React from "react";

const PrevButton = ({ text }) => {
  return (
    <>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">{text}</span>
      </button>
    </>
  );
};

export default PrevButton;
