export const getRestaurantMeals = (state, restaurantId) =>
  state.recipes.recipes.filter(recipe => recipe.Restaurant === restaurantId);

export const sortRestaurants = restaurants => {
  const tempRestaurants = [...restaurants];
  return tempRestaurants.sort((a, b) => (a.isOpen === b.isOpen ? 0 : a.isOpen ? -1 : 1));
};

export const selectRestaurantName = (restaurants, id) => {
  const restaurant = restaurants.find(restaurant => restaurant._id === id);
  return restaurant.Name;
};
