import React from 'react';
import { COLORS, FONTS, SIZES, icons, images } from '../constants';
import { Animated, StyleSheet, StatusBar, Text, View, FlatList, Image, } from 'react-native';


const Item = ({ imageUri, heading, description, index, scrollX }) => {

    const inputRange = [
        (index - 1) * SIZES.width,
        index * SIZES.width,
        (index + 1) * SIZES.width
    ];
    const inputRangeOpacity = [
        (index - 0.3) * SIZES.width,
        index * SIZES.width,
        (index + 0.3) * SIZES.width
    ];
    const scale = scrollX.interpolate({
        inputRange,
        outputRange: [0, 1, 0],
    });
    const translateXHeading = scrollX.interpolate({
        inputRange,
        outputRange: [SIZES.width * 0.2, 0, -SIZES.width * 0.2],
    });
    const translateXDescription = scrollX.interpolate({
        inputRange,
        outputRange: [SIZES.width * 0.7, 0, -SIZES.width * 0.7],
    });
    const opacity = scrollX.interpolate({
        inputRange: inputRangeOpacity,
        outputRange: [0, 1, 0],
    });


    return (
        <View style={styles.itemStyle}>
            <Animated.Image
                source={imageUri}
                style={
                    [
                        styles.imageStyle,
                        { transform: [{ scale }] }
                    ]
                } />
            <View style={styles.textContainer}>
                <Animated.Text
                    style={[
                        styles.heading,
                        {
                            opacity,
                            transform: [{ translateX: translateXHeading }],
                        }
                    ]}>{heading}</Animated.Text>
                <Animated.Text
                    style={[
                        styles.description,
                        {
                            opacity,
                            transform: [{ translateX: translateXDescription }],
                        }
                    ]}>{description}</Animated.Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    itemStyle: {
        width: SIZES.width,
        height: SIZES.height,
        alignItems: 'center',
        justifyContent: 'center',
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
    imageStyle: {
        width: SIZES.width * 0.75,
        height: SIZES.width * 0.75,
        resizeMode: 'contain',
        flex: 1,
    },
})

export default Item
