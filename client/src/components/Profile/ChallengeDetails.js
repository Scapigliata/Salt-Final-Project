import React from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';

const ChallengeDetails = ({ navigation }) => {
  const City = navigation.getParam('City');
  const Dates = navigation.getParam('Dates');
  const Details = navigation.getParam('Details');
  const uri = navigation.getParam('URI');

  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri }} />
      <View style={styles.text}>
        <Text style={styles.name}>{City}</Text>
        <Text style={styles.dates}>{Dates}</Text>
        <Text style={styles.details}>{Details}</Text>
      </View>
    </ScrollView>
  );
};

ChallengeDetails.navigationOptions = ({ navigation }) => ({
  headerTitle: navigation.getParam('City'),
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
    marginVertical: 20,
  },
  details: {
    fontSize: 14,
    marginHorizontal: 40,
    paddingTop: 20,
  },
  text: {
    marginVertical: 10,
    alignItems: 'center',
  },
  dates: {
    color: 'black',
    fontWeight: 'bold',
    marginTop: 10,
    justifyContent: 'space-between',
  },
});

export default ChallengeDetails;
