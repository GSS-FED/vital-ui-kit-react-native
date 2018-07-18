import * as React from 'react';
import {
  ImageStyle,
  ViewStyle,
  StyleProp,
  ImageSourcePropType,
} from 'react-native';
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

export interface AvatarProps {
  size?: number;
  src?: ImageSourcePropType;
  shadow?: boolean;
  wrapperStyle?: StyleProp<ViewStyle>;
  imageStyle?: StyleProp<ImageStyle>;
}

const Avatar: React.SFC<AvatarProps> = ({
  size = AVATAR_SIZE,
  src = null,
  shadow = false,
  wrapperStyle,
  imageStyle,
  ...props
}) => (
  <Root shadow={shadow} size={size} style={wrapperStyle} {...props}>
    <Image
      source={src ? src : require('./avatar-alien.png')}
      size={size}
      style={imageStyle}
    />
  </Root>
);

export default Avatar;
