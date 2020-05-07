//index.js
//获取应用实例
const app = getApp();
const api=require('../../utils/api.js');

Page({
  data: {
    motto: 'Hello！',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    tripInfo:[
      {
        title:'巴黎-圣山摄行',
        time:'2019.12.12',
        visitor:'15263',
        country:'法国',
        city:'巴黎',
        userInfo: ['../../images/user.jpg','晨曦']
      }
    ]
  },
  onShow(){
    //检查登录
    api.checkLogin();
  },
  
  onLoad: function () {
    //api.checkLogin();
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }

    //请求数据
    let params={
      data: '',
      method: 'get',
    }
    let list = api.getHotTripList(params);
    console.log(list);
  },
  //事件处理函数
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  //跳转搜索界面
  gotoSearch:function(){
    wx.navigateTo({
      url: '../login/login',
    })
  }
})
