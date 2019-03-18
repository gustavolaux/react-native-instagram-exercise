import React, { PureComponent } from 'react';
import { View, StyleSheet } from 'react-native';

import { CIcon } from '../';

export class Header extends PureComponent {

    renderIcon = (icon, i) => <CIcon style={ styles.icon } key={ i } name={ icon.name } size={ icon.size } />;

    renderIcons = (icons = []) => {
        return <View style={ styles.iconContainer }>
            { icons.map(this.renderIcon) }
        </View>;
    };

    render() {
        return (
            <View style={ [this.props.style, styles.container] }>
                { this.renderIcons(this.props.leftIcons) }

                { this.props.children }

                { this.renderIcons(this.props.rightIcons) }
            </View>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: '#F8F8F8',
        borderBottomWidth: 1,
        borderColor: '#EBEBEB',
    },
    iconContainer: {
        flexDirection: 'row',
        // alignContent: 'space-between'
    },
    icon: {
        // marginHorizontal: 10,
    },
});
