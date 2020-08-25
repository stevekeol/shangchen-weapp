import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Image, Text, Picker } from '@tarojs/components'


import './clientInfo.scss'

//先集中导入colorUI的样式
import '../../components/icon.wxss' //为什么此处导入的icon集合，在me.jsx中也能用
import '../../components/main.wxss'

import Navbar from '../../components/navbar/navbar'

import addIcon from '../../images/test.png';

class ClientInfo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todayRegister: 5,
      todayDeal: 2,
      monthRegister: 22,
      monthDeal: 9,
      employees: [],
      statusList: ['意向', '定金', '设计', '转合同', '施工', '完结'],
      status: 0, //0-5
      name: '张杰',
      address: '杭州市余杭区西园3幢3单元',
      contact: '陈潘',
      phone: '15258800906',

      records: [
        {time: '2020-06-20 18:00', contact: '陈攀', content: '商讨价格与合同'},
        {time: '2020-06-20 18:00', contact: '陈攀', content: '商讨价格与合同'}
      ]
    };
  }  
  makePhoneCall() {
    console.log('caonima')
    // console.log(this.state) //此处有bug
    Taro.makePhoneCall({
      phoneNumber: '15258800906' //仅为示例，并非真实的电话号码
    })
  }
  
  componentDidMount() {
    // console.log('fuck')
    console.log(this.state.phone)
    console.log(this.state)
  }
  componentDidShow() {}
  componentDidHide() {}

  showLocation() {
    Taro.getLocation({
     type: 'gcj02', //返回可以用于 Taro.openLocation的经纬度
     success: function (res) {
       const latitude = res.latitude
       const longitude = res.longitude
       Taro.openLocation({
         latitude,
         longitude,
         scale: 16,
         name: '张杰' || this.state.name,
         address: '杭州市余杭区西园3幢3单元' || this.state.address
       })
     }
    })
  }

  onStatusChange(e) {
    this.setState({
      status: this.state.statusList[e.detail.value]
    })
  }

  addRecord() {
    Taro.navigateTo({
      url: '../addClientRecord/addClientRecord'
    })
  }


  render () {
    return (
      <View className='index'>
        <Navbar bgColor="bg-gradual-green" content="客户详情" isBack="true" backText="返回"></Navbar>

        <View class="body">
          <View class="orderContainer">
            <View class="merchantInfo">
              <View class="name cuIcon-locationfill" onClick={ this.showLocation }>进入地图</View>
              <View class="call" onClick={ this.makePhoneCall }>联系客户</View>
            </View>
            <View class="orderInfo">
              <View class="title">
                  <View class="name">客户状态</View>
                  <View class="state">
                    <Picker mode='selector' range={this.state.statusList} onChange={this.onStatusChange}>
                      <View class='state'>{this.state.statusList[this.state.status]}</View>
                    </Picker>
                  </View>
              </View>
              <View class="items">
                <View class="item">
                  <View class="name">姓名</View>
                  <View class="value">{this.state.name}</View>
                </View>
                <View class="item">
                  <View class="name">电话</View>
                  <View class="value">{this.state.phone}</View>
                </View> 
                <View class="item">
                  <View class="name">地址</View>
                  <View class="value">{this.state.address}</View>
                </View>
                <View class="item">
                  <View class="name">对接人</View>
                  <View class="value">{this.state.contact}</View>
                </View>                     
              </View>
            </View>
          </View>
        </View>

        <View class="body">
          <View class="orderContainer">
            <View class="orderInfo">
              <View class="title addIcon">
                  <View class="name">跟进记录</View>
                  <View class="state add cuIcon-right" onClick={this.addRecord}>新增</View>
              </View>
              <View class="records">
                <View class="record">
                  <View class="meta">
                    <View>2020-06-20 18:00</View>
                    <View></View>
                  </View>
                  <View class="content">沟通内容沟通内容沟通内容沟通内容沟通内容沟通内容沟通内容</View>
                </View>
                <View class="record">
                  <View class="meta">
                    <View>2020-06-20 18:00</View>
                    <View></View>
                  </View>
                  <View class="content">沟通内容沟通内容沟通内容沟通内容沟通内容沟通内容沟通内容</View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

export default ClientInfo
