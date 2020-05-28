import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {DashboardScreen} from '../../../../ui/screens/main/dashboard/DashboardScreen';

const DashboardStack = createStackNavigator();

export const DashboardStackSwitcher = () => {
    return (
        <DashboardStack.Navigator>
            <DashboardStack.Screen
                name={'DashboardScreen'}
                component={DashboardScreen}
                options={{headerShown: false}}
            />
        </DashboardStack.Navigator>
    );
};
