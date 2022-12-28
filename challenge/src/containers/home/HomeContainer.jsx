import React from "react";
import Title from "../../components/title/Title";
import LinkButton from "../../components/linkButton/LinkButton";
import { HOME } from "../../international";
import "./style.css";

const HomeContainer = () => {
  return (
    <>
      <Title text={HOME.title} />
      <LinkButton to="/list" txt={HOME.textLink} />
    </>
  );
};

export default HomeContainer;
