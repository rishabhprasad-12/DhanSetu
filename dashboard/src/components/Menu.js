import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import GeneralContext from "./GeneralContext";

const Menu = () => {
  const { user, setUser } = useContext(GeneralContext);

  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdowmOpen, setIsProfileDropdowmOpen] = useState(false);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = () => {
    setIsProfileDropdowmOpen(!isProfileDropdowmOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setUser(null);

    window.location.href = "http://localhost:3000/login";
  }

  const menuClass = "menu";
  const activeMenuClass = "menu selected";


  return (
    <div className="menu-container">
      <img src="logo.png" alt="logo" style={{ width: "2em" }} />
      <div className="menus">
        <ul>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/"
              onClick={() => {
                handleMenuClick(0);
              }}
            >
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/orders"
              onClick={() => {
                handleMenuClick(1);
              }}
            >
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/holdings"
              onClick={() => {
                handleMenuClick(2);
              }}
            >
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/positions"
              onClick={() => {
                handleMenuClick(3);
              }}
            >
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
                Positions
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/funds"
              onClick={() => {
                handleMenuClick(4);
              }}
            >
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/apps"
              onClick={() => {
                handleMenuClick(5);
              }}
            >
              <p className={selectedMenu === 5 ? activeMenuClass : menuClass}>
                Apps
              </p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">{user?.username.slice(0, 1)}</div>
          <p className="username">{user?.username}</p>

          {isProfileDropdowmOpen && (
            <div className="profile-dropdown">
              <p className="dropdown-name">{user?.username}</p>
              <p className="dropdown-email">{user?.email}</p>
              <button className="logout-btn" onClick={handleLogout}>
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
