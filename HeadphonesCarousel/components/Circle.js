import React from 'react';
import { Animated, StyleSheet, StatusBar, Text, View, FlatList, Image, } from 'react-native';
import { COLORS, FONTS, SIZES, icons, images } from '../constants';
import data from '../data';

function Circle({ scrollX }) {
    return (
        <View style={[StyleSheet.absoluteFillObject, styles.circleContainer]} >
            {data.map(({ color }, index) => {
                const inputRange = [
                    (index - 0.5) * SIZES.width,
                    index * SIZES.width,
                    (index + 0.5) * SIZES.width
                ];
                const scale = scrollX.interpolate({
                    inputRange,
                    outputRange: [0, 1, 0],
                    extrapolate: 'clamp',
                });
                const opacity = scrollX.interpolate({
                    inputRange,
                    outputRange: [0, 0.2, 0]
                });
                return (
                    <Animated.View
                        key={index}
                        style={[
                            styles.circle,
                            {
                                backgroundColor: color,
                                opacity,
                                transform: [{ scale }],
                            },
                        ]}
                    />
                )
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    circleContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    circle: {
        width: SIZES.CIRCLE_SIZE,
        height: SIZES.CIRCLE_SIZE,
        borderRadius: SIZES.CIRCLE_SIZE / 2,
        position: 'absolute',
        top: '15%',
    },
})

export default Circle
