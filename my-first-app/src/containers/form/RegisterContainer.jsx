import React from "react";
import FormRegister from "../../components/form/FormRegister";
import Navbar from "../../components/navbar/Navbar";
import Title from "../../components/title/Title";
import { REGISTER } from "../../international";
import "./style.css";

const RegisterContainer = () => {
  return (
    <>
      <Navbar />
      <div className="registerForm">
        <Title text={REGISTER.title} />
        <FormRegister />
      </div>
    </>
  );
};

export default RegisterContainer;
