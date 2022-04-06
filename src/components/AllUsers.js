import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import UserData from "./UserData";
import "./AllUsers.css";
import { useNavigate } from "react-router-dom";
import EditUserData from "./EditUserData";

const AllUsers = () => {
  const [detailsOfUsers, setDetailsOfUsers] = useState([]);
  const [count, setCount] = useState([]);
  const [editUser, setEditUser] = useState(false);
  const history = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:8080/GetAllUserDetails").then((res) => {
      console.log(res.data);

      let gettingUserDetails = res.data;
      setDetailsOfUsers(gettingUserDetails);
      setCount(gettingUserDetails.length);
    });
  }, []);

  const editHandler = (data) => {
    setEditUser(true);
    history("/EditUserData");
  };

  const cancelEditUserHandler = (e) => {
    // e.preventDefault();
    console.log("cancel edit user in parent");
    setEditUser(false);
    history("/AllUsers");
  };

  //   const saveEditUserHandler = () => {
  //     //  setEditUser(true);
  //   };

  return (
    <div>
      <div>
        <h3> Total users : {count} </h3>
      </div>
      <br />
      <section class="container">
        <ul>
          {count === 0 ? (
            <p>No user data found! </p>
          ) : editUser === true ? (
            <EditUserData cancelEditUserHandler={cancelEditUserHandler} />
          ) : (
            detailsOfUsers.map((user) => (
              <div className="card">
                <UserData
                  key={user.email}
                  FirstName={user.fname}
                  LastName={user.lname}
                  Email={user.email}
                  editHandler={editHandler}
                />
                <br />
              </div>
            ))
          )}
        </ul>
      </section>
      <div>
        <Link to="/home">Back to Home</Link>
      </div>
    </div>
  );
};

export default AllUsers;
