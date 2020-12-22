import React from 'react';
import { Animated, StyleSheet, StatusBar, Text, View, FlatList, Image, } from 'react-native';
import { COLORS, FONTS, SIZES, icons, images } from '../constants';

function Item({ photo, avatarUrl, index, scrollX }) {
    const inputRange = [
        (index - 1) * SIZES.width,
        index * SIZES.width,
        (index + 1) * SIZES.width
    ]

    const translateX = scrollX.interpolate({
        inputRange,
        outputRange: [-SIZES.width * 0.7, 0, SIZES.width * 0.7]
    })

    return (
        <View style={styles.container}>
            <View style={styles.imageWrapperStyle}>
                <View style={styles.imageBorderStyle} >
                    <Animated.Image source={{ uri: photo }} style={{
                        width: SIZES.ITEM_WIDTH * 1.4,
                        height: SIZES.ITEM_HEIGHT,
                        resizeMode: 'cover',
                        transform: [{
                            translateX,
                        }]
                    }} />
                </View>
                <Image source={{ uri: avatarUrl }} style={styles.avatarStyle} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: SIZES.width,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageStyle: {
        width: SIZES.ITEM_WIDTH * 1.4,
        height: SIZES.ITEM_HEIGHT,
        resizeMode: 'cover',
    },
    imageWrapperStyle: {
        shadowOffset: {
            width: 0,
            height: 20
        },
        shadowColor: '#000',
        shadowOpacity: 1,
        // For android devices
        elevation: 20,
    },
    imageBorderStyle: {
        width: SIZES.ITEM_WIDTH,
        height: SIZES.ITEM_HEIGHT,
        overflow: 'hidden',
        alignItems: 'center',
        borderRadius: 20,
    },
    avatarStyle: {
        width: 60,
        height: 60,
        borderRadius: 60,
        borderWidth: 6,
        borderColor: 'white',
        position: 'absolute',
        bottom: -30,
        right: 60,
    },
})

export default Item
