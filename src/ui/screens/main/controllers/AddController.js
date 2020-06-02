// @flow
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {APP_STYLES} from '../../../../helpers/styleguide';
import {scaleFontSize, scaleHorizontal, scaleVertical} from '../../../../helpers/lib/scaleUtils';
import {Container} from '../../../components/Container';
import {CONTROLLERS} from '../../../../constants/data/Controllers';
import {ButtonRegular} from '../../../components/buttons/ButtonRegular';

export const AddController = () => {
    // components block
    const settingsRow = (settingName: string, settingParam: string) => (
        <View>
            <Text style={styles.param}>{settingName}</Text>
            <TouchableOpacity style={styles.row} onPress={() => null}>
                <Text
                    style={{
                        ...APP_STYLES.TEXT.LIST_ITEM,
                        fontSize: scaleFontSize(18),
                        color: APP_STYLES.COLOR.BLACK,
                    }}>
                    {settingParam}
                </Text>
            </TouchableOpacity>
        </View>
    );

    // render block
    return (
        <Container style={styles.container}>
            <View style={styles.contentContainer}>
                <Text
                    style={{
                        ...APP_STYLES.TEXT.SCREEN_TITLE,
                        marginBottom: scaleVertical(40),
                    }}>
                    Подтвердите настройки контроллера
                </Text>
                {settingsRow('Wifi SSID', 'testSSID')}
                {settingsRow('Wifi Password', 'testPass')}
            </View>
            <ButtonRegular
                title={'Подтвердить настройки'}
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
    param: {
        ...APP_STYLES.TEXT.SECONDARY,
        marginBottom: scaleVertical(10),
        marginLeft: scaleHorizontal(10),
    },
    row: {
        marginBottom: scaleVertical(20),
        width: '100%',
        paddingVertical: scaleVertical(10),
        paddingHorizontal: scaleHorizontal(10),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: APP_STYLES.COLOR.LIGHT_GRAY,
        borderBottomWidth: scaleHorizontal(1),
        borderRadius: scaleHorizontal(10),
    },
    // settingButton: {
    //     width: scaleHorizontal(100),
    //     height: scaleVertical(25),
    //     borderColor: APP_STYLES.COLOR.LIGHT_GRAY,
    // },
});
