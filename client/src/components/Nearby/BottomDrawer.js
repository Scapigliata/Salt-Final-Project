import React, { createRef } from 'react';
import {
  Animated,
  StyleSheet,
  View,
  Dimensions,
  Platform,
} from 'react-native';
import {
  PanGestureHandler,
  NativeViewGestureHandler,
  State,
  TapGestureHandler,
} from 'react-native-gesture-handler';

import MaterialIcon from 'react-native-vector-icons/Ionicons';
import { USE_NATIVE_DRIVER } from '../../utils/config';
import MealDetails from '../MealDetails';
import C from '../../utils/constants';

const { COLORS } = C;

const HEADER_HEIGHT = 50;
const windowHeight = Dimensions.get('window').height;
const SNAP_POINTS_FROM_TOP = [50, windowHeight * 0.4, windowHeight * 0.8];

const BottomDrawer = () => {
  masterdrawer = createRef();
  drawer = createRef();
  drawerheader = createRef();
  scroll = createRef();

  const START = SNAP_POINTS_FROM_TOP[0];
  const END = SNAP_POINTS_FROM_TOP[SNAP_POINTS_FROM_TOP.length - 1];

  let initialState = {
    lastSnap: END,
  };

  let _lastScrollYValue = 0;
  const _lastScrollY = Platform.OS === 'ios' ? new Animated.Value(40) : new Animated.Value(20);
  const _onRegisterLastScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { y: _lastScrollY } } }],
    { useNativeDriver: USE_NATIVE_DRIVER },
  );
  _lastScrollY.addListener(({ value }) => {
    _lastScrollYValue = value;
  });

  const _dragY = new Animated.Value(0);
  const _onGestureEvent = Animated.event([{ nativeEvent: { translationY: _dragY } }], {
    useNativeDriver: USE_NATIVE_DRIVER,
  });

  const _reverseLastScrollY = Animated.multiply(new Animated.Value(-1), _lastScrollY);

  const _translateYOffset = new Animated.Value(END);
  const _translateY = Animated.add(
    _translateYOffset,
    Animated.add(_dragY, _reverseLastScrollY),
  ).interpolate({
    inputRange: [START, END],
    outputRange: [START, END],
    extrapolate: 'clamp',
  });

  const _onHeaderHandlerStateChange = ({ nativeEvent }) => {
    if (nativeEvent.oldState === State.BEGAN) {
      Platform.OS === 'ios' ? _lastScrollY.setValue(40) : _lastScrollY.setValue(20);
    }
    _onHandlerStateChange({ nativeEvent });
  };
  const _onHandlerStateChange = ({ nativeEvent }) => {
    if (nativeEvent.oldState === State.ACTIVE) {
      let { velocityY, translationY } = nativeEvent;
      translationY -= _lastScrollYValue;
      const dragToss = 0.05;
      const endOffsetY = initialState.lastSnap + translationY + dragToss * velocityY;

      let destSnapPoint = SNAP_POINTS_FROM_TOP[0];
      for (let i = 0; i < SNAP_POINTS_FROM_TOP.length; i++) {
        const snapPoint = SNAP_POINTS_FROM_TOP[i];
        const distFromSnap = Math.abs(snapPoint - endOffsetY);
        if (distFromSnap < Math.abs(destSnapPoint - endOffsetY)) {
          destSnapPoint = snapPoint;
        }
      }
      initialState = { lastSnap: destSnapPoint };
      _translateYOffset.extractOffset();
      _translateYOffset.setValue(translationY);
      _translateYOffset.flattenOffset();
      _dragY.setValue(0);
      Animated.spring(_translateYOffset, {
        velocity: velocityY,
        tension: 68,
        friction: 12,
        toValue: destSnapPoint,
        useNativeDriver: USE_NATIVE_DRIVER,
      }).start();
    }
  };

  return (
    <TapGestureHandler
      maxDurationMs={100000}
      ref={masterdrawer}
      maxDeltaY={initialState.lastSnap - SNAP_POINTS_FROM_TOP[0]}
    >
      <View style={StyleSheet.absoluteFillObject} pointerEvents="box-none">
        <Animated.View
          style={[
            StyleSheet.absoluteFillObject,
            {
              transform: [{ translateY: _translateY }],
            },
          ]}
        >
          <PanGestureHandler
            ref={drawerheader}
            simultaneousHandlers={[scroll, masterdrawer]}
            shouldCancelWhenOutside={false}
            onGestureEvent={_onGestureEvent}
            onHandlerStateChange={_onHeaderHandlerStateChange}
          >
            <Animated.View style={styles.header}>
              <View style={styles.headerIcon}>
                <MaterialIcon name="ios-arrow-up" size={40} />
              </View>
            </Animated.View>
          </PanGestureHandler>
          <PanGestureHandler
            ref={drawer}
            simultaneousHandlers={[scroll, masterdrawer]}
            shouldCancelWhenOutside={false}
            onGestureEvent={_onGestureEvent}
            onHandlerStateChange={_onHandlerStateChange}
          >
            <Animated.View style={styles.container}>
              <NativeViewGestureHandler
                ref={scroll}
                waitFor={masterdrawer}
                simultaneousHandlers={drawer}
              >
                <Animated.ScrollView
                  style={styles.scrollView}
                  bounces={false}
                  onScrollBeginDrag={_onRegisterLastScroll}
                  scrollEventThrottle={1}
                >
                  <MealDetails />
                </Animated.ScrollView>
              </NativeViewGestureHandler>
            </Animated.View>
          </PanGestureHandler>
        </Animated.View>
      </View>
    </TapGestureHandler>
  );
};

const styles = StyleSheet.create({
  header: {
    height: HEADER_HEIGHT,
    backgroundColor: COLORS.primary,
  },
  headerIcon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView: {
    marginBottom: 100,
    backgroundColor: 'white',
  },
});

export default BottomDrawer;
