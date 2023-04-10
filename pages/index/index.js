const app = getApp()

Page({
  data: {
  screenHeight: app.globalData.screenHeight,
    topHeight: app.globalData.topHeight,
    headerHeight: app.globalData.headerHeight,
    bottomHeight: app.globalData.bottomHeight,
  },
  goScroll() {
    wx.navigateTo({
      url: '/pages/scroll/scroll'
    })
  },
  goCrop() {
    wx.navigateTo({
      url: '/pages/crop/crop'
    })
  },
  goMore() {
    wx.navigateTo({
      url: '/pages/more/more'
    })
  },
  goPubu() {
    wx.navigateTo({
      url: '/pages/pubu/pubu'
    })
  },
  goSelect() {
    wx.navigateTo({
      url: '/pages/select/select'
    })
  },
  

})