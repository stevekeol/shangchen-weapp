import React, { Component } from 'react'
import { Provider } from 'react-redux'

//干嘛用的？
import configStore from './store'

// import '~taro-ui/dist/style/index.scss'
import './app.scss'

const store = configStore()

class App extends Component {
  componentDidMount () {
    console.log('获取系统状态栏信息:');
    console.log(wx.getMenuButtonBoundingClientRect())

    // 获取系统状态栏信息(如何提取出去？)
    // wx.getSystemInfo({
    //   success: e => {
    //     console.log(e)
    //     this.navBar.StatusBar = e.statusBarHeight;
    //     let capsule = wx.getMenuButtonBoundingClientRect();
    //     if (capsule) {
    //       this.navBar.Custom = capsule;
    //       this.navBar.CustomBar = capsule.bottom + capsule.top - e.statusBarHeight;
    //     } else {
    //       this.navBar.CustomBar = e.statusBarHeight + 50;
    //     }
    //   }
    // });    
  }

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        {this.props.children}
      </Provider>
    )
  }
}

export default App
