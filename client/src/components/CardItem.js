import React, { useState } from 'react';
import { ImageBackground, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import OpenHours from './Places/OpenHours';
import C from '../utils/constants';

const { COLORS } = C;

const CardItem = ({ onViewDetail, uri, title, address, likeStatus, isOpen, openHours }) => {
  const [isFavourite, setIsFavourite] = useState(false);

  const handleIconPress = () => {
    setIsFavourite(!isFavourite);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onViewDetail} useForeground style={{ height: '100%' }}>
        <ImageBackground source={{ uri }} style={styles.image}>
          <View style={styles.overlay}>
            <Text style={styles.cardText}>{title}</Text>
            <Text style={address ? styles.cardAddress : styles.hidden}>{address}</Text>
            <View style={isOpen !== undefined ? styles.openHours : styles.hidden}>
              {isOpen !== undefined ? <OpenHours isOpen={isOpen} openHours={openHours} /> : null}
            </View>
            <View style={likeStatus ? styles.icon : styles.hidden}>
              <Ionicons onPress={handleIconPress} name='md-heart' size={30} color={isFavourite ? COLORS.tertiary : '#e5e5e5'} />
            </View>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 200,
    borderRadius: 15,
    overflow: 'hidden',
    marginHorizontal: 30,
    marginVertical: 10,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  group: {
    display: 'flex',
    justifyContent: 'space-evenly',
  },
  cardText: {
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
  },
  cardAddress: {
    color: '#dcdcdc',
    fontSize: 18,
    position: 'absolute',
    bottom: 15,
    alignSelf: 'center',
    paddingTop: 10,
  },
  overlay: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, .4)',
    display: 'flex',
    paddingTop: 20,
    justifyContent: 'center',
  },
  bottom: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  icon: {
    alignSelf: 'flex-end',
    paddingHorizontal: 20,
    position: 'absolute',
    bottom: 15,
  },
  openHours: {
    color: '#dcdcdc',
    fontSize: 16,
    textAlign: 'center',
    paddingLeft: 15,
    alignSelf: 'flex-start',
    position: 'absolute',
    bottom: 15,
  },
  hidden: {
    display: 'none',
  },
});

export default CardItem;
