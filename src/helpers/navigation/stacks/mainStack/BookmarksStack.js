import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {BookmarksScreen} from '../../../../ui/screens/main/bookmarks/BookmarksScreen';

const BookmarksStack = createStackNavigator();

export const BookmarksStackSwitcher = () => {
    return (
        <BookmarksStack.Navigator>
            <BookmarksStack.Screen
                name={'BookmarksScreen'}
                component={BookmarksScreen}
            />
        </BookmarksStack.Navigator>
    );
};
