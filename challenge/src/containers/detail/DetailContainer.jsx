import React from "react";
import Title from "../../components/title/Title";
import { DETAIL } from "../../international";

const DetailContainer = () => {
  return (
    <>
      <Title text={DETAIL.title} />
      <div>
        <strong>{DETAIL.description}</strong>
        <a href="/">{DETAIL.price}</a>
        <button>{DETAIL.btnText}</button>
      </div>
    </>
  );
};

export default DetailContainer;
