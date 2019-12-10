import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
} from 'react-native';
import CardItem from '../CardItem';

const Challenges = ({ navigation }) => {
  const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin congue venenatis leo, in euismod risus gravida et. Mauris luctus purus turpis, elementum lacinia urna mattis in. Duis ac sapien at dolor aliquet mollis. Pellentesque faucibus, mauris at tristique mattis, eros ante tempus mauris, vitae placerat odio tortor in dui. Pellentesque tortor dui, ultrices at sapien ut, sagittis tincidunt lorem. Praesent in consectetur massa, quis cursus metus. Vestibulum vitae lacus viverra, tempor ex at, facilisis ex. Ut vitae magna congue, tincidunt ex et, finibus nulla. Proin placerat pharetra lorem, vitae mollis diam bibendum in. Fusce vel sagittis est, vitae pretium odio. Vivamus commodo rutrum nibh, ac porta metus ultrices at. Integer quis nibh suscipit, suscipit arcu eget, luctus tortor.';
  const data = [
    Stockholm = {
      City: 'Stockholm',
      Dates: 'Jan 2019 - Feb 2019',
      Details: lorem,
      URI: 'https://images.unsplash.com/photo-1508189860359-777d945909ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=60',
    },
    Gothenburg = {
      City: 'Gothenburg',
      Dates: 'Feb 2019 - Jun 2019',
      Details: lorem,
      URI: 'https://images.unsplash.com/photo-1518984935012-271786e50ecf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=60',
    },
    Malmo = {
      City: 'Malmö',
      Dates: 'Oct 2019 - Dec 2019',
      Details: lorem,
      URI: 'https://images.unsplash.com/photo-1569764101869-a4b14f8c447e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=60',
    },
  ];

  const challengeDetails = (City, Dates, Details, URI) => {
    navigation.navigate('ChallengeDetails', {
      City,
      Dates,
      Details,
      URI,
    });
  };

  return (
    <ScrollView>
      <View style={styles.header}>
        {
          data.map(({ City, Dates, Details, URI }) => (
            <CardItem
              key={City}
              onViewDetail={() => challengeDetails(City, Dates, Details, URI)}
              uri={URI}
              title={City}
            />
          ))
        }
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
  },
});

export default Challenges;
