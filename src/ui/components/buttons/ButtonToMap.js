import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import mapIcon from '../../../../assets/icons/mapIcon.png';
import {
    scaleFontSize,
    scaleHorizontal,
    scaleLineHeight,
    scaleVertical,
} from '../../../helpers/lib/scaleUtils';
import {APP_STYLES} from '../../../helpers/styleguide';
import {getLocale} from '../../../helpers/localisation/LocalisationFuncs';

export const ButtonToMap = ({onPress, style}) => {
    // render block
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{...styles.container, ...style}}>
            <Image
                source={mapIcon}
                resizeMode={'contain'}
                style={styles.icon}
            />
            <View style={styles.textContainer}>
                <Text style={styles.text}>{getLocale('map')}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        width: scaleHorizontal(127),
        height: scaleVertical(48),
        paddingVertical: scaleVertical(10),
        paddingHorizontal: scaleHorizontal(15),
        backgroundColor: APP_STYLES.COLOR.BLACK,
        borderRadius: scaleVertical(14),
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    icon: {
        width: scaleHorizontal(28),
        height: scaleHorizontal(28),
    },
    textContainer: {
        width: scaleHorizontal(127 - (28 + 15)),
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontFamily: APP_STYLES.FONT.SF_PRO_DISPLAY.BOLD,
        fontSize: scaleFontSize(14),
        color: APP_STYLES.COLOR.WHITE,
        lineHeight: scaleLineHeight(26),
    },
});
