
'use strict';

import React, {
  Component, PropTypes
} from 'react';
import {
  View,
  ActivityIndicatorIOS,
  ProgressBarAndroid,
  Platform
} from 'react-native';

class Spinner extends Component {
  // static propTypes = {
  //   spinnerSize: PropTypes.string,
  // };
  // static defaultProps = {
  //   spinnerSize: 'big' | 'small',
  // };
  getSpinner() {
    if (Platform.OS === 'android') {
      return (
        <ProgressBarAndroid
          styleAttr="SmallInverse"
          {...this.props}
          />
      );
    } else {
      return (
        <ActivityIndicatorIOS
          size="small"
          animating={true}
          {...this.props}
          />
      );
    }
  }

  render() {
    return (
      <View>
        {this.getSpinner() }
      </View>
    );
  }
};

export default Spinner;
