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
    swiperHeight:0,
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
    
    //在rpx的单位下，屏幕的宽度都为750
    const winWidth = 750
    const swiperHeight = (winWidth - 40 ) * 540/1065
    this.setData({
      swiperHeight:swiperHeight,
      statusBarHeight: app.globalData.statusBarHeight,
      titleBarHeight: app.globalData.titleBarHeight
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