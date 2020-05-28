// imports block
import AsyncStorage from '@react-native-community/async-storage';
import {applyMiddleware, createStore} from 'redux';
import {createLogger} from 'redux-logger/src';
import {persistStore, persistReducer} from 'redux-persist';
import {composeWithDevTools} from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

// import reducers
import rootReducer from './reducers';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['authReducer', 'locale', 'profileReducer'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware, createLogger())),
);

sagaMiddleware.run(rootSaga);

let persistor = persistStore(store);
export {store, persistor};
