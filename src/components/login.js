import React, { useState } from "react";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = data;

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (password.length < 5) {
      alert("provide password characters>5");
    } else {
      console.log(data);
    }
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
