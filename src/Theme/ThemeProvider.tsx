/* eslint-disable import/no-extraneous-dependencies */

import * as React from 'react';
import { ThemeProvider as Provider } from 'styled-components/native';
import defaultTheme from './theme';

type Theme<T> = {
  [index: string]: any;
} & T;

export interface Props {
  theme?: Theme<typeof defaultTheme>;
  children: JSX.Element;
}

const ThemeProvider: React.FC<Props> = (props: Props) => {
  return (
    <Provider theme={{ ...defaultTheme, ...props.theme }}>
      {props.children}
    </Provider>

  )
}

export default ThemeProvider;
