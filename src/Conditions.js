import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import { signUpSchema } from "./schema/index";


const initialValues = {
  name: "",
  email: "",
  subject: "",
  order: "",
  textarea: "",
  password: "",
  confirm_password: "",
};
const Conditions = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
  useFormik({
    initialValues: initialValues,
    validationSchema: signUpSchema,
    onSubmit: (values, action) => {
      // console.log(values)      
      localStorage.setItem("Name", values.name);
      localStorage.setItem("Email", values.email);
      localStorage.setItem("Subject", values.subject);
      localStorage.setItem("Password", values.password);
      localStorage.setItem("Confirm Password", values.confirm_password);
      localStorage.setItem("Order", values.order);
      localStorage.setItem("Textarea", values.textarea);

      action.resetForm();
      // navigate('/ChangeTitle')
    },
  });
  // const navigate = useNavigate();

  
  
  // const [user, setUser] = useState("")
  // useEffect(() => {
    // const userData = window.localStorage.getItem("Name")
    // setUser(JSON.stringify(userData))
  // }, [])
  

  // console.log(errors)

  // Toggle Password Here
  const [toggleMyPassword, setToggleMyPassword] = useState(false);
  const togglePassword = () => {
    setToggleMyPassword(!toggleMyPassword);
  };

  return (
    <div>
      <div className="container" id="forms_validation">
        <div className="row">
          <div className="col-6">
            <form onSubmit= {handleSubmit}>
              <div className="input-block">
                <label htmlFor="name" className="label_forms">
                  Name:{" "}
                  {errors.name && touched.name ? (
                    <span className="form_error">{errors.name}</span>
                  ) : null}
                </label>
                <input
                  type="name"
                  autoComplete="off"
                  name="name"
                  id="name"
                  placeholder="Name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <div className="input-block">
                <label htmlFor="email" className="label_forms">
                  Email:
                  {errors.email && touched.email ? (
                    <span className="form_error">{errors.email}</span>
                  ) : null}
                </label>
                <input
                  type="email"
                  autoComplete="off"
                  name="email"
                  id="email"
                  placeholder="Email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <div className="input-block">
                <label htmlFor="password" className="label_forms">
                  Password:
                  {errors.password && touched.password ? (
                    <span className="form_error">{errors.password}</span>
                  ) : null}
                </label>
                <input
                  type={toggleMyPassword ? "text" : "password"}
                  autoComplete="off"
                  name="password"
                  id="password"
                  placeholder="Password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <div className="input-block">
                <label htmlFor="confirm_password" className="label_forms">
                  Confirm Password:
                  {errors.confirm_password && touched.confirm_password ? (
                    <span className="form_error">
                      {errors.confirm_password}
                    </span>
                  ) : null}
                </label>
                <input
                  type={toggleMyPassword ? "text" : "password"}
                  autoComplete="off"
                  name="confirm_password"
                  id="confirm_password"
                  placeholder="Confirm Password"
                  value={values.confirm_password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <div className="input-block">
                <label htmlFor="order" className="label_forms">
                  Order ID:
                </label>
                <input
                  type="text"
                  autoComplete="off"
                  name="order"
                  id="order"
                  placeholder="Order ID"
                  value={values.order}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <div className="input-block">
                <label htmlFor="subject" className="label_forms">
                  Subject:
                  {errors.subject && touched.subject ? (
                    <span className="form_error">{errors.subject}</span>
                  ) : null}
                </label>
                <input
                  type="text"
                  autoComplete="off"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  value={values.subject}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <div className="input-block">
                <label htmlFor="textarea" className="label_forms">
                  Textarea:
                  {errors.textarea && touched.textarea ? (
                    <span className="form_error">{errors.textarea}</span>
                  ) : null}
                </label>
                <input
                  type="textarea"
                  autoComplete="off"
                  name="textarea"
                  id="textarea"
                  placeholder="Textarea"
                  value={values.textarea}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-primary mt-5">Submit</button>
              </div>
            </form>
          </div>
          <div className="col-6"></div>
        </div>
      </div>
    </div>
  );
};

export default Conditions;
