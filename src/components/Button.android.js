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
  Text,
  StyleSheet,
  ProgressBarAndroid,
  TouchableNativeFeedback,
  Animated,
} from 'react-native';
import _ from 'lodash';

import {BASE_COLORS} from '../styles/variable';
import {UjlText, UjlColor} from '../styles/style';
import normalize from './normalize';
import IconSet from './IconSet';
import Spinner from './Spinner';

export default class Button extends Component {
  static propTypes = {
    type: PropTypes.string,
    height: PropTypes.number,
    caption: PropTypes.string,

    textStyle: Text.propTypes.style,
    disabledStyle: Text.propTypes.style,
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

    iconSet: PropTypes.string,
    iconName: PropTypes.string,
    iconSize: PropTypes.number,
  };
  static defaultProps = {
    type: 'primary' | 'secondary' | 'danger' | 'bordered' | 'link',
    height: normalize(100),
    caption: 'Tap me',
    onPress: null
  };

  getBtnIcon() {
    let icon = null;
    let iconSet = this.props.iconSet;
    if (iconSet !== 'undefined' && iconSet !== '') {
      iconSet = 'fa';
    }
    if (this.props.iconName !== 'undefined' && this.props.iconName !== '') {
      icon = <IconSet iconset={iconSet} name={this.props.iconName}
        style={{ letterSpacing: 5 }} />;
    }
    return icon;
  }

  getBtnStyle() {
    let type;
    // btnType 1: 背景按钮；2:边框按钮；
    let btnStyle = { btnType: 1, bgColors: [] };
    // 按钮的类型(type)必需为指定的
    if (this.props.type === undefined) {
      type = 'primary';
    } else {
      type = this.props.type;
    }
    switch (type) {
      case 'primary':
        btnStyle.bgColors = [BASE_COLORS.PRIMARY, BASE_COLORS.PRIMARYDARK];
        break;
      case 'secondary':
        btnStyle.bgColors = [BASE_COLORS.SECONDARY, BASE_COLORS.SECONDARYDARK];
        break;
      case 'danger':
        btnStyle.bgColors = [BASE_COLORS.DANGER, BASE_COLORS.DANGERDARK];
        break;
      case 'bordered':
        btnStyle.btnType = 2;
        break;
      default:
        btnStyle.bgColors = [BASE_COLORS.PRIMARY, BASE_COLORS.PRIMARYDARK];
        break;
    }
    return btnStyle;
  }

  renderBtnInner(btnStyle, isDisabled) {
    let content;
    if (this.props.isLoading) {
      // 加载中时，按钮的内容
      content = <Spinner size='small' style={{ alignSelf: 'center' }}
        color={btnStyle.btnType === 2 ? BASE_COLORS.PRIMARY : 'white'}/>
    } else {
      // 非加载中时，按钮的内容
      let textColorStyle = btnStyle.btnType === 1 ? { color: 'white' } : UjlColor.primary;
      let btnIcon = this.getBtnIcon();
      let space = btnIcon !== null ? '  ' : '';
      content = (
        <Text style={[UjlColor.transBg, textColorStyle]}>
          {btnIcon}
          <Text>{space + this.props.caption}</Text>
        </Text>
      );
    }
    if (btnStyle.btnType === 1) {
      return (
        <View style={[styles.btn]}>
          {content}
        </View>
      );
    } else {
      return (
        <View style={[styles.btn, styles.btnRadius, styles.borderBtnPrimary]}>
          {content}
        </View>
      );
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (!_.isEqual(nextProps, this.props)) {
      return true;
    }
    return false;
  }

  render() {
    let btnSize;
    let btnStyle = this.getBtnStyle();
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

    if (this.props.isDisabled === true || this.props.isLoading === true) {
      // 渲染禁用按钮
      return (
        <View style={[btnSize, this.props.style, styles.btnRadius,
           { backgroundColor: btnStyle.bgColors[0] }, (this.props.disabledStyle || styles.btnDisabled)]}>
          {this.renderBtnInner(btnStyle) }
        </View>
      );
    } else {
      // 设置按钮参数，渲染可用按钮
      let touchableProps = {
        onPress: this.props.onPress,
        onPressIn: this.props.onPressIn,
        onPressOut: this.props.onPressOut,
        onLongPress: this.props.onLongPress,
        activeOpacity: this.props.activeOpacity,
      };
      touchableProps = Object.assign(touchableProps, {
        background: this.props.background || TouchableNativeFeedback.SelectableBackground()
      });
      return (
        <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('red') } {...touchableProps}>
        <View style={[btnSize, styles.btnRadius, 
          this.props.style, { backgroundColor: btnStyle.bgColors[0] }]}>
          {this.renderBtnInner(btnStyle) }
        </View>
        </TouchableNativeFeedback>
      )
    }
  }
};

const BORDER_RADIUS = normalize(5);
var BTN_HEIGHT = normalize(100);
var BTN_HEIGHT_SM = normalize(80);
var BTN_HEIGHT_XS = normalize(50);
const styles = StyleSheet.create({
  btnRadius: {
    borderRadius: BORDER_RADIUS,
  },
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
  },
  btnDisabled: {
    opacity: 0.5
  },

  spinner: {
    alignSelf: 'center',
  },
  opacity: {
    opacity: 0.5,
  },
});