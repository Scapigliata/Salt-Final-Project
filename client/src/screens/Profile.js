import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Avatar } from 'react-native-paper';
import { VictoryBar, VictoryTheme } from 'victory-native';
import i18n from '../utils/localization';
import C from '../utils/constants';

const { COLORS } = C;

const Profile = ({ navigation }) => {
  const badgeList = () => {
    navigation.navigate('BadgeList');
  };

  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <View style={styles.profileBox}>
          <Text style={styles.title}>Alice Smith</Text>
          <Text style={styles.subtitle}>99999xp</Text>
        </View>
        <View style={styles.profileBox}>
          <Avatar.Image size={100} source={require('../assets/avatar.png')} />
        </View>
      </View>
      <Text style={styles.subtitle}>{i18n.t('badges')}</Text>
      <Text style={{ textAlign: 'center' }}>(3/20)</Text>
      <View style={styles.badges}>
        <TouchableOpacity onPress={badgeList}>
          <View style={styles.badgesContainer}>
            <View>
              <Ionicons name='md-checkmark-circle' size={60} color={COLORS.primary} />
              <Text>{i18n.t('newbie')}</Text>
            </View>
            <View>
              <Ionicons name='md-trophy' size={65} color='lightblue' />
              <Text>{i18n.t('hero')}</Text>
            </View>
            <View>
              <Ionicons name='md-star' size={70} color='gold' />
              <Text>{i18n.t('master')}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.stats}>
        <Text style={styles.subtitle}>{i18n.t('statistics')}</Text>
        <VictoryBar theme={VictoryTheme.material} width={380} height={200} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
  profile: {
    flex: 1,
    flexDirection: 'row',
  },
  profileBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: '#a5a5a5',
    borderBottomWidth: 4,
  },
  title: {
    fontSize: 30,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  badges: {
    flex: 1,
    justifyContent: 'space-evenly',
    borderBottomColor: '#a5a5a5',
    borderBottomWidth: 4,
  },
  badgesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  stats: {
    height: '25%',
    marginBottom: 60,
    display: 'flex',
    alignItems: 'center',
  },
});

export default Profile;
