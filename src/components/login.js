import React, { useState } from "react";

const Login = (props) => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = data;

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    props.submitHandler(true, email);
  };

  return (
    <div>
      <center>
        <form onSubmit={submitHandler}>
          <label>E-Mail</label>
          <br />
          <input type="text" name="email" onChange={changeHandler} />
          <br />
          <label>Password </label>
          <br />
          <input type="password" name="password" onChange={changeHandler} />
          <br />

          <input type="submit" value="Login" className="btn btn-primary" />
        </form>
      </center>
    </div>
  );
};

export default Login;
