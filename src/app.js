import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  Platform,
  StyleSheet,
  Dimensions,
  ScrollView,
} from "react-native";

import api from './api/feed.js';

const window = Dimensions.get('window');

class App extends Component {

  render() {
    return (
      <View style={{ flex: 1, ...styles.contentContainer }}>
        <View style={ styles.header }>
          <Image
            style={ styles.headerIcons }
            source={ require('./img/camera.png') }
          />
          <Image
            resizeMode='contain'
            style={ styles.headerLogo }
            source={ require('./img/instagram_logo.png') }
          />
          <Image
            style={ styles.headerIcons }
            source={ require('./img/send.png') }
          />
        </View>
        <ScrollView style={ styles.container } contentContainerStyle={ styles.contentContainer }>
          {
            api.feed.map((post, i) => {
              return (
                <View key={ i }>

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
                      source={ require('./img/dots.png') }
                    />
                  </View>

                  <Image
                    style={{
                      width: window.width,
                      height: window.width,
                    }}
                    source={{ uri: post.imagem }}
                  />
                  <View style={ styles.postFooter }>
                    <Image 
                      style={{
                        ...styles.icon,
                        marginRight: 5,
                      }}
                      source={ post.liked ? require('./img/like-full.png') : require('./img/like.png') }
                    />
                    <Text>{ post.curtidas } likes</Text>
                  </View>
                </View>
              );
            })
          }
        </ScrollView>
        <View style={ styles.footer }>
          <Image
            style={ styles.headerIcons }
            source={ require('./img/camera.png') }
          />
          <Image
            style={ styles.headerIcons }
            source={ require('./img/send.png') }
          />
          <Image
            style={ styles.headerIcons }
            source={ require('./img/camera.png') }
          />
          <Image
            style={ styles.headerIcons }
            source={ require('./img/send.png') }
          />
          <Image
            style={ styles.headerIcons }
            source={ require('./img/camera.png') }
          />
        </View>
      </View>
    );
  }
}

export default App;

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
  headerIcons: {
    width: 30,
    height: 30,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingTop: 10,
    backgroundColor: 'white',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  headerLogo: {
    flex: 1,
    height: 40,
  },
  icon: {
    width: 20,
    height: 20,
  },
});
