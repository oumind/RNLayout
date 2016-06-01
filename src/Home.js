/**
 * Copyright 2016 UVO PLUS TECH CO., LTD.
 * The Home of pApp.
 * @flow
 */

'use strict';

import React, {
  Component
} from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  TouchableHighlight,
  Image,
  View
} from 'react-native';

import Header from './header';
import BlockInfoView from './blockInfoView';
import BlockBtnView from './blockBtnView';
import UjlListView from './UjlListView';
import {UjlText, UjlColor} from './styles/style';
import {UjlLayout} from './styles/layout';
import {UjlImage} from './styles/image';

export default class Home extends Component {
  /**
   * Will be called when refreshing
   * Should be replaced by your own logic
   * @param {number} page Requested page to fetch
   * @param {function} callback Should pass the rows
   * @param {object} options Inform if first load
   */
  _onFetch(page = 1, callback, options) {
    setTimeout(() => {
      let rows = [
        '***干了什么 ' + ((page - 1) * 10 + 1),
        '***干了什么 ' + ((page - 1) * 10 + 2),
        '***干了什么 ' + ((page - 1) * 10 + 3),
        '***干了什么 ' + ((page - 1) * 10 + 4),
        '***干了什么 ' + ((page - 1) * 10 + 5),
        '***干了什么 ' + ((page - 1) * 10 + 6),
        '***干了什么 ' + ((page - 1) * 10 + 7),
        '***干了什么 ' + ((page - 1) * 10 + 8),
        '***干了什么 ' + ((page - 1) * 10 + 9),
        '***干了什么 ' + ((page - 1) * 10 + 10)
      ];
      if (page === 10) {
        callback(rows, {
          allLoaded: true, // the end of the list is reached
        });
      } else {
        callback(rows);
      }
    }, 1000); // simulating network fetching
  }

  _newStateRowView(rowData) {
    var rowHash = Math.abs(hashCode(rowData));
    var imgSource = THUMB_URLS[rowHash % THUMB_URLS.length];
    return (
      <TouchableHighlight underlayColor='#c8c7cc'>
        <View style={styles.rowBg}>
          <View style={styles.row}>
            <View style={[UjlLayout.flexContainer, UjlLayout.mbsm]}>
              <Text style={[UjlLayout.flex, UjlLayout.textLeft, UjlText.tips]}>
                {rowData}
              </Text>
              <Text style={[UjlLayout.flex, UjlLayout.textRight, UjlText.tips]}>
                刚刚
              </Text>
            </View>
            <View style={UjlLayout.flexContainer}>
              <View style={[UjlLayout.flex, UjlLayout.mrsm]}>
                <Text style={UjlText.content}>
                    {LOREM_IPSUM.substr(0, rowHash % 301 + 10)}
                  </Text>
              </View>
              <Image style={UjlImage.md} source={imgSource} />
            </View>
          </View>
        </View>
      </TouchableHighlight>

    );
  }

  render() {
    return (
      <ScrollView style={UjlLayout.appBg}>
      <View style={UjlLayout.flexMiddle}>
        <Header />
        <View style={[UjlLayout.m]}>
          <BlockInfoView />
        </View>

        <View style={[UjlLayout.ml, UjlLayout.mr, UjlLayout.mb]}>
          <UjlListView
            style={{borderRadius: 2}}
            rowView={this._newStateRowView}
            onFetch={this._onFetch}
            firstLoader={true}
            enableScroll={false}
            emptyListTip={'没有内容'}
            />
        </View>
      </View>
      </ScrollView>
    );
  }
}

var THUMB_URLS = [
  require('./img/image1.jpg'),
  require('./img/image2.jpg'),
  require('./img/team.jpg'),
  ];
var LOREM_IPSUM = '接36-503业主电话报修，家中阳台处墙面渗水，是楼上管子渗水导致的';

function hashCode(str) {
  var hash = 15;
  for (var ii = str.length - 1; ii >= 0; ii--) {
    hash = ((hash << 5) - hash) + str.charCodeAt(ii);
  }
  return hash;
};

var styles = StyleSheet.create({
  navBar: {
    height: 64,
    backgroundColor: '#CCC'
  },
  row: {
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
  },
});
