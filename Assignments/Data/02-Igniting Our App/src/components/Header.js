import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

export const Header = () => {
  const { user } = useContext(UserContext);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <div className="header flex md:flex-row gap-[10px] flex-col justify-between items-center bg-red-600 p-[10px] text-white">
      <Title />
      <ul className="nav-items flex gap-[20px]">
        <li className="nav-item">
          <Link to="/">Restaurants</Link>
        </li>
        <li className="nav-item">{/* <Link to="/about">About</Link> */}</li>
        <li className="nav-item">{/* <Link to="/contact">Contact</Link> */}</li>
        <Link to="/cart">
          <li className="nav-item">
            <i class="fa-solid fa-cart-shopping"></i> {cartItems.length}
          </li>
        </Link>
        <li className="nav-item">
          {/* <Link to="/Instamart">Instamart</Link> */}
        </li>
      </ul>
      <p>{/* {user?.name} at {user.place} */}</p>
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
  return <h1 className="text-[140%] font-bold">The Hungry Indian 🍔</h1>;
};
