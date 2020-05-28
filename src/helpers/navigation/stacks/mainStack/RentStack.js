import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {RentScreen} from '../../../../ui/screens/main/rent/RentScreen';

const RentStack = createStackNavigator();

export const RentStackSwitcher = () => {
    return (
        <RentStack.Navigator>
            <RentStack.Screen name={'RentScreen'} component={RentScreen} />
        </RentStack.Navigator>
    );
};
