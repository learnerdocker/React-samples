import React from "react";
import { Link } from "react-router-dom";

const Welcome = (props) => {
  return (
    <div>
      <h3>welcome {props.name}</h3>
      <Link to="/home">Home</Link>
    </div>
  );
};

export default Welcome;
