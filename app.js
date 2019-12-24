//app.js:全局js
App({
  systemInfo:null,
  //小程序初始化
  onLaunch: function () {
    //
    const self = this;
    wx.getSystemInfo({
      success: function (res) {
        self.systemInfo = res;      },
    })

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        //console.log(res);
      }
    })

    // 获取用户信息
    wx.getSetting({
      success: res => {
        // if (res.authSetting['scope.userInfo']) {
        //   // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
        //   wx.getUserInfo({
        //     success: res => {
        //       // 可以将 res 发送给后台解码出 unionId
        //       this.globalData.userInfo = res.userInfo

        //       // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
        //       // 所以此处加入 callback 以防止这种情况
        //       if (this.userInfoReadyCallback) {
        //         this.userInfoReadyCallback(res)
        //       }
        //     }
        //   })
        // }
        //console.log(res);
        
      }
    })
    
  },
  //小程序启动或切前台
  onShow:function(options){

  },
  //小程序切后台
  onHide:function(){
    wx.showToast({
      title: '切换后台',
    })
  },
  //错误监听
  onError:function(){
    wx.showToast({
      title: '报错',
    })
  },
  onPageNotFound:function(){
    wx.showToast({
      title: '页面不存在',
    })
  },
  
})