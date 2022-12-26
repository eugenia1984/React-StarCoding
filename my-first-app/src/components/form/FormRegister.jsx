import React, { useState } from "react";
import { useFormik } from "formik";
import { RegisterSchema } from "./schema/registerSchema";
import { FORM_REGISTER } from "../../international";
import "./style.css";
import Error from "../error/Error";

const FormRegister = () => {
  const [visible, setVisible] = useState(true);

  const formik = useFormik({
    initialValues: {
      name: "",
      id: "",
      phone: "",
      email: "",
      password: "",
      repeatPassword: "",
    },
    validationSchema: RegisterSchema,
    onSubmit: (values) => console.log(values)
  });
  
  const { handleSubmit, handleChange, touched, errors, values } = formik;

  return (
    <div className="container mb-5 mt-2">
      <form onSubmit={handleSubmit}>
        <div className="form-input">
          <input
            placeholder="Nombre completo"
            name="name"
            onChange={handleChange}
            value={values.name}
          />
          {touched.name && errors.name && <Error text={errors.name} />}
        </div>
        <div className="form-input">
          <input
            placeholder="Número de documento"
            name="id"
            onChange={handleChange}
            value={values.id}
          />
          {touched.id && errors.id && <Error text={errors.id} />}
        </div>
        <div className="form-input">
          <input
            placeholder="Número de teléfono"
            name="phone"
            onChange={handleChange}
            value={values.phone}
          />
          {touched.phone && errors.phone && <Error text={errors.phone} />}
        </div>
        <div className="form-input">
          <input
            placeholder="Correo electrónico"
            name="email"
            onChange={handleChange}
            value={values.email}
          />
          {touched.email && errors.email && <Error text={errors.email} />}
        </div>
        <div className="form-input">
          <input
            placeholder="Crea tu contraseña"
            name="password"
            type="password"
            onChange={handleChange}
            value={values.password}
          />
          {touched.password && errors.password && (
            <Error text={errors.password} />
          )}
        </div>
        <div className="form-input">
          <input
            placeholder="Repetí la contraseña"
            name="repeatPassword"
            type={visible ? "text" : "password"}
            onChange={handleChange}
            value={values.repeatPassword}
          />
          {touched.repeatPassword && errors.repeatPassword && (
            <Error text={errors.repeatPassword} />
          )}
        </div>
        <div>
          <button  className="btn-hide-show" onClick={() => setVisible(!visible)}>
            {visible ? "Ocultar contraseña" : "Mostrar contraseña"}
          </button>
        </div>
        <div className="btn-register">
          <button type="submit">{FORM_REGISTER.btnTxt}</button>
        </div>
      </form>
    </div>
  );
};

export default FormRegister;
