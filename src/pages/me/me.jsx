import React, { Component } from 'react'
import { View, Button, Text, Image } from '@tarojs/components'


import './me.scss'

//先集中导入colorUI的样式
import '../../components/icon.wxss' //为什么此处导入的icon集合，在me.jsx中也能用
import '../../components/main.wxss'

import Navbar from '../../components/navbar/navbar'

import level_diamond from '../../images/level_diamond.png'

class Me extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }  
  
  componentDidMount() {
    // console.log('fuck')
  }
  componentDidShow() {}
  componentDidHide() {}

  render () {
    return (
      <View>
        <Navbar bgColor="bg-blue" content="张杰"></Navbar>
        <View class="backgroundHead">
          <Image class="avatar" src="https://shp.qpic.cn/cfwebcap/0/d0a02c5f86d40c0fae24ae56eea587e0/" mode="scaleToFill"></Image>
        </View>

        <View class="body margin-top-xl">
          <View class="title">身份标识</View>
          <View class="memberCard" bindtap="enterMemberCardInfo">
            <View class="memberCardInfo">
              <View class="store">尚宸装饰</View>
              <View class="number">No.10010123</View>
            </View>
            <View class="memberCardLevel">
              <View class="icon">
                <Image src={ level_diamond }></Image>
                <View>★★★★</View>
              </View>
            </View>
          </View>
          <View class="title margin-top-xl">其它</View>
          <View class="tableContainer margin-top">
            <View class="item">
              <View class="name cuIcon-locationfill">业绩详情</View>
              <View class="cuIcon-right"></View>
            </View>
            <View class="item">
              <View class="name cuIcon-mobilefill">工作日程</View>
              <View class="cuIcon-right"></View>
            </View>
            <View class="item" bindtap="enterAllOrders">
              <View class="name cuIcon-timefill">数据导出</View>
              <View class="cuIcon-right"></View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

export default Me
