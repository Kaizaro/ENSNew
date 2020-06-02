import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ControllersScreen} from '../../../../ui/screens/main/controllers/ControllersScreen';
import {AddController} from '../../../../ui/screens/main/controllers/AddController';

const ControllersStack = createStackNavigator();

export const ControllerStackSwitcher = () => {
    return (
        <ControllersStack.Navigator>
            <ControllersStack.Screen
                name={'RentScreen'}
                component={ControllersScreen}
                options={{headerShown: false}}
            />
            <ControllersStack.Screen
                name={'AddController'}
                component={AddController}
                options={{headerShown: false}}
            />
        </ControllersStack.Navigator>
    );
};
