// gitApp 获取App产生的示例对象
const app = getApp()
console.log(app.globalData.name)
const name = app.globalData.name
const age = app.globalData.age
//注册一个页面
//页面也有自己的生命周期函数
Page({
  data: {
    name: 'Coderwhy',
    age: 18,
    students: [{
        id: 110,
        name: '213',
        age: 20
      },
      {
        id: 111,
        name: 'adsd',
        age: 50
      },
      {
        id: 112,
        name: 'asd asdaw',
        age: 10
      },
      {
        id: 113,
        name: 'adwdae',
        age: 20
      }
    ],
    counter: 0,
    list: []
  },
  handleBtnClick() {
    console.log('按钮发生了点击')
    // this.setData()
    this.setData({
      counter: this.data.counter + 1
    })
  },
  handleSubtraction() {
    this.setData({
      counter: this.data.counter - 1
    })
  },
  handleGetUserInfo(e) {
    console.log(e)
  },
  // 第一件事情 监听页面生命周期函数
  // 页面加载出来
  onLoad() {
    console.log('onLoad')
    wx.request({
      url: 'https://bird.ioliu.cn/v1?url=http://api.tkjidi.com/getGoodsLink?appkey=76e14ed17616403c0f5a6698f2f95a95&type=jhs&page=1',
      success: (res) => {
        console.log(res)
        const data = res.data.data
        this.setData({
          list: data
        })
      }
    })
  },
  onShow() {
    console.log('onShow')
  },
  //页面初次渲染执行
  onReady() {
    console.log('onReady')
  },
  //当页面隐藏起来
  onHide() {
    console.log('onHide')
  },
  onUnload() {
    console.log('onUnload')
  },
  onPageScroll(obj){
    console.log(obj)
  },
  //监听页面滚动到底部
  onReachBottom(){
    console.log('页面滚动到底部')
  },
  onPullDownRefresh(){
    console.log('下拉刷新的事件')
  }
})


// 编程范式:
// 1命令式编程:原生Dom操作
// 2声明式编程:Vue,React,Augular