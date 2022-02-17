import React, { useState } from "react";

import styled from "styled-components";
import Login from "./login";
import Registration from "./registration";
import Button from "./button";

const HeaderElement = styled.header`
  display: flex;
  width: 100%;
  height: 120px;
  justify-content: space-between;
  color: red;
`;
const myButton = styled.button`
  width: 20px;
  height: 16px;
`;
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
      <HeaderElement>
        <h1>Wells Fargo</h1>
      </HeaderElement>
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
