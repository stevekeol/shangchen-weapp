import React, { Component } from 'react'
import { Provider } from 'react-redux'

//干嘛用的？
import configStore from './store'

// import '~taro-ui/dist/style/index.scss'
import './app.scss'

const store = configStore()

class App extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     StatusBar: 20,
  //     CustomBar: 80,
  //     Custom: {
  //       bottom: 56,
  //       height: 32,
  //       left: 278,
  //       right: 365,
  //       top: 24,
  //       width: 87
  //     }      
  //   }

  //   this.getStatusBar() //this.state必须在该async/await操作之前

  // }

  // async getStatusBar() {
  //   try {
  //     let statusBar = {};
  //     await wx.getSystemInfo({
  //       success: e => {
  //         this.state.StatusBar = e.statusBarHeight;
  //         let capsule = wx.getMenuButtonBoundingClientRect();
  //         if (capsule) {
  //           this.state.Custom = capsule;
  //           this.state.CustomBar = capsule.bottom + capsule.top - e.statusBarHeight;
  //         } else {
  //           this.state.CustomBar = e.statusBarHeight + 50;
  //         }
  //       }
  //     });
  //   } catch (err) {
  //     throw new Error('failed getStatusBar');
  //   }
  // }

  // componentDidMount() {
  //   console.log(this.state)
  // }

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
