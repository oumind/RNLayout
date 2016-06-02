/**
 * Copyright 2016 UVO PLUS TECH CO., LTD.
 * The Styled InputText defination of App.
 * Created by @Xiaobo
 */

import React, {Component, PropTypes} from "react";
import {View, TextInput, Animated, StyleSheet} from "react-native";

import IconSet from './IconSet';

export default class TextField extends Component {
  constructor(props: Object, context: Object) {
    super(props, context);
    this.state = {
      isFocused: false,
      text: props.value
    };
    
  }
  focus() {
    this.refs.input.focus();
  }
  blur() {
    this.refs.input.blur();
  }
  isFocused() {
    return this.state.isFocused;
  }
  componentWillReceiveProps(nextProps: Object) {
    if (this.props.text !== nextProps.value) {
      nextProps.value.length !== 0 ?
        this.refs.floatingLabel.floatLabel()
        : this.refs.floatingLabel.sinkLabel();
      this.setState({ text: nextProps.value });
    }
  }
  render() {
    let {
      label,
      highlightColor,
      duration,
      labelColor,
      borderColor,
      textColor,
      textFocusColor,
      textBlurColor,
      onFocus,
      onBlur,
      onChangeText,
      value,
      dense,
      inputStyle,
      wrapperStyle,
      labelStyle,
      ...props
    } = this.props;
    return (
      <View style={[dense ? styles.denseWrapper : styles.wrapper, wrapperStyle]} ref="wrapper">
        <TextInput
          style={[dense ? styles.denseTextInput : styles.textInput, {
            color: textColor
          }, (this.state.isFocused && textFocusColor) ? {
            color: textFocusColor
          } : {}, (!this.state.isFocused && textBlurColor) ? {
            color: textBlurColor
          } : {}, inputStyle]}
          onFocus={() => {
            this.setState({ isFocused: true });
            this.refs.floatingLabel.floatLabel();
            this.refs.underline.expandLine();
            onFocus && onFocus();
          } }
          onBlur={() => {
            this.setState({ isFocused: false });
            !this.state.text.length && this.refs.floatingLabel.sinkLabel();
            this.refs.underline.shrinkLine();
            onBlur && onBlur();
          } }
          onChangeText={(text) => {
            this.setState({ text });
            onChangeText && onChangeText(text);
          } }
          ref="input"
          value={this.state.text}
          {...props}
          />
        <Underline
          ref="underline"
          highlightColor={highlightColor}
          duration={duration}
          borderColor={borderColor}
          />
        <FloatingLabel
          isFocused={this.state.isFocused}
          ref="floatingLabel"
          focusHandler={this.focus.bind(this) }
          label={label}
          labelColor={labelColor}
          highlightColor={highlightColor}
          duration={duration}
          dense={dense}
          hasValue={(this.state.text.length) ? true : false}
          {...this.props}
          style={labelStyle}
          />
      </View>
    );
  }
}

TextField.propTypes = {
  duration: PropTypes.number,
  label: PropTypes.string,
  highlightColor: PropTypes.string,
  labelColor: PropTypes.string,
  borderColor: PropTypes.string,
  textColor: PropTypes.string,
  textFocusColor: PropTypes.string,
  textBlurColor: PropTypes.string,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onChangeText: PropTypes.func,
  value: PropTypes.string,
  dense: PropTypes.bool,
  inputStyle: PropTypes.object,
  iconSet: PropTypes.string,
  iconName: PropTypes.string,
  iconSize: PropTypes.number,
  wrapperStyle: PropTypes.object,
  labelStyle: PropTypes.object
};

TextField.defaultProps = {
  duration: 200,
  labelColor: '#9E9E9E',
  borderColor: '#E0E0E0',
  textColor: '#000',
  value: '',
  dense: false,
  underlineColorAndroid: 'rgba(0,0,0,0)',
  iconSet: 'fa',
  iconName: '',
  iconSize: 20,
};

const styles = StyleSheet.create({
  wrapper: {
    height: 72,
    paddingTop: 30,
    paddingBottom: 7,
    position: 'relative'
  },
  denseWrapper: {
    height: 60,
    paddingTop: 28,
    paddingBottom: 4,
    position: 'relative'
  },
  textInput: {
    fontSize: 16,
    height: 34,
    lineHeight: 34
  },
  denseTextInput: {
    fontSize: 13,
    height: 27,
    lineHeight: 24,
    paddingBottom: 3
  }
});


class FloatingLabel extends Component {
  constructor(props: Object) {
    super(props);
    if (props.dense) {
      this.posTop = 12;
      this.posBottom = 32;
      this.fontLarge = 13;
      this.fontSmall = 13;
    } else {
      this.posTop = 16;
      this.posBottom = 37;
      this.fontLarge = 16;
      this.fontSmall = 12;
    }
    let posTop = (props.hasValue) ? this.posTop : this.posBottom;
    let fontSize = (props.hasValue) ? this.fontSmall : this.fontLarge;
    this.state = {
      top: new Animated.Value(posTop),
      fontSize: new Animated.Value(fontSize)
    };
  }
  shouldComponentUpdate(nextProps: Object, nextState: Object): bool {
    return (this.props.hasValue !== nextProps.hasValue) ? false : true;
  }
  floatLabel() {
    Animated.parallel([
      Animated.timing(this.state.top, {
        toValue: this.posTop,
        duration: this.props.duration
      }),
      Animated.timing(this.state.fontSize, {
        toValue: this.fontSmall,
        duration: this.props.duration
      })
    ]).start();
  }
  sinkLabel() {
    Animated.parallel([
      Animated.timing(this.state.top, {
        toValue: this.posBottom,
        duration: this.props.duration
      }),
      Animated.timing(this.state.fontSize, {
        toValue: this.fontLarge,
        duration: this.props.duration
      })
    ]).start();
  }
  render(): Object {
    let icon;
    let {
      label,
      labelColor,
      highlightColor,
      style,
      iconSize} = this.props;
    
    return (
      <Animated.Text
        style={[{
          fontSize: this.state.fontSize,
          top: this.state.top,
          color: labelColor
        },
          { position: 'absolute', left: 0, backgroundColor: 'rgba(0,0,0,0)' },
          this.props.isFocused && {
            color: highlightColor
          }, style]}
        onPress={() => {
          this.props.focusHandler();
        }}
        >
        {(() => {
          if (this.props.iconName !== 'undefined' &&  this.props.iconName !== '') {
            let AnimatedIcon = Animated.createAnimatedComponent(IconSet)
            return <AnimatedIcon iconset={this.props.iconSet} 
                            name={this.props.iconName}
                            style={{fontSize: this.state.fontSize,}} />;
          }
         })()}
        {' ' + label}
      </Animated.Text>
    );
  }
}

FloatingLabel.propTypes = {
  duration: PropTypes.number,
  label: PropTypes.string,
  labelColor: PropTypes.string,
  highlightColor: PropTypes.string,
  dense: PropTypes.bool,
  style: PropTypes.object,
  iconSet: PropTypes.string,
  iconName: PropTypes.string,
  iconSize: PropTypes.number,
};

class Underline extends Component {
  constructor(props: Object) {
    super(props);
    this.state = {
      lineLength: new Animated.Value(0),
    };
    this.wrapperWidth = 0;
  }
  componentDidMount() {
    requestAnimationFrame(() => {
      if (this.refs.wrapper == null) {
        return;
      }
      const container = this.refs.wrapper;  // un-box animated view
      container.measure((left, top, width, height) => {
        this.wrapperWidth = width;
      });
    });
  }
  expandLine() {
    Animated.timing(this.state.lineLength, {
      toValue: this.wrapperWidth,
      duration: this.props.duration
    }).start();
  }
  shrinkLine() {
    Animated.timing(this.state.lineLength, {
      toValue: 0,
      duration: this.props.duration
    }).start();
  }
  render() {
    let {
      borderColor,
      highlightColor
    } = this.props;
    return (
      <View
        style={[{ height: 1, alignItems: 'center' },
          { backgroundColor: borderColor }]}
        ref="wrapper"
        >
        <Animated.View
          style={[{
            width: this.state.lineLength,
            height: 1,
            backgroundColor: highlightColor
          }]}>
        </Animated.View>
      </View>
    );
  }
}

Underline.propTypes = {
  duration: PropTypes.number,
  highlightColor: PropTypes.string,
  borderColor: PropTypes.string
};