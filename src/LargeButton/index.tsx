import * as React from 'react';
import { TouchableOpacity, ViewProps } from 'react-native';
import styled from 'styled-components/native';
import LinearGradient, {
  LinearGradientProps,
} from 'react-native-linear-gradient';

import Icon from 'react-native-vector-icons/Ionicons';

const LinearGradientWrapper = styled(LinearGradient)`
  height: 60;
  width: 60;
  border-radius: 3;
  justify-content: center;
  align-items: center;
  shadow-opacity: 0.9;
  shadow-radius: 5px;
  shadow-offset: 0px 5px;
`;

const Root = styled.View`
  height: 60;
  width: 60;
  border-radius: 3;
  justify-content: center;
  align-items: center;
  shadow-opacity: 0.26;
  shadow-radius: 5px;
  shadow-offset: 0px 5px;
`;

interface LargeButtonProps extends ViewProps {
  icon: string;
  iconColor?: string;
  iconSize?: number;
  bg?: string;
  shadowColor?: string;
  onPress: () => void;
}

class LargeButton extends React.Component<
  LargeButtonProps & LinearGradientProps
> {
  static defaultProps = {
    icon: 'ios-add',
    iconColor: '#fff',
    iconSize: 45,
    bg: '#fff',
  };

  renderIcon = () => (
    <Icon
      color={this.props.iconColor}
      size={this.props.iconSize}
      name={this.props.icon}
    />
  );

  normalBackground = () => (
    <Root
      backgroundColor={this.props.backgroundColor}
      shadowColor={this.props.shadowColor}
    >
      {this.renderIcon()}
    </Root>
  );

  LinearGradientBackground = () => {
    const shadow = this.props.colors && this.props.colors[0];
    return (
      <LinearGradientWrapper
        colors={this.props.colors}
        shadowColor={this.props.shadowColor || shadow}
      >
        {this.renderIcon()}
      </LinearGradientWrapper>
    );
  };

  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        {!!this.props.colors
          ? this.LinearGradientBackground()
          : this.normalBackground()}
      </TouchableOpacity>
    );
  }
}

export default LargeButton;
