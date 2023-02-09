import React, { useState, useEffect } from "react";
export default function UseRestaurant(id) {
  const [restaurant, setRestaurant] = useState(null);
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
  return restaurant;
}
