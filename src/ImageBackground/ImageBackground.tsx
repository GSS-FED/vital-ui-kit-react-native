import * as React from 'react';
import { Dimensions, ImageSourcePropType } from 'react-native';
import styled from 'styled-components/native';

const Background = styled.ImageBackground`
  flex: 1;
  width: ${Dimensions.get('window').width};
  height: ${Dimensions.get('window').height};
`;

const AreaView = styled.SafeAreaView`
  background-color: transparent;
  flex: 1;
`

export interface ImageBackgroundProps {
  children: React.ReactNode;
  source?: ImageSourcePropType;
}

const ImageBackground = ({
  children,
  source,
}: ImageBackgroundProps) => (
  <Background source={source || require('./bg.png')}>
    <AreaView>
      {children}
    </AreaView>
  </Background>
);

export default ImageBackground;
