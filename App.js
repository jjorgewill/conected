/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text} from 'react-native';
import Connector from './src/helpers/connectors'
 

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Connector>
        <Text>Welcome to React</Text>
        <Text>To get started</Text>
        <Text>instructions</Text>
      </Connector>
    );
  }
}

 