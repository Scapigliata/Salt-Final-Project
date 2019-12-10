import React from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';
import { useSelector } from 'react-redux';
import { getRestaurantMeals } from '../selectors/restaurants';
import i18n from '../utils/localization';
import ListContainer from './ListContainer';

const RestaurantDetails = ({ navigation }) => {
  const restaurantName = navigation.getParam('Name');
  const selectedRestaurant = useSelector(state => state.restaurants.find(restaurant => restaurant.Name === restaurantName));

  const recipes = useSelector(state => getRestaurantMeals(state, selectedRestaurant._id));

  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: selectedRestaurant.ImageSrc }} />
      <View style={styles.text}>
        <Text style={styles.name}>{selectedRestaurant.Name}</Text>
        <Text style={styles.content}>{selectedRestaurant.Address}</Text>
        <View style={styles.text}>
          <Text style={[styles.menu, { fontSize: 16, margin: 0 }]}>{i18n.t('menu')}</Text>
          <ListContainer recipes={recipes} />
        </View>
      </View>
    </ScrollView>
  );
};

RestaurantDetails.navigationOptions = ({ navigation }) => ({
  headerTitle: navigation.getParam('Name'),
});

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
  },
  name: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },

  content: {
    fontSize: 14,
    marginHorizontal: 40,
  },
  text: {
    marginVertical: 10,
    alignItems: 'center',
  },
  menu: {
    color: 'black',
    fontWeight: 'bold',
    marginTop: 10,
    justifyContent: 'space-between',
  },
});

export default RestaurantDetails;
