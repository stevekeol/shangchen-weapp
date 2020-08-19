import Taro, { Component } from '@tarojs/taro'
import { View, Text, Input } from '@tarojs/components'
import '../common.css'
import './login.scss'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuth: props.isAuth,
      isLogin: props.isLogin
    }
  }
  render() {
    return (
      <View className='login'>
        <Text>c component { isLogin }</Text>
        {
          !isAuth &&
          <View class="margin-tb-sm text-center">
            <Button class="cu-btn round bg-gradual-blue shadow lg">授权登录</Button>
          </View>
        }
        {
          !isLogin &&
          <View class="margin-tb-sm text-center">
            <Text>控制最大输入长度的 input</Text>
            <Input type='number' placeholder='输入手机号' maxLength='11' focus/>
            <Text>数字输入的 input</Text>
            <Input type='text' placeholder='最大输入长度为 10' maxLength='10'/>
            
            <View class="radius shadow-warp bg-white margin-top-xl">
              <View class="cu-form-group">
                  <View class="title">电话号码</View>
                  <Input placeholder="此处输入" type="number" maxlength="11" bindchange="getPhone"></Input>
              </View>
              <View class="cu-form-group">
                  <View class="title">默认密码</View>
                  <Input placeholder="如遗忘请联系管理员" bindchange="getPassword"></Input>
              </View>
            </View>
            <View class="margin-tb-sm text-center">
                <button class="cu-btn round bg-gradual-blue shadow lg" bindtap="submit">登录</button>
            </View>          
          </View>

        }


      </View>
    )
  }
}

export default Login
