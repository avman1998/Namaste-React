export function filterRestaurants(search, allRestaurants) {
  const newArr = allRestaurants.filter((restaurant) => {
    if (restaurant?.data?.name.toLowerCase()?.includes(search.toLowerCase())) {
      return restaurant;
    }
  });
  console.log("Filter Called up");
  return newArr;
}
