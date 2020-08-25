export default {
  pages: [
    'pages/client/client',
    'pages/addClient/addClient',
    'pages/me/me',
    'pages/home/home',
    'pages/index/index',
    'pages/clientInfo/clientInfo',
    'pages/addClientRecord/addClientRecord',
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
      pagePath: "pages/me/me",
      text: "我",
      iconPath: "./images/tabbar/me.png",
      selectedIconPath: "./images/tabbar/list_current.png"      
    }, {
      pagePath: "pages/client/client",
      text: "客户列表",
      iconPath: "./images/tabbar/list.png",
      selectedIconPath: "./images/tabbar/list_current.png"      
    }]
  },
  permission: {
      "scope.userLocation": {
          "desc": "获取用户的位置"
      }
  },  
}