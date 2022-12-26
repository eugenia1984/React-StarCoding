import React from "react";

const NextButton = ({ text }) => {
  return (
    <>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">{text}</span>
      </button>
    </>
  );
};

export default NextButton;
