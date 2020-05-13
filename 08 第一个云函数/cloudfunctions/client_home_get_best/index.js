// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  const status = "success"
  const msg = ""
  const data = [{
      name: "拿铁",
      oPrice: 24,
      nPrice: 12,
      thum: "cloud://myluckin-unux5.6d79-myluckin-unux5-1302022060/images/menu/thum/88F34543128D-1.jpeg"
    },
    {
      name: "提拉米苏爱摩卡",
      oPrice: 19,
      nPrice: 28,
      thum: "cloud://myluckin-unux5.6d79-myluckin-unux5-1302022060/images/menu/thum/7B69340506EC-1.jpeg"
    },
    {
      name: "陨石拿铁",
      oPrice: 28,
      nPrice: 16.8,
      thum: "cloud://myluckin-unux5.6d79-myluckin-unux5-1302022060/images/menu/thum/82B1B9FDDB21-1.jpeg"
    },
    {
      name: "榛果拿铁",
      oPrice: 28,
      nPrice: 16.8,
      thum: "cloud://myluckin-unux5.6d79-myluckin-unux5-1302022060/images/menu/thum/FBD8B7AADBD9-1.jpeg"
    }
  ]

  return {
    status: status,
    msg: msg,
    data: data,
  }
}