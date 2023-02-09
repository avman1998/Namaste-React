import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import { restaurantList } from "../config";
import { Link } from "react-router-dom";
import { RestaurantCard } from "./Restaurantcard";
import { filterRestaurants } from "../utils/helper";
import useOnline from "../utils/useOnline";
// const isOnline = useOnline();
// if (!isOnline) {
//   {
//     return <h1>You are offline.</h1>;
//   }
// }
export function Body() {
  // Restaurants Display Functionality
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  // Search functionality

  // Calling Swiggy API through UseEffect
  useEffect(() => {
    getData();
  }, []);
  //fetching Data
  async function getData() {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7195687&lng=75.8577258&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
      setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    } catch (e) {
      console.log(e);
    }
    //data.cards[2].data.data.cards
  }

  // Early return
  // if (!allRestaurants.length) return null;
  // Filter Function

  return !allRestaurants.length ? (
    <Loader />
  ) : (
    <div className="body-res-list flex flex-col items-center justify-center">
      <div className="search my-[20px] flex gap-[20px]">
        <input
          type="text"
          placeholder="Enter restaurant name"
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
          className="py-[5px] px-[10px] rounded bg-red-200 text-black"
        >
          Find
        </button>
      </div>
      <div className="flex flex-wrap justify-center items-baseline gap-[40px] my-[10px] mx-[17px]">
        {filteredRestaurants.length === 0 ? (
          <h2>No Restaurant Found</h2>
        ) : (
          filteredRestaurants?.map((restaurant) => {
            return (
              <Link
                to={`restaurant/${restaurant.data.id}`}
                key={restaurant.data.id}
              >
                {" "}
                <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
              </Link>
            );
          })
        )}
      </div>
    </div>
  );
}
