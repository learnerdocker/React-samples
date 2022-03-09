import React, { useState } from "react";

import Login from "./login";
import Registration from "./registration";
import Button from "./button";

export default function Header() {
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);

  const loginHandler = (e) => {
    setLogin(true);
  };
  const registerHandler = (e) => {
    setRegister(true);
  };

  return (
    <div className="header">
      <header>
        <h1>Wells Fargo</h1>
      </header>
      {login ? (
        <Login />
      ) : register ? (
        <Registration />
      ) : (
        <div>
          <fieldset>
            <label htmlFor="already-user">Already-User ?: </label>
            <Button handleClick={loginHandler} name="Login" />
          </fieldset>
          <br />
          <fieldset>
            <label htmlFor="new-user">New User ?: </label>
            <Button handleClick={registerHandler} name="Register" />
          </fieldset>
        </div>
      )}
    </div>
  );
}
