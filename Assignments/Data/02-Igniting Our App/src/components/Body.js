import React, { useState } from "react";
import { restaurantList } from "../config";

import { RestaurantCard } from "./Restaurantcard";

export function Body() {
  // Restaurants Display Functionality
  const [restaurants, setRestaurants] = useState(restaurantList);
  // const restaurantsArr = restaurants?.map((restaurant) => {
  //   return <RestaurantCard {...restaurant.data} key={restaurant.data.id} />;
  // });

  //   Search functionality
  const [searchText, setSearchText] = useState("");

  function filterRestaurants(search, restaurants) {
    const newArr = restaurants.filter((restaurant) => {
      if (
        restaurant?.data?.name.toLowerCase()?.includes(search.toLowerCase())
      ) {
        return restaurant;
      }
    });
    console.log("Filter Called up");
    return newArr;
  }

  return (
    <div className="body-res-list">
      <div>
        <input
          type="text"
          placeholder="Enter search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            console.log(e.target.value);
            setRestaurants(restaurantList);
          }}
        />
        <button
          onClick={() => {
            const data = filterRestaurants(searchText, restaurants);
            setRestaurants(data);
            console.log(restaurants);
          }}
        >
          Submit
        </button>
      </div>
      <div className="res-list">
        {restaurants?.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </div>
  );
}
