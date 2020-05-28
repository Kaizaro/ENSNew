import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ProfileScreen} from '../../../../ui/screens/main/profile/ProfileScreen';

const ProfileStack = createStackNavigator();

export const ProfileStackSwitcher = () => {
    return (
        <ProfileStack.Navigator>
            <ProfileStack.Screen
                name={'ProfileScreen'}
                component={ProfileScreen}
            />
        </ProfileStack.Navigator>
    );
};
