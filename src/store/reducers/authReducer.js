// Initial state
import {AUTH_TYPES} from '../types/authTypes';

const initialState = {
    token: '',
    devAPI: true,
};

// Reducer
export const authReducer = (state = initialState, action) => {
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
