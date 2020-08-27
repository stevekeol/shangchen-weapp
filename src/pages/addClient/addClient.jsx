import React, { Component } from 'react';
import Taro from '@tarojs/taro';
import { View, Image, Text, Picker, Input, Textarea } from '@tarojs/components';
import Navbar from '../../components/navbar/navbar'
import { formatTime  } from '../../utils/date.js'; //ES6风格的导入导出
import { STATUSLIST  } from '../../utils/config.js';

//先集中导入colorUI的样式
import './addClient.scss'
import '../../components/icon.wxss' //为什么此处导入的icon集合，在me.jsx中也能用
import '../../components/main.wxss'


class AddClient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      statusList: STATUSLIST,
      statusIndex: 0, //0-5
      status: '',
      name: '',
      phone: '',
      address: '',
      record: {
        createTime: '',
        content: ''
      },
      contact: '', //employeeModel中返回的“我的”中的ObjectId
    };

    this.getName = this.getName.bind(this);
    this.getPhone = this.getPhone.bind(this);
    this.getAddress = this.getAddress.bind(this);
    this.onStatusChange = this.onStatusChange.bind(this);
    this.getRecord = this.getRecord.bind(this);
    this.submit = this.submit.bind(this);
  }  
  
  componentDidMount() {}
  componentDidShow() {}
  componentDidHide() {}
  onShow() {}

  getName(e) {
    this.setState({
      name: e.detail.value
    })    
  }

  getPhone(e) {
    ////检测该手机号是否已被录入【待写】
    // e.detail.value.length === 11 &&    
    this.setState({
      phone: e.detail.value
    })
  }

  getAddress(e) {
    this.setState({
      address: e.detail.value
    })
  }

  onStatusChange(e) {
    this.setState({
      status: this.state.statusList[e.detail.value].value,
      statusIndex: e.detail.value
    })
  }

  getRecord(e) {
    this.setState({
      record: {
        createTime: formatTime(new Date()),
        content: e.detail.value
      }
    })
  }

  submit() {
    console.log(this.state);
    //网络请求【待写】
    //1. 增加字段: createTime, contact(用me的objectId)
    //2. 保存时还得根据手机号查询再保存
    //3. 成功后返回至父页面
  }

  render () {
    return (
      <View className='index'>
        <Navbar bgColor="bg-gradual-green" content="新增客户" isBack="true" backText="返回"></Navbar>
        <View class="body">
          <Text class="title">基本信息</Text>
          <View class="tableContainer">
            <View class="item">
              <View class="name">姓名</View>
              <Input placeholder="此处输入" onBlur={this.getName} maxlength="50" value={ this.state.name }></Input>
            </View>
            <View class="item">
              <View class="name">电话</View>
              <Input placeholder="此处输入" onBlur={this.getPhone} type="number" maxlength="11" value={ this.state.phone }></Input>
            </View>
            <View class="item">
              <View class="name">地址</View>
              <Input placeholder="此处输入" onBlur={this.getAddress} maxlength="50" value={ this.state.address }></Input>
            </View>
            <View class="item">
              <View class="name">状态</View>
                <Picker mode='selector' range={this.state.statusList} onChange={this.onStatusChange} range-key="title">
                  <View class='state'>{this.state.statusList[this.state.statusIndex].title}</View>
                </Picker>
            </View>
          </View>

          <Text class="title">备忘笔记</Text>
          <Textarea class="record" onBlur={this.getRecord} value={this.state.record.content} placeholder="(选填)" />

          <View class="button-lg" onClick={this.submit}>保存</View>  
        </View>
      </View>
    )
  }
}

export default AddClient
