/**
 * Copyright 2016 UVO PLUS TECH CO., LTD.
 * The Color & TextFont Style defination of App.
 * Created by @Xiaobo
 */

'use strict'

import {
  StyleSheet,
  Platform,
} from 'react-native';

import {BASE_COLORS, FONT_FAMILY, FONT_SIZE} from './variable';

// ---------------- COLORS --------------------------
export const UjlColor = StyleSheet.create({
  primary: {
    color: BASE_COLORS.PRIMARY
  },
  primaryDk: {
    color: BASE_COLORS.PRIMARYDARK
  },
  secondary: {
    color: BASE_COLORS.SECONDARY
  },
  secondaryDk: {
    color: BASE_COLORS.SECONDARYDARK
  },
  info: {
    color: BASE_COLORS.INFO
  },
  infoDk: {
    color: BASE_COLORS.INFODARK
  },
  danger: {
    color: BASE_COLORS.DANGER
  },
  dangerDk: {
    color: BASE_COLORS.DANGERDARK
  },
  warning: {
    color: BASE_COLORS.WARNING
  },
  warningDk: {
    color: BASE_COLORS.WARNINGDARK
  },
  success: {
    color: BASE_COLORS.SUCCESS
  },
  successDk: {
    color: BASE_COLORS.SUCCESSDARK
  },
  text: {
    color: BASE_COLORS.TEXT
  },
  textLight: {
    color: BASE_COLORS.TEXTLIGHT
  },
  white: {
    color: BASE_COLORS.WHITE
  },
  // ------------ BG ---------------
  appBg: {
    color: BASE_COLORS.APPBG
  },
  transBg: {
    backgroundColor: 'transparent'
  },
  primaryBg: {
    backgroundColor: BASE_COLORS.PRIMARY
  },
  primaryDkBg: {
    backgroundColor: BASE_COLORS.PRIMARYDARK
  },
  secondaryBg: {
    backgroundColor: BASE_COLORS.SECONDARY
  },
  secondaryDkBg: {
    backgroundColor: BASE_COLORS.SECONDARYDARK
  },
  infoBg: {
    backgroundColor: BASE_COLORS.INFO
  },
  infoDkBg: {
    backgroundColor: BASE_COLORS.INFODARK
  },
  dangerBg: {
    backgroundColor: BASE_COLORS.DANGER
  },
  dangerDkBg: {
    backgroundColor: BASE_COLORS.DANGERDARK
  },
  warningBg: {
    backgroundColor: BASE_COLORS.WARNING
  },
  warningDkBg: {
    backgroundColor: BASE_COLORS.WARNINGDARK
  },
  successBg: {
    backgroundColor: BASE_COLORS.SUCCESS
  },
  successDkBg: {
    backgroundColor: BASE_COLORS.SUCCESSDARK
  },
  darkBg: {
    backgroundColor: BASE_COLORS.TEXT
  },
  lightBg: {
    backgroundColor: BASE_COLORS.TEXTLIGHT
  },
  whiteBg: {
    color: BASE_COLORS.WHITE
  },
});

// ---------------- TEXT FONT --------------------------
export const UjlText = StyleSheet.create({
  number: {
    fontFamily: FONT_FAMILY[0],
  },
  numberLight: {
    fontFamily: (Platform.OS === 'ios') ? FONT_FAMILY[0] : FONT_FAMILY[1],
    fontWeight: (Platform.OS === 'ios') ? '100' : 'normal',
  },
  h1: {
    fontSize: FONT_SIZE.LG,
    fontWeight: 'bold',
    letterSpacing: -1,
  },
  content: {
    fontSize: FONT_SIZE.BASE,
    color: BASE_COLORS.TEXT,
  },
  tips: {
    fontSize: FONT_SIZE.SM,
    letterSpacing: -1,
    color: BASE_COLORS.TEXTLIGHT,
  },
  base: {
    fontSize: FONT_SIZE.BASE,
  },
  sm: {
    fontSize: FONT_SIZE.SM,
  },
  xs: {
    fontSize: FONT_SIZE.XS,
  },
  md: {
    fontSize: FONT_SIZE.MD,
  },
  lg: {
    fontSize: FONT_SIZE.LG,
  },
  xl: {
    fontSize: FONT_SIZE.XL,
  }
});
