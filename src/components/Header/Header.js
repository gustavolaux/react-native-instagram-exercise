import React, { PureComponent } from 'react';
import { Image, View, StyleSheet } from 'react-native';

export class Header extends PureComponent {
    render() {
        return (
            <View style={ styles.container }>
                <Image
                    style={ styles.icons }
                    source={ require('../../assets/camera.png') }
                />
                <Image
                    resizeMode='contain'
                    style={ styles.logo }
                    source={ require('../../assets/instagram_logo.png') }
                />
                <Image
                    style={ styles.icons }
                    source={ require('../../assets/send.png') }
                />
            </View>
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
