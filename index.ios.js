/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator,
  TouchableHighlight
} from 'react-native';

import App from './App';
import Home from './Home';
import AddProject from './components/AddProject';

class Peer extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{ title: 'Awesome Scene', index: 0 }}
        renderScene={(route, navigator) => {
          let TheComponent = App;
          if (route.name === 'Home') {
            TheComponent = Home
          } if (route.name === 'AddProject') {
            TheComponent = AddProject
          }
          return <TheComponent navigator={navigator} />
        }
        }
      />
    )
  }
}

AppRegistry.registerComponent('Peer', () => Peer);
