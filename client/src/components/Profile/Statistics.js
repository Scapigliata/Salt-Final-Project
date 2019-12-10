import React from 'react';
import {
  VictoryChart,
  VictoryGroup,
  VictoryStack,
  VictoryBar,
} from 'victory-native';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import i18n from '../../utils/localization';

const Statistics = () => {
  const getBarData = () =>
    [1, 2, 3, 4, 5].map(() => [
      { x: 'Jan', y: Math.random() },
      { x: 'Feb', y: Math.random() },
      { x: 'Mar', y: Math.random() },
    ]);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>2019</Text>
      <VictoryChart domainPadding={{ x: 50 }} width={400} height={300}>
        <VictoryGroup offset={20} style={{ data: { width: 15 } }}>
          <VictoryStack colorScale={'red'}>
            {getBarData().map((data, index) => (
              <VictoryBar key={index} data={data} />
            ))}
          </VictoryStack>
          <VictoryStack colorScale={'green'}>
            {getBarData().map((data, index) => (
              <VictoryBar key={index} data={data} />
            ))}
          </VictoryStack>
          <VictoryStack colorScale={'blue'}>
            {getBarData().map((data, index) => (
              <VictoryBar key={index} data={data} />
            ))}
          </VictoryStack>
        </VictoryGroup>
      </VictoryChart>
      <View style={styles.text}>
        <Ionicons name='md-square' size={20} color='red' />
        <Text>Stockholm</Text>
        <Ionicons name='md-square' size={20} color='green' />
        <Text>{i18n.t('me')}</Text>
        <Ionicons name='md-square' size={20} color='blue' />
        <Text>Gothenburg</Text>
      </View>
      <View style={styles.info}>
        <Text>* CO2 emission</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    marginVertical: 20,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  text: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
    paddingHorizontal: 20,
  },
  info: {
    padding: 20,
  },
});

export default Statistics;
