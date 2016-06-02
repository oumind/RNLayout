/**
 * Copyright 2016 UVO PLUS TECH CO., LTD.
 * The Image Style defination of App.
 * Created by @Xiaobo
 */

'use strict'

import {
  StyleSheet,
} from 'react-native';

import {IMAGE_SIZE} from './variable';

export const UjlImage = StyleSheet.create({
  avatar: {
    width: IMAGE_SIZE.BASE,
    height: IMAGE_SIZE.BASE,
    borderRadius: IMAGE_SIZE.BASE/2,
  },
  avatarsm: {
    width: IMAGE_SIZE.SM,
    height: IMAGE_SIZE.SM,
    borderRadius: IMAGE_SIZE.SM/2,
  },
  avatarlg: {
    width: IMAGE_SIZE.LG,
    height: IMAGE_SIZE.LG,
    borderRadius: IMAGE_SIZE.LG/2,
  },
  base: {
    width: IMAGE_SIZE.BASE,
    height: IMAGE_SIZE.BASE,
  },
  xs: {
    width: IMAGE_SIZE.XS,
    height: IMAGE_SIZE.XS,
  },
  sm: {
    width: IMAGE_SIZE.SM,
    height: IMAGE_SIZE.SM,
  },
  md: {
    width: IMAGE_SIZE.MD,
    height: IMAGE_SIZE.MD,
  },
  lg: {
    width: IMAGE_SIZE.LG,
    height: IMAGE_SIZE.LG,
  },
  xl: {
    width: IMAGE_SIZE.XL,
    height: IMAGE_SIZE.XL,
  },
  stretch: {
    resizeMode: 'stretch'
  },
  cover: {
    resizeMode: 'cover'
  },
  contain: {
    resizeMode: 'contain'
  },
});
