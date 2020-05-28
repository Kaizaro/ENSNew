// @flow

type ControllersScheme = Array<{
    id: number,
    name: string,
    ssid: string,
    password: string,
    localIP: string,
}>;

export const CONTROLLERS: ControllersScheme = [
    {
        id: 1,
        name: 'ENS_123456789',
        ssid: 'Test_SSID',
        password: '123321',
        localIP: '192.168.1.10',
    },
    {
        id: 2,
        name: 'ENS_321654987',
        ssid: 'Test_SSID',
        password: '123321',
        localIP: '192.168.1.11',
    },
];
