import React from "react";
import { IMG_CDN_URL } from "../config";
export function RestaurantCard({
  name,
  cloudinaryImageId,
  cuisines,
  lastMileTravelString,
}) {
  return (
    <div className="w-60 p-[12px]   hover:shadow-lg bg-white break-all flex flex-col gap-[10px]">
      <img className="" src={IMG_CDN_URL + cloudinaryImageId} />
      <p className="font-bold text-gray-800 text-[80%]">{name}</p>
      <p className="flex flex-wrap  text-[70%]">{cuisines.join(",")}</p>
      <p className="text-[60%]">{lastMileTravelString}</p>
    </div>
  );
}
