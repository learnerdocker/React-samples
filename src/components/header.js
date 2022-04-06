import React, { useState } from "react";
import Welcome from "./Welcome";
import Login from "./Login";
import Registration from "./Registration";
import Button from "./button";
import Regsuccess from "./regsuccess";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import AllUsers from "./AllUsers";

export default function Header() {
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);
  const [user, setUser] = useState(false); //setUser true when Login is valid in login component
  const [userreg, setUserreg] = useState(false);
  const [name, setName] = useState("");
  const [allUser, setAllUser] = useState(false);

  const history = useNavigate();

  const GetAllUsersHandler = (e) => {
    setAllUser(true);
    history("/AllUsers");
  };

  const submitHandler = (userValid, userName) => {
    // After entering login details submit button
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
    // will setLogin true then open login component(initially it is false(state))[main page login button]
    setLogin(true);
    history("/login");
  };
  const registerHandler = (e) => {
    //will setRegister true then open register component[main page registerHandler]
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
            <div>
              {" "}
              <button style={{ color: "blue" }} onClick={GetAllUsersHandler}>
                {" "}
                All Users{" "}
              </button>
              <br />
              <br />
            </div>

            <fieldset className="formdesign">
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
