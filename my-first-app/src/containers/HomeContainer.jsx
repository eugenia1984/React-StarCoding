import { useContext } from "react";
import InfoBarComponent from "../components/InfoBarComponent";
import { EcommerceContext } from "../context/EcommerceContext";

import { HOME_MESSAGE } from "../international";

const HomeContainer = () => {
  const { shoppingCart } = useContext(EcommerceContext);

  return (
    <InfoBarComponent shoppingCart={shoppingCart} text={HOME_MESSAGE.txt} />
  );
};

export default HomeContainer;
