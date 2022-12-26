import React from "react";
import { useContext } from "react";
import Carousel from "../../components/carousel/Carousel";
import InfoBarComponent from "../../components/InfoBarComponent";
import { EcommerceContext } from "../../context/EcommerceContext";

import { HOME_MESSAGE } from "../../international";

const HomeContainer = () => {
  const { shoppingCart } = useContext(EcommerceContext);

  return (
    <>
      <InfoBarComponent shoppingCart={shoppingCart} text={HOME_MESSAGE.txt} />
      <Carousel />
    </>
    
  );
};

export default HomeContainer;
