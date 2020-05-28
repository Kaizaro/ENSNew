import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Init} from '../../../ui/screens/Init';
import {OnboardingStackSwitcher} from './OnboardingStack';
import {AuthStackSwitcher} from './AuthStack';
import {KYCStackSwitcher} from './KYCStack';
import {BankCardStackSwitcher} from './BankCardStack';
import {MainStackSwitcher} from './mainStack';
import {FinishRegistration} from '../../../ui/screens/registration/FinishRegistration';

const AppStack = createStackNavigator();

export const AppStackSwitcher = () => {
    return (
        <AppStack.Navigator
            initialRouteName={'Init'}
            screenOptions={{headerShown: false}}>
            <AppStack.Screen name={'Init'} component={Init} />
            <AppStack.Screen
                name={'OnboardingStack'}
                component={OnboardingStackSwitcher}
            />
            <AppStack.Screen name={'AuthStack'} component={AuthStackSwitcher} />
            <AppStack.Screen name={'KYCStack'} component={KYCStackSwitcher} />
            <AppStack.Screen
                name={'BankCardStack'}
                component={BankCardStackSwitcher}
            />
            <AppStack.Screen
                name={'FinishRegistration'}
                component={FinishRegistration}
            />
            <AppStack.Screen name={'MainStack'} component={MainStackSwitcher} />
        </AppStack.Navigator>
    );
};
