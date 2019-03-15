import React, { PureComponent } from 'react';
import { Image, View, Text, StyleSheet, Dimensions, Platform } from 'react-native';

const window = Dimensions.get('window');

export class Post extends PureComponent {

    renderHeader = () => {
        const { post } = this.props;

        return (
            <View style={ styles.postHeader }>
                <Image
                    style={ styles.profilePicture }
                    source={{ uri: post.perfil }}
                />
                <View style={ styles.postInfo }>
                    <Text>{ post.autor }</Text>
                    { post.local ? <Text>{ post.local }</Text> : null }
                </View>
                <Image
                    style={ styles.icon }
                    source={ require('../../assets/dots.png') }
                />
            </View>
        );  
    };

    renderFooter = () => {
        const { post } = this.props;

        return (
            <View style={ styles.postFooter }>
                <Image 
                    style={{
                        ...styles.icon,
                        marginRight: 5,
                    }}
                    source={ post.liked ? require('../../assets/like-full.png') : require('../../assets/like.png') }
                />
                <Text>{ post.curtidas } likes</Text>
            </View>
        );
    };

    render() {
        const { post } = this.props;

        return (
            <View>
                { this.renderHeader() }

                <Image
                    style={{
                      width: window.width,
                      height: window.width,
                    }}
                    source={{ uri: post.imagem }}
                />

                { this.renderFooter() }
            </View>
        );
    };
};

const styles = StyleSheet.create({
    postHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingRight: 10,
    },
    profilePicture: {
        width: 50,
        height: 50,
        margin: 10,
        borderRadius: 25,
    },
    postInfo: {
        justifyContent: 'center',
        flex: 1,
    },
    postFooter: {
        flexDirection: 'row',
        margin: 10,
        alignItems: 'center',
    },
    icon: {
        width: 20,
        height: 20,
    },
});
