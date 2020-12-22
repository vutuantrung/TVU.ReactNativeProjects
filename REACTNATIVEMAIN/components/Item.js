import React from 'react';
import { Animated, StyleSheet, StatusBar, Text, View, FlatList, Image, } from 'react-native';
import { COLORS, FONTS, SIZES, icons, images } from '../constants';

function Item({ photo, avatarUrl }) {
    return (
        <View style={styles.container}>
            <View style={styles.imageWrapperStyle}>
                <View style={styles.imageBorderStyle} >
                    <Image source={{ uri: photo }} style={styles.imageStyle} />
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
