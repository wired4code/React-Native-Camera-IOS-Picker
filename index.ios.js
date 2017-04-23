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
  ImagePickerIOS,
  Image,
  TouchableOpacity
} from 'react-native';

export default class CameraRollPicker extends Component {

  constructor (props) {
    super(props);
    this.state = {
      image: null
    }
    this.chooseImageFromGallery = this.chooseImageFromGallery.bind(this);
    this.chooseImageFromCamera = this.chooseImageFromCamera.bind(this);
  }

  chooseImageFromGallery () {
    ImagePickerIOS.openSelectDialog({}, imageUri => {
      this.setState({image: imageUri});
    }, () => {
        console.log("user cancels selection");
    });
  }

  chooseImageFromCamera () {
    ImagePickerIOS.openSelectDialog({}, imageUri => {
      this.setState({image: imageUri});
    }, () => {
        console.log("user cancels selection");
    });
  }

  render () {
    return (
      <View style={{flex: 1}}>

        <View style={{flex: 1}}>
          {this.state.image ? <Image style={{flex: 1}} source={{uri: this.state.image}}></Image> : null}
        </View>

        <View style={styles.container}>

          <TouchableOpacity style={styles.button} onPress={this.chooseImageFromGallery}>
            <Text style={styles.buttonText}>Open from Gallery</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={this.chooseImageFromCamera}>
            <Text style={styles.buttonText}>Open from Camera</Text>
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
