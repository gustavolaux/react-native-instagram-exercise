import React, { PureComponent } from 'react';
import { Image, Text, View, StyleSheet, ScrollView } from 'react-native';

import { CIcon } from '../../../../components';

class ProfilePictures extends PureComponent {

    renderOnlineCircle = () => {
        return <View style={ [styles.onlineIcon, styles.absolute] } />;
    };

    renderSinglePicture = (pictures, isOnline) => {
        return (
            <View style={ styles.profilePictureContainer } >
                <Image
                    source={{ uri: pictures[0] }}
                    style={ [styles.profilePictureContainer, styles.singleProfilePicture ]}
                />
                { isOnline ? this.renderOnlineCircle() : null }
            </View>
        );
    };

    renderMultiplePictures = (pictures) => {
        return (
            <View style={ [
                styles.profilePictureContainer,
                { top: 0, left: 0 },
            ] } >
                <Image
                    source={{ uri: pictures[0] }}
                    style={ [
                        styles.absolute,
                        styles.multipleProfilePicture,
                        { top: 0, left: 0, right: 10, bottom: 10 }
                    ] }
                />
                <Image
                    source={{ uri: pictures[1] }}
                    style={ [
                        styles.absolute,
                        styles.multipleProfilePicture,
                        { bottom: 0, right: 0, left: 10, top: 10 }
                    ] }
                />
            </View>
        );
    };

    render() {
        const renderPictures = this.props.pictures.length === 1 ? this.renderSinglePicture : this.renderMultiplePictures;

        return (
            <View>
                { renderPictures(this.props.pictures, this.props.isOnline) }
            </View>
        );
    }
}

class MessageInfo extends PureComponent {

    render() {
        const { message } = this.props;

        const title = message.members.length === 1 ? message.members[0].name : message.title;

        return (
            <View style={ styles.messageInfo }>
                <Text style={{ fontWeight: 'bold', }}>{ title }</Text>
                <Text style={{ color: '#AAAAAA' }}>{ message.content }</Text>
            </View>
        );
    }
}

export class MessageList extends PureComponent {

    renderItem = (message, i) => {
        return (
            <View key={ i } style={ styles.message } >
                { this.renderProfilePictures(message.members, message.isOnline) }
                { this.renderMessageInfo(message) }
                { this.renderCamera() }
            </View>
        );
    };

    renderProfilePictures = (members, isOnline) => {
        return <ProfilePictures isOnline={ isOnline } pictures={ members.map(member => member.picture) } />;
    };

    renderMessageInfo = (message) => {
        return <MessageInfo message={ message } />;
    };

    renderCamera = () => {
        return <CIcon
            name='photo-camera'
            size={ styles.icon.height }
            style={ styles.icon }
        />;
    };

    render() {
        return (
            <ScrollView
                showsVerticalScrollIndicator={ false }
                contentContainerStyle={ styles.contentContainer }
            >
                {/* { this.props.messages } */}
                { this.props.messages.map(this.renderItem) }
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    contentContainer: {
        justifyContent: 'space-between',
    },
    icon: {
        width: 30,
        height: 30,
    },
    message: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
        alignItems: 'center',
    },
    messageInfo: {
        flex: 1,
        paddingLeft: 10,
    },
    absolute: {
        position: 'absolute',
    },
    profilePictureContainer: {
        width: 60,
        height: 60,
    },
    singleProfilePicture: {
        borderRadius: 30,
    },
    multipleProfilePicture: {
        borderRadius: 25,
        borderWidth: 2.5,
        borderColor: 'white',
    },
    onlineIcon: {
        backgroundColor: '#48C22A',
        width: 20,
        height: 20,
        borderRadius: 25,
        borderWidth: 3.5,
        borderColor: 'white',
        bottom: 0,
        right: 0,
    },
});
