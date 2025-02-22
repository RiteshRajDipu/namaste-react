import React, { useEffect, useState } from "react";
import { LOG0_URL } from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("login");
  
  useEffect(() => {

  },[btnNameReact])

  const onlineStatus = useOnlineStatus()

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOG0_URL} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            Online Status: {onlineStatus ? "🟢" : "🔴"}
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>Cart</li>
          <button 
          className="login"
          onClick={() => {
            btnNameReact === "login" 
            ? setBtnNameReact("logout") 
            : setBtnNameReact("login")
        }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
