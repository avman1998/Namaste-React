import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  return (
    <div className="header">
      <Title />
      <ul className="nav-items">
        <li className="nav-item">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="nav-item">Cart</li>
      </ul>
      <button
        onClick={() => {
          setIsLoggedIn((prev) => !prev);
        }}
      >
        {isLoggedIn ? "Logout" : "LogIn"}
      </button>
    </div>
  );
};
const Title = () => {
  return (
    <img
      src="https://i.pinimg.com/originals/fb/75/20/fb75202024ca3de15339e368ce1eb3de.jpg"
      className="logo"
    />
  );
};
