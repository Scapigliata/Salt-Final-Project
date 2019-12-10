import React from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import i18n from '../../utils/localization';
import C from '../../utils/constants';

const { COLORS } = C;

const BadgeList = () => {
  return (
    <ScrollView>
      <Text style={styles.subtitle}>{i18n.t('badges')}</Text>
      <View>
        <View style={styles.text}>
          <Ionicons name='md-checkmark-circle' size={60} color={COLORS.primary} />
          <Text>{i18n.t('newbie')}</Text>
        </View>
        <View style={styles.text}>
          <Ionicons name='md-trophy' size={65} color='lightblue' />
          <Text>{i18n.t('hero')}</Text>
        </View>
        <View style={styles.text}>
          <Ionicons name='md-star' size={70} color='gold' />
          <Text>{i18n.t('master')}</Text>
        </View>
        <View style={styles.text}>
          <Ionicons name='md-heart-empty' size={70} color='silver' />
          <Text>Super</Text>
        </View>
        <View style={styles.text}>
          <Ionicons name='md-medal' size={70} color='silver' />
          <Text>{i18n.t('giant')}</Text>
        </View>
        <View style={styles.text}>
          <Ionicons name='md-sunny' size={70} color='silver' />
          <Text>{i18n.t('summer')}</Text>
        </View>
        <View style={styles.text}>
          <Ionicons name='md-leaf' size={70} color='silver' />
          <Text>{i18n.t('autumn')}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
  },
  name: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  text: {
    marginTop: 20,
    alignItems: 'center',
    borderColor: '#f1f1e5',
    borderTopWidth: 1,
  },
});

export default BadgeList;
