import React from 'react';
import Card from '.';
import theme from '../theme/theme';

export default {
  component: Card,
  props: {
    width: 300,
    height: 300,
    shadow: true, 
    children: (
      <React.Fragment>
        <Card.Header title="header" />
        <Card.SideLabel color={theme.blue} />
      </React.Fragment>
    ),
  },
};
