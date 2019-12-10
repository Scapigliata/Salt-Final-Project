import axios from 'axios';
import { GET_RESTAURANTS, UPDATE_OPEN_STATUS } from './types';
import { LOCAL_IP } from '../../../env';

const IP = process.env.IP || LOCAL_IP;

const url = `http://${IP}:3000/restaurants`;

export const getRestaurants = () => async dispatch => {
  try {
    const { data } = await axios(url);
    dispatch({
      type: GET_RESTAURANTS,
      payload: data,
    });
  } catch (err) {
    console.error(err.message);
  }
};

export const updateOpenStatus = () => ({
  type: UPDATE_OPEN_STATUS,
});
