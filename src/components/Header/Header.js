import React, { PureComponent } from 'react';
import { View, StyleSheet } from 'react-native';

import { CIcon } from '../';

export class Header extends PureComponent {
    render() {
        return (
            <View style={ [this.props.style, styles.container] }>
                <View>
                    <CIcon
                        name={ this.props.leftIcon }
                        size={ styles.icons.height }
                    />
                </View>

                { this.props.children }

                <View>
                    <CIcon
                        name={ this.props.rightIcon }
                        size={ styles.icons.height }
                    />
                </View>
            </View>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingTop: 10,
        backgroundColor: '#F8F8F8',
        borderBottomWidth: 1,
        borderColor: '#EBEBEB',
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
