import * as React from 'react';
import { ImageSourcePropType, ImageStyle, StyleProp, ViewProps } from 'react-native';
import styled from 'styled-components/native';
import boxShadow from '../helper/boxShadow';

const AVATAR_SIZE = 37;

const Root = styled.View<{ size: number; shadow: boolean }>`
  height: ${props => props.size};
  width: ${props => props.size};
  ${props =>
    props.shadow &&
    `
    ${boxShadow(-14, 8, 35, '#000', 0.34)}
  `};
`;

const Image = styled.Image<{ size: number }>`
  width: 100%;
  height: 100%;
  border-radius: ${props => props.size / 2};
`;

export interface AvatarProps extends ViewProps {
  size?: number;
  source?: ImageSourcePropType;
  shadow?: boolean;
  imageStyle?: StyleProp<ImageStyle>;
}

const Avatar: React.SFC<AvatarProps> = ({
  size = AVATAR_SIZE,
  source = undefined,
  shadow = false,
  imageStyle,
  ...props
}) => {
  if (source && source.hasOwnProperty('uri')) {
    // @ts-ignore
    if (source.uri === null) {
      source = undefined;
    }
  }
  return (
    <Root shadow={shadow} size={size} {...props}>
      <Image
        source={source ? source : require('./avatar-alien.png')}
        size={size}
        style={imageStyle}
      />
    </Root>
  );
};

export default Avatar;
