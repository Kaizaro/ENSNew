import {scaleHorizontal, scaleVertical} from '../lib/scaleUtils';
import {APP_COLORS} from './Colors';

export const APP_CONTAINERS = {
    DEFAULT_CONTAINER: {
        flex: 1,
        flexDirection: 'column',
        paddingHorizontal: scaleHorizontal(16),
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    BUTTON: {
        REGULAR: {
            width: scaleHorizontal(335),
            height: scaleVertical(57),
            borderRadius: scaleVertical(6),
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: APP_COLORS.LIGHT_BLUE,
        },
        TRANSPARENT: {
            width: scaleHorizontal(335),
            height: scaleVertical(57),
            borderRadius: scaleVertical(6),
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'transparent',
            borderWidth: scaleHorizontal(1),
            borderColor: APP_COLORS.LIGHT_BLUE,
        },
        WITHOUT_BORDER: {
            width: scaleHorizontal(335),
            height: scaleVertical(57),
            borderRadius: scaleVertical(6),
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'transparent',
        },
    },
};
