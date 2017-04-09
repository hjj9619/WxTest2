// index.js
let app = getApp();
Page({

  data: {
    title: [
      "Home", "Shcool", "Course", "Student", "About", "More"
    ],

    userInfo: null

  },
  handle0: () => {
    console.log("handle0");
    wx.showToast({
      title: "Hello"
    });

    setTimeout(() => {
      wx.hideToast();
    }, 1000);
  },
  handle1: () => {
    console.log("handle1");
    wx.showModal({
      title: "是否前进",
      content: "是否要继续此操作？",
      success: (res) => {
        console.log(res);
        if (res.confirm) {
          wx.showToast({
            title: "您点击了确认",
            icon: "success"
          })
        } else {
          wx.showToast({
            title: "您点击了取消",
            icon: "loading",
            image: '../images/logo.png'
          })
        }
      }
    });
  },

  goToMap: ( ) => {
    
    wx.navigateTo({
      url: "../map/map"
    })

  },

  onLoad: function () {
    wx.showNavigationBarLoading()
    setTimeout( ( )=>{
      wx.hideNavigationBarLoading( )
    }, 25000 );
   

    app.getUserInfo(userInfo => {
      this.setData({
        userInfo: userInfo
      })
    });
  }



})
