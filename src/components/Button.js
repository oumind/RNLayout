/**
 * Copyright 2016 UVO PLUS TECH CO., LTD.
 * The Button defination of App.
 * Created by @Xiaobo
 */

import React, {
  Component, PropTypes
} from 'react';

import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicatorIOS,
  ProgressBarAndroid,
  TouchableNativeFeedback,
  Platform
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import {BASE_COLORS} from '../styles/variable';
import {UjlText, UjlColor} from '../styles/style';
import normalize from './normalize';

export default class Button extends Component {
  static propTypes = {
    textStyle: Text.propTypes.style,
    disabledStyle: Text.propTypes.style,
    children: PropTypes.string,
    activeOpacity: PropTypes.number,
    allowFontScaling: PropTypes.bool,
    isLoading: PropTypes.bool,
    isDisabled: PropTypes.bool,
    activityIndicatorColor: PropTypes.string,
    onPress: PropTypes.func,
    onLongPress: PropTypes.func,
    onPressIn: PropTypes.func,
    onPressOut: PropTypes.func,
    background: (TouchableNativeFeedback.propTypes) ? TouchableNativeFeedback.propTypes.background : PropTypes.any,
    
    type: React.PropTypes.string,
    height: React.PropTypes.number,
    caption: React.PropTypes.string,
		onPress: React.PropTypes.func,
  };
  static defaultProps = {
    type: 'primary' | 'secondary' | 'danger' | 'bordered' | 'link',
    height: normalize(100),
    caption: 'Tap me',
		onPress: null
  };

  renderInnerTextAndroid () {
    if (this.props.isLoading) {
      return (
        <ProgressBarAndroid
          style={[{
            height: 20,
          }, styles.spinner]}
          styleAttr='Inverse'
          color={this.props.activityIndicatorColor || 'black'}
          />
      );
    }
    return (
      <Text style={[styles.textButton, this.props.textStyle]}>
        {this.props.children}
      </Text>
    );
  }

  renderInnerTextiOS () {
    if (this.props.isLoading) {
      return (
        <ActivityIndicatorIOS
          animating={true}
          size='small'
          style={styles.spinner}
          color={this.props.activityIndicatorColor || 'black'}
          />
      );
    }
    return (
      <Text style={[styles.textButton, this.props.textStyle]} allowFontScaling={this.props.allowFontScaling}>
        {this.props.children}
      </Text>
    );
  }

  shouldComponentUpdate (nextProps, nextState) {
    
    return false;
  }

  renderInnerText () {
    if (Platform.OS === 'android') {
      return this.renderInnerTextAndroid()
    }
    return this.renderInnerTextiOS()
  }

  render () {
    if (this.props.isDisabled === true || this.props.isLoading === true) {
      return (
        <View style={[styles.button, this.props.style, (this.props.disabledStyle || styles.opacity)]}>
          {this.renderInnerText() }
        </View>
      );
    } else {
      // Extract Touchable props
      let touchableProps = {
        onPress: this.props.onPress,
        onPressIn: this.props.onPressIn,
        onPressOut: this.props.onPressOut,
        onLongPress: this.props.onLongPress,
        activeOpacity: this.props.activeOpacity,
      };
      if (Platform.OS === 'android') {
        touchableProps = Object.assign(touchableProps, {
          background: this.props.background || TouchableNativeFeedback.SelectableBackground()
        });
        return (
          <TouchableNativeFeedback {...touchableProps}>
            <Text style={[styles.button, this.props.style]}>
              {this.renderInnerTextAndroid() }
            </Text>
          </TouchableNativeFeedback>
        )
      } else {
        return (
          <TouchableOpacity {...touchableProps}
            style={[styles.button, this.props.style]}>
            {this.renderInnerTextiOS() }
          </TouchableOpacity>
        );
      }
    }
  }
};

const styles = StyleSheet.create({
  button: {
    height: 44,
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  textButton: {
    fontSize: 18,
    alignSelf: 'center',
  },
  spinner: {
    alignSelf: 'center',
  },
  opacity: {
    opacity: 0.5,
  },
});