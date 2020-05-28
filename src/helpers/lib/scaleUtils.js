// @flow
import {Dimensions, PixelRatio} from 'react-native';

type DimensionsScheme = {
    width: number,
    height: number,
};

const {width, height}: DimensionsScheme = Dimensions.get('window');
const ratio: number = PixelRatio.getFontScale();
const idealWidth: number = 375;
const idealHeight: number = 812;

export const scaleHorizontal: Function = (inWidth: number): number => {
    const delimiter: number = idealWidth / inWidth;
    return width / delimiter;
};

export const scaleVertical: Function = (inHeight: number): number => {
    const delimiter: number = idealHeight / inHeight;
    return height / delimiter;
};

export const scaleFontSize: Function = (fontSize: number): number => {
    const divisionRatio: number = idealWidth / (fontSize / ratio);
    return width / divisionRatio;
};

export const scaleLineHeight: Function = (lineHeight: number): number => {
    const divisionRatio: number = idealHeight / (lineHeight / ratio);
    return height / divisionRatio;
};
