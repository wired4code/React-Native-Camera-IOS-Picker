import React from 'react';
import { StackNavigator } from 'react-navigation';

import PicturePage from '../screens/PicturePage';
import MainPage from '../screens/MainPage';

import {
  Text,
  View
} from 'react-native';

const header =
    <View style={{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'stretch',
        paddingLeft: 8
        }}>
        <Text style={{color: 'white', fontSize: 20 }}>Kid Quest</Text>
    </View>

export const Root = StackNavigator({
  Main: {
      screen: MainPage,
      navigationOptions: {
            header: null
        }
    },
  Camera: {
      screen: PicturePage,
      navigationOptions: {
        headerTitle: header,
        headerStyle: { backgroundColor: 'green'},
        headerTintColor: 'white'
        }
     }
});
