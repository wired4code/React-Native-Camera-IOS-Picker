import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
  Image
} from 'react-native';

import ImagePicker from 'react-native-image-picker';

export default class Camera extends Component {

  constructor (props) {
    super(props);
    this.state = {
      image: null,
      cameraButtonText: this.props.text
    }
  }

  takePhoto = () => {
    ImagePicker.launchCamera({noData: true}, this.setImage);
  }

  setImage = (response) => {
      if (response.error) {
        alert('Error', response.error);
        return;
      }

      let source = (Platform.OS === 'android') ?
        {uri: response.uri, isStatic: true} :
        {uri: response.uri.replace('file://', ''), isStatic: true};
      this.setState({'image': source, 'cameraButtonText': this.props.next});
  }

  showPlaceHolder = () => {
    return <View style={styles.placeHolderTextView}>
               <Text style={styles.placeHolderText}>Step 1: Photo of Your Drawing</Text>
           </View>;
  }

  hasImage = () => {
    return this.state.image ? <Image style={{flex: 1}} source={this.state.image}></Image> : this.showPlaceHolder();
  }

  showNextButton = () => {
      return <TouchableOpacity style={styles.button} onPress={() => this.props.nextStepAction()}>
                <Text style={styles.buttonText}>{this.props.nextStepButtonText}</Text>
             </TouchableOpacity>
  }

  photoTaken = () => this.state.image ? this.showNextButton() : null;

  render () {

    return (
      <View style={styles.screen}>

        <View style={styles.imageBox}>
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
  screen: {
      flex: 1,
      backgroundColor: 'green'
  },
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
  },
  placeHolderTextView: {
      flex: 1,
      justifyContent: 'center',
      alignSelf: 'center'
  },
  placeHolderText: {
      color: 'black',
      fontSize: 20
  },
  imageBox: {
      flex: 1,
      margin: 25,
      borderColor: 'black',
      borderStyle: 'solid',
      borderWidth: 1,
      backgroundColor: 'white'
  }
});