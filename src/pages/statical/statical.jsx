import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Button, Text, Image } from '@tarojs/components'

import './statical.scss'

//先集中导入colorUI的样式
import '../../components/icon.wxss' //为什么此处导入的icon集合，在me.jsx中也能用
import '../../components/main.wxss'

import Navbar from '../../components/navbar/navbar'
import GroupList from '../../components/groupList/groupList'

import { GROUPLIST  } from '../../utils/config.js'; //ES6风格的导入导出
import addIcon from '../../images/test.png';

class Statical extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todayRegister: 5,
      todayDeal: 2,
      monthRegister: 22,
      monthDeal: 9,

      saleDepart: [
        {
          title: '营销一部',
          value: 'saleOne',
          employees: [
            {
              name: '杜敏',
              phone: 18284981290,
              password: 'dm_2020',
              avatorUrl: undefined,
              openid: undefined,
              groups: ['saleOne'],
              isAdmin: true,
              createTime: '2020-05-17 18:30',
              updateTime: '2020-05-20 19:30',
              clients: [
                {
                  name: '张杰',
                  phone: '15258800906',
                  address: '杭州市余杭区荆长大道西园3幢3单元',
                  contact: '杜敏', //此处应该是ObejctID
                  status: 'yixiang',
                  createTime: '2020-08-20 16:30',
                  records: [{
                    createTime: '2020-08-20 17:00',
                    content: '初次交流装修风格'
                  }, {
                    createTime: '2020-08-20 18:00',
                    content: '再次交流家居风格'
                  }],
                  appointments: [{
                    isHandled: true,
                    timestamp: 1598510461288,
                    content: '沟通家具装修风格'
                  }, {
                    isHandled: false,
                    timestamp: 1598780461288,
                    content: '沟通价格套餐'
                  }]
                }, {
                  name: '方国军',
                  phone: '15258800900',
                  address: '',
                  contact: '杜敏', //此处应该是ObejctID
                  status: 'jiaofu',
                  createTime: '2020-08-20 16:30',
                  records: [{
                    createTime: '2020-08-20 17:00',
                    content: '初次交流装修风格'
                  }, {
                    createTime: '2020-08-20 18:00',
                    content: '再次交流家居风格'
                  }],
                  appointments: [{
                    isHandled: true,
                    timestamp: 1598510461288,
                    content: '沟通家具装修风格'
                  }, {
                    isHandled: false,
                    timestamp: 1598780461288,
                    content: '沟通价格套餐'
                  }]
                }, {
                  name: '张杰1',
                  phone: '15258800906',
                  address: '杭州市余杭区荆长大道西园3幢3单元',
                  contact: '杜敏', //此处应该是ObejctID
                  status: 'yixiang',
                  createTime: '2020-08-20 16:30',
                  records: [{
                    createTime: '2020-08-20 17:00',
                    content: '初次交流装修风格'
                  }, {
                    createTime: '2020-08-20 18:00',
                    content: '再次交流家居风格'
                  }],
                  appointments: [{
                    isHandled: true,
                    timestamp: 1598510461288,
                    content: '沟通家具装修风格'
                  }, {
                    isHandled: false,
                    timestamp: 1598780461288,
                    content: '沟通价格套餐'
                  }]
                }, {
                  name: '方国军1',
                  phone: '15258800900',
                  address: '',
                  contact: '杜敏', //此处应该是ObejctID
                  status: 'jiaofu',
                  createTime: '2020-08-20 16:30',
                  records: [{
                    createTime: '2020-08-20 17:00',
                    content: '初次交流装修风格'
                  }, {
                    createTime: '2020-08-20 18:00',
                    content: '再次交流家居风格'
                  }],
                  appointments: [{
                    isHandled: true,
                    timestamp: 1598510461288,
                    content: '沟通家具装修风格'
                  }, {
                    isHandled: false,
                    timestamp: 1598780461288,
                    content: '沟通价格套餐'
                  }]
                },           
              ]
            }, 
            {
              name: '杜敏1',
              phone: 18284981290,
              password: 'dm_2020',
              avatorUrl: undefined,
              openid: undefined,
              groups: ['saleOne'],
              isAdmin: false,
              createTime: '2020-05-17 18:30',
              updateTime: '2020-05-20 19:30',
              clients: [
                {
                  name: '张杰12',
                  phone: '15258800906',
                  address: '杭州市余杭区荆长大道西园3幢3单元',
                  contact: '杜敏1', //此处应该是ObejctID
                  status: 'yixiang',
                  createTime: '2020-08-20 16:30',
                  records: [{
                    createTime: '2020-08-20 17:00',
                    content: '初次交流装修风格'
                  }, {
                    createTime: '2020-08-20 18:00',
                    content: '再次交流家居风格'
                  }],
                  appointments: [{
                    isHandled: true,
                    timestamp: 1598510461288,
                    content: '沟通家具装修风格'
                  }, {
                    isHandled: false,
                    timestamp: 1598780461288,
                    content: '沟通价格套餐'
                  }]
                }, {
                  name: '方国军12',
                  phone: '15258800900',
                  address: '',
                  contact: '杜敏1', //此处应该是ObejctID
                  status: 'jiaofu',
                  createTime: '2020-08-20 16:30',
                  records: [{
                    createTime: '2020-08-20 17:00',
                    content: '初次交流装修风格'
                  }, {
                    createTime: '2020-08-20 18:00',
                    content: '再次交流家居风格'
                  }],
                  appointments: [{
                    isHandled: true,
                    timestamp: 1598510461288,
                    content: '沟通家具装修风格'
                  }, {
                    isHandled: false,
                    timestamp: 1598780461288,
                    content: '沟通价格套餐'
                  }]
                }, {
                  name: '张杰121',
                  phone: '15258800906',
                  address: '杭州市余杭区荆长大道西园3幢3单元',
                  contact: '杜敏1', //此处应该是ObejctID
                  status: 'yixiang',
                  createTime: '2020-08-20 16:30',
                  records: [{
                    createTime: '2020-08-20 17:00',
                    content: '初次交流装修风格'
                  }, {
                    createTime: '2020-08-20 18:00',
                    content: '再次交流家居风格'
                  }],
                  appointments: [{
                    isHandled: true,
                    timestamp: 1598510461288,
                    content: '沟通家具装修风格'
                  }, {
                    isHandled: false,
                    timestamp: 1598780461288,
                    content: '沟通价格套餐'
                  }]
                }, {
                  name: '方国军121',
                  phone: '15258800900',
                  address: '',
                  contact: '杜敏1', //此处应该是ObejctID
                  status: 'jiaofu',
                  createTime: '2020-08-20 16:30',
                  records: [{
                    createTime: '2020-08-20 17:00',
                    content: '初次交流装修风格'
                  }, {
                    createTime: '2020-08-20 18:00',
                    content: '再次交流家居风格'
                  }],
                  appointments: [{
                    isHandled: true,
                    timestamp: 1598510461288,
                    content: '沟通家具装修风格'
                  }, {
                    isHandled: false,
                    timestamp: 1598780461288,
                    content: '沟通价格套餐'
                  }]
                },           
              ]
            }, 
          ]
        }, {
          title: '营销二部',
          value: 'saleTwo',
          employees: [
            {
              name: '聂碧清',
              phone: 15984441339,
              password: 'nbq_2020',
              avatorUrl: undefined,
              openid: undefined,
              groups: ['saleOne'],
              isAdmin: true,
              createTime: '2020-05-17 18:30',
              updateTime: '2020-05-20 19:30',
              clients: [
                {
                  name: '彭小华',
                  phone: '15258800901',
                  address: '杭州市余杭区荆长大道西园3幢3单元',
                  contact: '聂碧清', //此处应该是ObejctID
                  status: 'yixiang',
                  createTime: '2020-08-20 16:30',
                  records: [{
                    createTime: '2020-08-20 17:00',
                    content: '初次交流装修风格'
                  }, {
                    createTime: '2020-08-20 18:00',
                    content: '再次交流家居风格'
                  }],
                  appointments: [{
                    isHandled: true,
                    timestamp: 1598510461288,
                    content: '沟通家具装修风格'
                  }, {
                    isHandled: false,
                    timestamp: 1598780461288,
                    content: '沟通价格套餐'
                  }]
                }, {
                  name: '赵子煜',
                  phone: '15258800902',
                  address: '杭州市余杭区荆长大道西园3幢3单元',
                  contact: '聂碧清', //此处应该是ObejctID
                  status: 'dingjin',
                  createTime: '2020-08-20 16:30',
                  records: [{
                    createTime: '2020-08-20 17:00',
                    content: '初次交流装修风格'
                  }, {
                    createTime: '2020-08-20 18:00',
                    content: '再次交流家居风格'
                  }],
                  appointments: [{
                    isHandled: true,
                    timestamp: 1598510461288,
                    content: '沟通家具装修风格'
                  }, {
                    isHandled: false,
                    timestamp: 1598780461288,
                    content: '沟通价格套餐'
                  }]
                }          
              ]
            }            
          ]          
        }
      ]
    };

    this.enterAddEmployee = this.enterAddEmployee.bind(this);
  }  
  
  componentDidMount() {}
  componentDidShow() {}
  componentDidHide() {}

  enterAddEmployee() {
    Taro.navigateTo({
      url: '../addEmployee/addEmployee'
    })
  }   

  render () {
    return (
      <View className='index'>
        <Navbar bgColor="bg-gradual-blue" content="尚宸小管家"></Navbar>
        <View class="block-title">
          <Text class="title bg-gradual-blue">数据概览</Text>
        </View>
        <View class="radius shadow-warp bg-white margin-top">
          <View class="cu-list menu sm-border card-menu margin-top">
            <View class="cu-item">
              <View class="content">
                <Text class="cuIcon-rankfill Text-cyan"></Text>
                <Text class="Text-grey">今日</Text>
              </View>
              <View class="action">
                <View class="cu-tag round bg-blue light">意向{ this.state.todayRegister }人</View>
                <View class="cu-tag round bg-cyan light">定金{ this.state.todayDeal }人</View>
              </View>
            </View>
            <View class="cu-item">
              <View class="content">
                <Text class="cuIcon-rankfill Text-cyan"></Text>
                <Text class="Text-grey">本月</Text>
              </View>
              <View class="action">
                <View class="cu-tag round bg-blue light">意向{ this.state.monthRegister }人</View>
                <View class="cu-tag round bg-cyan light">定金{ this.state.monthDeal }人</View>
              </View>
            </View>    
          </View> 
        </View>
        <View class="block-title margin-top-lg">
          <text class="title bg-gradual-blue light">营销部门</text>
        </View>
        {
          this.state.saleDepart.length > 0 &&
          this.state.saleDepart.map((subDepart, index) => <GroupList groupData={ subDepart.employees } groupName={ subDepart.title } key={ index } />)
        }
        
        {/*设计部和工程部的数据展示，需要仔细推敲业务流程后再定*/}

        <View class="add-fix-bottom">
          <Image class="avatar" src={ addIcon } onClick={this.enterAddEmployee}></Image>
        </View>        

      </View>
    )
  }
}

export default Statical
