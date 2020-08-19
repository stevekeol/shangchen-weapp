import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import Taro from '@tarojs/taro'

import './navbar.scss'

//先集中导入colorUI的样式
import '../../components/icon.wxss' //为什么此处导入的icon集合，在home.jsx中也能用
import '../../components/main.wxss'

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      StatusBar: 20,
      CustomBar: 80,
      Custom: {
        bottom: 56,
        height: 32,
        left: 278,
        right: 365,
        top: 24,
        width: 87
      }
    }
    this.setStatusBar() //this.state必须在该async/await操作之前
  }

  //(待优化至全局层面)设置导航条的样式（高度等）
  async setStatusBar() {
    try {
      let statusBar = {};
      await wx.getSystemInfo({
        success: e => {
          this.state.StatusBar = e.statusBarHeight;
          let capsule = wx.getMenuButtonBoundingClientRect();
          if (capsule) {
            this.state.Custom = capsule;
            this.state.CustomBar = capsule.bottom + capsule.top - e.statusBarHeight;
            // this.state.CustomBar = capsule.bottom + capsule.top - e.statusBarHeight;
          } else {
            this.state.CustomBar = e.statusBarHeight + 50;
          }
        }
      });
    } catch (err) {
      throw new Error('failed getStatusBar');
    }
  }

  render() {
    return (
      <View class='test' style={`height: ${this.state.CustomBar}px`} >
      </View>
    )
  }
}

export default Navbar