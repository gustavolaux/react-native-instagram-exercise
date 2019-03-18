import React, { PureComponent } from 'react';
import { Image, View, StyleSheet, Text } from 'react-native';

import { Header as BaseHeader, ProfilePicture } from '../../../../components';

export class Header extends PureComponent {

    render() {
        const {
            title,
            members,
            isOnline,
        } = this.props.message;

        const memberName = members.length === 1 ? members[0].name : title;

        return (
            <BaseHeader
                leftIcons={ [{ name: 'left-arrow', size: 30 }] }
                rightIcons={ [{ name: 'paper-plane', size: 30 }, { name: 'paper-plane', size: 30 }] }
            >
                <View style={ styles.container }>
                    <ProfilePicture
                        // style={ styles.container }
                        size={ 30 }
                        // isOnline={ isOnline }
                        members={ members }
                    />
                    <Text style={ styles.title }>{ memberName }</Text>
                </View>
            </BaseHeader>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        // fontWeight: 'bold',
        fontSize: 18,
        paddingHorizontal: 5,
    },
});
