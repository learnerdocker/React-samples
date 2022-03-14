import React, { useState } from "react";
import Welcome from "./Welcome";
import Login from "./Login";
import Registration from "./Registration";
import Button from "./button";
import Regsuccess from "./regsuccess";
import { useNavigate } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);
  const [user, setUser] = useState(false);
  const [userreg, setUserreg] = useState(false);
  const [name, setName] = useState("");
  const history = useNavigate();

  const submitHandler = (userValid, userName) => {
    console.log("checking userValid : ", userValid);
    setUser(userValid);
    setName(userName);
    setLogin(false);
  };
  const formsubmitHandler = (userRegistered) => {
    setUserreg(userRegistered);
    setRegister(false);
  };

  const loginHandler = (e) => {
    setLogin(true);
    history("/login");
  };
  const registerHandler = (e) => {
    setRegister(true);
    history("/register");
  };

  return (
    <div className="container">
      <header>
        <h1>Wells Fargo</h1>
      </header>
      {/*<Link to="/">Go to Home page</Link>*/}{" "}
      {login ? (
        <Login submitHandler={submitHandler} />
      ) : register ? (
        <Registration submit={formsubmitHandler} />
      ) : user ? (
        <Welcome name={name} />
      ) : userreg ? (
        <Regsuccess />
      ) : (
        <div>
          <div className="labels">
            <fieldset>
              <label htmlFor="already-user">Already-User ?: </label>
              <Button handleClick={loginHandler} name="Login" />
            </fieldset>
            <br />
            <fieldset className="register">
              <label htmlFor="new-user">New User ?: </label>
              <Button handleClick={registerHandler} name="Register" />
            </fieldset>
          </div>
          <div class="footer">
            <p>Footer</p>
          </div>
        </div>
      )}
    </div>
  );
}
