import React from "react";
import { IMG_CDN_URL } from "../config";
export function RestaurantCard({
  name,
  cloudinaryImageId,
  cuisines,
  lastMileTravelString,
}) {
  return (
    <div className="res-card">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <p>{name}</p>
      <p>{cuisines.join(",")}</p>
      <p>{lastMileTravelString}</p>
    </div>
  );
}
