import React from "react";
import { LIST } from "../../international";
import Title from "../../components/title/Title";

const ListContainer = () => {
  return (
    <>
      <Title text={LIST.title} />
      <div>
        <strong>{LIST.cardTitle}</strong>
        <a href="/">{LIST.cardPrice}</a>
      </div>
    </>
  );
};

export default ListContainer;
