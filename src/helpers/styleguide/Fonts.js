import {Platform} from 'react-native';

const isIOS = Platform.OS === 'ios';

const SF_PRO_DISPLAY = {
    BLACK: isIOS ? 'SFProDisplay-Black' : 'SF-Pro-Display-Black',
    BLACK_ITALIC: isIOS
        ? 'SFProDisplay-BlackItalic'
        : 'SF-Pro-Display-BlackItalic',
    BOLD: isIOS ? 'SFProDisplay-Bold' : 'SF-Pro-Display-Bold',
    BOLD_ITALIC: isIOS
        ? 'SFProDisplay-BoldItalic'
        : 'SF-Pro-Display-BoldItalic',
    HEAVY: isIOS ? 'SFProDisplay-Heavy' : 'SF-Pro-Display-Heavy',
    HEAVY_ITALIC: isIOS
        ? 'SFProDisplay-HeavyItalic'
        : 'SF-Pro-Display-HeavyItalic',
    LIGHT: isIOS ? 'SFProDisplay-Light' : 'SF-Pro-Display-Light',
    LIGHT_ITALIC: isIOS
        ? 'SFProDisplay-LightItalic'
        : 'SF-Pro-Display-LightItalic',
    MEDIUM: isIOS ? 'SFProDisplay-Medium' : 'SF-Pro-Display-Medium',
    MEDIUM_ITALIC: isIOS
        ? 'SFProDisplay-MediumItalic'
        : 'SF-Pro-Display-MediumItalic',
    REGULAR: isIOS ? 'SFProDisplay-Regular' : 'SF-Pro-Display-Regular',
    REGULAR_ITALIC: isIOS
        ? 'SFProDisplay-RegularItalic'
        : 'SF-Pro-Display-RegularItalic',
    SEMIBOLD: isIOS ? 'SFProDisplay-Semibold' : 'SF-Pro-Display-Semibold',
    SEMIBOLD_ITALIC: isIOS
        ? 'SFProDisplay-SemiboldItalic'
        : 'SF-Pro-Display-SemiboldItalic',
    THIN: isIOS ? 'SFProDisplay-Thin' : 'SF-Pro-Display-Thin',
    THIN_ITALIC: isIOS
        ? 'SFProDisplay-ThinItalic'
        : 'SF-Pro-Display-ThinItalic',
    ULTRALIGHT: isIOS ? 'SFProDisplay-Ultralight' : 'SF-Pro-Display-Ultralight',
    ULTRALIGHT_ITALIC: isIOS
        ? 'SFProDisplay-Ultralight'
        : 'SF-Pro-Display-UltralightItalic',
};

const SF_PRO_TEXT = {
    BLACK: isIOS ? 'SFProText-Black' : 'SF-Pro-Text-Black',
    BLACK_ITALIC: isIOS ? 'SFProText-BlackItalic' : 'SF-Pro-Text-BlackItalic',
    BOLD: isIOS ? 'SFProText-Bold' : 'SF-Pro-Text-Bold',
    BOLD_ITALIC: isIOS ? 'SFProText-BoldItalic' : 'SF-Pro-Text-BoldItalic',
    HEAVY: isIOS ? 'SFProText-Heavy' : 'SF-Pro-Text-Heavy',
    HEAVY_ITALIC: isIOS ? 'SFProText-HeavyItalic' : 'SF-Pro-Text-HeavyItalic',
    LIGHT: isIOS ? 'SFProText-Light' : 'SF-Pro-Text-Light',
    LIGHT_ITALIC: isIOS ? 'SFProText-LightItalic' : 'SF-Pro-Text-LightItalic',
    MEDIUM: isIOS ? 'SFProText-Medium' : 'SF-Pro-Text-Medium',
    MEDIUM_ITALIC: isIOS
        ? 'SFProText-MediumItalic'
        : 'SF-Pro-Text-MediumItalic',
    REGULAR: isIOS ? 'SFProText-Regular' : 'SF-Pro-Text-Regular',
    REGULAR_ITALIC: isIOS
        ? 'SFProText-RegularItalic'
        : 'SF-Pro-Text-RegularItalic',
    SEMIBOLD: isIOS ? 'SFProText-Semibold' : 'SF-Pro-Text-Semibold',
    SEMIBOLD_ITALIC: isIOS
        ? 'SFProText-SemiboldItalic'
        : 'SF-Pro-Text-SemiboldItalic',
    THIN: isIOS ? 'SFProText-Thin' : 'SF-Pro-Text-Thin',
    THIN_ITALIC: isIOS ? 'SFProText-ThinItalic' : 'SF-Pro-Text-ThinItalic',
    ULTRALIGHT: isIOS ? 'SFProText-Ultralight' : 'SF-Pro-Text-Ultralight',
    ULTRALIGHT_ITALIC: isIOS
        ? 'SFProText-Ultralight'
        : 'SF-Pro-Text-UltralightItalic',
};

export const APP_FONTS = {SF_PRO_DISPLAY, SF_PRO_TEXT};

// LOG FROM iOS
//
// 2020-05-01 16:28:18.107071+0300 Apartland[6290:100190]  SFProDisplay-HeavyItalic
// 2020-05-01 16:28:18.107160+0300 Apartland[6290:100190]  SFProDisplay-ThinItalic
// 2020-05-01 16:28:18.107241+0300 Apartland[6290:100190]  SFProDisplay-Heavy
// 2020-05-01 16:28:18.107316+0300 Apartland[6290:100190]  SFProDisplay-BoldItalic
// 2020-05-01 16:28:18.107403+0300 Apartland[6290:100190]  SFProDisplay-SemiboldItalic
// 2020-05-01 16:28:18.107608+0300 Apartland[6290:100190]  SFProDisplay-Regular
// 2020-05-01 16:28:18.107799+0300 Apartland[6290:100190]  SFProDisplay-Bold
// 2020-05-01 16:28:18.108000+0300 Apartland[6290:100190]  SFProDisplay-MediumItalic
// 2020-05-01 16:28:18.108193+0300 Apartland[6290:100190]  SFProDisplay-Thin
// 2020-05-01 16:28:18.108426+0300 Apartland[6290:100190]  SFProDisplay-RegularItalic
// 2020-05-01 16:28:18.108638+0300 Apartland[6290:100190]  SFProDisplay-Semibold
// 2020-05-01 16:28:18.108857+0300 Apartland[6290:100190]  SFProDisplay-BlackItalic
// 2020-05-01 16:28:18.109090+0300 Apartland[6290:100190]  SFProDisplay-Light
// 2020-05-01 16:28:18.109353+0300 Apartland[6290:100190]  SFProDisplay-LightItalic
// 2020-05-01 16:28:18.109564+0300 Apartland[6290:100190]  SFProDisplay-Black
// 2020-05-01 16:28:18.109800+0300 Apartland[6290:100190]  SFProDisplay-Medium
//
// 2020-05-01 16:28:18.118753+0300 Apartland[6290:100190] SF Pro Text
// 2020-05-01 16:28:18.119015+0300 Apartland[6290:100190]  SFProText-Heavy
// 2020-05-01 16:28:18.119225+0300 Apartland[6290:100190]  SFProText-LightItalic
// 2020-05-01 16:28:18.119443+0300 Apartland[6290:100190]  SFProText-HeavyItalic
// 2020-05-01 16:28:18.119651+0300 Apartland[6290:100190]  SFProText-Black
// 2020-05-01 16:28:18.119841+0300 Apartland[6290:100190]  SFProText-RegularItalic
// 2020-05-01 16:28:18.120024+0300 Apartland[6290:100190]  SFProText-Medium
// 2020-05-01 16:28:18.120193+0300 Apartland[6290:100190]  SFProText-ThinItalic
// 2020-05-01 16:28:18.120388+0300 Apartland[6290:100190]  SFProText-Bold
// 2020-05-01 16:28:18.120581+0300 Apartland[6290:100190]  SFProText-SemiboldItalic
// 2020-05-01 16:28:18.120792+0300 Apartland[6290:100190]  SFProText-Light
// 2020-05-01 16:28:18.120993+0300 Apartland[6290:100190]  SFProText-MediumItalic
// 2020-05-01 16:28:18.121215+0300 Apartland[6290:100190]  SFProText-BoldItalic
// 2020-05-01 16:28:18.121369+0300 Apartland[6290:100190]  SFProText-Regular
// 2020-05-01 16:28:18.121543+0300 Apartland[6290:100190]  SFProText-Thin
// 2020-05-01 16:28:18.121728+0300 Apartland[6290:100190]  SFProText-Semibold
