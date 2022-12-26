import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { RegisterSchema } from "./schema/registerSchema";
import { FORM_REGISTER } from "../../international";

const FormRegister = () => {

  return (
    <Formik
      initialValues={{ name: "", id: "", phone: "", email: "", password: "" }}
      validationSchema={ RegisterSchema }
    >
      {({ handleBlur, handleChange, handleSubmit, values, errors }) => {
        <>
          <input
            placeholder="Nombre completo"
            name="name"
            value={values.name}
            onChange={handleChange("name")}
          />
          { errors.name && <p>{errors.name}</p>}
          <input
            placeholder="Número de documento"
            name="id"
            value={values.id}
            onChange={handleChange("id")}
          />
          { errors.id && <p>{errors.id}</p>}
          <input
            placeholder="Número de teléfono"
            name="phone"
            value={values.phone}
            onChange={handleChange("phone")}
          />
          { errors.phone && <p>{errors.phone}</p>}
          <input
            placeholder="Correo electrónico"
            name="email"
            value={values.email}
            onChange={handleChange("email")}
          />
          { errors.email && <p>{errors.email}</p>}
          <input
            placeholder="Crea tu contraseña"
            name="password"
            value={values.password}
            type="password"
            onChange={handleChange("password")}
          />
          { errors.password && <p>{errors.password}</p>}
          <button>{FORM_REGISTER.btnTxt}</button>
        </>;
      }}
    </Formik>
  );
};

export default FormRegister;
