/**
 * Copyright 2016 UVO PLUS TECH CO., LTD.
 * The Variables defination of App.
 * Created by @Xiaobo
 */

'use strict'

import {
  Platform,
  PixelRatio,
} from 'react-native';

import Normalize from '../components/Normalize'

// ---------------- COLORS --------------------------
export const BASE_COLORS = {
  'APPBG':          '#F7F7F7',
  'PRIMARY':        '#6DB82D',
  'PRIMARYDARK':    '#509516',
  'PRIMARYDARKER':  '#376610',
  'SECONDARY':      '#F98A27',
  'SECONDARYDARK':  '#CF6B11',
  'INFO':           '#038CD6',
  'INFODARK':       '#005A8C',
  'DANGER':         '#FF362B',
  'DANGERDARK':     '#CA231A',
  'WARNING':        '#FFB900',
  'WARNINGDARK':    '#E7A800',
  'SUCCESS':        '#4CD964',
  'SUCCESSDARK':    '#328D42',
  'TEXT':           '#232621',
  'TEXTLIGHT':      '#888D85',
  'WHITE':          'white',
};
function colorForLocation(location: ?string): string {
  if (!location) {
    return 'black';
  }

  var color = LOCATION_COLORS[location.toUpperCase()];
  if (!color) {
    console.warn(`Location '${location}' has no color`);
    color = 'black';
  }
  return color;
}

function colorForTopic(count: number, index: number): string {
  const hue = Math.round(360 * index / (count + 1));
  return `hsl(${hue}, 74%, 65%)`;
}

// ---------------- FONT FAMILIES --------------------------
export const FONT_FAMILY = [
  'oswald',
  'oswald_light',
  'notoseriaf',
];

// ---------------- FONT SIZE --------------------------
var FONT_BASE_SIZE   = 18;
/**
 * 来自React Native的定义
 * PixelRatio.get() === 1
 * mdpi Android devices (160 dpi)
 * PixelRatio.get() === 1.5
 * hdpi Android devices (240 dpi)
 * PixelRatio.get() === 2
 * iPhone 4, 4S
 * iPhone 5, 5c, 5s
 * iPhone 6
 * xhdpi Android devices (320 dpi)
 * PixelRatio.get() === 3
 * iPhone 6 plus
 * xxhdpi Android devices (480 dpi)
 * PixelRatio.get() === 3.5
 * Nexus 6
 */
if (PixelRatio.get() <= 2) {
  FONT_BASE_SIZE = 14;
}

export const FONT_SIZE = {
  'BASE': FONT_BASE_SIZE,
  'SM':   FONT_BASE_SIZE - 2,
  'XS':   FONT_BASE_SIZE - 3,
  'XXS':  FONT_BASE_SIZE - 5,
  'MD':   FONT_BASE_SIZE + 2,
  'LG':   FONT_BASE_SIZE + 3,
  'XL':   FONT_BASE_SIZE + 5,
  'XXL':  FONT_BASE_SIZE + 10,
};

// ------------- LAYOUT DIV INT ---------------
var DIV_BASE_INT   = Normalize(20);
/**
 * 来自React Native的定义
 * http://facebook.github.io/react-native/releases/0.26/docs/pixelratio.html
 * PixelRatio.get() === 1
 * mdpi Android devices (160 dpi)
 * PixelRatio.get() === 1.5
 * hdpi Android devices (240 dpi)
 * PixelRatio.get() === 2
 * iPhone 4, 4S（w640px, w320pt x 480pt）
 * iPhone 5, 5c, 5s （w640px, w320pt x 568pt）
 * iPhone 6 （w750px, w375pt x 667pt）
 * xhdpi Android devices (320 dpi)
 * PixelRatio.get() === 3
 * iPhone 6 plus （w1080px, w414pt x 736pt）
 * xxhdpi Android devices (480 dpi)
 * PixelRatio.get() === 3.5
 * Nexus 6
 */
if (PixelRatio.get() < 2) {
  DIV_BASE_INT = Normalize(16);
}


export const DIV_INT = {
  BASE: DIV_BASE_INT,
  XS: DIV_BASE_INT / 4,
  SM: DIV_BASE_INT / 2,
  MD: DIV_BASE_INT + DIV_BASE_INT/4,
  LG: DIV_BASE_INT + DIV_BASE_INT/2,
  XL: DIV_BASE_INT * 2,
}

// ------------- IMAGE SIZE ---------------
var IMAGE_SIZE_XS   = 16;
/**
 * 来自React Native的定义
 * http://facebook.github.io/react-native/releases/0.26/docs/pixelratio.html
 * PixelRatio.get() === 1
 * mdpi Android devices (160 dpi)
 * PixelRatio.get() === 1.5
 * hdpi Android devices (240 dpi)
 * PixelRatio.get() === 2
 * iPhone 4, 4S（w640px, w320pt x 480pt）
 * iPhone 5, 5c, 5s （w640px, w320pt x 568pt）
 * iPhone 6 （w750px, w375pt x 667pt）
 * xhdpi Android devices (320 dpi)
 * PixelRatio.get() === 3
 * iPhone 6 plus （w1080px, w414pt x 736pt）
 * xxhdpi Android devices (480 dpi)
 * PixelRatio.get() === 3.5
 * Nexus 6
 */
if (PixelRatio.get() < 2) {
  DIV_BASE_INT = 8;
}

export const IMAGE_SIZE = {
  XS: IMAGE_SIZE_XS,
  SM: IMAGE_SIZE_XS*2,
  BASE: IMAGE_SIZE_XS*3,
  MD: IMAGE_SIZE_XS*4,
  LG: IMAGE_SIZE_XS*5,
  XL: IMAGE_SIZE_XS*6,
}
