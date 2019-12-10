import { connect } from 'react-redux';
import RecipeFilters from '../components/RecipeFilters';
import { setRecipeSort } from '../store/actions/recipes';

const mapStateToProps = (state) => ({
  sortBy: state.recipes.sortBy,
});

export default connect(
  mapStateToProps,
  { setRecipeSort },
)(RecipeFilters);
