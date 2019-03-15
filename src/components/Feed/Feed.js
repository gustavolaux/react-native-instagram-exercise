import React, { PureComponent } from 'react';
import { Platform, ScrollView, StyleSheet } from 'react-native';

import { Post } from '../Post/Post';

export class Feed extends PureComponent {

    renderPost = (post, i) => <Post key={ i } post={ post } />;

    render() {
        const { feed } = this.props;
        
        return (
            <ScrollView style={ styles.container } contentContainerStyle={ styles.contentContainer } >
                { feed.map(this.renderPost) }
            </ScrollView>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5FCFF",
    },
    contentContainer: {
        paddingTop: Platform.OS === 'ios' ? 20 : 0,
    },
});
