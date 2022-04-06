import Header from "./components/Header";
import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Welcome from "./components/Welcome";
import Regsuccess from "./components/regsuccess";
import AllUsers from "./components/AllUsers";
import EditUserData from "./components/EditUserData";
import UserData from "./components/UserData";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Header />} />
          <Route path="/home" element={<Header />} />
          <Route path="/login" element={<Login />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/regsuccess" element={<Regsuccess />} />
          <Route path="/AllUsers" element={<AllUsers />} />
          <Route path="/EditUserData" element={<EditUserData />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
