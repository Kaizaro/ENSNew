import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {APP_STYLES} from '../../../helpers/styleguide';
import {
    scaleFontSize,
    scaleHorizontal,
    scaleVertical,
} from '../../../helpers/lib/scaleUtils';

export const EmailInputField = ({
    email,
    onEmailChange,
    onEndEditing,
    error,
    style,
}) => {
    const label = 'Ваш адрес электронной почты';

    const getDashColor = () => {
        if (email.length === 0) {
            return styles.dashInactive;
        } else if (email.length !== 0) {
            return styles.dashActive;
        } else if (error) {
            return styles.dashError;
        }
    };

    return (
        <View style={{...styles.container, ...style}}>
            <Text style={APP_STYLES.TEXT.REGULAR}>{label.toUpperCase()}</Text>
            <TextInput
                style={styles.inputFieldContainer}
                autoFocus={true}
                caretHidden={false}
                value={email}
                keyboardType={'email-address'}
                onChangeText={onEmailChange}
                onEndEditing={onEndEditing}
                placeholder={'ВАШ E-MAIL'}
                placeholderTextColor={APP_STYLES.COLOR.LIGHT_GRAY}
                textAlign={'center'}
            />
            <View style={getDashColor} />
            {error && (
                <View>
                    <Text>error</Text>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: scaleHorizontal(343),
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    inputFieldContainer: {
        width: '100%',
        paddingTop: scaleVertical(5),
        paddingBottom: scaleVertical(10),
    },
    label: {
        fontFamily: APP_STYLES.FONT.SF_PRO_TEXT.REGULAR,
        fontSize: scaleFontSize(12),
        color: APP_STYLES.COLOR.LIGHT_GRAY,
        letterSpacing: scaleFontSize(-0.17),
    },
    inputFieldPlaceholder: {
        fontFamily: APP_STYLES.FONT.SF_PRO_TEXT.REGULAR,
        fontSize: scaleFontSize(12),
        letterSpacing: scaleFontSize(-0.17),
    },
    email: {
        fontFamily: APP_STYLES.FONT.SF_PRO_TEXT.REGULAR,
        fontSize: scaleFontSize(12),
        color: APP_STYLES.COLOR.BLACK,
        letterSpacing: scaleFontSize(-0.17),
    },
    dashInactive: {
        width: '100%',
        borderWidth: scaleVertical(1),
        backgroundColor: '#EEEEEE',
    },
    dashActive: {
        width: '100%',
        borderWidth: scaleVertical(1),
        backgroundColor: APP_STYLES.COLOR.LIGHT_BLUE,
    },
    dashError: {
        width: '100%',
        borderWidth: scaleVertical(1),
        backgroundColor: APP_STYLES.COLOR.ERROR,
    },
});
