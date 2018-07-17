import * as React from 'react';
import { StyledComponentClass } from 'styled-components';
import styled from 'styled-components/native';
import { ViewProps } from '../../node_modules/@types/react-native';

export interface CardSideLabelProps {
  color: string;
}

const CardSideLabel: StyledComponentClass<
  ViewProps,
  any,
  ViewProps
> = styled.View`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 7;
  border-top-left-radius: 5;
  border-bottom-left-radius: 5;
  background-color: ${(props: CardSideLabelProps) => props.color};
`;

export default CardSideLabel;
