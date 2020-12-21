/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
// 2:07

import React, { useState, useEffect } from 'react';
import { Animated, StatusBar, SafeAreaView, StyleSheet, View, Text, Dimensions } from 'react-native';
import { Colors, } from 'react-native/Libraries/NewAppScreen';
import dayjs from 'dayjs';
import { COLORS, FONTS, SIZES, icons, images } from './constants';

const TICK_INTERVAL = 1000;

const App = () => {
  const [index, setIndex] = useState(new Animated.Value(0));
  const [tick, setTick] = useState(new Animated.Value(0));
  const [scales, setScales] = useState([...Array(6).keys()].map(() => new Animated.Value(0)));

  let _timer = 0;
  let _ticker = null;
  const _animated = () => {
    const scaleStaggerAnimations = scales.map((animated) => {
      return Animated.spring(animated, {
        toValue: 1,
        tension: 18,
        friction: 3,
        useNativeDriver: true
      });
    });

    Animated.parallel([
      Animated.stagger(
        TICK_INTERVAL / scales.length,
        scaleStaggerAnimations
      ),

      Animated.timing(index, {
        toValue: tick,
        duration: TICK_INTERVAL / 2,
        useNativeDriver: true
      })
    ]).start()

  }

  // componentDidMount
  useEffect(() => {
    const current = dayjs();
    const diff = current.endOf('day').diff(current, 'seconds');
    const oneDay = 24 * 60 * 60;

    _timer = oneDay - diff;
    setTick(_timer);
    setIndex(_timer - 30);

    _animated();

    _ticker = setInterval(() => {
      _timer += 1;
      setTick(_timer);
    }, TICK_INTERVAL);

  }, []);

  // ComponentWillUnmount
  useEffect(() => {
    return () => {
      clearInterval(_timer);
      _ticker = null;
    }
  }, [])

  const interpolate = {
    inputRange: [0, 360],
    outputRange: ['0deg', '360deg'],
  }

  const secondDegrees = Animated.multiply(tick, 6);
  const transformSeconds = {
    transform: [{ rotate: secondDegrees.interpolate(interpolate) }, { scale: scales[3] }]
  }

  const rotateMinutes = Animated.divide(secondDegrees, new Animated.Value(60))
  const transformMinutes = {
    transform: [{ rotate: rotateMinutes.interpolate(interpolate) }, { scale: scales[4] }]
  }

  const rotateHours = Animated.divide(rotateMinutes, new Animated.Value(12))
  const transformHours = {
    transform: [{ rotate: rotateHours.interpolate(interpolate) }, { scale: scales[5] }]
  }

  const transformBigQuadran = { transform: [{ scale: scales[2] }] };
  const transformMediumQuadran = { transform: [{ scale: scales[1] }] };
  const transformSmallQuadran = { transform: [{ scale: scales[0] }] };

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <Animated.View style={[styles.bigQuadran, transformBigQuadran]} />
      <Animated.View style={[styles.mediumQuadran, transformMediumQuadran]} />
      <Animated.View style={[styles.mover, transformHours]}>
        <View style={[styles.hours]} />
      </Animated.View>
      <Animated.View style={[styles.mover, transformMinutes]}>
        <View style={[styles.minutes]} />
      </Animated.View>
      <Animated.View style={[styles.mover, transformSeconds]}>
        <View style={[styles.seconds]} />
      </Animated.View>
      <Animated.View style={[styles.smallQuadran, transformSmallQuadran]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  mover: {
    position: 'absolute',
    width: SIZES.BASE,
    height: SIZES.BASE,
    borderRadius: SIZES.BASE / 2,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  hours: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    height: '35%',
    marginTop: '15%',
    width: 4,
    borderRadius: 4
  },
  minutes: {
    backgroundColor: 'rgba(0,0,0,0.8)',
    height: '45%',
    marginTop: '5%',
    width: 3,
    borderRadius: 3
  },
  seconds: {
    backgroundColor: 'rgba(227,71,134,1)',
    height: '50%',
    width: 2,
    borderRadius: 2
  },
  bigQuadran: {
    width: SIZES.BASE * 0.8,
    height: SIZES.BASE * 0.8,
    borderRadius: SIZES.BASE * 0.4,
    backgroundColor: 'rgba(200,200,200,0.2)',
    position: 'absolute',
  },
  mediumQuadran: {
    width: SIZES.BASE * 0.5,
    height: SIZES.BASE * 0.5,
    borderRadius: SIZES.BASE * 0.25,
    backgroundColor: 'rgba(200,200,200,0.4)',
    position: 'absolute',
  },
  smallQuadran: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'rgba(227,71,134,1)',
    position: 'absolute',
  },
});

export default App;

// ComponentDidMount
/**
 * useEffect(()=>{
 *    console.log('component mounted!')
 * },[]) //notice the empty array here
 */

// ComponentWillUnmount
/**
 * useEffect(() => {
 * console.log('component mounted');
 *
 * // return a function to execute at unmount
 * return () => {
 *    console.log('component will unmount')
 * }
 * }, []) // notice the empty array
 */

 // ComponentDidUpdate
/**
 * useEffect(() => {
 *   console.log('component updated!')
 * }) // notice, no second argument
 */