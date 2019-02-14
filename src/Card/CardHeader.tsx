import * as React from 'react';
import { StyleProp, TextStyle } from 'react-native';
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
  font-size: 18;
  font-weight: 600;
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
