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
import Normalize from './components/Normalize';

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
            inputStyle={{ paddingLeft: Normalize(30), paddingTop: Normalize(10) }}
            />
        </View>
        <View>
          <TextField
            label={'姓名'}
            highlightColor={'red'}
            keyboardType={'numeric'}
            inputStyle={{ paddingLeft: Normalize(10), paddingTop: Normalize(10) }}
            labelStyle={{ marginLeft: Normalize(10), }}
            />
        </View>
      </ScrollView>
    );
  }
}