import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const AllUsers = () => {
  const [detailsOfUsers, setDetailsOfUsers] = useState([]);

  const showDetailsHandler = (e) => {
    e.preventDefault();

    axios.get("http://localhost:8080/GetAllUserDetails").then((res) => {
      console.log(res.data);

      let gettingUserDetails = res.data;
      //console.log(gettingUserDetails);
      setDetailsOfUsers(gettingUserDetails);

      //   const Details = gettingUserDetails.map((user) =>
      //      (
      //       <ol key={user.id}>
      //         firstName: {user.fname}, lastName: {user.lname}, E-mail:{user.email}
      //       </ol>
      //     );
      //   );

      //   document.getElementById("details").innerHTML = Details;
      //   })

      /*if (res.data) {
        console.log(res.data);
      } else setError("No user data");*/
    });
  };

  return (
    <div>
      <div> AllUsers Details </div>
      <br />
      <div>
        <button onClick={showDetailsHandler}>Show Details</button>
      </div>
      <br />
      <div id="details"></div>
      <ul>
        {detailsOfUsers.map((user) => (
          <>
            <ol key={user.id}>
              First Name: {user.fname}, Last Name: {user.lname}, E-mail:
              {user.email}
            </ol>
            <br />
          </>
        ))}
      </ul>
      <div>
        <Link to="/home">Back to Home</Link>
      </div>
    </div>
  );
};

export default AllUsers;
