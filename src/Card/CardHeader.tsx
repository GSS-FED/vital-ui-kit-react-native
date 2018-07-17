import * as React from 'react';
import { TextStyle, StyleProp } from 'react-native';
import styled from 'styled-components/native';

const Root = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-left: 10;
  padding-right: 10;
  padding-top: 10;
`;

const Title = styled.Text`
  color: #808999;
  font-size: ${props => props.theme.font.headline.fontSize};
  font-weight: ${props => props.theme.font.headline.fontWeight};
`;

export interface CardHeaderProps {
  title: string;
  titleStyle?: StyleProp<TextStyle>;
  action?: React.ReactNode;
}

const CardHeader: React.SFC<CardHeaderProps> = ({
  title,
  titleStyle,
  action,
}) => (
  <Root>
    <Title style={titleStyle}>{title}</Title>
    {action && action}
  </Root>
);

export default CardHeader;
