const apiURL='http://breadtrip.com/';

function getData(url,data,method){
  wx.request({
    url,
    data:data,
    method: method,
    timeout:60000,
    success(res){
      return res;
    },
    fail(err){
      return err;
    }
  })
}
const checkLogin=()=>{
    wx.checkSession({
      success(res){
        console.log(res)
        //return res;
        onLogin();
      },
      fail(err){
        console.log(err);
        return err;
      },

    })

}
const onLogin=()=>{
  console.log(123)
  wx.navigateTo({
    url: '/pages/login/login',
  })
}

const login=()=>{
  wx.showLoading({
    title: '登陆中',
  })
}
const getHotTripList=function (params){
  const url = apiURL +'v2/index/';
  return getData(url,params.data,params.method);
}

module.exports = {
  getHotTripList,
  checkLogin,
  login
}