// @flow
import NetInfo, {NetInfoStateType} from '@react-native-community/netinfo';

type connectionTypesSchema = {
    wifi: string,
    cellular: string,
};

const connectionTypes: connectionTypesSchema = {
    wifi: 'wi-fi',
    cellular: 'cellular',
};

export const LANSwitcher = (wifiSSID: string): boolean => {
    NetInfo.addEventListener(state => {
        const connectionType: NetInfoTypeSchema = NetInfoStateType.type;
        if (connectionType === connectionTypes.wifi) {
            return wifiSSID === NetInfoStateType.details?.ssid;
        }
    });
};
