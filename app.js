//app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },

  getUserInfo: function( cb ) {
    if( this.globalData.userInfo ){
      if( typeof cb === "function" ) cb( this.globalData.userInfo );
    }else{
      wx.login({
        success: res => {
          wx.getUserInfo({
            success: res => {
              this.globalData.userInfo = res.userInfo;
              if( typeof cb === "function" ) cb( this.globalData.userInfo );
            }
          })
        }
      })
    }
  },

  print: str => {

    console.info( "Print Log: " + str );

  },

  globalData:{
    userInfo: null
  }
})