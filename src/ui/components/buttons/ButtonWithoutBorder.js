import {ButtonDefault} from './ButtonDefault';
import {APP_STYLES} from '../../../helpers/styleguide';
import React from 'react';

export const ButtonWithoutBorder = ({title, onPress, loading, style, textStyle}) => {
    return (
        <ButtonDefault
            title={title}
            onPress={onPress}
            style={{...APP_STYLES.CONTAINER.BUTTON.WITHOUT_BORDER, ...style}}
            textStyle={{...APP_STYLES.TEXT.BUTTON.TRANSPARENT, ...textStyle}}
        />
    );
};
