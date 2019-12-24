//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    trips:[
      {
        title:'巴黎-圣山摄行',
        time:'2018.12.24',
        days:5,
        view:'26548',
        country:'法国',
        city:'巴黎',
        imgSrc:'../../images/paris.jpg',
        userImg:'../../images/user.jpg',
        username:'晨曦'
      },
      {
        title: '去费城过感恩节',
        time: '2017.11.24',
        days: 4,
        view: '25536',
        country: '美国',
        city: '费城',
        imgSrc: '../../images/road.jpg',
        userImg: '../../images/user.jpg',
        username: '哦了嘛噶'
      },
      {
        title: '有一种蓝，叫仙本那蓝',
        time: '2019.01.27',
        days: 3,
        view: '54872',
        country: '马阿西亚',
        city: '沙巴',
        imgSrc: '../../images/blue.jpg',
        userImg: '../../images/user.jpg',
        username: '沐沐'
      },
      {
        title: '美西大环线(下）旧金山 蒙特利尔 17miles 卡梅尔 大苏尔 索尔文 圣芭芭拉 洛杉矶 卡梅尔 大苏尔 索尔文',
        time: '2018.05.10',
        days: 6,
        view: '48720',
        country: '美国',
        city: '旧金山',
        imgSrc: '../../images/car.jpg',
        userImg: '../../images/user.jpg',
        username: 'jeny'
      },
    ]
  },

  onLoad: function () {
    // if (app.globalData.userInfo) {
    //   this.setData({
    //     userInfo: app.globalData.userInfo,
    //     hasUserInfo: true
    //   })
    // } else if (this.data.canIUse){
    //   // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //   // 所以此处加入 callback 以防止这种情况
    //   app.userInfoReadyCallback = res => {
    //     this.setData({
    //       userInfo: res.userInfo,
    //       hasUserInfo: true
    //     })
    //   }
    // } else {
    //   // 在没有 open-type=getUserInfo 版本的兼容处理
    //   wx.getUserInfo({
    //     success: res => {
    //       app.globalData.userInfo = res.userInfo
    //       this.setData({
    //         userInfo: res.userInfo,
    //         hasUserInfo: true
    //       })
    //     }
    //   })
    // }
  },

  //弹出框
  showToast:function(){
    // wx.showModal({
    //   title: '提示',
    //   content: '出错',
    // })
    wx.showToast({
      title: '提示',
    })
    //console.log(1111)
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
