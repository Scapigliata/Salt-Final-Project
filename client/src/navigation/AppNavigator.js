import React from 'react';
import { Image, Dimensions } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import MapScreen from '../screens/MapScreen.js';
import Profile from '../screens/Profile';

import RestaurantDetails from '../components/RestaurantDetails.js';
import ChallengeDetails from '../components/Profile/ChallengeDetails.js';
import Favourites from '../components/Places/Favourites';
import Statistics from '../components/Profile/Statistics';
import Challenges from '../components/Profile/Challenges';
import BadgeList from '../components/Profile/BadgeList';
import Logo from '../components/Logo';

import Discover from '../containers/Discover';
import OpenNow from '../containers/OpenNow';

import i18n from '../utils/localization';

import C from '../utils/constants';

const { COLORS } = C;

const SCREEN_WIDTH = Dimensions.get('window').width;

const defaultNavigationConfig = {
  defaultNavigationOptions: {
    headerTitle: <Logo />,
    headerStyle: {
      backgroundColor: COLORS.primary,
    },
    headerBackTitle: i18n.t('back'),
    headerBackTitleStyle: {
      color: 'white',
    },
    headerTintColor: 'white',
  },
};

const MapNavigator = createStackNavigator(
  {
    MapScreen,
  },
  defaultNavigationConfig,
);

const options = divider => ({
  labelStyle: {
    fontSize: 13,
    color: 'black',
  },
  tabStyle: {
    width: SCREEN_WIDTH / divider,
  },
  style: {
    backgroundColor: 'white',
  },
  indicatorStyle: {
    backgroundColor: COLORS.primary,
  },
});

const TopTabNavigator = createMaterialTopTabNavigator(
  {
    Favourites: {
      screen: Favourites,
      navigationOptions: {
        title: i18n.t('favourites'),
      },
    },
    Discover: {
      screen: Discover,
      navigationOptions: {
        title: i18n.t('discover'),
      },
    },
    OpenNow: {
      screen: OpenNow,
      navigationOptions: {
        title: i18n.t('openNow'),
      },
    },
  },
  {
    tabBarOptions: options(3),
    initialRouteName: 'Discover',
  },
);

const TopProfileNavigator = createMaterialTopTabNavigator(
  {
    Challenges: {
      screen: Challenges,
      navigationOptions: {
        title: i18n.t('challenges'),
      },
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        title: i18n.t('profile'),
      },
    },
    Statistics: {
      screen: Statistics,
      navigationOptions: {
        title: i18n.t('statistics'),
      },
    },
  },
  {
    tabBarOptions: options(3),
    initialRouteName: 'Profile',
  },
);

const ListNavigator = createStackNavigator(
  {
    TopTabNavigator,
    RestaurantDetails,
  },
  defaultNavigationConfig,
);

const ProfileDetailsNavigator = createStackNavigator(
  {
    TopProfileNavigator,
    ChallengeDetails,
    BadgeList,
  },
  defaultNavigationConfig,
);

const AppNavigator = createMaterialBottomTabNavigator(
  {
    Places: {
      screen: ListNavigator,
      navigationOptions: {
        title: i18n.t('places'),
        tabBarIcon: ({ tintColor }) => <MaterialIcon name='restaurant-menu' size={22} color={tintColor} />,
      },
    },
    Nearby: {
      screen: MapNavigator,
      navigationOptions: {
        title: i18n.t('nearby'),
        tabBarIcon: ({ tintColor }) => <MaterialCommunityIcon name='map-marker' size={22} color={tintColor} />,
      },
    },
    myProfile: {
      screen: ProfileDetailsNavigator,
      navigationOptions: {
        title: i18n.t('myProfile'),
        tabBarIcon: ({ tintColor }) => <MaterialIcon name='person' size={26} color={tintColor} />,
      },
    },
  },
  {
    activeColor: COLORS.primary,
    barStyle: { backgroundColor: '#fff' },
  },
);

export default createAppContainer(AppNavigator);
