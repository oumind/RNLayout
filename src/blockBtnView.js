import React, {
  Component,
} from 'react';

import {
  Animated,
  StyleSheet,
  Platform,
  TouchableNativeFeedback,
  View,
} from 'react-native';

import UjlButton from './components/UjlButton';
import Button from './components/Button';
import {UjlLayout} from './styles/layout';
import IconSet from './components/IconSet';

export default class blockBtnView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anim: new Animated.Value(0)
    };
  }
  componentDidMount() {
    Animated.timing(this.state.anim, { toValue: 3000, duration: 3000 }).start();
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
        <Animated.View style={[this.fadeIn(700, 20)]}>
          <Button 
            type='primary' caption='可用按钮'
            iconName='building-o' style={UjlLayout.mb} />
        </Animated.View>
        
        <View style={UjlLayout.m}>
          <Button 
            type='danger' caption='可用按钮'
            iconName='building-o' style={UjlLayout.mb} />
          <Button 
            type='primary' caption='禁用按钮'
            isDisabled={true}
            iconName='building-o' style={UjlLayout.mb} />
          <Button 
            type='secondary' caption='加载中...'
            isLoading={true}
            iconName='building-o' style={UjlLayout.mb} />
          <Button 
            isLoading={true}
            type='bordered' caption='线框加载中...'
            iconName='building-o' style={UjlLayout.mb} />
          <Button 
            type='bordered' caption='点我'
            iconName='building-o' style={UjlLayout.mb} />
          <Button 
            type='bordered' caption='线框禁用'
            isDisabled={true}
            iconName='building-o'
            style={UjlLayout.mb} />
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20,
  },
  textStyle: {
    color: 'white'
  },
  textStyle6: {
    color: '#8e44ad',
    fontFamily: 'Avenir',
    fontWeight: 'bold'
  },
  buttonStylePressing: {
    borderColor: 'red',
    backgroundColor: 'red'
  },
  buttonStyle: {
    borderColor: '#f39c12',
    backgroundColor: '#f1c40f'
  },
  buttonStyle1: {
    borderColor: '#d35400',
    backgroundColor: '#e98b39'
  },
  buttonStyle2: {
    borderColor: '#c0392b',
    backgroundColor: '#e74c3c'
  },
  buttonStyle3: {
    borderColor: '#16a085',
    backgroundColor: '#1abc9c'
  },
  buttonStyle4: {
    borderColor: '#27ae60',
    backgroundColor: '#2ecc71'
  },
  buttonStyle5: {
    borderColor: '#2980b9',
    backgroundColor: '#3498db'
  },
  buttonStyle6: {
    borderColor: '#8e44ad',
    backgroundColor: '#9b59b6'
  },
  buttonStyle7: {
    borderColor: '#8e44ad',
    backgroundColor: 'white',
    borderRadius: 0,
    borderWidth: 3,
  },
  buttonStyle8: {
    backgroundColor: 'white',
    borderColor: '#333',
    borderWidth: 2,
    borderRadius: 22,
  },
  textStyle8: {
    fontFamily: 'Avenir Next',
    fontWeight: '500',
    color: '#333',
  }
})