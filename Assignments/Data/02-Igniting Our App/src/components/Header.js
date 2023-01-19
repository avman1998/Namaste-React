import React, { useState } from "react";

export const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  return (
    <div className="header">
      <Title />
      <ul className="nav-items">
        <li className="nav-item">Home</li>
        <li className="nav-item">About</li>
        <li className="nav-item">Contact</li>
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
