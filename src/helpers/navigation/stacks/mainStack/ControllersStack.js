import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ControllersScreen} from '../../../../ui/screens/main/controllers/ControllersScreen';

const ControllersStack = createStackNavigator();

export const ControllerStackSwitcher = () => {
    return (
        <ControllersStack.Navigator>
            <ControllersStack.Screen
                name={'RentScreen'}
                component={ControllersScreen}
                options={{headerShown: false}}
            />
        </ControllersStack.Navigator>
    );
};
