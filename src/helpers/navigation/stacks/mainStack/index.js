import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {DashboardStackSwitcher} from './DashboardStack';
import {ControllerStackSwitcher} from './ControllersStack';
import {ProfileStackSwitcher} from './ProfileStack';
import {APP_STYLES} from '../../../styleguide';
import {scaleFontSize, scaleVertical} from '../../../lib/scaleUtils';

const Tab = createBottomTabNavigator();

export const MainStackSwitcher = () => {
    // const insets = useSafeArea();
    return (
        <Tab.Navigator
            initialRouteName={'SearchStack'}
            tabBarOptions={{
                activeTintColor: APP_STYLES.COLOR.LIGHT_BLUE,
                activeBackgroundColor: APP_STYLES.COLOR.WHITE,
                inactiveTintColor: '#777777',
                inactiveBackgroundColor: APP_STYLES.COLOR.WHITE,
                labelStyle: labelStyle,
                tabStyle: tabStyle,
            }}>
            <Tab.Screen
                name={'DashboardStack'}
                component={DashboardStackSwitcher}
                options={{
                    title: 'Дашборд'.toUpperCase(),
                }}
            />
            <Tab.Screen
                name={'ControllersStack'}
                component={ControllerStackSwitcher}
                options={{
                    title: 'Контроллеры'.toUpperCase(),
                }}
            />
            <Tab.Screen
                name={'ProfileStack'}
                component={ProfileStackSwitcher}
                options={{
                    title: 'Профиль'.toUpperCase(),
                }}
            />
        </Tab.Navigator>
    );
};

const tabStyle = {
    height: scaleVertical(49),
    justifyContent: 'center',
    alignItems: 'center',
    // paddingTop: scaleVertical(5),
    // paddingBottom: scaleVertical(2),
};

const labelStyle = {
    fontFamily: APP_STYLES.FONT.SF_PRO_TEXT.MEDIUM,
    fontSize: scaleFontSize(10),
};

const tabIconStyle = active => ({
    width: 25,
    height: 25,
    tintColor: active ? APP_STYLES.COLOR.LIGHT_BLUE : '#B3B3B3',
});
