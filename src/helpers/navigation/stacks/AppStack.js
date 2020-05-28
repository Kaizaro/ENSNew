import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Init} from '../../../ui/screens';
import {AuthStackSwitcher} from './AuthStack';
import {MainStackSwitcher} from './mainStack';

const AppStack = createStackNavigator();

export const AppStackSwitcher = () => {
    return (
        <AppStack.Navigator
            initialRouteName={'Init'}
            screenOptions={{headerShown: false}}>
            <AppStack.Screen name={'Init'} component={Init} />
            <AppStack.Screen name={'AuthStack'} component={AuthStackSwitcher} />
            <AppStack.Screen name={'MainStack'} component={MainStackSwitcher} />
        </AppStack.Navigator>
    );
};
