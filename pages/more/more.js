const app = getApp()

Page({
  data: {
  screenHeight: app.globalData.screenHeight,
    topHeight: app.globalData.topHeight,
    headerHeight: app.globalData.headerHeight,
    bottomHeight: app.globalData.bottomHeight,
    GoodNumber:[
      {"name":"111","id":"111"},
      {"name":"222","id":"222"},
      {"name":"333","id":"333" },
      {"name":"444","id":"444"},
    ]
  },
  goScroll() {
    wx.navigateTo({
      url: '/pages/scroll/scroll'
    })
  },
  change(e){
    var g = this.data.GoodNumber[e.currentTarget.dataset.index]
    if(g.className == "bbb"){
      g.className = ""
    }else{
      g.className = "bbb"
    }
   
    this.setData({
      GoodNumber:this.data.GoodNumber
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