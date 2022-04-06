import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Registration = (props) => {
  /*const [data, setData] = useState({
    firstName:"",
    lastName:"",
    email: "",
    password: "",
  }); */
  const history = useNavigate();
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .min(6, "it should contain at least 6 chars")
        .required("Required"),
      lastName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      //password: Yup.string().password("Invalid password").required("Required"),
    }),

    onSubmit: (values) => {
      console.log(JSON.stringify(values));
      console.log(values);

      const userRegData = {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        password: values.password,
      };

      axios
        .post("http://localhost:8080/RegisterUser", userRegData)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));

      history("/regsuccess");
      props.submit(true);
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <h1>RegistrationForm</h1>
        <fieldset>
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <div>{formik.errors.firstName}</div>
          ) : null}
        </fieldset>

        <fieldset>
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName}
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <div>{formik.errors.lastName}</div>
          ) : null}
        </fieldset>
        <fieldset>
          <label htmlFor="email">Email </label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : null}
        </fieldset>
        <fieldset>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <div>{formik.errors.password}</div>
          ) : null}
        </fieldset>
        <fieldset>
          <button type="submit">Submit</button>
        </fieldset>
      </form>

      <div>
        <Link to="/home">Home</Link>
      </div>
    </div>
  );
};

export default Registration;
