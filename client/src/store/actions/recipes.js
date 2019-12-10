import axios from 'axios';
import { GET_RECIPES, SET_RECIPE_SORT } from './types';
import { LOCAL_IP } from '../../../env';

const IP = process.env.IP || LOCAL_IP;

const url = `http://${IP}:3000/recipes`;

export const getRecipes = () => async dispatch => {
  try {
    const { data } = await axios(url);
    dispatch({
      type: GET_RECIPES,
      payload: data,
    });
  } catch (err) {
    console.error(err.message);
  }
};

export const setRecipeSort = sortBy => ({
  type: SET_RECIPE_SORT,
  payload: sortBy,
});
