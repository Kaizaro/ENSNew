import {navigatorRef} from '../index';

export const routeNavigate = (route, params) => {
    navigatorRef?.current?.navigate(route, {
        ...params,
    });
};

export const routeBack = () => {
    navigatorRef?.current?.goBack();
};

export const routeReset = (route, params) => {
    navigatorRef?.current?.reset({
        index: 0,
        routes: [
            {
                name: route,
                params,
            },
        ],
    });
};
