import React, { Component } from 'react'
import { View, Text, Image } from '@tarojs/components'

import '../main.wxss'
import '../icon.wxss'
import './groupList.scss'
import avator from '../../images/avator.jpg'
import { STATUSLIST  } from '../../utils/config.js'; //ES6风格的导入导出


class GroupList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      staticial: {}
    }
  }

  componentDidMount() {
    let test = {};
    this.props.groupData.map((employee, index) => {
      test[employee.phone] = {
        [STATUSLIST[0].value]: 0,
        [STATUSLIST[1].value]: 0
      };
      employee.clients.map((client, index) => {
        if(client.status == STATUSLIST[0].value) {
          test[employee.phone][STATUSLIST[0].value]++;
        } else {
          test[employee.phone][STATUSLIST[1].value]++;
        }
      })
    })
    this.setState({
      staticial: test
    })
  }

  render() {
    return (
      <View>
          <View class="radius shadow-warp bg-white margin-top margin-bottom my-margin-bottom">
            <View class="cu-bar bg-white solid-bottom margin-top">
              <View class="action">
                <Text class="cuIcon-title text-grey "></Text>{ this.props.groupName }
              </View>
            </View>  
            <View class="cu-list menu-avatar">      
              {
                this.props.groupData.map((employee, index) => {
                  return (
                    <View class="cu-item" key={index}>
                      <Image class="cu-avatar round" src={avator} mode="scaleToFill"></Image>
                      <View class="content">
                        <View class="text-grey">{ employee.name }{ employee.isAdmin ? '【组长】' : '' }</View>
                        <View class="text-gray text-sm">
                          <Text class="text-red"></Text>{ employee.phone }
                        </View>
                      </View>
                      <View class="action">
                        <View class="cu-tag round bg-blue light sm">
                          意向{ this.state.staticial[employee.phone] && this.state.staticial[employee.phone][STATUSLIST[0].value] }人
                        </View>
                        <View class="cu-tag round bg-cyan light sm">
                          定金{ this.state.staticial[employee.phone] && this.state.staticial[employee.phone][STATUSLIST[1].value] }人
                        </View>
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
