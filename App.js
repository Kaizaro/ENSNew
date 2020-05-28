// @flow

import * as React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/store';
import {AppWrapper} from './src/AppWrapper';

export const App: React$Node = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <AppWrapper />
            </PersistGate>
        </Provider>
    );
};
