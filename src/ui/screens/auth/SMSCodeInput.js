import React, {useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Container} from '../../components/Container';
import {SMSCodeInputField} from '../../components/inputFields/SMSCodeInputField';
import {routeNavigate} from '../../../helpers/navigation/funcs/NavigationFuncs';
import {
    scaleFontSize,
    scaleHorizontal,
    scaleLineHeight,
    scaleVertical,
} from '../../../helpers/lib/scaleUtils';
import {ButtonWithoutBorder} from '../../components/buttons/ButtonWithoutBorder';
import {APP_STYLES} from '../../../helpers/styleguide';
import logo from '../../../../assets/sampleLogo.png';

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
            <Image source={logo} resizeMode={'contain'} style={styles.logo} />
            <Text style={styles.introText}>Введите полученный в SMS код</Text>
            <SMSCodeInputField
                SMSCode={SMSCode}
                onSMSCodeChanged={onSMSCodeChanged}
                onFullFillEditing={onFullFillEditing}
                style={styles.inputField}
            />
            <View style={styles.help}>
                <Text style={styles.helpText}>{'Не получили код?'}</Text>
            </View>
            <ButtonWithoutBorder
                style={styles.secondaryButton}
                textStyle={styles.secondaryButtonText}
                onPress={onResendSMSButtonPress}
                title={'Получить новый код'}
            />
        </Container>
    );
};

const styles = StyleSheet.create({
    logo: {
        width: scaleHorizontal(250),
        height: scaleHorizontal(100),
    },
    introText: {
        marginTop: scaleVertical(100),
        ...APP_STYLES.TEXT.REGULAR,
    },
    inputField: {
        marginTop: scaleVertical(20),
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
