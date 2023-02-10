import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  let totalPrice = 0;
  console.log(cartItems);
  const dispatch = useDispatch();
  function handleClearCart() {
    dispatch(clearCart());
  }
  return (
    <div className="flex flex-wrap flex-col  justify-evenly items-baseline p-[20px] gap-[20px]">
      <button
        className="bg-black text-white p-2 font-bold rounded"
        onClick={() => handleClearCart()}
      >
        <i class="fa-solid fa-trash"></i> Cart
      </button>
      <div className="flex flex-wrap justify-evenly items-baseline p-[20px]">
        {cartItems.map((item) => {
          totalPrice = totalPrice + item?.price;
          return <CartCard item={item} />;
        })}
      </div>
      <h1 className="font-bold ">Total Price: ₹ {totalPrice / 100}</h1>
    </div>
  );
};

function CartCard({ item }) {
  return (
    <div className="flex flex-col items-center justify-start  p-[10px] break-all w-30 cursor-pointer hover:shadow-lg gap-[5px] m-[10px] bg-pink-50">
      <img
        className="w-[200px]"
        src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${item?.cloudinaryImageId}`}
      />
      <h2>{item?.name}</h2>
      <h3>Rs. {item?.price / 100}</h3>
    </div>
  );
}

export default Cart;
