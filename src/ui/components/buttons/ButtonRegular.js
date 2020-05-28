import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {APP_STYLES} from '../../../helpers/styleguide';
import {ButtonDefault} from './ButtonDefault';

export const ButtonRegular = ({title, onPress, loading, disabled, style}) => {
    return (
        <ButtonDefault
            title={title}
            onPress={onPress}
            disabled={disabled}
            style={{...APP_STYLES.CONTAINER.BUTTON.REGULAR, ...style}}
            textStyle={APP_STYLES.TEXT.BUTTON.REGULAR}
        />
    );
};
