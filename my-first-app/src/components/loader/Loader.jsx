import React from "react";

const Loader = ({ text }) => {
  return (
    <>
      <p>{text}</p>
      <div className="d-flex justify-content-center">
        <div
          className="spinner-border text-primary spinner-border-lg"
          role="status"
        >
          <span className="visually-hidden">{text}</span>
        </div>
      </div>
    </>
  );
};

export default Loader;
