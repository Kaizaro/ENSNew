import React, {useEffect, useLayoutEffect} from 'react';
import {
    Dimensions,
    Image,
    PixelRatio,
    SafeAreaView,
    StyleSheet,
    Text, useWindowDimensions,
} from 'react-native';
import {router} from '../../helpers/navigation/funcs/Router';
import {API_CONFIG} from '../../helpers/API/APIConfig';
import {APP_STYLES} from '../../helpers/styleguide';
import {Container} from '../components/Container';

export const Init = () => {
    useEffect(() => {
        // router();
        setTimeout(async () => {
            await router();
        }, 2000);
    }, []);

    // render block
    return (
        <Container>
            <Text style={{fontFamily: APP_STYLES.FONT.SF_PRO_TEXT.BOLD_ITALIC}}>
                test
            </Text>
        </Container>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    logo: {
        width: 123,
        height: 160,
    },
});
