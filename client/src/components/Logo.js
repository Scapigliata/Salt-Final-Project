import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Logo = () => {
  return (
    <View style={styles.imageView}>
      <Image style={styles.Image} source={require('../assets/name.png')} />
    </View>
  );
};

const styles = StyleSheet.create({
  Image: {
    height: 26,
    width: 100,
  },
  imageView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Logo;
