import { GET_RESTAURANTS, UPDATE_OPEN_STATUS } from '../actions/types';

const restaurants = (state = [], { type, payload }) => {
  switch (type) {
    case GET_RESTAURANTS:
      return [...payload];
    case UPDATE_OPEN_STATUS:
      return state.map(restaurant => ({ ...restaurant, isOpen: isOpen(restaurant.Openhours) }));
    default:
      return state;
  }
};

const isOpen = openHours => {
  const { start, end } = openHours;
  const date = new Date();
  const timeNow = date.getHours() * 60 + date.getMinutes();
  if (start > end) {
    if (timeNow > start || timeNow < end) {
      return true;
    }
    return false;
  }
  if (timeNow > start && timeNow < end) {
    return true;
  }
  return false;
};

export default restaurants;
