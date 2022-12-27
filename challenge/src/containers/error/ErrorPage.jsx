import React from "react";
import { Link } from "react-router-dom";
import { ERROR_PAGE } from "../../international";

const ErrorPage = () => {
  return (
    <>
      <Link to="/">{ERROR_PAGE.btnText}</Link>
    </>
  );
};

export default ErrorPage;
