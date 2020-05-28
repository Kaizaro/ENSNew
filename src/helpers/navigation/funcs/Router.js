import {store} from '../../../store';
import {routeReset} from './NavigationFuncs';

export const router = async () => {
    // define block
    console.log(store);
    const token = await store?.getState()?.authReducer?.token;
    console.log(token);

    // TODO need to upgrade router (here's version from Mobikey)
    // logic block
    if (token === '') {
        await routeReset('AuthStack');
    } else {
        await routeReset('MainStack');
    }
};
