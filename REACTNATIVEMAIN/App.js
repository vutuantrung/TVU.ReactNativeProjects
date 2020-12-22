/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Animated, StyleSheet, StatusBar, Text, View, FlatList, Image, } from 'react-native';
import { COLORS, FONTS, SIZES, icons, images } from './constants';
import Item from './components/Item';

const data = images.sources.map((image, index) => ({
  key: String(index),
  photo: image,
  avatar_url: `https://randomuser.me/api/portraits/women/${Math.floor(
    Math.random() * 40
  )}.jpg`,
}));

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <FlatList
        data={data}
        showsHorizontalScrollIndicator={false}
        horizontal
        keyExtractor={item => item.key}
        pagingEnabled
        renderItem={({ item, index }) =>
        (
          <Item photo={item.photo} avatarUrl={item.avatar_url} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
