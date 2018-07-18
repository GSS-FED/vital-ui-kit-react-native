import * as React from 'react';
import { View, Text } from 'react-native';
import ImageBackground from '.';

export default {
  component: ImageBackground,
  props: {
    children: (
      <View>
        <Text>With Safe Area</Text>
      </View>
    )
  }
};
