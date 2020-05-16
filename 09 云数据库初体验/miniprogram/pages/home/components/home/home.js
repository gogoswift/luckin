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
    productWidth: 0,
    swiperHeight: 0,
    statusBarHeight: 0,
    titleBarHeight: 0,
    swiperData: [
      "cloud://myluckin-unux5.6d79-myluckin-unux5-1302022060/images/home/DC240B320F4-1.jpeg",
      "cloud://myluckin-unux5.6d79-myluckin-unux5-1302022060/images/home/6C04DA13FC28-1.jpeg",
      "cloud://myluckin-unux5.6d79-myluckin-unux5-1302022060/images/home/DA98AD7CF153-1.jpeg",
      "cloud://myluckin-unux5.6d79-myluckin-unux5-1302022060/images/home/87542BE16ED7-1.jpeg"
    ],
    rowHeight: 250,
    rowHeight2: 250,
    products: []
  },
  attached() {
    //在rpx的单位下，屏幕的宽度都为750
    const winWidth = 750
    const swiperHeight = (winWidth - 40) * 540 / 1065

    const rowWidth = (winWidth - 80 - 6) * 2 / 3
    const rowHeight = rowWidth * 330 / 666

    //324 315
    const rowWidth2 = (winWidth - 80 - 12) / 3
    const rowHeight2 = rowWidth2 * 315 / 324

    const productWidth = (winWidth - 80 - 30) / 4

    this.setData({
      productWidth: productWidth,
      swiperHeight: swiperHeight,
      rowHeight: rowHeight,
      rowHeight2: rowHeight2,
      statusBarHeight: app.globalData.statusBarHeight,
      titleBarHeight: app.globalData.titleBarHeight
    })
    this.onGetBest()
  },
  /**
   * 组件的方法列表
   */
  methods: {
    onFinish: function (e) {
      console.log(e.detail.current)
    },
    onGetBest:function(){
      wx.cloud.callFunction({
        name:"client_home_get_best"
      }).then(res=>{
        console.log(res,res.result.status,res.result.data)
        if (res.result.status == "success" && res.result.data){
          this.setData({
            products:res.result.data
          })
        }
      }).catch(err=>{
        console.log(err)
      })
    }
  },

})