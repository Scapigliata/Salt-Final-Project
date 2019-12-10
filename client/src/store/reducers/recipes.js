import { GET_RECIPES, SET_RECIPE_SORT } from '../actions/types';

const initialState = {
  recipes: [],
  sortBy: 'CO2',
};

const recipes = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_RECIPES:
      return {
        ...state,
        recipes: [...payload],
      };
    case SET_RECIPE_SORT:
      return {
        ...state,
        sortBy: payload,
      };
    default:
      return state;
  }
};

export default recipes;
