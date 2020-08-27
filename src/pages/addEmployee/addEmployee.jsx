import React, { Component } from 'react';
import Taro from '@tarojs/taro';
import { View, Image, Text, Picker, Input, Switch, Label, Checkbox } from '@tarojs/components';
import Navbar from '../../components/navbar/navbar'
import { formatTime  } from '../../utils/date.js'; //ES6风格的导入导出
import { GROUPLIST  } from '../../utils/config.js'; //ES6风格的导入导出

//先集中导入colorUI的样式
import './addEmployee.scss'
import '../../components/icon.wxss' //为什么此处导入的icon集合，在me.jsx中也能用
import '../../components/main.wxss'


class AddEmployee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groupList: GROUPLIST,
      groupIndex: 2,
      name: '',
      phone: '',
      password: '',
      groups: [],
      isAdmin: false, //是否是group中所有小组的admin
      clients: [],
      createTime: '',
      updateTime: ''
    };

    this.getName = this.getName.bind(this);
    this.getPhone = this.getPhone.bind(this);
    this.getPassword = this.getPassword.bind(this);
    this.onGroupChange = this.onGroupChange.bind(this);
    this.onRoleChange = this.onRoleChange.bind(this);


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

  getPassword(e) {
    this.setState({
      password: e.detail.value
    })
  }

  onGroupChange(e) {
    this.setState({
      groupIndex: e.detail.value,
      group: this.state.groupList[e.detail.value].role //?
    })
  }

  onRoleChange(e) {
    console.log(e) //此处有bug，当由false -> true时，UI奇数次不变化
    this.setState({
      isAdmin: e.detail.value
    })
  }

  onGroupsChange(e) {
    console.log(e)
  }  

  submit() {
    console.log(this.state);
    //网络请求【待写】
    //1. 增加字段: createTime, updateTime, contact(用me的objectId)
    //2. 保存时还得根据手机号查询再保存
    //3. 成功后返回至父页面
  }

  render () {
    return (
      <View className='index'>
        <Navbar bgColor="bg-gradual-green" content="员工录入" isBack="true" backText="返回"></Navbar>
        <View class="body">
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
              <View class="name">密码</View>
              <Input placeholder="此处输入" onBlur={this.getPassword} maxlength="20" value={ this.state.password }></Input>
            </View>
          </View>

          <View class="tableContainer">
            <View class="item">
              <View class="name">组长</View>
              <Switch className='wx-switch-input' onChange={this.onRoleChange} />
            </View>
            {
              !this.state.isAdmin &&
              <View class="item">
                <View class="name">组别</View>
                  <Picker mode='selector' range={this.state.groupList} onChange={this.onGroupChange} range-key="title">
                    <View class='state'>{this.state.groupList[this.state.groupIndex].title}</View>
                  </Picker>
              </View>
            }
            {
              this.state.isAdmin &&
              <Text class='tip'>此时可同时选择多个部门</Text>
            }
            {
              this.state.isAdmin &&
              this.state.groupList.map((item, index) => {
                return (
                  <View class='checkbox' key={index}>
                    <Label class='checkbox-label'>
                      <Checkbox class='checkbox-checkbox' value={item.role} onChange={this.onGroupsChange}>{item.title}</Checkbox>
                    </Label>
                  </View>
                )
              })
            }            
          </View>

          <View class="button-lg" onClick={this.submit}>保存</View>
        </View>
      </View>
    )
  }
}

export default AddEmployee