import Taro, { Component } from '@tarojs/taro'
import { View, Text, Input } from '@tarojs/components'

// import '../common.css'
import './groupItem.scss'
import '../main.wxss'
import '../icon.wxss'

class GroupItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // itemData: props,
      itemData: { 
        registers: [],
        deals: [],
        name: '张杰',
        phone: '15258800906',
        password: 'zhangjie',
        group: 'A',
        role: 'worker',
        createTime: '2020-06-13 14:09:25' 
      } 
    }
  } 
  render() {
    return (
      <View class="cu-item">
        <View class="cu-avatar round" style="background-image:url('https://shp.qpic.cn/cfwebcap/0/d0a02c5f86d40c0fae24ae56eea587e0/');"></View>
        <View class="content">
          <View class="text-grey">{ this.state.itemData.name }{ this.state.itemData.name == 'leader' ? '【组长】' : '' }</View>
          <View class="text-gray text-sm">
            <text class="text-red"></text>{ this.state.itemData.phone }</View>
        </View>
        <View class="action">
          <View class="cu-tag round bg-cyan light sm">成交{ this.state.itemData.deal.length || 0 }人</View>
        </View>      
      </View>
    )
  }
}

export default GroupItem
