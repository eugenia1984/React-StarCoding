import React from "react";
import FormRegister from "../../components/form/FormRegister";
import Navbar from "../../components/navbar/Navbar";
import Title from "../../components/title/Title";
import { REGISTER } from "../../international";

const RegisterContainer = () => {
  return (
    <>
      <Navbar />
      <Title text={REGISTER.title} />
      <FormRegister />
    </>
  );
};

export default RegisterContainer;
