import React from "react";
import Navbar from "../../components/navbar/Navbar";
import VerticalTabs from "../../components/navtabs/navtabs";
import "./admin.scss";

const Admin = () => {
  return (
    <div className="admin">
      <Navbar />
      <VerticalTabs />
    </div>
  );
};

export default Admin;
