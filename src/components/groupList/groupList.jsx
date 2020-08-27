import React, { Component } from 'react'
import { View, Text, Image } from '@tarojs/components'

import '../main.wxss'
import '../icon.wxss'
import './groupList.scss'
import avator from '../../images/avator.jpg'


class GroupList extends Component {
  constructor(props) {
    super(props)
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
                this.props.groupData.map((item, index) => {
                  return (
                    <View class="cu-item" key={index}>
                      <Image class="cu-avatar round" src={avator} mode="scaleToFill"></Image>
                      <View class="content">
                        <View class="text-grey">{ item.name }{ item.role == 'leader' ? '【组长】' : '' }</View>
                        <View class="text-gray text-sm">
                          <Text class="text-red"></Text>{ item.phone }
                        </View>
                      </View>
                      <View class="action">
                        <View class="cu-tag round bg-cyan light sm">定金{ 1 || 0 }人</View>
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
