import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import C from '../../utils/constants';

const { COLORS } = C;

const OpenHours = ({ isOpen, openHours: { start, end } }) => {
  const calcTime = time => {
    let hours = Math.floor(time / 60);
    let mins = time % 60;
    if (hours < 10) {
      hours = `0${hours}`;
    }
    if (mins < 10) {
      mins = `0${mins}`;
    }
    return `${hours}:${mins}`;
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.text, isOpen ? styles.isOpen : styles.isClosed]}>{`${calcTime(start)} - ${calcTime(end)}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-start',
    height: 28,
    borderRadius: 8,
    paddingHorizontal: 5,
    paddingVertical: 3,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  isOpen: {
    color: COLORS.primary,
  },
  isClosed: {
    color: '#ad4444',
  },
  text: {
    opacity: 1,
    fontSize: 18,
    justifyContent: 'center',
    textAlign: 'center',
    fontWeight: '400',
  },
});

export default OpenHours;
