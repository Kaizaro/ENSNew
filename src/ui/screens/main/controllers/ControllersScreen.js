// @flow
import React from 'react';
import {Container} from '../../../components/Container';
import {StyleSheet, Text, View} from 'react-native';
import {APP_STYLES} from '../../../../helpers/styleguide';
import {CONTROLLERS} from '../../../../constants/data/Controllers';
import {ButtonTransparent} from '../../../components/buttons/ButtonTransparent';
import {
    scaleFontSize,
    scaleHorizontal,
    scaleVertical,
} from '../../../../helpers/lib/scaleUtils';
import {ButtonRegular} from '../../../components/buttons/ButtonRegular';

export const ControllersScreen: () => React$Node = () => {
    // render block
    return (
        <Container style={styles.container}>
            <View style={styles.contentContainer}>
                <Text
                    style={{
                        ...APP_STYLES.TEXT.SCREEN_TITLE,
                        marginBottom: scaleVertical(40),
                    }}>
                    Список контроллеров в сети
                </Text>
                {CONTROLLERS.map(controller => {
                    console.log(controller);
                    return (
                        <View style={styles.row}>
                            <Text
                                style={{
                                    ...APP_STYLES.TEXT.LIST_ITEM,
                                    fontSize: scaleFontSize(18),
                                }}>
                                {controller.name}
                            </Text>
                            <ButtonTransparent
                                style={styles.settingButton}
                                title={'Настройка'}
                            />
                        </View>
                    );
                })}
            </View>
            <ButtonRegular
                title={'Добавить'}
                style={{marginBottom: scaleVertical(20)}}
            />
        </Container>
    );
};

const styles = StyleSheet.create({
    container: {
        // width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    contentContainer: {
        width: '100%',
    },
    row: {
        marginBottom: scaleVertical(20),
        width: '100%',
        paddingVertical: scaleVertical(10),
        paddingHorizontal: scaleHorizontal(15),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: APP_STYLES.COLOR.LIGHT_BLUE,
        borderWidth: scaleHorizontal(1),
        borderRadius: scaleHorizontal(10),
    },
    settingButton: {
        width: scaleHorizontal(100),
        height: scaleVertical(25),
        borderColor: APP_STYLES.COLOR.LIGHT_GRAY,
    },
});
