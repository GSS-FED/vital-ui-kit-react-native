import * as React from 'react';
import { ViewStyle, TextStyle, StyleProp } from 'react-native';
import styled from 'styled-components/native';

const Root = styled.View<{ backgroundColor?: string }>`
  padding-left: 7;
  padding-right: 7;
  background-color: ${props => props.backgroundColor || '#D8D8D8'};
  border-radius: 7.5;
  height: 16;
`;

const Label = styled.Text<{ color?: string }>`
  color: ${props => props.color || '#3D414A'};
  font-size: 12;
`;

export interface BadgeProps extends ViewStyle {
  bg?: string;
  color?: string;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

const Badge: React.SFC<BadgeProps> = ({
  backgroundColor,
  color,
  children,
  textStyle,
  ...props
}) => (
  <Root backgroundColor={backgroundColor} {...props}>
    <Label style={textStyle} color={color}>
      {children}
    </Label>
  </Root>
);

export default Badge;
