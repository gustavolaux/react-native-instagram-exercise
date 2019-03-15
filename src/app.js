import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  Platform,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';

import api from './api/feed.js';
import { Header, Feed, Footer } from './components';

export default class App extends Component {

    render() {
        return (
            <View style={{ flex: 1, ...styles.contentContainer }}>
                <Header />        
                <Feed feed={ api.feed } />        
                <Footer />
            </View>
        );
    }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
  },
  postHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 10,
  },
  contentContainer: {
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
