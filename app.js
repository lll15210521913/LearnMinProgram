//注册一个小程序示例
App({
  // 生命周期 后台存活两个小时
  //小程序初始化完成时,会执行的生命周期函数
  onLaunch: function() {
    console.log('小程序初始化完成:onLaunch')
    //异步调用 -> 
    // 1. 网络请求
    //2. 获取用户信息
    // wx.getUserInfo({
    //   //数据拿到之后在进行回调的
    //   success:function(res){
    //     console.log(res)
    //   }
    // })
    // setTimeout(function(){
    //   const err = new Error()

    //   throw err
    // },3000)
  },
  //小程序界面显示出来会执行的生命周期函数
  onShow: function(options) {
    //1.判断小程序的进入场景
    console.log(options)
    switch(options.scene){
      case 1001:
        break;
    }
    wx.getUserInfo({
      //数据拿到之后在进行回调的
      success:function(res){
        console.log(res)
      }
    })
    console.log('界面显示出来:anshow')
  },
  onHide: function() {
    console.log('界面隐藏显示出来:onHide')
  },
  onError: function(msg) {
    console.log('小程序中发生一些错误的时候执行')
  },
  globalData:{
    name:'coderhy',
    age:18
  }
})