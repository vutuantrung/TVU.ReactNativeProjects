/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar, Text, View, FlatList, Image, } from 'react-native';
import { Colors, } from 'react-native/Libraries/NewAppScreen';
import data from './data';
import { COLORS, FONTS, SIZES, icons, images } from './constants';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar style='auto' hidden />
      <FlatList
        keyExtractor={(item) => item.key}
        data={data}
        renderItem={({ item, index }) => <Item {...item} />}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        horizontal
      />
      <Image style={styles.logo} source={images.blackLogo} />
      <Pagination />
    </View>
  );
};

const Item = ({ imageUri, heading, description }) => {
  return (
    <View style={styles.itemStyle}>
      <Image source={imageUri} style={styles.imageStyle} />
      <View style={styles.textContainer}>
        <Text style={styles.heading}>{heading}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  )
}

const Pagination = () => {
  return (
    <View style={styles.pagination}>
      {data.map((item) => (
        <View key={item.key} style={styles.paginationDotContainer}>
          <View style={[styles.paginationDot, { backgroundColor: item.color }]} />
        </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemStyle: {
    width: SIZES.width,
    height: SIZES.height,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyle: {
    width: SIZES.width * 0.75,
    height: SIZES.width * 0.75,
    resizeMode: 'contain',
    flex: 1,
  },
  textContainer: {
    alignItems: 'flex-start',
    alignSelf: 'flex-end',
    flex: 0.5,
  },
  heading: {
    color: '#444',
    textTransform: 'uppercase',
    fontSize: 24,
    fontWeight: '800',
    letterSpacing: 2,
    marginBottom: 5,
  },
  description: {
    color: '#ccc',
    fontWeight: '600',
    textAlign: 'left',
    width: SIZES.width * 0.75,
    marginRight: 10,
    fontSize: 16,
    lineHeight: 16 * 1.5,
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
  pagination: {
    position: 'absolute',
    right: 20,
    bottom: 40,
    flexDirection: 'row',
    height: SIZES.DOT_SIZE,
  },
  paginationDot: {
    width: SIZES.DOT_SIZE * 0.3,
    height: SIZES.DOT_SIZE * 0.3,
    borderRadius: SIZES.DOT_SIZE * 0.15,
  },
  paginationDotContainer: {
    width: SIZES.DOT_SIZE,
    alignItems: 'center',
    justifyContent: 'center',
  },

});

export default App;
