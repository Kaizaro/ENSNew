import React from 'react';
import {ActivityIndicator} from 'react-native';
import {APP_STYLES} from '../../helpers/styleguide';

export const Loader = () => (
    <ActivityIndicator color={APP_STYLES.COLOR.LIGHT_BLUE} size={'large'} />
);
