import React from "react";
import { Link } from "react-router-dom";
import Title from "../../components/title/Title";
import { HOME } from "../../international";
import "./style.css";

const HomeContainer = () => {
  return (
    <>
      <Title text={HOME.title} />
      <p>
        <Link to="/list" className="products-links">
          {HOME.textLink}
        </Link>
      </p>
    </>
  );
};

export default HomeContainer;
