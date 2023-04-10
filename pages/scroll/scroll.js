const app = getApp()
Page({
  data: {
    screenHeight: app.globalData.screenHeight,
    topHeight: app.globalData.topHeight,
    headerHeight: app.globalData.headerHeight,
    bottomHeight: app.globalData.bottomHeight,
    opacity:0,
  },
  scroll:function(event) {
    console.log(event.detail.scrollTop)
    this.setData({
      opacity:(event.detail.scrollTop)/500
    })
  },
  goBack(){
    wx.navigateBack({
      delta: 1
    });
  },

})