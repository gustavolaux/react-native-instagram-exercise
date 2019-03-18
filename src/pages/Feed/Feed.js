import React, { PureComponent } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import { Post, Header, Footer } from './sections';

export class Feed extends PureComponent {

    renderPost = (post, i) => <Post key={ i } post={ post } />;

    render() {
        const { feed } = this.props;
        
        return (
            <View style={ styles.container }>
                <Header />
                <ScrollView style={ styles.container }>
                    { feed.map(this.renderPost) }
                </ScrollView>
                <Footer />
            </View>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
});
