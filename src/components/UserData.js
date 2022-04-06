import React, { useRef, useState } from "react";

const UserData = (props) => {
  //const emailRef = useRef(props.Email);
  //const fullNameRef = useRef();

  const userDataEditHandler = () => {
    props.editHandler();
  };

  return (
    <div>
      <div>
        <div>
          <h4>{props.FirstName}</h4>
          <h4>{props.LastName}</h4>
          <h3>{props.Email}</h3>
        </div>

        <div>
          <button onClick={userDataEditHandler}>Edit</button>
        </div>
      </div>
    </div>
  );
};

export default UserData;
