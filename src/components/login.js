import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
const axios = require("axios").default;

const memberDetails = [
  { id: "m1", name: "naren", email: "naren@gmail.com", password: "naren123" },
  {
    id: "m2",
    name: "narender",
    email: "narender@gmail.com",
    password: "narender123",
  },
  { id: "m3", name: "susmi", email: "susmi@gmail.com", password: "susmi123" },
  {
    id: "m4",
    name: "susmitha",
    email: "susmitha@gmail.com",
    password: "susmitha123",
  },
  {
    id: "m5",
    name: "krithi",
    email: "krithi@gmail.com",
    password: "krithi123",
  },
  {
    id: "m6",
    name: "krithika",
    email: "krithika@gmail.com",
    password: "krithika143",
  },
];

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

  const submitHandler = (e) => {
    e.preventDefault();
    const requestData = { email: email, password: password };

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
            props.submitHandler(true, email);
          } else setError("User is not registered or not valid");
        });
    } catch (error) {
      console.log("error: ", error);
    }
    ///// -------
    /*
  fetch("http://localhost:8080/IsUserValid", {
    "method": "POST",
    "headers": {        
      "accept": "application/json"
    },
    "body": requestData
    })
    .then(response => response.json())
    .then(response => {
      console.log(response)

     if( response.IsValid)
     {
      history("/welcome");
      props.submitHandler(true, email);
     }
     else
     setError("Enter valid E-Mail & password");
    })
    .catch(err => {
      console.log(err);
    });

*/
    // const validUserDetails = memberDetails.filter((member) => {
    //   return member.email === email;
    // });

    // if (validUserDetails.length === 0) {
    //   // document.getElementById("demo").innerHTML =
    //   //   "Enter valid E-Mail & password";
    //   setError("Enter valid E-Mail & password");
    // } else if (validUserDetails[0].password === password) {
    //   history("/welcome");
    //   props.submitHandler(true, email);
    // } else {
    //   // document.getElementById("demo").innerHTML = "Enter valid password";
    //   setError("Enter valid password");
    // }

    //console.log(validUserDetails);
  };

  return (
    <div>
      <div>
        <Link to="/home">Back to Home</Link>
      </div>
      <br />
      <div className="login">
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
