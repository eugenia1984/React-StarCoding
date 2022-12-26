import * as Yup from "yup";
import { YUP_MESSAGE } from ".././../../international";

export const RegisterSchema = Yup.object().shape({
  name: Yup.string()
    .required(YUP_MESSAGE.nameRq)
    .matches(/^[a-zA-Z ]*$/, YUP_MESSAGE.nameOnlyLetters),
  id: Yup.number()
    .required(YUP_MESSAGE.idRq)
    .typeError(YUP_MESSAGE.idTypeError)
    .min(2000000, YUP_MESSAGE.idMin)
    .max(60000000, YUP_MESSAGE.idMax),
  phone: Yup.number()
    .required(YUP_MESSAGE.phoneRq)
    .typeError(YUP_MESSAGE.phoneTypeError),
  email: Yup.string()
    .email(YUP_MESSAGE.emailFormat)
    .required(YUP_MESSAGE.emailRq),
  password: Yup.string()
    .required(YUP_MESSAGE.passwordRq)
    .min(8, YUP_MESSAGE.passwordMin),
  repeatPassword: Yup.string()
    .required(YUP_MESSAGE.passwordRq)
    .oneOf([Yup.ref("password")], YUP_MESSAGE.passwordNotMatch),
});
