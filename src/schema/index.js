import * as Yup from "yup";

export const signUpSchema = Yup.object({
  name: Yup.string().min(3, "Name must be three letters").max(20).required("Please Enter Your Name"),
  email: Yup.string().email().required("Please Enter Your Email"),
  subject: Yup.string().min(5).max(20).required("Please Enter Subject"),
  textarea: Yup.string().max(500).required("Please Enter Proper Message"),
  password: Yup.string().min(6, "Minimum 6 characters are required").required("Please Enter Your Password"),
  confirm_password: Yup.string()
    .required("Confirm Password is Required")
    .oneOf([Yup.ref("password"), null], "Password Must Match"),

});
