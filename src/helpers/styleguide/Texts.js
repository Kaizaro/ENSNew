import {APP_FONTS} from './Fonts';
import {scaleFontSize, scaleLineHeight} from '../lib/scaleUtils';
import {APP_COLORS} from './Colors';

export const APP_TEXTS = {
    HEADER: {
        fontFamily: APP_FONTS.SF_PRO_DISPLAY.BOLD,
        fontSize: scaleFontSize(14),
        color: APP_COLORS.BLACK,
        textAlign: 'center',
    },
    SCREEN_TITLE: {
        fontFamily: APP_FONTS.SF_PRO_DISPLAY.BOLD,
        fontSize: scaleFontSize(17),
        color: APP_COLORS.BLACK,
    },
    REGULAR: {
        fontFamily: APP_FONTS.SF_PRO_TEXT.REGULAR,
        fontSize: scaleFontSize(14),
        color: APP_COLORS.LIGHT_GRAY,
        textAlign: 'center',
    },
    SECONDARY: {
        fontFamily: APP_FONTS.SF_PRO_TEXT.REGULAR,
        fontSize: scaleFontSize(12),
        color: APP_COLORS.GRAY,
        letterSpacing: scaleFontSize(-0.165),
    },
    PRICE: {
        fontFamily: APP_FONTS.SF_PRO_DISPLAY.BOLD,
        fontSize: scaleFontSize(18),
        color: APP_COLORS.BLACK,
    },
    LIST_ITEM: {
        fontFamily: APP_FONTS.SF_PRO_TEXT.REGULAR,
        fontSize: scaleFontSize(12),
        color: APP_COLORS.GRAY,
    },
    DESCRIPTION: {
        fontFamily: APP_FONTS.SF_PRO_TEXT.LIGHT,
        fontSize: scaleFontSize(15),
        color: APP_COLORS.BLACK,
        letterSpacing: scaleFontSize(-0.165),
        textAlign: 'center',
    },
    HYPERLINK: {
        fontFamily: APP_FONTS.SF_PRO_TEXT.REGULAR,
        fontSize: scaleFontSize(14),
        color: APP_COLORS.LIGHT_BLUE,
        textAlign: 'center',
    },
    BUTTON: {
        REGULAR: {
            fontFamily: APP_FONTS.SF_PRO_DISPLAY.BOLD,
            fontSize: scaleFontSize(14),
            color: 'white',
        },
        TRANSPARENT: {
            fontFamily: APP_FONTS.SF_PRO_DISPLAY.BOLD,
            fontSize: scaleFontSize(14),
            color: APP_COLORS.LIGHT_BLUE,
        },
    },
    INPUT_FIELDS: {
        PHONE: {
            fontFamily: APP_FONTS.SF_PRO_TEXT.REGULAR,
            fontSize: scaleFontSize(17),
            color: APP_COLORS.BLACK,
            textAlign: 'center',
        },
        REGULAR: {
            fontFamily: APP_FONTS.SF_PRO_TEXT.REGULAR,
            fontSize: scaleFontSize(12),
            color: APP_COLORS.BLACK,
            textAlign: 'center',
            letterSpacing: scaleFontSize(-0.165),
        },
    },
};
