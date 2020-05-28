import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Container} from '../../components/Container';
import {SMSCodeInputField} from '../../components/inputFields/SMSCodeInputField';
import {routeNavigate} from '../../../helpers/navigation/funcs/NavigationFuncs';
import {
    scaleFontSize,
    scaleLineHeight,
    scaleVertical,
} from '../../../helpers/lib/scaleUtils';
import {ButtonWithoutBorder} from '../../components/buttons/ButtonWithoutBorder';
import {APP_STYLES} from '../../../helpers/styleguide';

export const SMSCodeInput = () => {
    // define block
    const [SMSCode, onSMSCodeChanged] = useState('');
    const [invalidSMSCode, setInvalidSMSCode] = useState(false);
    // const [resendSMSCodeTimer, ]
    console.log(SMSCode);

    // logic block
    const onFullFillEditing = inputSMSCode => {
        console.log('FULL FILL', SMSCode, inputSMSCode);
        if (inputSMSCode.length !== 4) {
            setInvalidSMSCode(true);
        } else {
            setTimeout(() => {
                onSMSCodeChanged('');
            }, 1000);
            routeNavigate('EmailInput');
        }
    };

    const onResendSMSButtonPress = () => {
        console.log('button pressed');
    };

    // const resendCodeTimer = () => {
    //     setTimeout()
    // }

    // render block
    return (
        <Container>
            <SMSCodeInputField
                SMSCode={SMSCode}
                onSMSCodeChanged={onSMSCodeChanged}
                onFullFillEditing={onFullFillEditing}
                style={styles.inputField}
            />
            <View style={styles.help}>
                <Text style={styles.helpText}>
                    {'code_not_delivered'.toUpperCase()}
                </Text>
            </View>
            <View style={styles.timerContainer}>
                <Text style={styles.timerText}>
                    {'resend_code_through'}
                </Text>
            </View>
            <ButtonWithoutBorder
                style={styles.secondaryButton}
                textStyle={styles.secondaryButtonText}
                onPress={onResendSMSButtonPress}
                title={'resend_code'}
            />
        </Container>
    );
};

const styles = StyleSheet.create({
    inputField: {
        marginTop: scaleVertical(146),
    },
    help: {
        marginTop: scaleVertical(79),
        width: '100%',
        // height: scaleVertical(32),
        justifyContent: 'center',
        alignItems: 'center',
    },
    helpText: {
        ...APP_STYLES.TEXT.REGULAR,
        lineHeight: scaleLineHeight(18),
    },
    timerContainer: {
        marginTop: scaleVertical(10),
        width: '100%',
    },
    timerText: {
        fontFamily: APP_STYLES.FONT.SF_PRO_TEXT.LIGHT,
        fontSize: scaleFontSize(15),
        color: APP_STYLES.COLOR.BLACK,
        lineHeight: scaleLineHeight(22),
        letterSpacing: scaleFontSize(-0.165),
        textAlign: 'center',
    },
    secondaryButton: {
        marginTop: scaleVertical(20),
        height: scaleVertical(42),
    },
    secondaryButtonText: {
        color: APP_STYLES.COLOR.BLACK,
    },
});
