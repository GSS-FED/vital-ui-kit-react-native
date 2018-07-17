import * as React from 'react';
import { Keyboard, Dimensions, Animated } from 'react-native';

const DURATION = 200;

export interface ListSpacerProps {
  duration?: number;
  children?: (renderProps: ListSpacerState) => React.ReactNode;
  render?: (renderProps: ListSpacerState) => React.ReactNode;
}

export interface ListSpacerState {
  flatListHeight: Animated.Value;
}

class ListSpacer extends React.PureComponent<
  ListSpacerProps,
  ListSpacerState
> {
  static defaultProps = {
    duration: DURATION,
  };
  state = {
    flatListHeight: new Animated.Value(
      Dimensions.get('window').height,
    ),
  };

  keyboardDidShowListener: any;
  keyboardDidHideListener: any;

  componentDidMount() {
    this.keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      this.keyBoardDidShow,
    );
    this.keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      this.keyBoardDidHide,
    );
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  render() {
    const renderProps = {
      flatListHeight: this.state.flatListHeight,
    };

    if (this.props.children) {
      return this.props.children(renderProps);
    }

    if (this.props.render) {
      return this.props.render(renderProps);
    }

    return null;
  }

  private keyBoardDidShow = (e: any) => {
    Animated.timing(this.state.flatListHeight, {
      toValue:
        Dimensions.get('window').height - e.endCoordinates.height,
      duration: this.props.duration,
    }).start();
  };

  private keyBoardDidHide = () => {
    Animated.timing(this.state.flatListHeight, {
      toValue: Dimensions.get('window').height,
      duration: this.props.duration,
    }).start();
  };
}

export default ListSpacer;
