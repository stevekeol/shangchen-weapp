import Taro, { Component } from '@tarojs/taro'
import { View, Text, Input } from '@tarojs/components'

import '../main.wxss'
import '../icon.wxss'
import './groupList.scss'

class GroupList extends Component {
  constructor(props) {
    super(props)
    console.log(this.props)
    this.state = {}
  } 
  componentDidMount() {}
  render() {
    return (
      <View>
          <View class="radius shadow-warp bg-white margin-top margin-bottom my-margin-bottom">
            <View class="cu-bar bg-white solid-bottom margin-top">
              <View class="action">
                <Text class="cuIcon-title text-grey "></Text> 家装{ this.props.groupName }组
              </View>
            </View>  
            <View class="cu-list menu-avatar">        
              {
                this.props.groupData.map(item => {
                  return (
                    <View class="cu-item">
                      <View class="cu-avatar round" style="background-image:url('https://shp.qpic.cn/cfwebcap/0/d0a02c5f86d40c0fae24ae56eea587e0/');"></View>
                      <View class="content">
                        <View class="text-grey">{ item.name }{ item.role == 'leader' ? '【组长】' : '' }</View>
                        <View class="text-gray text-sm">
                          <text class="text-red"></text>{ item.phone }</View>
                      </View>
                      <View class="action">
                        <View class="cu-tag round bg-cyan light sm">成交{ item.deal.length || 0 }人</View>
                      </View>      
                    </View>            
                  )
                })
              }
            </View>
          </View>
        <View></View>
      </View>
    )
  }
}

export default GroupList
