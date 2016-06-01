
'use strict';

import React, {
  Component
} from 'react';
import {
  View,
  ActivityIndicatorIOS,
  ProgressBarAndroid,
  Platform
} from 'react-native';

class UjlSpinner extends Component {
  _getSpinner() {
    if (Platform.OS === 'android') {
      return (
        <ProgressBarAndroid
          styleAttr="SmallInverse"
          color="#6db82d"
          {...this.props}
          />
      );
    } else {
      return (
        <ActivityIndicatorIOS
          size="small"
          color="#6db82d"
          animating={true}
          {...this.props}
          />
      );
    }
  }

  render() {
    return (
      <View>
        {this._getSpinner() }
      </View>
    );
  }
};

export default UjlSpinner;
