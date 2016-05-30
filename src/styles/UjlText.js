/**
 * Copyright 2016 UVO.
 * UjlText
 * @flow
 */

'use strict';

import {
  StyleSheet,
  Dimensions,
  Text
} from 'react-native';

const fontNames = [
  'MFTongXin_Noncommercial-Regular',
  'MFJinHei_Noncommercial-Regular',
  'MFZhiHei_Noncommercial-Regular',
  'Oswald-Regular'
]

const scale = Dimensions.get('window').width / 375;

function normalize(size: number): number {
  return Math.round(scale * size);
}

const UjlText = StyleSheet.create({
  font: {
    // fontFamily: textFont[1],
  },
  number: {
    fontFamily: fontNames[3],
  },
  h1: {
    fontSize: normalize(24),
    lineHeight: normalize(27),
    fontWeight: 'bold',
    letterSpacing: -1,
  },
  p: {
    fontSize: normalize(15),
    lineHeight: normalize(23),
  },
});
export default UjlText;
