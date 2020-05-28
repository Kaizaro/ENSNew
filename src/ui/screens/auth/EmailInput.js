import React, {useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Container} from '../../components/Container';
import {APP_STYLES} from '../../../helpers/styleguide';
import {ButtonRegular} from '../../components/buttons/ButtonRegular';
import {scaleHorizontal, scaleVertical} from '../../../helpers/lib/scaleUtils';
import {EmailInputField} from '../../components/inputFields/EmailInputField';
import {routeReset} from '../../../helpers/navigation/funcs/NavigationFuncs';
import logo from '../../../../assets/logo.jpg';

export const EmailInput = ({}) => {
    // define block
    const [email, onEmailChanged] = useState('');

    // logic block
    const onContinueButtonPress = () => {
        routeReset('MainStack');
    };

    // render block
    return (
        <Container>
            <Image source={logo} resizeMode={'contain'} style={styles.logo} />
            <View style={styles.container}>
                <View style={styles.data}>
                    <Text style={APP_STYLES.TEXT.HEADER}>
                        {'Введите Ваш email'.toUpperCase()}
                    </Text>
                    <View style={styles.descriptionContainer}>
                        <Text
                            style={{
                                ...APP_STYLES.TEXT.REGULAR,
                                textAlign: 'left',
                            }}>
                            {
                                'Email используется для регистрации аккаунта и связи с личным кабинетом'
                            }
                        </Text>
                    </View>
                    <EmailInputField
                        email={email}
                        onEmailChange={onEmailChanged}
                        style={styles.inputEmail}
                    />
                    <ButtonRegular
                        style={styles.button}
                        title={'Продолжить'}
                        onPress={onContinueButtonPress}
                    />
                </View>
            </View>
        </Container>
    );
};

const styles = StyleSheet.create({
    logo: {
        width: scaleHorizontal(250),
        height: scaleHorizontal(100),
    },
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
        marginTop: scaleVertical(250),
    },
});
