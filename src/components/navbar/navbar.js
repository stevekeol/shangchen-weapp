const app = getApp();
console.log(app)
Component({
  /**
   * 组件的一些选项
   */
  options: {
    addGlobalClass: true,
    multipleSlots: true //在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的对外属性
   */
  properties: {
    bgColor: {
      type: String,
      default: ''
    }, 
    isCustom: {
      type: [Boolean, String],
      default: false
    },
    isBack: {
      type: [Boolean, String],
      default: false
    },
    bgImage: {
      type: String,
      default: ''
    },
  },
  /**
   * 组件的初始数据
   */
  data: {
    StatusBar: 20,
    CustomBar: 80,
    Custom: {
      bottom: 56,
      height: 32,
      left: 278,
      right: 365,
      top: 24,
      width: 87
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    BackPage() {
      wx.navigateBack({
        delta: 1
      });
    },
    toHome(){
      wx.reLaunch({
        url: '/pages/index/index',
      })
    }
  }
})