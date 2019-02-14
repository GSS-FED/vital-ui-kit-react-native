import * as React from 'react';
import { ViewProps } from 'react-native';
import styled from 'styled-components/native';

export type PillsGroupProps = {
  children: React.ReactNode;
  marginBetween: number;
} & ViewProps;

const Root = styled.View`
  flex-direction: row;
`;

const PillsGroup: React.SFC<PillsGroupProps> = ({
  marginBetween = 6,
  children,
  ...props
}) => (
  <Root
    {...props}
  >
    {React.Children.map(children, child => {
      if (typeof child === 'string' || typeof child === 'number') {
        return child;
      }
      // FIXME: not passing down
      // @ts-ignore
      return React.cloneElement(child, {
        marginHorizontal: marginBetween,
      });
    })}
  </Root>
);

export default PillsGroup;
