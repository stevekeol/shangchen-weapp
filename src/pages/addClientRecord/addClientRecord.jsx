import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Textarea } from '@tarojs/components'


import './addClientRecord.scss'

//先集中导入colorUI的样式
import '../../components/icon.wxss' //为什么此处导入的icon集合，在me.jsx中也能用
import '../../components/main.wxss'

import Navbar from '../../components/navbar/navbar'

import addIcon from '../../images/test.png';

class AddClient extends Component {

  constructor(props) {
    super(props);
    this.state = {
      record: ''
    };

    this._saveHelpInfo = this._saveHelpInfo.bind(this);
    this.saveHelpInfo = this.saveHelpInfo.bind(this);
  }  
  
  componentDidMount() {}
  componentDidShow() {}
  componentDidHide() {}


  _saveHelpInfo(e) {
    this.setState({
      record: e.detail.value
    })
  }
  saveHelpInfo() {
    let pages = Taro.getCurrentPages();
    let prePage = pages[pages.length - 2];
    
    prePage.setState({
      record: this.state.record
    });
    prePage.changeData();
    wx.navigateBack({
      delta: 1
    })
  }

  render () {
    return (
      <View className='index'>
        <Navbar bgColor="bg-gradual-green" content="新增客户备注" isBack="true" backText="返回"></Navbar>
        <View class="body">

        <Textarea class="textarea" placeholder="请记录跟客户沟通要点" onBlur={this._saveHelpInfo} autoFocus></Textarea>
        <View class="body">
          <View class="button-lg" onClick={this.saveHelpInfo}>保存</View>
        </View>

        </View>
      </View>
    )
  }
}

export default AddClient
