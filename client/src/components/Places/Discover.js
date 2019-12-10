import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import CardItem from '../CardItem';

const Discover = ({ restaurants, navigation }) => {
  const restaurantDetails = ({ Name, Address }) => {
    navigation.navigate('RestaurantDetails', {
      Name,
      Address,
    });
  };

  return (
    <FlatList
      style={styles.list}
      data={restaurants}
      keyExtractor={item => item._id}
      renderItem={({ item }) => (
        <CardItem
          uri={item.ImageSrc}
          title={item.Name}
          address={null}
          onViewDetail={() => restaurantDetails(item)}
          likeStatus={true}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    marginVertical: 10,
  },
});

export default Discover;
