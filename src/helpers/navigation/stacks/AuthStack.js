import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {PhoneInput} from '../../../ui/screens/auth/PhoneInput';
import {SMSCodeInput} from '../../../ui/screens/auth/SMSCodeInput';
import {EmailInput} from '../../../ui/screens/auth/EmailInput';
import {Header} from '../styles/Header';

const AuthStack = createStackNavigator();

export const AuthStackSwitcher = () => {
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen
                name={'PhoneInput'}
                component={PhoneInput}
                options={{
                    title: 'Регистрация'.toUpperCase(),
                    ...Header,
                }}
            />
            <AuthStack.Screen
                name={'SMSCodeInput'}
                component={SMSCodeInput}
                options={{
                    title: 'Регистрация'.toUpperCase(),
                    ...Header,
                }}
            />
            <AuthStack.Screen
                name={'EmailInput'}
                component={EmailInput}
                options={{
                    title: 'Регистрация'.toUpperCase(),
                    ...Header,
                }}
            />
        </AuthStack.Navigator>
    );
};
