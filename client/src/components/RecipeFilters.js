import React from 'react';
import { View, StyleSheet, Picker } from 'react-native';
import C from '../utils/constants';

const RecipeFilters = ({ sortBy, setRecipeSort }) => {
  const handleChangePicker = (value) => {
    setRecipeSort(value);
  };

  return (
    <View>
      <Picker
        selectedValue={sortBy}
        onValueChange={handleChangePicker}
      >
        {
          C.SORT_BY_RECIPE_VALUES.map(o => (
            <Picker.Item key={o.value} label={o.label} value={o.value} />
          ))
        }
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({});

export default RecipeFilters;
