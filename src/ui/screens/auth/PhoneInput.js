import React, {useState} from 'react';
import {AsYouType} from 'libphonenumber-js';
import {Container} from '../../components/Container';
import {PhoneInputField} from '../../components/inputFields/PhoneInputField';
import {Image, StyleSheet, Text, View} from 'react-native';
import {
    scaleHorizontal,
    scaleLineHeight,
    scaleVertical,
} from '../../../helpers/lib/scaleUtils';
import {ButtonRegular} from '../../components/buttons/ButtonRegular';
import {ButtonWithoutBorder} from '../../components/buttons/ButtonWithoutBorder';
import {APP_STYLES} from '../../../helpers/styleguide';
import {routeNavigate} from '../../../helpers/navigation/funcs/NavigationFuncs';
import logo from '../../../../assets/logo.jpg';

export const PhoneInput = props => {
    const [phoneNumber, onPhoneNumberChanged] = useState('');
    const [invalidPhoneNumber, isPhoneNumberValid] = useState(true);

    // func to match phone number
    const phoneNumberMatcher = value => {
        console.log(value);
        if (
            value.replace(/\+7/g, '').startsWith('7') &&
            value.replace(/\+7/g, '').length === 1
        ) {
            onPhoneNumberChanged('+7');
        } else {
            if (
                !value.startsWith('+7') &&
                (value.replace(/\+7/g, '').startsWith('9') ||
                    value.replace(/\+7/g, '').startsWith('8'))
            ) {
                onPhoneNumberChanged(
                    '+7' + value.replace(/\+7/g, '').replace(/-/g, ''),
                );
            } else {
                onPhoneNumberChanged(value.replace(/-/g, ''));
            }
        }
    };

    // func when button pressed, to navigate to other screen
    const onContinueButtonPress = async () => {
        console.log('Continue button pressed');
        routeNavigate('SMSCodeInput');
    };

    const onLoginButtonPress = async () => {
        console.log('Login button press');
        routeNavigate('SMSCodeInput');
    };

    // disable button check
    const isButtonActive = () => {
        return phoneNumber.length >= 16;
    };

    console.log(phoneNumber.length);
    // render block
    return (
        <Container>
            <Image source={logo} resizeMode={'contain'} style={styles.logo} />
            <PhoneInputField
                style={styles.phoneInput}
                phoneNumber={new AsYouType('RU').input(phoneNumber)}
                onPhoneNumberChanged={phoneNumberMatcher}
            />
            <ButtonRegular
                disabled={!isButtonActive()}
                style={styles.mainButton}
                title={'Продолжить'}
                onPress={onContinueButtonPress}
            />
            <View style={styles.help}>
                <Text style={styles.helpText}>
                    {'Уже зарегистрированы?'.toUpperCase()}
                </Text>
            </View>
            <ButtonWithoutBorder
                style={styles.secondaryButton}
                textStyle={styles.secondaryButtonText}
                onPress={onLoginButtonPress}
                title={'Войти'}
            />
        </Container>
    );
};

const styles = StyleSheet.create({
    logo: {
        width: scaleHorizontal(250),
        height: scaleHorizontal(100),
    },
    phoneInput: {
        marginTop: scaleVertical(146),
    },
    mainButton: {
        marginTop: scaleVertical(25),
        width: scaleHorizontal(261),
        height: scaleVertical(60),
    },
    help: {
        marginTop: scaleVertical(30),
        width: '100%',
        height: scaleVertical(32),
        justifyContent: 'center',
        alignItems: 'center',
    },
    helpText: {
        ...APP_STYLES.TEXT.REGULAR,
        lineHeight: scaleLineHeight(18),
    },
    secondaryButton: {
        height: scaleVertical(42),
    },
    secondaryButtonText: {
        color: APP_STYLES.COLOR.BLACK,
    },
});
