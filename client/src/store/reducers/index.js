import { combineReducers } from 'redux';

import restaurants from './restaurants';
import recipes from './recipes';

const rootReducer = combineReducers({
  restaurants,
  recipes,
});

export default rootReducer;
