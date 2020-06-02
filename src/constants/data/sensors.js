// @flow

export type SensorSchema = {
    id: number,
    sensorType: string,
    sensorName: string,
    controllerPin: number,
    value: number,
};

export type SensorsSchema = [SensorSchema];

export const SENSORS: SensorsSchema = [
    {
        id: 1,
        sensorType: 'Датчик температуры',
        sensorName: 'Гостиная',
        controllerPin: 5,
        value: 22.05,
    },
    {
        id: 2,
        sensorType: 'Счетчик воды',
        sensorName: 'Ванная',
        controllerPin: 6,
        value: 275.369,
    },
];
