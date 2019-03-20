import React, { PureComponent } from 'react';
import { View } from 'react-native';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';

import icoMoonConfig from '../../assets/icons/selection.json';

const Icon = createIconSetFromIcoMoon(
    icoMoonConfig,
    'icomoon',
    'icomoon.ttf'
);

export class CIcon extends PureComponent {
    render() {
        const { name, size, style, iconStyle } = this.props;

        return (
            <View style={ style }>
                <Icon
                    style={ iconStyle }
                    name={ name }
                    size={ size }
                />
            </View>
        );
    }
};
