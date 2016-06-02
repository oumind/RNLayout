import React, {
  Component,
} from 'react';

import {
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';

import UjlButton from './components/UjlButton';
import TextField from './components/TextField';
import {UjlLayout} from './styles/layout';
import {UjlText, UjlColor} from './styles/style';
import IconSet from './components/IconSet';
import normalize from './components/normalize';

export default class blockBtnView extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ScrollView>
        <View>
          <TextField
            label={'姓名'}
            highlightColor={'#6db82d'}
            keyboardType={'numeric'}
            iconSet='ion'
            iconName='ios-contact-outline'
            inputStyle={{ paddingLeft: normalize(30), paddingTop: normalize(10) }}
            />
        </View>
        <View>
          <TextField
            label={'姓名'}
            highlightColor={'red'}
            keyboardType={'numeric'}
            inputStyle={{ paddingLeft: normalize(10), paddingTop: normalize(10) }}
            labelStyle={{ marginLeft: normalize(10), }}
            />
        </View>
      </ScrollView>
    );
  }
}