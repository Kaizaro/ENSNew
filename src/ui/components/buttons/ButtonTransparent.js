import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {APP_STYLES} from '../../../helpers/styleguide';
import React from 'react';
import {ButtonDefault} from './ButtonDefault';

export const ButtonTransparent = ({title, onPress, loading, style}) => {
    return (
        <ButtonDefault
            title={title}
            onPress={onPress}
            style={{...APP_STYLES.CONTAINER.BUTTON.TRANSPARENT, ...style}}
            textStyle={APP_STYLES.TEXT.BUTTON.TRANSPARENT}
        />
    );
};
