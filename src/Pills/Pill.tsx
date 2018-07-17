import * as React from 'react';
import { ViewProps } from 'react-native';
import styled from 'styled-components/native';
import PillGroup from './PillsGroup';

const Root = styled.View<{ backgroundColor?: string }>`
  background-color: ${props => props.backgroundColor || '#122031'};
  padding-left: 8;
  padding-right: 8;
  border-radius: 8;
`;

const Label = styled.Text<{ color?: string }>`
  color: ${props => props.color || '#fff'};
  font-size: 16;
`;

export type PillProps = {
  label: string;
  bg?: string;
  color?: string;
} & ViewProps;

class Pill extends React.PureComponent<PillProps> {
  Group = PillGroup;
  render() {
    const { backgroundColor, color, children, ...props } = this.props;
    return (
      <Root backgroundColor={backgroundColor} {...props}>
        <Label color={color}>{children}</Label>
      </Root>
    );
  }
}

export default Pill;
