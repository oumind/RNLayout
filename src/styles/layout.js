/**
 * Copyright 2016 UVO PLUS TECH CO., LTD.
 * The Layout Style defination of App.
 * Created by @Xiaobo
 */

'use strict'

import {
  StyleSheet,
  Platform,
} from 'react-native';

import {DIV_INT, WIDTH} from './variable';

export const UjlLayout = StyleSheet.create({
  // -------------- MARGIN BASIC ----------------
  mtxs: {
    marginTop: DIV_INT.XS,
  },
  mtsm: {
    marginTop: DIV_INT.SM,
  },
  mt: {
    marginTop: DIV_INT.BASE,
  },
  mtmd: {
    marginTop: DIV_INT.MD,
  },
  mtlg: {
    marginTop: DIV_INT.LG,
  },
  mtxl: {
    marginTop: DIV_INT.XL,
  },
  mrxs: {
    marginRight: DIV_INT.XS,
  },
  mrsm: {
    marginRight: DIV_INT.SM,
  },
  mr: {
    marginRight: DIV_INT.BASE,
  },
  mrmd: {
    marginRight: DIV_INT.MD,
  },
  mrlg: {
    marginRight: DIV_INT.LG,
  },
  mrxl: {
    marginRight: DIV_INT.XL,
  },
  mbxs: {
    marginBottom: DIV_INT.XS,
  },
  mbsm: {
    marginBottom: DIV_INT.SM,
  },
  mb: {
    marginBottom: DIV_INT.BASE,
  },
  mbmd: {
    marginBottom: DIV_INT.MD,
  },
  mblg: {
    marginBottom: DIV_INT.LG,
  },
  mbxl: {
    marginBottom: DIV_INT.XL,
  },
  mlxs: {
    marginLeft: DIV_INT.XS,
  },
  mlsm: {
    marginLeft: DIV_INT.SM,
  },
  ml: {
    marginLeft: DIV_INT.BASE,
  },
  mlmd: {
    marginLeft: DIV_INT.MD,
  },
  mllg: {
    marginLeft: DIV_INT.LG,
  },
  mlxl: {
    marginLeft: DIV_INT.XL,
  },
  mxs: {
    margin: DIV_INT.XS,
  },
  msm: {
    margin: DIV_INT.SM,
  },
  m: {
    margin: DIV_INT.BASE,
  },
  mmd: {
    margin: DIV_INT.MD,
  },
  mlg: {
    margin: DIV_INT.LG,
  },
  mxl: {
    margin: DIV_INT.XL,
  },
  // ------------ CONTAINER -------------
  flexContainer: {
    flexDirection: 'row'
  },
  flexBlock: {
    flex: 1
  },
  flex: {
    flex: 1,
  },
  flexMiddle: {
    flex: 1,
    justifyContent: 'center', // 垂直居中
  },
  flexCenter: {
    flex: 1,
    alignItems: 'center' // 水平居中
  },
  flexCC: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cellCC: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  textRight: {
    textAlign: 'right'
  },
  textLeft: {
    textAlign: 'left'
  },
});
