import React, { PureComponent } from 'react';
import { View, Image, StyleSheet } from 'react-native';

export class Footer extends PureComponent {

    render() {
        return(
            <View style={ styles.footer }>
                <Image
                    style={ styles.icons }
                    source={ require('../../assets/camera.png') }
                />
                <Image
                    style={ styles.icons }
                    source={ require('../../assets/send.png') }
                />
                <Image
                    style={ styles.icons }
                    source={ require('../../assets/camera.png') }
                />
                <Image
                    style={ styles.icons }
                    source={ require('../../assets/send.png') }
                />
                <Image
                    style={ styles.icons }
                    source={ require('../../assets/camera.png') }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
    },
    icons: {
        width: 30,
        height: 30,
    },
});
