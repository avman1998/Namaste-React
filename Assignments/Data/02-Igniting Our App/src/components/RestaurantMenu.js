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
    <div className="flex flex-col gap-[20px] my-[25px] justify-center items-center  ">
      <div className="flex ">
        <img
          src={`${IMG_CDN_URL}/${restaurant?.cloudinaryImageId}`}
          className="w-56"
        />
        <p className="text-center">{restaurant?.name}</p>
        <p className="text-center">{restaurant?.city}</p>
        <h3 className="text-center">{restaurant?.area}</h3>
        <h3 className="text-center">{restaurant?.city}</h3>
        <h3 className="text-center">{restaurant?.avgRating} stars</h3>
        <h3 className="text-center">{restaurant?.costForTwoMsg}</h3>
      </div>
      <div className="p-5">
        <h1>Menu</h1>
        <ul data-testid="menu">
          {Object?.values(restaurant?.menu?.items).map((item) => (
            <li key={item?.id}>
              {item?.name}{" "}
              <button
                className="m-4 bg-blue-300 rounded"
                onClick={() => handleAddItem(item)}
              >
                Add Item
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
