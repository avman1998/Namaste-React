import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "./Loader";
import { IMG_CDN_URL } from "../config";
import UseRestaurant from "../utils/useRestaurant";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const RestaurantMenu = () => {
  const { id } = useParams();
  const restaurant = UseRestaurant(id);
  const dispatch = useDispatch();
  function handleAddItem(item) {
    dispatch(addItem(item));
  }
  if (restaurant == null) return null;

  return (
    <div className="flex  flex-col gap-[20px]  justify-center items-center  ">
      <div className="flex gap-[60px] items-center justify-center md:justify-start p-[40px] bg-black md:w-[100%] text-white">
        <img
          src={`${IMG_CDN_URL}/${restaurant?.cloudinaryImageId}`}
          className="w-56 p-[10px]"
        />
        <div className="flex flex-col gap-[10px]">
          <p className="text-[150%]">{restaurant?.name}</p>

          <h3 className="text-gray-300">
            {restaurant?.area}, {restaurant?.city}
          </h3>

          <h3 className="text-gray-300">⭐ {restaurant?.avgRating} </h3>
          <h3 className="text-gray-300">{restaurant?.costForTwoMsg}</h3>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-[100%]">
        <h1 className="text-center text-[130%] font-bold bg-yellow-200 w-[100%] p-[10px]">
          Menu
        </h1>
        <div
          className="flex flex-wrap justify-evenly items-baseline p-[20px]"
          data-testid="menu"
        >
          {Object?.values(restaurant?.menu?.items).map((item) => (
            // <li key={item?.id}>
            //   {item?.name} <br />
            //   <button
            //     className="m-4 bg-blue-300 rounded"
            //     onClick={() => handleAddItem(item)}
            //   >
            //     Add
            //   </button>
            // </li>
            <div className="flex flex-col items-center justify-start  p-[10px] break-all w-30 cursor-pointer hover:shadow-lg gap-[5px]">
              <img
                className="w-[200px] rounded"
                src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${item?.cloudinaryImageId}`}
              />
              <p className="text-[60%] font-bold">{item?.name}</p>
              <p className="text-[60%]">Rs. {item?.price / 100}</p>
              <button
                className="text-[60%] p-[5px] m-2 bg-green-50 rounded "
                onClick={() => handleAddItem(item)}
              >
                Add to cart
              </button>
              <hr />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
