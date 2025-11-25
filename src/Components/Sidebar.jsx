import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserDetailsContext } from "../Context/UserDetailsContext";
import "./sidebar.css";

const Sidebar = () => {
  const { details } = useContext(UserDetailsContext);

  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Menu</h2>

      <Link to="/userinfo" className="menu-link">
        <span>User Info</span>
        <span className="menu-count">{details.length}</span>
      </Link>
      <link to='/practice' />
        <span>Practice</span>
    </div>
  );
};

export default Sidebar;
