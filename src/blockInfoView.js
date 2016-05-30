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
  StyleSheet,
  Dimensions,
  Text,
  TouchableHighlight,
  Image,
  View
} from 'react-native';

import pxToDp from './components/pxToDp';
import UjlText from './styles/UjlText';

export default class BlockInfoView extends Component {
  render() {
    return (
      <View style={styles.flexContainer}>
        <View style={[styles.cell,{borderRadius: 2}]}>
          <Image style={{position: 'absolute', bottom: -1, right: -1, width: 32, height: 32, resizeMode: 'stretch'}} source={require('./img/house-icon.png')} />
          <View style={styles.blockInfo}>
            <Text style={[UjlText.number, {color:"#ffffff", fontSize:20, fontWeight: 'bold'}]}>
              1591
            </Text>
            <Text style={{color:"#ffffff"}}>
              门牌
            </Text>
          </View>
          <Text style={{position: 'absolute', bottom: 5, left: 7, opacity: 0.8, color:"#ffffff"}}>共20栋</Text>
        </View>
        <View style={[styles.cellfixed, { width: pxToDp(270), borderRadius: 2}]}>
          <Image style={{position: 'absolute', bottom: 3, right: 3, width: 14, height: 16, resizeMode: 'stretch'}} source={require('./img/P.png')} />
          <View style={styles.parkInfo}>
            <Text style={[UjlText.number, {color:"#ffffff", fontSize:20, fontWeight: 'bold'}]}>
              1035
            </Text>
            <Text style={{color:"#ffffff"}}>
              车位
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  flexContainer: {
    // 容器需要添加direction才能变成让子元素flex
    flexDirection: 'row',
  },
  cell: {
    flex: 1,
    height: 70,
    backgroundColor: '#F98A27',
    marginRight: 15,
  },
  blockInfo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  cellfixed: {
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#038CD6',
  },
  parkInfo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});