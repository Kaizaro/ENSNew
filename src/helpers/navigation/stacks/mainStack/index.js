import React from 'react';
import {Image} from 'react-native';
import {useSafeArea} from 'react-native-safe-area-context';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SearchStackSwitcher} from './SearchStack';
import {BookmarksStackSwitcher} from './BookmarksStack';
import {RentStackSwitcher} from './RentStack';
import {ProfileStackSwitcher} from './ProfileStack';
import {getLocale} from '../../../localisation/LocalisationFuncs';
import {APP_STYLES} from '../../../styleguide';
import {
    scaleFontSize,
    scaleHorizontal,
    scaleVertical,
} from '../../../lib/scaleUtils';
import searchIcon from '../../../../../assets/icons/tabBar/search.png';
import bookmarksIcon from '../../../../../assets/icons/tabBar/bookmarks.png';
import rentIcon from '../../../../../assets/icons/tabBar/rent.png';
import profileIcon from '../../../../../assets/icons/tabBar/profile.png';

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
                name={'SearchStack'}
                component={SearchStackSwitcher}
                options={{
                    title: getLocale('search').toUpperCase(),
                    tabBarIcon: state => (
                        <Image
                            source={searchIcon}
                            resizeMode={'contain'}
                            style={tabIconStyle(state.focused)}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name={'BookmarksStack'}
                component={BookmarksStackSwitcher}
                options={{
                    title: getLocale('bookmarks').toUpperCase(),
                    tabBarIcon: state => (
                        <Image
                            source={bookmarksIcon}
                            resizeMode={'contain'}
                            style={tabIconStyle(state.focused)}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name={'RentStack'}
                component={RentStackSwitcher}
                options={{
                    title: getLocale('rent').toUpperCase(),
                    tabBarIcon: state => (
                        <Image
                            source={rentIcon}
                            resizeMode={'contain'}
                            style={tabIconStyle(state.focused)}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name={'ProfileStack'}
                component={ProfileStackSwitcher}
                options={{
                    title: getLocale('profile').toUpperCase(),
                    tabBarIcon: state => (
                        <Image
                            source={profileIcon}
                            resizeMode={'contain'}
                            style={tabIconStyle(state.focused)}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

const tabStyle = {
    height: scaleVertical(49),
    paddingTop: scaleVertical(5),
    paddingBottom: scaleVertical(2),
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
