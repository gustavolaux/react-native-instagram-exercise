import React, { Component } from 'react';
import { Image, View, StyleSheet } from 'react-native';

export class ProfilePicture extends Component {

    renderOnlineCircle = () => {
        return <View style={ [styles.onlineIcon, styles.absolute] } />;
    };

    renderSinglePicture = (pictures, isOnline, pictureContrainerStyle) => {
        const borderStyle = {
            borderRadius: pictureContrainerStyle.width / 2,
        };

        return (
            <View>
                <Image
                    source={{ uri: pictures[0] }}
                    style={ [pictureContrainerStyle, borderStyle ]}
                />
                { isOnline ? this.renderOnlineCircle() : null }
            </View>
        );
    };

    renderMultiplePictures = (pictures, inOnline, pictureContrainerStyle) => {
        const borderStyle = {
            borderRadius: pictureContrainerStyle.width / 2,
        };

        return (
            <View style={ [
                pictureContrainerStyle,
                { top: 0, left: 0 },
            ] } >
                <Image
                    source={{ uri: pictures[0] }}
                    style={ [
                        borderStyle,
                        styles.absolute,
                        styles.whiteBorder,
                        { top: 0, left: 0, right: 10, bottom: 10 }
                    ] }
                />
                <Image
                    source={{ uri: pictures[1] }}
                    style={ [
                        borderStyle,
                        styles.absolute,
                        styles.whiteBorder,
                        { bottom: 0, right: 0, left: 10, top: 10 }
                    ] }
                />
            </View>
        );
    };

    render() {
        const pictures = this.props.members.map(member => member.picture);

        const renderPictures = pictures.length === 1 ? this.renderSinglePicture : this.renderMultiplePictures;

        const pictureContrainerStyle = {
            width: this.props.size,
            height: this.props.size,
        };

        return (
            <View style={ this.props.style }>
                { renderPictures(pictures, this.props.isOnline, pictureContrainerStyle) }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    absolute: {
        position: 'absolute',
    },
    whiteBorder: {
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
