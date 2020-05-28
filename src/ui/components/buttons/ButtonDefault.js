import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {APP_STYLES} from '../../../helpers/styleguide';
import React from 'react';

export const ButtonDefault = ({
    title,
    onPress,
    loading,
    disabled,
    style,
    textStyle,
}) => {
    // style block
    const innerStyle = StyleSheet.create({
        container: style,
        text: textStyle,
    });

    // render block
    return (
        <TouchableOpacity
            style={
                disabled
                    ? {...innerStyle.container, opacity: 0.5}
                    : innerStyle.container
            }
            onPress={onPress}
            disabled={disabled}>
            {!loading && (
                <Text style={innerStyle.text}>{title?.toUpperCase()}</Text>
            )}
        </TouchableOpacity>
    );
};
