import * as React from 'react';
import styled from 'styled-components/native';
import { rgba } from 'polished';
import { ViewProps } from 'react-native';

import CardSideLabel from './CardSideLabel';
import CardHeader, { CardHeaderProps } from './CardHeader';

interface RootProps {
  backgroundColor?: string;
  width?: string | number;
  height?: string | number;
  shadow: boolean;
}

const Root = styled.View<RootProps>`
  border-radius: 5;
  background-color: ${props => props.backgroundColor || '#fff'};
  width: ${props => props.width || 'auto'};
  height: ${props => props.height || 'auto'};
  ${props =>
    props.shadow &&
    `
    box-shadow: 0 13px 29px ${
      props.backgroundColor
        ? rgba(props.backgroundColor, 0.5)
        : 'rgba(64, 63, 81, 0.4)'
    }
  `};
`;

export interface CardProps extends ViewProps {
  shadow?: boolean;
}

class Card extends React.PureComponent<CardProps> {
  static defaultProps = {
    shadow: false,
  };
  static SideLabel: typeof CardSideLabel = CardSideLabel;
  static Header: React.SFC<CardHeaderProps> = CardHeader;

  render() {
    const { children, shadow, ...props } = this.props;
    return (
      <Root {...props} shadow={shadow || false}>
        {children}
      </Root>
    );
  }
}

export default Card;
