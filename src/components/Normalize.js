import {Dimensions} from 'react-native';

const deviceWidthDp = Dimensions.get('window').width;
// UI 设计稿整体宽度为 750dp
const uiWidthPx = 750;

/**
 * @param uiElementPx
 * 设计稿中元素的宽度
 */
function Normalize(uiElementPx) {
  return Math.round(uiElementPx *  deviceWidthDp / uiWidthPx);
}

export default Normalize;
