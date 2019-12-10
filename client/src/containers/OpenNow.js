import { connect } from 'react-redux';
import OpenNow from '../components/Places/OpenNow';
import { updateOpenStatus, getRestaurants } from '../store/actions/restaurants';
import { getRecipes } from '../store/actions/recipes';
import { sortRestaurants } from '../selectors/restaurants';

const mapStateToProps = ({ restaurants }) => ({
  restaurants,
  sortedRestaurants: sortRestaurants(restaurants),
});

export default connect(mapStateToProps, { updateOpenStatus, getRecipes, getRestaurants })(OpenNow);
