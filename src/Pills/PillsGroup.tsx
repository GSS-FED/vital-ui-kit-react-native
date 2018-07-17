import * as React from 'react';
import { View, ViewProps } from 'react-native';

export type PillsGroupProps = {
  children: React.ReactNode;
} & ViewProps;

const PillsGroup: React.SFC<PillsGroupProps> = ({
  marginHorizontal = 6,
  children,
  ...props
}) => (
  <View
    flexDirection="row"
    marginHorizontal={marginHorizontal}
    {...props}
  >
    {React.Children.map(children, child => {
      if (typeof child === 'string' || typeof child === 'number') {
        return child;
      }
      return React.cloneElement(child, {
        style: { marginRight: marginHorizontal },
      });
    })}
  </View>
);

export default PillsGroup;
