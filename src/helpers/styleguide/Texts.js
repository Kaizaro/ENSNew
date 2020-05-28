import {APP_FONTS} from './Fonts';
import {scaleFontSize, scaleLineHeight} from '../lib/scaleUtils';
import {APP_COLORS} from './Colors';

export const APP_TEXTS = {
    HEADER: {
        fontFamily: APP_FONTS.SF_PRO_DISPLAY.BOLD,
        fontSize: scaleFontSize(14),
        color: APP_COLORS.BLACK,
        lineHeight: scaleLineHeight(17),
        textAlign: 'center',
    },
    SCREEN_TITLE: {
        fontFamily: APP_FONTS.SF_PRO_DISPLAY.BOLD,
        fontSize: scaleFontSize(17),
        color: APP_COLORS.BLACK,
        lineHeight: scaleLineHeight(20),
    },
    REGULAR: {
        fontFamily: APP_FONTS.SF_PRO_TEXT.REGULAR,
        fontSize: scaleFontSize(14),
        color: APP_COLORS.LIGHT_GRAY,
        lineHeight: scaleLineHeight(20),
        textAlign: 'center',
    },
    SECONDARY: {
        fontFamily: APP_FONTS.SF_PRO_TEXT.REGULAR,
        fontSize: scaleFontSize(12),
        color: APP_COLORS.GRAY,
        lineHeight: scaleLineHeight(14),
        letterSpacing: scaleFontSize(-0.165),
    },
    PRICE: {
        fontFamily: APP_FONTS.SF_PRO_DISPLAY.BOLD,
        fontSize: scaleFontSize(18),
        color: APP_COLORS.BLACK,
        lineHeight: scaleLineHeight(21),
    },
    LIST_ITEM: {
        fontFamily: APP_FONTS.SF_PRO_TEXT.REGULAR,
        fontSize: scaleFontSize(12),
        color: APP_COLORS.GRAY,
        lineHeight: scaleLineHeight(24),
    },
    DESCRIPTION: {
        fontFamily: APP_FONTS.SF_PRO_TEXT.LIGHT,
        fontSize: scaleFontSize(15),
        color: APP_COLORS.BLACK,
        lineHeight: scaleLineHeight(24),
        letterSpacing: scaleFontSize(-0.165),
        textAlign: 'center',
    },
    HYPERLINK: {
        fontFamily: APP_FONTS.SF_PRO_TEXT.REGULAR,
        fontSize: scaleFontSize(14),
        color: APP_COLORS.LIGHT_BLUE,
        lineHeight: scaleLineHeight(18),
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
            lineHeight: scaleLineHeight(20),
        },
        REGULAR: {
            fontFamily: APP_FONTS.SF_PRO_TEXT.REGULAR,
            fontSize: scaleFontSize(12),
            color: APP_COLORS.BLACK,
            textAlign: 'center',
            lineHeight: scaleLineHeight(14),
            letterSpacing: scaleFontSize(-0.165),
        },
    },
};
