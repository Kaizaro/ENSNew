// @flow

// Initial state
import {AUTH_TYPES} from '../types/authTypes';

type AuthReducerSchema = {
    token: string,
    phone: string,
    password: string,
};

type ActionSchema = {
    type: string,
    payload?: any,
};

const initialState: AuthReducerSchema = {
    token: '',
    phone: '',
    password: '',
};

// Reducer
export const authReducer = (
    state: AuthReducerSchema = initialState,
    action: ActionSchema,
) => {
    switch (action.type) {
        case AUTH_TYPES.LOGOUT:
            return {state: initialState};
        case AUTH_TYPES.SET_TOKEN:
            return {
                ...state,
                token: action.payload,
            };

        case AUTH_TYPES.CLEAR_TOKEN:
            return {
                ...state,
                token: '',
            };

        // default
        default: {
            return state;
        }
    }
};
