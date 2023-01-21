import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "./Loader";
import { IMG_CDN_URL } from "../config";

const RestaurantMenu = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState({});
  useEffect(() => {
    getRestuarantData();
  }, []);
  async function getRestuarantData() {
    const res = await fetch(
      `https://www.swiggy.com/dapi/menu/v4/full?lat=22.7195687&lng=75.8577258&menuId=${id}`
    );
    const data = await res.json();

    setRestaurant(data?.data);
    console.log(restaurant);
  }

  return !restaurant ? (
    <Loader />
  ) : (
    <div>
      <p>{restaurant.name}</p>
      <p>{restaurant.city}</p>
      <img src={`${IMG_CDN_URL}/${restaurant.cloudinaryImageId}`} />
    </div>
  );
};

export default RestaurantMenu;
