// components/home/home.js
var app = getApp()
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    statusBarHeight: 0,
    titleBarHeight: 0,
    swiperData: [
      "cloud://myluckin-unux5.6d79-myluckin-unux5-1302022060/images/home/DC240B320F4-1.jpeg",
      "cloud://myluckin-unux5.6d79-myluckin-unux5-1302022060/images/home/6C04DA13FC28-1.jpeg",
      "cloud://myluckin-unux5.6d79-myluckin-unux5-1302022060/images/home/DA98AD7CF153-1.jpeg",
      "cloud://myluckin-unux5.6d79-myluckin-unux5-1302022060/images/home/87542BE16ED7-1.jpeg"
    ],
  },
  attached() {
    var statusBarHeight = 0
    var titleBarHeight = 0
    wx.getSystemInfo({
      success: (res) => {
        statusBarHeight = res.statusBarHeight
        titleBarHeight = wx.getMenuButtonBoundingClientRect().bottom + wx.getMenuButtonBoundingClientRect().top - (res.statusBarHeight * 2)
      },
      failure() {
        statusBarHeight = 0
        titleBarHeight = 0
      }
    })
    this.setData({
      statusBarHeight: statusBarHeight,
      titleBarHeight: titleBarHeight
    })
  },
  /**
   * 组件的方法列表
   */
  methods: {
    onFinish:function(e){
      console.log(e.detail.current)
    }
  },
  
})