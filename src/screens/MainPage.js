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

export default class MainPage extends Component {

  static navigatorStyle = {
          navBarTranslucent: true,
          navBarTextColor: 'green'
      }

  _onPressNext () {
    return this.props.navigation.navigate('Camera');
  }

  constructor (props) {
    super(props);
  }

  render () {
    return (
      <View style={{flex: 1}}>

        <View style={styles.container}>

          <Text style={styles.text}>Welcome to Kid Quest</Text>

          <TouchableOpacity style={styles.button} onPress={() => this._onPressNext()}>
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>

        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green'
  },
  button: {
    backgroundColor: 'white',
    width: 150,
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10
  },
  buttonText: {
    color: 'green'
  },
  text: {
    color: 'white',
    fontSize: 30,
    paddingBottom: 20
  }

});
