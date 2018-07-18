import * as React from 'react';
import Pill from '.';

export default {
  component: Pill.Group,
  props: {
    children: (
      <React.Fragment>
        <Pill label="Pill 1" />
        <Pill label="Pill 2" />
        <Pill label="Pill 3" />
      </React.Fragment>
    )
  }
};
