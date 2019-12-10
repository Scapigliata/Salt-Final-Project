import React, {
  useEffect,
  useState,
  useRef,
} from 'react';
import {
  StyleSheet,
  Dimensions,
  View,
  TouchableOpacity,
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';
import { connect } from 'react-redux';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MapViewDirections from 'react-native-maps-directions';
import BottomDrawer from '../components/Nearby/BottomDrawer';
import C from '../utils/constants';
import { GOOGLE_MAPS_API_KEY } from '../../env';

const { COLORS } = C;
const { width, height } = Dimensions.get('window');

const mapRegion = {
  latitude: 59.333459,
  longitude: 18.06324,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

const MapScreen = props => {
  const { restaurants } = props;

  const [mapPadding, setMapPadding] = useState(1);
  const [permissionStatus, setPermissionStatus] = useState(undefined);
  const [currentLocation, setCurrentLocation] = useState('');
  const [userCoordinates, setUserCoordinates] = useState('');
  const [currentRegion, setCurrentRegion] = useState(mapRegion);
  const [destination, setDestination] = useState();
  const [navigate, setNavigate] = useState(false);
  const mapView = useRef();

  const cameraZoomRegion = (latitude, longitude) => {
    setCurrentRegion({
      latitude,
      longitude,
      latitudeDelta: 0.012,
      longitudeDelta: 0.006,
    });
  };

  const updateLocation = region => {
    setCurrentRegion(region);
  };

  const getLocation = async () => {
    const location = await Location.getCurrentPositionAsync({});
    setCurrentLocation(location);
    setUserCoordinates({ latitude: location.coords.latitude, longitude: location.coords.longitude });
    updateLocation({ ...currentRegion, latitude: location.coords.latitude, longitude: location.coords.longitude });
  };

  const getPermission = async () => {
    const { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status === 'granted') {
      setPermissionStatus(true);
      getLocation();
    }
    if (status !== 'granted') {
      setPermissionStatus(false);
    }
    setTimeout(() => {
      setMapPadding(0);
    }, 500);
  };

  useEffect(() => {
    if (permissionStatus === undefined) {
      getPermission();
    }

    _mapView.animateToRegion(currentRegion);
  }, [currentRegion]);

  const targetHandler = event => {
    const coordinates = event.nativeEvent.coordinate;
    const { longitude, latitude } = coordinates;
    cameraZoomRegion(latitude, longitude);
    setDestination(coordinates);
  };

  const getDirections = () => {
    setNavigate(!navigate);
  };

  return (
    <View style={styles.container}>
      <MapView
        ref={mapView => {
          _mapView = mapView;
        }}
        initialRegion={currentRegion}
        provider={MapView.PROVIDER_GOOGLE}
        style={{ flex: 1, marginTop: mapPadding }}
        showsUserLocation={true}
        showsMyLocationButton={true}
        onMarkerPress={targetHandler}
      >
        {
          restaurants.map(restaurant => {
            const { Latitude, Longitude } = restaurant.Coordinates;
            const coords = { latitude: Number(Latitude), longitude: Number(Longitude) };
            return <Marker key={restaurant._id} coordinate={coords} title={restaurant.Name} description={restaurant.Address} />;
          })
        }
        {navigate && (
          <MapViewDirections
            origin={userCoordinates}
            destination={destination}
            apikey={GOOGLE_MAPS_API_KEY}
            strokeWidth={3}
            strokeColor={COLORS.primary}
            optimizeWaypoints={true}
            mode='WALKING'
            onReady={result => {
              _mapView.fitToCoordinates(result.coordinates, {
                edgePadding: {
                  right: width / 20,
                  bottom: height / 20,
                  left: width / 20,
                  top: height / 20,
                },
              });
            }}
            onError={err => {
              console.error(err.message);
            }}
          />
        )}
      </MapView>
      <View style={styles.directions}>
        <TouchableOpacity onPress={getDirections}>
          <MaterialCommunityIcon name='directions' size={50} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
      <BottomDrawer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginBottom: height * 0.045,
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  map: {
    flex: 1,
  },
  directions: {
    position: 'absolute',
    top: '80%',
    alignSelf: 'flex-end',
    right: 10,
  },
});

const mapStateToProps = ({ restaurants }) => ({
  restaurants,
});

export default connect(mapStateToProps)(MapScreen);
