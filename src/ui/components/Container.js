import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {APP_STYLES} from '../../helpers/styleguide';
import {scaleVertical} from '../../helpers/lib/scaleUtils';

export const Container = ({style, nonHeader, children}) => {
    // render block
    return (
        <SafeAreaView style={styles.container}>
            <View
                style={{
                    ...APP_STYLES.CONTAINER.DEFAULT_CONTAINER,
                    marginTop: nonHeader ? 0 : scaleVertical(48),
                    ...style,
                }}>
                {children}
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
