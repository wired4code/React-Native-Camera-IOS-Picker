import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
  Image
} from 'react-native';

const ImagePicker = require("react-native-image-picker");

export default class Camera extends Component {

  constructor (props) {
    super(props);
    this.state = {
      image: null,
      cameratext: this.props.text
    }
  }

  takePhoto = () => {
    ImagePicker.launchCamera({noData: true}, this.setImage);
  }

  setImage = (response) => {

      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.error) {
        console.log("ERROR", response.error);
        alert(response.error);
      } else if (response.customButton) {
        console.log("User selected custom button", response.customButton);
      } else {
        let source = (Platform.OS === "android") ?
          {uri: response.uri, isStatic: true} :
          {uri: response.uri.replace("file://", ""), isStatic: true};

        this.setState({'image': source, 'cameratext': this.props.next});
      }
  }

  hasImage = () => {
    return this.state.image ? <Image style={{flex: 1}} source={this.state.image}></Image> :
      <View style={{flex: 1, justifyContent: 'center', alignSelf: 'center'}}>
        <Text style={{color: 'black', fontSize: 20}}>Step 1: Photo of Your Drawing</Text>
      </View>;
  }

  photoTaken = () => {
    return this.state.image ? <TouchableOpacity style={styles.button} onPress={() => onNextStep()}>
            <Text style={styles.buttonText}>{this.props.nextStep}</Text>
          </TouchableOpacity> : null;
  }

  render () {

    return (
      <View style={{flex: 1, backgroundColor: 'green'}}>

        <View style={{flex: 1, margin: 25, borderColor: 'black', borderStyle: 'solid', borderWidth: 1, backgroundColor: 'white'}}>
          {this.hasImage()}
        </View>

        <View style={styles.container}>

          <TouchableOpacity style={styles.button} onPress={this.takePhoto}>
            <Text style={styles.buttonText}>{this.state.cameratext}</Text>
          </TouchableOpacity>

          <View>{this.photoTaken()}</View>

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