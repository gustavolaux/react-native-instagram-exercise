import React, { Component } from 'react';
import {
  View,
  Platform,
  StyleSheet,
} from 'react-native';

import feedApi from './api/feed.js';
import directApi from './api/direct.js';
import { Feed, Direct, MessageDetail } from './pages';

export default class App extends Component {

    render() {
        return (
            <View style={ styles.contentContainer }>
                {/* <Feed feed={ feedApi.feed } /> */}
                {/* <Direct messages={ directApi.messages } /> */}
                <MessageDetail message={ directApi.messages[0] } />
            </View>
        );
    }
};

const styles = StyleSheet.create({
    postHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingRight: 10,
    },
    contentContainer: {
        flex: 1,
        backgroundColor: '#F8F8F8',
        paddingTop: Platform.OS === 'ios' ? 20 : 0,
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
});
