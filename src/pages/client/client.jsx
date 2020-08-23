import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'


import './client.scss'

//先集中导入colorUI的样式
import '../../components/icon.wxss' //为什么此处导入的icon集合，在me.jsx中也能用
import '../../components/main.wxss'

import Navbar from '../../components/navbar/navbar'

import addIcon from '../../images/test.png';

class ClientList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      clients: [{
        deal: true,
        name: '张大杰',
        phone: 15258800906,
        contact: {
          name: '陈攀'
        }
      }, {
        deal: false,
        name: '李珊珊',
        phone: 15258800906,
        contact: {
          name: '陈攀'
        }
      }, {
        deal: true,
        name: '张泽之',
        phone: 15258800906,
        contact: {
          name: '陈攀'
        }
      }, {
        deal: true,
        name: '张大杰',
        phone: 15258800906,
        contact: {
          name: '陈攀'
        }
      }, {
        deal: false,
        name: '李珊珊',
        phone: 15258800906,
        contact: {
          name: '陈攀'
        }
      }, {
        deal: true,
        name: '张泽之',
        phone: 15258800906,
        contact: {
          name: '陈攀'
        }
      }, {
        deal: true,
        name: '张大杰',
        phone: 15258800906,
        contact: {
          name: '陈攀'
        }
      }, {
        deal: false,
        name: '李珊珊',
        phone: 15258800906,
        contact: {
          name: '陈攀'
        }
      }, {
        deal: true,
        name: '张泽之',
        phone: 15258800906,
        contact: {
          name: '陈攀'
        }
      }, {
        deal: true,
        name: '张大杰',
        phone: 15258800906,
        contact: {
          name: '陈攀'
        }
      }, {
        deal: false,
        name: '李珊珊',
        phone: 15258800906,
        contact: {
          name: '陈攀'
        }
      }, {
        deal: true,
        name: '张泽之',
        phone: 15258800906,
        contact: {
          name: '陈攀'
        }
      }, {
        deal: true,
        name: '张大杰',
        phone: 15258800906,
        contact: {
          name: '陈攀'
        }
      }, {
        deal: false,
        name: '李珊珊',
        phone: 15258800906,
        contact: {
          name: '陈攀'
        }
      }, {
        deal: true,
        name: '张泽之',
        phone: 15258800906,
        contact: {
          name: '陈攀'
        }
      }],
      status: [{
        color: 'orange',
        title: '意向',
        key: 0
      }, {
        color: 'yellow',
        title: '定金',
        key: 1
      }, {
        color: 'olive',
        title: '设计',
        key: 2
      }, {
        color: 'green',
        title: '转合同',
        key: 3
      }, {
        color: 'cyan',
        title: '施工',
        key: 4
      }, {
        color: 'blue',
        title: '完结',
        key: 5
      }, ]
    };
  }  
  
  componentDidMount() {
    // console.log('fuck')
  }
  componentDidShow() {}
  componentDidHide() {}

  enterRegister() {
    Taro.navigateTo({
      url: '../register/register?userId=10001&name=zhangjie',
      events: {
        // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
        acceptDataFromOpenedPage: function(data) {
          console.log('data from openedPage:', data)
        },
        someEvent: function(data) {
          console.log(data)
        }
      },
      success: function (res) {
        // 通过eventChannel向被打开页面传送数据
        console.log(res);
        res.eventChannel.emit('acceptDataFromOpenerPage', { data: 'test' })
      }
    })
  }

  enterClientInfo() {
    console.log(this.state)
    Taro.navigateTo({
      url: '../clientInfo/clientInfo?userId=10001'
    })
  }  

  render () {
    return (
      <View className='index'>
        <Navbar bgColor="bg-gradual-purple" content="客户列表"></Navbar>

        <View class="radius shadow-warp bg-white margin-top">
          {
            this.state.clients.map((item, index) => {
              return (
                <View key={index} class="cu-list menu sm-border card-menu margin-top" onClick={ this.enterClientInfo }>
                  <View class="cu-item" bindtap="getClientDetail" data-phone="{{clients[index].phone}}">
                    <View class="content">
                      <Text class="cuIcon-title text-{{item.deal ? 'green' : 'blue'}}"></Text>
                      <Text class="text-grey margin-right">{ item.name }</Text>
                      <Text class="text-grey">{ item.phone }</Text>
                    </View>
                    <View class="action">
                    <View class={`cu-tag round bg-${this.state.status[Math.floor(Math.random() * 6)].color} light`}>{ this.state.status[Math.floor(Math.random() * 6)].title }</View>
                      <View class="cu-tag round bg-grey light">{ item.contact.name }{index}</View>
                    </View>
                  </View>
                </View>
              )
            })
          }
        </View>
          
        <View class="add-fix-bottom">
          <Image class="avatar" src={ addIcon } onClick={this.enterRegister}></Image>
        </View>

      </View>
    )
  }
}

export default ClientList
