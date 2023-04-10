
App({


  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    wx.getSystemInfo({
      success: res => {
        const aaa = wx.getMenuButtonBoundingClientRect()
        this.globalData.topHeight = res.statusBarHeight;
        this.globalData.headerHeight = (aaa.top- res.statusBarHeight)*2 + aaa.height;
        this.globalData.bottomHeight = res.screenHeight - res.safeArea.bottom;
        this.globalData.screenHeight = res.screenHeight ;
        console.log("底部安全区域:" + this.globalData.bottomHeight)
      },
      fail(err) {
        console.log(err);
      }
    });

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo: null,
    topHeight: 0,
    headerHeight:0,
    bottomHeight:0,
    screenHeight:0,
  }
})
