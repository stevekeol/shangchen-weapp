import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

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
      <View class='cu-custom' style={`height: ${this.state.CustomBar}px`} >
        <View class={`cu-bar fixed ${this.props.bgImage!=''?'none-bg text-white bg-img':''} ${this.props.bgColor} `} 
              style={`height: ${this.state.CustomBar}px; padding-top: ${this.state.StatusBar}px; ${this.props.bgImage?'background-image:url(' + this.props.bgImage+')':''}`}>
          {
            this.props.isBack
            ? 
              <View class='action' bindtap='BackPage'>
                <Text class='cuIcon-back'></Text>
                  { this.props.content
                    ?  <View slot="backText">{this.props.backText}</View>
                    : null
                  }      
              </View>
            :
              null
          }
          {
            this.props.isCustom
              ?
                <View class="action border-custom" style={`width:${this.state.Custom.width}px; height:${this.state.Custom.height}px; margin-left:calc(750rpx - ${this.state.Custom.right}px)`}>
                  <Text class="cuIcon-back" bindtap="BackPage"></Text>
                  <Text class="cuIcon-homefill" bindtap="toHome"></Text>
                </View>
              : 
                null
          }
          <view class='content' style={`top:${this.state.StatusBar}px`}>
            { this.props.content
              ?  <View slot="content">{this.props.content}</View>
              : null
            }
          </view>
        </View>
      </View>
    )
  }
}

export default Navbar

/*------------------------------使用示例------------------------------
0. 引入组件
import Navbar from '../../components/navbar/navbar'

1. 背景色，标题
<Navbar bgColor="bg-gradual-blue" content="尚宸小管家"></Navbar>

2. 背景色，标题，返回图标，返回文本
<Navbar bgColor="bg-gradual-blue" content="尚宸小管家" isBack="true" backText="返回"></Navbar>

3. 背景色，标题，返回图标，主页图标
<Navbar bgColor="bg-gradual-blue" content="尚宸小管家" isCustom="true"></Navbar>

---------------------------------------------------------------------*/