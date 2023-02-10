import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeItem } from "../utils/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  let totalPrice = 0;
  console.log(cartItems);
  const dispatch = useDispatch();
  function handleClearCart() {
    dispatch(clearCart());
  }
  return (
    <div className="flex flex-wrap flex-col  justify-center items-center p-[20px] gap-[20px]">
      {cartItems.length !== 0 && (
        <button
          className="bg-black text-white p-2 font-bold rounded"
          onClick={() => handleClearCart()}
        >
          <i class="fa-solid fa-trash"></i> Cart
        </button>
      )}
      <div className="flex flex-wrap justify-evenly items-baseline p-[20px]">
        {cartItems.map((item, index) => {
          totalPrice = totalPrice + item?.price;
          return <CartCard item={item} index={index} />;
        })}
      </div>
      {cartItems.length !== 0 && (
        <h1 className="font-bold p-[10px] bg-green-200 rounded">
          Total Price: ₹ {totalPrice / 100}
        </h1>
      )}{" "}
      {cartItems.length !== 0 && (
        <Link to="/checkout">
          <button className=" mx-auto p-2 text-[120%]  rounded cursor-pointer bg-blue-400 font-bold text-white ">
            Place Order
          </button>
        </Link>
      )}
    </div>
  );
};

function CartCard({ item, index }) {
  const dispatch = useDispatch();
  // dispatch()

  return (
    <div className="flex flex-col items-center justify-start  p-[10px] break-all w-30 cursor-pointer hover:shadow-lg gap-[5px] m-[10px] bg-pink-50">
      <img
        className="w-[200px]"
        src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${item?.cloudinaryImageId}`}
      />
      <h2>{item?.name}</h2>
      <h3>Rs. {item?.price / 100}</h3>
      <button
        className="text-[70%] rounded bg-red-500 text-white p-1"
        onClick={() => dispatch(removeItem(index))}
      >
        Remove <i class="fa-solid fa-trash"></i>
      </button>
    </div>
  );
}

export default Cart;
