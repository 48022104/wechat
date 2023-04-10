const app = getApp()
Page({
  data: {
    screenHeight: app.globalData.screenHeight,
    topHeight: app.globalData.topHeight,
    headerHeight: app.globalData.headerHeight,
    bottomHeight: app.globalData.bottomHeight,
    heightList:[],
    leftList:[],
    rightList:[],
    leftNum:0,
    rightNum:0,
    flag:10,
    btn:1,
    list: [
            {title: '1',url: 'http://101.35.228.91/png/1.jpg'}, 
            {title: '2',url: 'http://101.35.228.91/png/2.jpg'},
            {title: '3',url: 'http://101.35.228.91/png/3.jpg'},
            {title: '4',url: 'http://101.35.228.91/png/4.jpg'},
            {title: '5',url: 'http://101.35.228.91/png/5.jpg'},
            {title: '6',url: 'http://101.35.228.91/png/6.jpg'},
            {title: '7',url: 'http://101.35.228.91/png/7.jpg'},
            {title: '8',url: 'http://101.35.228.91/png/8.jpg'}, 
            {title: '9',url: 'http://101.35.228.91/png/9.jpg'},
            {title: '10',url: 'http://101.35.228.91/png/10.jpg'}
           ],
  },
  refresh:function () {
    console.log("refresh")
    this.onLoad()

  },
  
  gogogo:function () {
    var arr = this.data.heightList;
    setTimeout(() => {
      var query = wx.createSelectorQuery();
      query.selectAll('.goods_in').boundingClientRect()
      query.exec((res)=> { 
          for (var i = 0; i < res[0].length; i++) {
            arr.push(parseInt( res[0][i].height))
          } 
          this.setData({
            heightList:arr
          })//view高度列表完成
          var lll=this.data.leftList, rrr=this.data.rightList;
          for (var i = 0; i < res[0].length; i++) {
           if(this.data.leftNum<= this.data.rightNum){
             lll.push(this.data.list[i])
             this.setData({
               leftList:lll,
               leftNum:this.data.leftNum + (this.data.heightList[i]) + 10 ,
             })
             
           } else{
            rrr.push(this.data.list[i])
             this.setData({
               rightList:rrr,
               rightNum:this.data.rightNum + (this.data.heightList[i] + 10),
             })
            
           }
           if(i == (res[0].length-1)){
            
             setTimeout(() => { this.setData({
              list:[],
              heightList:[],
            }) },1000)
           }
         }
      })
     
    }, 500)  
  },
  onReady: function () {
   this.gogogo()
  },
  addGoods:function () {
    var flagnum = this.data.flag;
    var flagnumArr = [];
     if(flagnum>=50){
      this.setData({
        btn:0
      }) 
       return
     }
     else{
      for (var i = 1; i < 11; i++) {
        flagnumArr.push( {title: flagnum + i,url: 'http://101.35.228.91/png/' + (flagnum + i) + '.jpg'}  )
        if(i == 10){
          setTimeout(() => { this.setData({
           list:flagnumArr,
           flag:flagnum + 10
         }) 
        
        this.gogogo()
      },500)
        }
      } 
     }
  },
  goBack(){
    wx.navigateBack({
      delta: 1
    });
  },
  
})