import React, {
  Component,
} from 'react';

import {
	ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import TextField from 'react-native-md-textinput';

import UjlButton from './components/UjlButton';
import {UjlLayout} from './styles/layout';
import UjlIconSet from './styles/iconset';

export default class blockBtnView extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ScrollView>
        <TextField
          label={'姓名'}
          highlightColor={'#6db82d'}
          keyboardType={'numeric'}
          inputStyle={{paddingLeft: 5}}
        />
        <TextField
          label={'姓名'}
          highlightColor={'red'}
          keyboardType={'numeric'}
          inputStyle={{paddingLeft: 5, paddingTop: 10}}
        />
      </ScrollView>
    );
  }
}