import React, { Component } from 'react'
import { View, Button, Text } from '@tarojs/components'

// import { AtNavBar } from 'taro-ui' // 测试ok

//导入将用于组件中dispatch的方法
// import { add, minus, asyncAdd } from '../../actions/counter'

import './home.scss'

//先集中导入colorUI的样式
import '../../components/icon.wxss' //为什么此处导入的icon集合，在me.jsx中也能用
import '../../components/main.wxss'

// import Login from '../../components/login/login' //测试ok
// import GroupList from '../../components/groupList/groupList'

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLogin: true,
      todayRegister: 5,
      todayDeal: 2,
      monthRegister: 22,
      monthDeal: 9,

      employees: [
        [
          { registers: [],
            deals: [],
            name: '赵权恒A',
            phone: '18881260785',
            password: '123',
            group: 'A',
            role: 'leader',
            createTime: '2020-04-10 23:25:37' 
          }, 
          { registers: [],
            deals: [],
            name: '张杰a',
            phone: '15258800906',
            password: 'zhangjie',
            group: 'A',
            role: 'worker',
            createTime: '2020-06-13 14:09:25' 
          }        
        ],
        [
          { registers: [],
            deals: [],
            name: '赵权恒A',
            phone: '18881260785',
            password: '123',
            group: 'A',
            role: 'leader',
            createTime: '2020-04-10 23:25:37' 
          }, 
          { registers: [],
            deals: [],
            name: '张杰a',
            phone: '15258800906',
            password: 'zhangjie',
            group: 'A',
            role: 'worker',
            createTime: '2020-06-13 14:09:25' 
          }        
        ],
        [
          { registers: [],
            deals: [],
            name: '赵权恒A',
            phone: '18881260785',
            password: '123',
            group: 'A',
            role: 'leader',
            createTime: '2020-04-10 23:25:37' 
          }, 
          { registers: [],
            deals: [],
            name: '张杰a',
            phone: '15258800906',
            password: 'zhangjie',
            group: 'A',
            role: 'worker',
            createTime: '2020-06-13 14:09:25' 
          }        
        ] 
      ]               
    };
  }  
  

  //当一个组件在被重新渲染时，这些方法将会被调用
  componentWillReceiveProps (nextProps) {
    // console.log(this.props, nextProps)
  }
  componentWillUnmount() {
    console.log('123')
  }
  componentDidMount() {
    console.log('fuck')
  }
  componentDidShow() {}
  componentDidHide() {}

  render () {
    return (
      <View className='index'>
        {/*导航条可剥离出来*/}
  
<navbar bgColor="bg-gradual-blue">
  <view slot="content">尚宸小管家</view>
</navbar>

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
                <View class="cu-tag round bg-cyan light">成交{ this.state.todayDeal }人</View>
              </View>
            </View>
            <View class="cu-item">
              <View class="content">
                <Text class="cuIcon-rankfill Text-cyan"></Text>
                <Text class="Text-grey">本月</Text>
              </View>
              <View class="action">
                <View class="cu-tag round bg-blue light">意向{ this.state.monthRegister }人</View>
                <View class="cu-tag round bg-cyan light">成交{ this.state.monthDeal }人</View>
              </View>
            </View>    
          </View> 
        </View>

        <View class="block-title margin-top-lg">
          <text class="title bg-gradual-blue light">小伙伴们</text>
        </View>

      </View>
    )
  }
}

export default Home
