// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database()
const product = db.collection("products")
// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  const status = "success"
  const msg = ""
  const data = await product
    .aggregate()
    .sample({
      size: 4
    })
    .end()
    console.log(data)
  return {
    status: status,
    msg: msg,
    data: data.list,
  }
}