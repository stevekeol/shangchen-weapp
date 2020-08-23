import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Image, Text, Picker, Input, Navigator } from '@tarojs/components'


import './addClient.scss'

//先集中导入colorUI的样式
import '../../components/icon.wxss' //为什么此处导入的icon集合，在me.jsx中也能用
import '../../components/main.wxss'

import Navbar from '../../components/navbar/navbar'

import addIcon from '../../images/test.png';

class AddClient extends Component {

  constructor(props) {
    super(props);
    this.state = {
      statusList: ['意向', '定金', '设计', '转合同', '施工', '完结'],
      status: 0, //0-5
      name: '张杰',
      address: '杭州市余杭区西园3幢3单元',
      phone: '15258800906',
      contact: '陈潘',

      records: [
        {time: '2020-06-20 18:00', contact: '陈攀', content: '商讨价格与合同'},
        {time: '2020-06-20 18:00', contact: '陈攀', content: '商讨价格与合同'}
      ]
    };
  }  
  
  componentDidMount() {}
  componentDidShow() {}
  componentDidHide() {}
  getName(e) {
    console.log(e.detail.value);
  }

  render () {
    return (
      <View className='index'>
        <Navbar bgColor="bg-gradual-green" content="新增客户" isBack="true" backText="返回"></Navbar>
        <View class="body">
          <View class="tableContainer">
            <View class="item">
              <View class="name">姓名</View>
              <Input placeholder="此处输入" onBlur={this.getName}></Input>
            </View>
            <View class="item">
              <View class="name">电话</View>
              <Input placeholder="此处输入" onBlur={this.getPhone} type="number" maxlength="11"></Input>
            </View>
          </View>

          <Navigator class="tableContainer" url="../../pages/helpDesc/helpDesc" open-type="navigate">
            <View class="item">
              <View class="name">详情描述</View>
              <View class="cuIcon-right desc">{'desc'}</View>
            </View>
          </Navigator>

          <View class="button-lg" bindtap="submit">保存</View>  
        </View>
      </View>
    )
  }
}

export default AddClient
