import React, { PureComponent } from 'react';
import { StyleSheet, View } from 'react-native';

export class Footer extends PureComponent {
    render() {
        return (
            <View style={ [this.props.style, styles.footer] }>
                { this.props.children }
            </View>
        );
    };
}

const styles = StyleSheet.create({
    footer: {
        padding: 10,
        borderColor: '#EBEBEB',
        borderTopWidth: 1,
        backgroundColor: '#F8F8F8',
    },
    icons: {
        width: 30,
        height: 30,
    },
});
