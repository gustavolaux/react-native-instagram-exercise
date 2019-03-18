import React, { PureComponent } from 'react';
import { View, Image, StyleSheet } from 'react-native';

import { Footer as BaseFooter } from '../../../../components';

export class Footer extends PureComponent {

    render() {
        return(
            <BaseFooter style={ styles.footer }>
                <Image
                    style={ styles.icons }
                    source={ require('../../../../assets/images/camera.png') }
                />
                <Image
                    style={ styles.icons }
                    source={ require('../../../../assets/images/send.png') }
                />
                <Image
                    style={ styles.icons }
                    source={ require('../../../../assets/images/camera.png') }
                />
                <Image
                    style={ styles.icons }
                    source={ require('../../../../assets/images/send.png') }
                />
                <Image
                    style={ styles.icons }
                    source={ require('../../../../assets/images/camera.png') }
                />
            </BaseFooter>
        );
    }
}

const styles = StyleSheet.create({
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    icons: {
        width: 30,
        height: 30,
    },
});
