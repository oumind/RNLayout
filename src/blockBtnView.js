import React, {
  PropTypes,
} from 'react';

import {
	Animated,
  StyleSheet,
  View,
} from 'react-native';

import UjlButton from './components/UjlButton';
import {UjlLayout} from './styles/layout';

export default class blockBtnView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      anim: new Animated.Value(0),
    };
  }
  componentDidMount() {
    Animated.timing(this.state.anim, {toValue: 3000, duration: 3000}).start();
  }
  fadeIn(delay, from = 0) {
    const {anim} = this.state;
    return {
      opacity: anim.interpolate({
        inputRange: [delay, Math.min(delay + 500, 3000)],
        outputRange: [0, 1],
        extrapolate: 'clamp',
      }),
      transform: [{
        translateY: anim.interpolate({
          inputRange: [delay, Math.min(delay + 500, 3000)],
          outputRange: [from, 0],
          extrapolate: 'clamp',
        }),
      }],
    };
  }
  render() {
    return (
			<View style={UjlLayout.m}>
        <UjlButton type="primary" style={UjlLayout.mb} size='xs' />
        <UjlButton type="secondary" style={UjlLayout.mb} size='sm'/>
        <UjlButton type="danger" style={UjlLayout.mb}/>
				<Animated.View style={[this.fadeIn(700, 20)]}>
          <UjlButton type="bordered" style={UjlLayout.mb}/>
        </Animated.View>
			</View>
    );
  }
}
