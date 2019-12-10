import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import labelImages from './CO2Labels';
import C from '../utils/constants';

const { COLORS } = C;

const ListItem = ({ title, price, emission, restaurantName }) => {
  return (
    <View style={styles.listContainer}>
      <View style={styles.leftContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>{price}</Text>
        {restaurantName && <Text style={styles.price}>{restaurantName}</Text>}
      </View>
      {emission && (
        <View style={styles.itemContainer}>
          <Image style={styles.image} source={labelImages[emission]} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    height: 80,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    borderColor: '#f1f1e5',
    borderBottomWidth: 1,
  },
  leftContainer: { width: '60%' },
  title: {
    fontWeight: '700',
    fontSize: 16,
    color: COLORS.secondary,
    textTransform: 'capitalize',
  },
  price: {},
  itemContainer: {
    flexDirection: 'row',
  },
  image: {
    width: 92,
    height: 35,
    marginRight: 10,
  },
});

export default ListItem;
