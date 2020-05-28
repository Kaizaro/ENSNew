import {Dimensions, PixelRatio} from 'react-native';

const {width, height} = Dimensions.get('window');
const ratio = PixelRatio.getFontScale();
const idealWidth = 375;
const idealHeight = 812;

export const scaleHorizontal = inWidth => {
    const delimiter = idealWidth / inWidth;
    return width / delimiter;
};

export const scaleVertical = inHeight => {
    const delimiter = idealHeight / inHeight;
    return height / delimiter;
};

export const scaleFontSize = fontSize => {
    const divisionRatio = idealWidth / (fontSize / ratio);
    return width / divisionRatio;
};

export const scaleLineHeight = lineHeight => {
    const divisionRatio = idealHeight / (lineHeight / ratio);
    return height / divisionRatio;
};
