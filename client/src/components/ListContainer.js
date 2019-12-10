import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import ListItem from './ListItem';
import { selectRestaurantName } from '../selectors/restaurants';

import i18n from '../utils/localization';

const emissionConvertion = value => {
  const converted = (value / 1000).toFixed(1);
  return converted < 0.1 ? 0.1 : converted > 9.9 ? 9.9 : converted;
};

const ListContainer = ({ restaurants, recipes }) => {
  return (
    <View>
      <FlatList
        data={recipes}
        keyExtractor={item => item._id}
        renderItem={itemData => {
          const emission = emissionConvertion(itemData.item.CO2);
          return (
            <ListItem
              title={itemData.item.Name}
              emission={emission}
              price={`${i18n.t('price')}: ${itemData.item.Price}`}
              restaurantName={restaurants ? selectRestaurantName(restaurants, itemData.item.Restaurant) : null}
            />
          );
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({});

export default ListContainer;
