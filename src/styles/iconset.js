/**
 * Copyright 2016 UVO PLUS TECH CO., LTD.
 * The IconSet defination of App.
 * Created by @Xiaobo
 */

'use strict'

import React, {
  Component, PropTypes,
} from 'react';

import {
  Platform,
  Text,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

class UjlIconSet extends Component {
  static propTypes = {
    type: React.PropTypes.number,
    name: React.PropTypes.string,
    size: React.PropTypes.number,
  };
  static defaultProps = {
    iconset: 'fa',
    name: 'font-awesome',
    size: 20,
  };

  render() {
    if (this.props.iconset != 'fa' && this.props.iconset != 'ion') {
      return <Text />;
    }
    switch (this.props.iconset) {
      case 'fa':
        return (
          <FontAwesome
            name={this.props.name}
            size={this.props.size}

            {...this.props}
             />
        );
      break;
      case 'ion':
        return (
          <Ionicons
            name={this.props.name}
            size={this.props.size}

            {...this.props}
             />
        );
      break;
    }

  };
}

export default UjlIconSet;
