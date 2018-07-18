import React, { Component } from 'react';
import { View } from 'react-native';
import { CosmosNativeLoader } from 'react-cosmos-loader/native';
import { options, getUserModules } from './cosmos.modules';

export default class App extends Component {
  render() {
    return (
      <View flex={1} alignItems="center" justifyContent="center">
        <CosmosNativeLoader
          options={options}
          modules={getUserModules()}
        />
      </View>
    );
  }
}
