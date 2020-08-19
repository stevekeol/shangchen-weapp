export default {
  pages: [
    'pages/home/home',
    'pages/index/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
    navigationStyle: 'custom'
  },
  tabBar: {
    color: "#333333",
    selectedColor: "#0081ff",
    backgroundColor: "#ffffff",
    borderStyle: "white",
    list: [{
      pagePath: "pages/home/home",
      text: "数据统计",
      iconPath: "./images/tabbar/data.png",
      selectedIconPath: "./images/tabbar/data_current.png"
    }, {
      pagePath: "pages/index/index",
      text: "我",
      iconPath: "./images/tabbar/me.png",
      selectedIconPath: "./images/tabbar/me_current.png"      
    }]
  },
}