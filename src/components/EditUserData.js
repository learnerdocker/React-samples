import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Button from "./button";

const EditUserData = (props) => {
  const [message, setMessage] = useState("");
  const history = useNavigate();

  let firstName = props.firstName;

  useEffect(() => {
    //show field values in text boxes
    console.log("I am called in UseEffect.");
  }, []);

  const cancelHandler = () => {
    console.log(" cancel handler called");
    //props.cancelEditUserHandler();
    history("/AllUsers");
  };

  const saveHandler = () => {
    setMessage("Data submitted succeessfully");
    console.log("Form submit handler called");
    // props.saveEditUserHandler();
    history("/EditUserData");
  };

  return (
    <div>
      <div></div>
      <div></div>
      <br />
      <div>
        <Link to="/AllUsers">Back to all user details</Link>
      </div>
      <br />
      <div>
        <label>First Name : </label>
        <input type="text" value={firstName}></input>
        <br />
        <label>Last Name : </label>
        <input type="text"></input>
        <br />
        <label>E-Mail : </label>
        <input type="text"></input>
        <br />
        <Button name="Save" handleClick={saveHandler} />
        <button type="button" onClick={cancelHandler}>
          Cancel
        </button>
      </div>
      <br />
      <div>{message}</div>
      <br />
      <div>
        <Link to="/home">Back to Home</Link>
      </div>
    </div>
  );
};

export default EditUserData;
