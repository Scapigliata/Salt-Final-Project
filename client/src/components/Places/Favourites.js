import React from 'react';
import { connect } from 'react-redux';
import { FlatList, StyleSheet } from 'react-native';
import CardItem from '../CardItem';

const Favourites = ({ restaurants, navigation }) => {
  const restaurantDetails = ({ Name, Address }) => {
    navigation.navigate('RestaurantDetails', {
      Name,
      Address,
    });
  };

  return (
    <FlatList
      style={styles.list}
      data={restaurants.slice(0, 4)}
      keyExtractor={item => item._id}
      renderItem={itemData => (
        <CardItem
          uri={itemData.item.ImageSrc}
          title={itemData.item.Name}
          address={itemData.item.Address}
          onViewDetail={() => restaurantDetails(itemData.item)}
          likeStatus={false}
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

const mapStateToProps = ({ restaurants }) => ({
  restaurants,
});

export default connect(mapStateToProps)(Favourites);
