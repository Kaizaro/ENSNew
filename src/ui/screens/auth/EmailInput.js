import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Container} from '../../components/Container';
import {getLocale} from '../../../helpers/localisation/LocalisationFuncs';
import {APP_STYLES} from '../../../helpers/styleguide';
import {ButtonRegular} from '../../components/buttons/ButtonRegular';
import {scaleVertical} from '../../../helpers/lib/scaleUtils';
import {EmailInputField} from '../../components/inputFields/EmailInputField';
import {routeReset} from '../../../helpers/navigation/funcs/NavigationFuncs';

export const EmailInput = ({}) => {
    // define block
    const [email, onEmailChanged] = useState('');

    // logic block
    const onContinueButtonPress = () => {
        routeReset('KYCStack');
    };

    // render block
    return (
        <Container>
            <View style={styles.container}>
                <View style={styles.data}>
                    <Text style={APP_STYLES.TEXT.HEADER}>
                        {getLocale('input_your_email').toUpperCase()}
                    </Text>
                    <View style={styles.descriptionContainer}>
                        <Text style={APP_STYLES.TEXT.REGULAR}>
                            {getLocale('input_your_email_text')}
                        </Text>
                    </View>
                    <EmailInputField
                        email={email}
                        onEmailChange={onEmailChanged}
                        style={styles.inputEmail}
                    />
                </View>
                <ButtonRegular
                    style={styles.button}
                    title={getLocale('continue')}
                    onPress={onContinueButtonPress}
                />
            </View>
        </Container>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    data: {
        marginTop: scaleVertical(40),
    },
    descriptionContainer: {
        marginTop: scaleVertical(26),
    },
    inputEmail: {
        marginTop: scaleVertical(30),
        width: '100%',
    },
    button: {
        marginBottom: scaleVertical(50),
    },
});
