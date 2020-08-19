import React, { Component } from 'react'
import { View, Button, Text, Image } from '@tarojs/components'


import './me.scss'

//先集中导入colorUI的样式
import '../../components/icon.wxss' //为什么此处导入的icon集合，在me.jsx中也能用
import '../../components/main.wxss'

import Navbar from '../../components/navbar/navbar'

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
          <View class="title">我的卡包</View>
          <View class="memberCard" bindtap="enterMemberCardInfo">
            <View class="memberCardInfo">
              <View class="store">橙子宠物</View>
              <View class="number">No.10010123</View>
            </View>
            <View class="memberCardLevel">
              <View class="icon">
                <Image src="../../images/level_diamond.png"></Image>
                <View>钻石VIP</View>
              </View>
            </View>
          </View>
          <View class="title margin-top-xl">其它</View>
          <View class="tableContainer margin-top">
            <View class="item">
              <View class="name cuIcon-locationfill">我的地址</View>
              <View class="value">余杭区荆长大道西园3幢302</View>
            </View>
            <View class="item">
              <View class="name cuIcon-mobilefill">联系方式</View>
              <View class="value">15258800906</View>
            </View>    
            <View class="item" bindtap="enterAllOrders">
              <View class="name cuIcon-timefill">所有订单</View>
              <View class="cuIcon-right"></View>
            </View>
          </View>
        </View>      
      </View>
    )
  }
}

export default Me