import * as React from 'react';
import { TouchableOpacityProps } from 'react-native';
import styled from 'styled-components/native';

import defaultTheme from '../theme/theme';

const Root = styled.TouchableOpacity<{
  height?: string | number;
  active?: boolean;
}>`
  padding-left: 13;
  padding-right: 13;
  height: ${props => props.height || 'auto'};
  justify-content: center;
  align-items: center;
  background-color: ${props =>
    props.active ? props.theme.tintColor : '#fff'};
  border-radius: 50;
  border-width: ${props => (props.active ? 0 : 0.5)};
  border-color: #fff;
`;

const Text = styled.Text<{ active?: boolean; }>`
  color: ${props => (props.active ? '#fff' : props.theme.tintColor)};
  font-size: 16;
`;

Text.defaultProps = {
  theme: defaultTheme,
};

export type ButtonProps = {
  active?: boolean;
  height?: number | string;
} & TouchableOpacityProps;

const Button: React.SFC<ButtonProps> = ({
  active,
  onPress,
  height,
  children,
  ...props
}) => (
  <Root active={active} onPress={onPress} height={height} {...props}>
    <Text active={active}>{children}</Text>
  </Root>
);

export default Button;
