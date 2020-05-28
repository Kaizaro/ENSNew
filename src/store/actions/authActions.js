import {AUTH_TYPES} from '../types/authTypes';

export const logout = () => ({
    type: AUTH_TYPES.LOGOUT,
});

export const setToken = token => ({
    type: AUTH_TYPES.SET_TOKEN,
    payload: token,
});

export const clearToken = () => ({
    type: AUTH_TYPES.CLEAR_TOKEN,
});

export const setDevAPI = () => ({
    type: AUTH_TYPES.SET_DEV_API,
});

export const setProdAPI = () => ({
    type: AUTH_TYPES.SET_PROD_API,
});
