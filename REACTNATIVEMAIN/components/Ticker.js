import React from 'react';
import { Animated, StyleSheet, StatusBar, Text, View, FlatList, Image, } from 'react-native';
import data from '../data';
import { COLORS, FONTS, SIZES, icons, images } from '../constants';

function Ticker({ scrollX }) {

    const inputRange = [-SIZES.width, 0, SIZES.width];
    const translateY = scrollX.interpolate({
        inputRange,
        outputRange: [SIZES.TICKER_HEIGHT, 0, -SIZES.TICKER_HEIGHT]
    })

    return (
        <View style={styles.tickerContainer}>
            <Animated.View style={{ transform: [{ translateY }] }}>
                {data.map(({ type }, index) => {
                    return (
                        <Text key={index} style={styles.tickerText} >{type}</Text>
                    )
                })}
            </Animated.View>
        </View>
    )
}

const styles = StyleSheet.create({
    tickerContainer: {
        position: 'absolute',
        top: 40,
        left: 20,
        overflow: 'hidden',
        height: SIZES.TICKER_HEIGHT,
    },
    tickerText: {
        fontSize: SIZES.TICKER_HEIGHT,
        lineHeight: SIZES.TICKER_HEIGHT,
        textTransform: 'uppercase',
        fontWeight: '800',
    },
})

export default Ticker
