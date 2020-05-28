import React, {createRef} from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {AppStackSwitcher} from './stacks/AppStack';
import {Theme} from './styles/Theme';

export let navigatorRef = createRef();

export const AppNavigator = () => {
    return (
        <NavigationContainer ref={navigatorRef} theme={Theme}>
            <AppStackSwitcher />
        </NavigationContainer>
    );
};
