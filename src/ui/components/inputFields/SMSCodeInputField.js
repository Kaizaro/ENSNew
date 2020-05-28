import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {APP_STYLES} from '../../../helpers/styleguide';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import {scaleHorizontal, scaleVertical} from '../../../helpers/lib/scaleUtils';

export const SMSCodeInputField = ({
    SMSCode,
    onSMSCodeChanged,
    onFullFillEditing,
    style,
}) => {
    // render block
    return (
        <View style={{...styles.container, ...style}}>
            <Text style={APP_STYLES.TEXT.SCREEN_TITLE}>
                {'Введите код'.toUpperCase()}
            </Text>
            <SmoothPinCodeInput
                containerStyle={styles.inputSMS}
                codeLength={4}
                cellStyle={{
                    borderBottomWidth: scaleVertical(1),
                    borderColor: APP_STYLES.COLOR.BLACK,
                }}
                cellStyleFocused={{
                    borderColor: APP_STYLES.COLOR.LIGHT_BLUE,
                }}
                cellSpacing={scaleHorizontal(11)}
                value={SMSCode}
                onTextChange={onSMSCodeChanged}
                onFulfill={SMSCode => onFullFillEditing(SMSCode)}
                autoFocus={true}
                animationFocused={null}
                textStyle={APP_STYLES.TEXT.INPUT_FIELDS.PHONE}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
    },
    inputSMS: {
        marginTop: scaleVertical(19),
    },
});
