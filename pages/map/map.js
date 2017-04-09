Page({
  data: {
    longitude: '',
    latitude: '',
    radius: [{
        latitude: 0,
        longitude: 0,
        color: "",
        radius: 0,
        strokeWidth: 0
    }],
    windowHeight: 0
  },

  onLoad: function() {
    // console.log( "Hello ");
    wx.getLocation({
        success: res => {
            let la = res.latitude,
                lo = res.longitude;
            this.setData({
                latitude: la,
                longitude: lo,
                radius: [{
                    strokeWidth: 0,
                    latitude: la,
                    longitude: lo,
                    color: "#ff0000aa",
                    fillColor: "#00000010",
                    radius: 300
                }]
            });
        }
    });

    wx.getSystemInfo({
        success: res => {
            console.log( res );
            this.setData({
                windowHeight: res.windowHeight
            })
        }
    })
  }
})