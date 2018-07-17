import * as React from 'react';
import { ImageSourcePropType, SafeAreaView } from 'react-native';
import styled from 'styled-components/native';

const Background = styled.ImageBackground`
  flex: 1;
  width: null;
  height: null;
`;

export interface ImageBackgroundProps {
  children: React.ReactNode;
  src?: ImageSourcePropType;
}

const ImageBackground = ({ children, src }: ImageBackgroundProps) => (
  <Background source={src || require('../assets/bg.png')}>
    <SafeAreaView backgroundColor="transparent" flex={1}>
      {children}
    </SafeAreaView>
  </Background>
);

export default ImageBackground;
