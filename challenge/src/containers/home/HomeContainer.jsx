import React from "react";
import Title from "../../components/title/Title";
import { HOME } from "../../international";

const HomeContainer = () => {
  return (
    <>
      <Title text={HOME.title} />
      <a href="/">{HOME.textLink}</a>
    </>
  );
};

export default HomeContainer;
