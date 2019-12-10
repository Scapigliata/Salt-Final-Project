import React from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import ListContainer from './ListContainer';
import RecipeFilters from '../containers/RecipeFilter';
import sortRecipesBy from '../selectors/recipes';

const MealDetails = ({ recipes, restaurants }) => {
  return (
    <View style={styles.container}>
      <RecipeFilters />
      <ListContainer recipes={recipes} restaurants={restaurants} />
    </View>
  );
};

const mapStateToProps = ({ restaurants, recipes: { recipes, sortBy } }) => ({
  recipes: sortRecipesBy(recipes, sortBy),
  restaurants,
});

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
});

export default connect(mapStateToProps)(MealDetails);
