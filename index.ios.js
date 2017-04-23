/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Platform
} from 'react-native';

var ImagePicker = require("react-native-image-picker");

export default class CameraRollPicker extends Component {

  constructor (props) {
    super(props);
    this.state = {
      image: null
    }
    this.chooseImage = this.chooseImage.bind(this);
    console.log("IMAGE PICKER", ImagePicker);
  }

  chooseImage () {
    console.log("IMAGE PICKER", ImagePicker);
    ImagePicker.showImagePicker({noData: true}, (response) => {
      console.log("Response", response);

      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.error) {
        console.log("ERROR", response.error);
      } else if (response.customButton) {
        console.log("User selected custom button", response.customButton);
      } else {
        let source = {uri: response.uri.replace("file://", ""), isStatic: true};

        if (Platform.OS === "android") {
          source = {uri: response.uri, isStatic: true};
        }
        this.setState({"image": source});
      }

    })
  }

  render () {
    return (
      <View style={{flex: 1}}>

        <View style={{flex: 1}}>
          {this.state.image ? <Image style={{flex: 1}} source={this.state.image}></Image> : null}
        </View>

        <View style={styles.container}>

          <TouchableOpacity style={styles.button} onPress={this.chooseImage}>
            <Text style={styles.buttonText}>Choose Image</Text>
          </TouchableOpacity>

        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  button: {
    backgroundColor: 'gray',
    width: 150,
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10
  },
  buttonText: {
    color: 'white'
  }

});

AppRegistry.registerComponent('CameraRollPicker', () => CameraRollPicker);