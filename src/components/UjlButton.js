/**
 * Copyright 2016 UVO PLUS TECH CO., LTD.
 * The Button Component of App.
 * Created by @Xiaobo
 */

'use strict'

import React, {
  Component
} from 'react';

import {
  StyleSheet,
  Image,
  TouchableOpacity,
  View,
  Text,
  Platform,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {BASE_COLORS} from '../styles/variable';
import {UjlText, UjlColor} from '../styles/style';
import Normalize from './Normalize';

export default class UjlButton extends Component {
  static propTypes = {
    type: React.PropTypes.string,
    height: React.PropTypes.number,
    caption: React.PropTypes.string,
		onPress: React.PropTypes.func,
  };
  static defaultProps = {
    type: 'primary' | 'secondary' | 'danger' | 'bordered' | 'link',
    height: 100,
    caption: 'Tap me',
		onPress: null
  };

  getContent() {
    let type;
    let bgColors = [];
    let btnType = 1; // 1: 背景按钮；2:边框按钮；
    // 按钮的类型(type)必需为指定的
    if (this.props.type === undefined) {
      type = 'primary';
    } else {
      type = this.props.type;
    }
    switch (type) {
      case 'primary':
        bgColors = [BASE_COLORS.PRIMARY, BASE_COLORS.PRIMARYDARK];
        break;
      case 'secondary':
        bgColors = [BASE_COLORS.SECONDARY, BASE_COLORS.SECONDARYDARK];
        break;
      case 'danger':
        bgColors = [BASE_COLORS.DANGER, BASE_COLORS.DANGERDARK];
        break;
      case 'bordered':
        btnType = 2;
        break;
      default:
        bgColors = [BASE_COLORS.PRIMARY, BASE_COLORS.PRIMARYDARK];
        break;

    }
    const caption = this.props.caption.toUpperCase();
		let content;
    if (btnType === 1) {
      return (
        <LinearGradient
          start={[0.5, 0.5]} end={[1, 1]}
          colors={bgColors}
          style={[styles.btn]}>
          <Text style={[UjlColor.white, UjlColor.transBg]}>
            {caption}
          </Text>
        </LinearGradient>
      );
    } else {
      return (
        <View style={[styles.btn, styles.borderBtnPrimary]}>
          <Text style={[UjlColor.primary]}>
            {caption}
          </Text>
        </View>
      );
    }
  }

  render() {
    let btnSize;
    switch (this.props.size) {
      case 'xs':
        btnSize = styles.btnXs;
        break;
      case 'sm':
        btnSize = styles.btnSm;
        break;
      default:
        btnSize = styles.btnBase;
        break;
    }
    return (
      <TouchableOpacity
        accessibilityTraits="button"
        onPress={this.props.onPress}
        activeOpacity={0.8}
        style={[btnSize, this.props.style]}>
        {this.getContent()}
      </TouchableOpacity>
    );
  }
}

const BORDER_RADIUS = Normalize(5);
var BTN_HEIGHT = Normalize(100);
var BTN_HEIGHT_SM = Normalize(80);
var BTN_HEIGHT_XS = Normalize(50);
var styles = StyleSheet.create({
  btnBase: {
    height: BTN_HEIGHT
  },
  btnSm: {
    height: BTN_HEIGHT_SM
  },
  btnXs: {
    height: BTN_HEIGHT_XS
  },
  btn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 40,
    borderRadius: BORDER_RADIUS,
  },
  borderBtnPrimary: {
    borderWidth: 1,
    borderColor: BASE_COLORS.PRIMARY,
  },
  borderBtnCaption: {
    color: BASE_COLORS.PRIMARY,
  },
  primaryButton: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: BORDER_RADIUS,
  },
  icon: {
    marginRight: 12,
  },
  caption: {
    letterSpacing: 1,
    fontSize: 12,
  },
  primaryCaption: {
    color: 'white',
  }
});
