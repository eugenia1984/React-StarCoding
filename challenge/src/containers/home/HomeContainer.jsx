import React from "react";
import { Link } from "react-router-dom";
import Title from "../../components/title/Title";
import { HOME } from "../../international";

const HomeContainer = () => {
  return (
    <>
      <Title text={HOME.title} />
      <Link to="/list">{HOME.textLink}</Link>
    </>
  );
};

export default HomeContainer;
