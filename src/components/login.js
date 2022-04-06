import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
const axios = require("axios").default;

const Login = (props) => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const history = useNavigate();

  const { email, password } = data;

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    // console.log(data);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    // const requestData = { email: email, password: password };
    //console.log(requestData);
    try {
      axios
        .post("http://localhost:8080/IsUserValid", {
          email: email,
          password: password,
        })
        .then((res) => {
          console.log(res);
          if (res.data.IsValid) {
            history("/welcome");
            console.log(email);
            props.loginSubmitHandler(email);
            console.log("Login JS SUBMIT HANDLER CALLED!");
          } else setError("User is not registered or not valid");
        });
    } catch (error) {
      console.log("error: ", error);
    }
  };

  return (
    <div>
      <div>
        <Link to="/home">Back to Home</Link>
      </div>
      <br />
      <div className="login">
        <center>
          <form onSubmit={formSubmitHandler}>
            <label>E-Mail</label>
            <br />
            <input type="text" name="email" onChange={changeHandler} />
            <br />
            <label>Password </label>
            <br />

            <input type="password" name="password" onChange={changeHandler} />
            <br />
            <br />

            <input type="submit" value="Submit" className="btn" />
          </form>
        </center>
        <div>
          <center>
            <h3 id="demo"> {error} </h3>
          </center>
        </div>
      </div>
    </div>
  );
};

export default Login;
