import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "./pages/admin/admin";
import Gethotels from "./pages/gethotels/Gethotels";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";

const App = () => {
  const chkadmin = useSelector((state) => state.admin);
  // const profileData = JSON.parse(localStorage.getItem("user"))
  // console.log(profileData.username);
  // useEffect(()=>{

  // },[profileData])
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<List />} />
        <Route path="/hotels/:id" element={<Hotel />} />
        <Route path="/gethotels" element={<Gethotels />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile/:id" element={<Profile />} />
        {chkadmin && <Route path="/admin" element={<Admin />} />}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
