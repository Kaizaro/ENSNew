import {combineReducers} from 'redux';
import {authReducer} from './authReducer';
import locale from './localesReducer';

const rootReducer = combineReducers({
    authReducer,
    locale,
});

export default rootReducer;
