import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {DashboardScreen} from '../../../../ui/screens/main/dashboard/DashboardScreen';
import {AddSensor} from '../../../../ui/screens/main/dashboard/AddSensor';

const DashboardStack = createStackNavigator();

export const DashboardStackSwitcher = () => {
    return (
        <DashboardStack.Navigator>
            <DashboardStack.Screen
                name={'DashboardScreen'}
                component={DashboardScreen}
                options={{headerShown: false}}
            />
            <DashboardScreen.Screen
                name={'AddSensor'}
                component={AddSensor}
                options={{headerShown: false}}
            />
        </DashboardStack.Navigator>
    );
};
