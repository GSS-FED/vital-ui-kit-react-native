import * as React from 'react';
import { View, ViewProps } from 'react-native';

export type PillsGroupProps = {
  children: React.ReactNode;
  marginBetween: number;
} & ViewProps;

const PillsGroup: React.SFC<PillsGroupProps> = ({
  marginBetween = 6,
  children,
  ...props
}) => (
  <View
    flexDirection="row"
    {...props}
  >
    {React.Children.map(children, child => {
      if (typeof child === 'string' || typeof child === 'number') {
        return child;
      }
      // FIXME: not passing down
      return React.cloneElement(child, {
        marginHorizontal: marginBetween,
      });
    })}
  </View>
);

export default PillsGroup;
