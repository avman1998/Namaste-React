import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  const dispatch = useDispatch();
  function handleClearCart() {
    dispatch(clearCart());
  }
  return (
    <div>
      <button onClick={() => handleClearCart()}>Clear Cart</button>
      {cartItems.map((item) => {
        return <CartCard item={item} />;
      })}
    </div>
  );
};

function CartCard({ item }) {
  return (
    <div>
      <img
        src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${item?.cloudinaryImageId}`}
      />
      <h2>{item?.name}</h2>
      <h3>Rs. {item?.price}</h3>
    </div>
  );
}

export default Cart;
