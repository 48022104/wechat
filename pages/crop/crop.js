const app = getApp()

Page({
  data: {
  screenHeight: app.globalData.screenHeight,
    topHeight: app.globalData.topHeight,
    headerHeight: app.globalData.headerHeight,
    bottomHeight: app.globalData.bottomHeight,
    chooseUrl:null,
    picUrl:null
  },


  editPic() {
    wx.chooseMedia({
      mediaType:['image'],
      sourceType:['album'],
      sizeType:['original'],
      count:1,
      success:(res)=>{
        console.log(res.tempFiles[0].tempFilePath)
        wx.cropImage({
          src: res.tempFiles[0].tempFilePath, // 图片路径
          cropScale: '1:1', // 裁剪比例
          success:(res1)=>{
           console.log("导入图片成功")
           console.log(res1.tempFilePath)
           this.setData({
            picUrl:res1.tempFilePath
           })
          },
          fail(res1){
            console.log("no")
            console.log(res)
          }
        })
      }
    })
  },

  

})