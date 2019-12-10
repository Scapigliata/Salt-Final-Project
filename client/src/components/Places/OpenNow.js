import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import CardItem from '../CardItem';

const OpenNow = ({ restaurants, sortedRestaurants, getRestaurants, getRecipes, updateOpenStatus, navigation }) => {
  const restaurantDetails = ({ Name, Address }) => {
    navigation.navigate('RestaurantDetails', {
      Name,
      Address,
    });
  };

  useEffect(() => {
    const getData = async () => {
      await getRestaurants();
      await getRecipes();
      await updateOpenStatus();
    };

    getData();
  }, []);

  return (
    <FlatList
      style={styles.list}
      data={sortedRestaurants}
      keyExtractor={item => item._id}
      renderItem={itemData => {
        return (
          <CardItem
            uri={itemData.item.ImageSrc}
            title={itemData.item.Name}
            isOpen={itemData.item.isOpen}
            openHours={itemData.item.Openhours}
            address={null}
            onViewDetail={() => restaurantDetails(itemData.item)}
            likeStatus={true}
          />
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    marginVertical: 10,
  },
});

export default OpenNow;
