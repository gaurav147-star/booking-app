import React from "react";
import VerticalTabs from "../../components/navtabs/navtabs";
import Stripbar from "../../components/stripbar/Stripbar";
import "./admin.scss";

const Admin = () => {
  return (
    <div className="admin">
      <Stripbar data="Admin"/>
      <VerticalTabs />
    </div>
  );
};

export default Admin;
