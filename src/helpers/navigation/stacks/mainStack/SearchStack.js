import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {MapScreen} from '../../../../ui/screens/main/search/MapScreen';
import {CatalogueApartmentDetails} from '../../../../ui/screens/main/search/CatalogueApartmentDetails';
import {CatalogueApartmentFacilities} from '../../../../ui/screens/main/search/CatalogueApartmentFacilities';
import {CatalogueApartmentCheckinRules} from '../../../../ui/screens/main/search/CatalogueApartmentCheckinRules';
import {CatalogueApartmentCheckoutRules} from '../../../../ui/screens/main/search/CatalogueApartmentCheckoutRules';
import {getLocale} from '../../../localisation/LocalisationFuncs';
import {Header} from '../../styles/Header';

const SearchStack = createStackNavigator();

export const SearchStackSwitcher = () => {
    return (
        <SearchStack.Navigator>
            <SearchStack.Screen name={'MapScreen'} component={MapScreen} />
            <SearchStack.Screen
                name={'CatalogueApartmentDetails'}
                component={CatalogueApartmentDetails}
                options={{
                    headerShown: false,
                }}
            />
            <SearchStack.Screen
                name={'CatalogueApartmentFacilities'}
                component={CatalogueApartmentFacilities}
                options={{
                    title: getLocale('features').toUpperCase(),
                    ...Header,
                }}
            />
            <SearchStack.Screen
                name={'CatalogueApartmentCheckinRules'}
                component={CatalogueApartmentCheckinRules}
                options={{
                    title: getLocale('rules_checkin').toUpperCase(),
                    ...Header,
                }}
            />
            <SearchStack.Screen
                name={'CatalogueApartmentCheckoutRules'}
                component={CatalogueApartmentCheckoutRules}
                options={{
                    title: getLocale('rules_checkout').toUpperCase(),
                    ...Header,
                }}
            />
        </SearchStack.Navigator>
    );
};
