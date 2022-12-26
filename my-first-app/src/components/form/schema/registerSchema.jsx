import * as Yup from "yup";
import { YUP_MESSAGE } from ".././../../international";

export const RegisterSchema = Yup.object().shape({
  name: Yup.string().required(YUP_MESSAGE.nameRq),
  id: Yup.number().required(YUP_MESSAGE.idRq),
  phone: Yup.number().required(YUP_MESSAGE.phoneRq),
  email: Yup.string()
    .email(YUP_MESSAGE.emailFormat)
    .required(YUP_MESSAGE.emailRq),
  password: Yup.string().required(YUP_MESSAGE.passwordRq),
});
