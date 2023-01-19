import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import { restaurantList } from "../config";

import { RestaurantCard } from "./Restaurantcard";

export function Body() {
  // Restaurants Display Functionality
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  // Search functionality
  const [searchText, setSearchText] = useState("");

  // Calling Swiggy API through UseEffect
  useEffect(() => {
    getData();
  }, []);
  //fetching Data
  async function getData() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7195687&lng=75.8577258&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    //data.cards[2].data.data.cards
  }
  //Early return
  // if (!allRestaurants.length) return null;
  //Filter Function
  function filterRestaurants(search, allRestaurants) {
    const newArr = allRestaurants.filter((restaurant) => {
      if (
        restaurant?.data?.name.toLowerCase()?.includes(search.toLowerCase())
      ) {
        return restaurant;
      }
    });
    console.log("Filter Called up");
    return newArr;
  }

  return !allRestaurants.length ? (
    <Loader />
  ) : (
    <div className="body-res-list">
      <div className="search">
        <input
          type="text"
          placeholder="Enter search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            console.log(e.target.value);
            // setRestaurants(restaurantList);
          }}
        />
        <button
          onClick={() => {
            const data = filterRestaurants(searchText, allRestaurants);
            setFilteredRestaurants(data);
            console.log(allRestaurants);
          }}
        >
          Submit
        </button>
      </div>
      <div className="res-list">
        {filteredRestaurants.length === 0 ? (
          <h2>No Restaurant Found</h2>
        ) : (
          filteredRestaurants?.map((restaurant) => {
            return (
              <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
            );
          })
        )}
      </div>
    </div>
  );
}
