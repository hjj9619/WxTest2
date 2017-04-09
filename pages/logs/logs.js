//logs.js
var util = require('../../utils/util.js');
var app = getApp();
Page({
  data: {
    logs: [],
    userInfo: null
  },
  onLoad: function () {

    app.getUserInfo( userInfo => {

      this.setData({
        userInfo: userInfo
      })

    })



    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(function (log) {
        return util.formatTime(new Date(log))
      })
    })
  }
})
