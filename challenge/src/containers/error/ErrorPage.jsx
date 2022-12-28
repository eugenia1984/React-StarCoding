import React from "react";
import Image from "../../components/imagerror/Image";
import LinkButton from "../../components/linkButton/LinkButton";
import { ERROR_PAGE } from "../../international";

const ErrorPage = () => {
  const srcImg =
    "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/200/null/external-error-404-computer-science-flaticons-lineal-color-flat-icons.png";

  return (
    <>
      <Image src={srcImg} alt="Error 404" />
      <LinkButton to="/" txt={ERROR_PAGE.btnText} />
    </>
  );
};

export default ErrorPage;
