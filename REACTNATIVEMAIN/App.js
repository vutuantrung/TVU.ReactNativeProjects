/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useRef } from 'react';
import { Animated, StyleSheet, StatusBar, Text, View, FlatList, Image, } from 'react-native';
import { Colors, } from 'react-native/Libraries/NewAppScreen';
import data from './data';
import { COLORS, FONTS, SIZES, icons, images } from './constants';
import Item from './components/Item';
import Pagination from './components/Pagination';
import Ticker from './components/Ticker';
import Circle from './components/Circle';

const App = () => {
  const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.container}>
      <StatusBar style='auto' hidden />
      <Circle scrollX={scrollX} />
      <Animated.FlatList
        keyExtractor={(item) => item.key}
        data={data}
        renderItem={({ item, index }) => (<Item {...item} index={index} scrollX={scrollX} />)}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        horizontal
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        scrollEventThrottle={16}
      />
      <Animated.Image style={styles.logo} source={images.blackLogo} />
      <Pagination scrollX={scrollX} />
      <Ticker scrollX={scrollX} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    opacity: 0.9,
    height: SIZES.LOGO_HEIGHT,
    width: SIZES.LOGO_WIDTH,
    resizeMode: 'contain',
    position: 'absolute',
    left: 10,
    bottom: 10,
    transform: [
      { translateX: -SIZES.LOGO_WIDTH / 2 },
      { translateY: -SIZES.LOGO_HEIGHT / 2 },
      { rotateZ: '-90deg' },
      { translateX: SIZES.LOGO_WIDTH / 2 },
      { translateY: SIZES.LOGO_HEIGHT / 2 },
    ],
  },
});

export default App;
