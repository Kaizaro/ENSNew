import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {PhoneInput} from '../../../ui/screens/auth/PhoneInput';
import {SMSCodeInput} from '../../../ui/screens/auth/SMSCodeInput';
import {EmailInput} from '../../../ui/screens/auth/EmailInput';
import {Header} from '../styles/Header';
import {getLocale} from '../../localisation/LocalisationFuncs';

const AuthStack = createStackNavigator();

export const AuthStackSwitcher = () => {
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen
                name={'PhoneInput'}
                component={PhoneInput}
                options={{
                    title: getLocale('registration').toUpperCase(),
                    ...Header,
                }}
            />
            <AuthStack.Screen
                name={'SMSCodeInput'}
                component={SMSCodeInput}
                options={{
                    title: getLocale('registration').toUpperCase(),
                    ...Header,
                }}
            />
            <AuthStack.Screen
                name={'EmailInput'}
                component={EmailInput}
                options={{
                    title: getLocale('registration').toUpperCase(),
                    ...Header,
                }}
            />
        </AuthStack.Navigator>
    );
};
