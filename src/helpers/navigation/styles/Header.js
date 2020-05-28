import {APP_STYLES} from '../../styleguide';
import {scaleHorizontal, scaleVertical} from '../../lib/scaleUtils';

export const Header = {
    headerStatusBarHeight: scaleVertical(20),
    headerTransparent: true,
    headerTintColor: APP_STYLES.COLOR.BLACK,
    headerTitleStyle: APP_STYLES.TEXT.HEADER,
    headerBackTitleVisible: false,
    headerLeftContainerStyle: {
        paddingLeft: scaleHorizontal(18),
    },
};
