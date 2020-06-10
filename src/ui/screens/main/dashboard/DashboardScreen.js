// @flow
import React from 'react';
import {Container} from '../../../components/Container';
import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {APP_STYLES} from '../../../../helpers/styleguide';
import {CONTROLLERS} from '../../../../constants/data/Controllers';
import {ButtonTransparent} from '../../../components/buttons/ButtonTransparent';
import {
    scaleFontSize,
    scaleHorizontal,
    scaleVertical,
} from '../../../../helpers/lib/scaleUtils';
import {ButtonRegular} from '../../../components/buttons/ButtonRegular';
import {routeNavigate} from '../../../../helpers/navigation/funcs/NavigationFuncs';
import {SENSORS} from '../../../../constants/data/sensors';

export const DashboardScreen = () => {
    // logic block
    const onAddControllerButtonPress = (): void => {
        routeNavigate('AddSensor');
    };

    const onControllerPress = (): void => {
        Alert.alert(
            'Выберите действие',
            'Вы хотите изменить конфигурацию датчика?',
            [
                {
                    text: 'Удалить датчик',
                    onPress: onDeleteButtonPress,
                },
                {
                    text: 'Отмена',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            {cancelable: false},
        );
    };

    const onDeleteButtonPress = (): void => {
        Alert.alert(
            'Подтверждение удаления датчика',
            'Вы точно хотите удалить датчик?',
            [
                {
                    text: 'Отменить',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                {text: 'Сбросить', onPress: () => console.log('OK Pressed')},
            ],
            {cancelable: false},
        );
    };

    // render block
    return (
        <Container style={styles.container}>
            <View style={styles.contentContainer}>
                <Text
                    style={{
                        ...APP_STYLES.TEXT.SCREEN_TITLE,
                        marginBottom: scaleVertical(40),
                    }}>
                    Список датчиков
                </Text>
                {SENSORS.map(sensor => {
                    console.log(sensor);
                    return (
                        <TouchableOpacity
                            style={styles.row}
                            onPress={onControllerPress}>
                            <Text
                                style={{
                                    ...APP_STYLES.TEXT.LIST_ITEM,
                                    fontSize: scaleFontSize(18),
                                    color: APP_STYLES.COLOR.BLACK,
                                }}>
                                {sensor.sensorType}
                            </Text>
                            <Text
                                style={{
                                    ...APP_STYLES.TEXT.LIST_ITEM,
                                    fontSize: scaleFontSize(18),
                                    color: APP_STYLES.COLOR.BLACK,
                                }}>
                                {sensor.value}
                            </Text>
                        </TouchableOpacity>
                    );
                })}
            </View>
            <ButtonRegular
                title={'Добавить'}
                style={{marginBottom: scaleVertical(20)}}
                onPress={onAddControllerButtonPress}
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
        paddingHorizontal: scaleHorizontal(25),
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
