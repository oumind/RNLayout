/**
 * Copyright 2016 UVO PLUS TECH CO., LTD.
 * The setup of pApp.
 * @flow
 */

'use strict';

import React, {
  Component
} from 'react';
import {
  Text,
  TouchableHighlight,
  StyleSheet,
  Image,
  View
} from 'react-native';

import normalize from './components/normalize';
import {UjlText, UjlColor} from './styles/style';
import {UjlLayout} from './styles/layout';
import {UjlImage} from './styles/image';
import IconSet from './components/IconSet';

export default class BlockInfoView extends Component {
  render() {
    return (
      <View style={[UjlLayout.flexContainer, {height: 70}]}>
        <View style={[UjlColor.secondaryBg, UjlLayout.flexCC, UjlLayout.mr,
          {borderRadius: 2}]}>
          <View style={[UjlLayout.flexCC]}>
            <Text style={[UjlText.number, UjlText.lg, {color:"white", fontWeight: 'bold'}]}>
              1591
            </Text>
            <Text style={[UjlText.sm, {color: "white"}]}>
              门牌
            </Text>
          </View>
          <Text style={[UjlText.numberLight, UjlText.xs, styles.buildingCnt]}>
            <IconSet iconset='fa' name='building-o'
              style={[UjlText.sm, {letterSpacing: normalize(5)}]} />
            {20}
          </Text>
          <Image style={[UjlImage.sm, UjlImage.stretch, styles.houseIcon]}
            source={require('./img/house-icon.png')} />
        </View>
        <View style={[UjlColor.infoBg,
            {width: normalize(300), borderRadius: 2}]}>
          <View style={UjlLayout.flexCC}>
            <Text style={[UjlText.number, UjlText.lg,
                {color:"white", fontWeight: 'bold'}]}>
              1035
            </Text>
            <Text style={[UjlText.sm, {color:"white"}]}>
              车位
            </Text>
          </View>
          <Image style={[UjlImage.stretch, styles.parkIcon]}
            source={require('./img/P.png')} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buildingCnt: {
    position: 'absolute',
    bottom: normalize(8),
    left: normalize(9),
    opacity: 0.7,
    color:"white"
  },
  houseIcon: {
    position: 'absolute',
    bottom: 0,
    right: -1,
    width: normalize(50),
    height: normalize(50)
  },
  parkIcon: {
    position: 'absolute',
    bottom: normalize(8),
    right: normalize(9),
    width: normalize(26),
    height: normalize(30)
  }
});
