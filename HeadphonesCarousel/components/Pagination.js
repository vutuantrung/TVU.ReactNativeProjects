import React from 'react';
import { Animated, StyleSheet, StatusBar, Text, View, FlatList, Image, } from 'react-native';
import { COLORS, FONTS, SIZES, icons, images } from '../constants';
import data from '../data';

const Pagination = ({ scrollX }) => {
    const inputRange = [-SIZES.width, 0, SIZES.width];
    const translateX = scrollX.interpolate({
        inputRange,
        outputRange: [-SIZES.DOT_SIZE, 0, SIZES.DOT_SIZE],
    })

    return (
        <View style={styles.pagination}>
            <Animated.View
                style={[styles.paginationIndicator,
                {
                    position: 'absolute',
                    left: 0,
                    transform: [{ translateX }]
                }]} />
            {data.map((item) => (
                <View key={item.key} style={styles.paginationDotContainer}>
                    <View style={[styles.paginationDot, { backgroundColor: item.color }]} />
                </View>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
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
    paginationIndicator: {
        width: SIZES.DOT_SIZE,
        height: SIZES.DOT_SIZE,
        borderRadius: SIZES.DOT_SIZE / 2,
        borderWidth: 2,
        borderColor: '#ddd',
    },
});


export default Pagination
