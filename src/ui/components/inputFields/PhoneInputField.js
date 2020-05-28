import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {APP_STYLES} from '../../../helpers/styleguide';
import {scaleHorizontal, scaleVertical} from '../../../helpers/lib/scaleUtils';

export const PhoneInputField = ({
    phoneNumber,
    onPhoneNumberChanged,
    onEndEditing,
    style,
}) => {
    // render block
    return (
        <View style={{...styles.container, ...style}}>
            <Text style={APP_STYLES.TEXT.SCREEN_TITLE}>
                {'Введите номер телефона'.toUpperCase()}
            </Text>
            <TextInput
                style={styles.inputField}
                autoFocus={true}
                caretHidden={false}
                value={phoneNumber}
                keyboardType={'phone-pad'}
                onChangeText={onPhoneNumberChanged}
                onEndEditing={onEndEditing}
                placeholder={'+7 999 111 22 33'}
                placeholderTextColor={APP_STYLES.COLOR.LIGHT_GRAY}
                textAlign={'center'}
            />
            {/*<View style={styles.dash} />*/}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
    },
    inputField: {
        marginTop: scaleVertical(20),
        width: scaleHorizontal(233),
        height: scaleVertical(50),
        textAlignVertical: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: scaleVertical(1),
        borderColor: APP_STYLES.COLOR.BLACK,
        ...APP_STYLES.TEXT.INPUT_FIELDS.PHONE,
    },
    dash: {
        width: scaleHorizontal(233),
        borderWidth: scaleVertical(1),
        borderColor: APP_STYLES.COLOR.BLACK,
    },
});
