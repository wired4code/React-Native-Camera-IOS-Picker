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

import Camera from '../components/Camera';

const ImagePicker = require("react-native-image-picker");

export default class PicturePage extends Component {

  constructor (props) {
    super(props);
  }

  render () {

    return (
    <Camera
      text = 'Take Photo'
      next = 'Take Another'
      nextStep = 'Next Step'
    />
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
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