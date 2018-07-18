import * as React from 'react';
import { Dimensions } from 'react-native';
import { ImageSourcePropType, SafeAreaView } from 'react-native';
import styled from 'styled-components/native';

const Background = styled.ImageBackground`
  flex: 1;
  width: ${Dimensions.get('window').width};
  height: ${Dimensions.get('window').height};
`;

export interface ImageBackgroundProps {
  children: React.ReactNode;
  src?: ImageSourcePropType;
}

const ImageBackground = ({ children, src }: ImageBackgroundProps) => (
  <Background source={src || require('./bg.png')}>
    <SafeAreaView backgroundColor="transparent" flex={1}>
      {children}
    </SafeAreaView>
  </Background>
);

export default ImageBackground;
