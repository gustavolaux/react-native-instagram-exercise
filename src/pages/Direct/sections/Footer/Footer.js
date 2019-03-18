import React, { PureComponent } from 'react';
import { Text, Image, StyleSheet, View } from 'react-native';

import { Footer as BaseFooter, CIcon } from '../../../../components';

export class Footer extends PureComponent {

    render() {
        return(
            <BaseFooter>
                <View style={{
                    justifyContent: 'center',
                    flexDirection: 'row',
                    alignItems: 'center',
                }} >
                    <CIcon
                        name='photo-camera'
                        size={ styles.icons.height }
                        style={ styles.icons }
                    />
                    <Text>Camera</Text>
                </View>
            </BaseFooter>
        );
    }
}

const styles = StyleSheet.create({
    icons: {
        width: 30,
        height: 30,
        marginHorizontal: 10,
    },
});
