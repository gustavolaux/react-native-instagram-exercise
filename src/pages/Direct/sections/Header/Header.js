import React, { PureComponent } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { Header as BaseHeader } from '../../../../components';

export class Header extends PureComponent {
    render() {
        return (
            <BaseHeader
                style={{ paddingBottom: 10 }}
                leftIcon='left-arrow'
                rightIcon='add-square'
            >
                <Text style={ styles.title }>Direct</Text>
            </BaseHeader>
        )
    }
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        // fontWeight: 'bold',
        fontFamily: 'Lato'
    },
});
