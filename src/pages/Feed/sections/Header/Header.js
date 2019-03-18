import React, { PureComponent } from 'react';
import { Image, View, StyleSheet } from 'react-native';

import { Header as BaseHeader } from '../../../../components';

export class Header extends PureComponent {
    render() {
        return (
            <BaseHeader
                leftIcon='photo-camera'
                rightIcon='paper-plane'
            >
                <Image
                    resizeMode='contain'
                    style={ styles.logo }
                    source={ require('../../../../assets/images/instagram_logo.png') }
                />
            </BaseHeader>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingTop: 10,
        backgroundColor: 'white',
    },
    logo: {
        flex: 1,
        height: 40,
    },
    icons: {
        width: 30,
        height: 30,
    },
});
