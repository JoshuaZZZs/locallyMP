const app=getApp()
Page({
  data:{
    //轮播图数据
    slidesData:[],
    //菜单数据
    menuData:[]

  },
  onLoad:function(){
   this.getSwiperData()
   this.getMenuData()
  },
  //获取轮播图数据
  getSwiperData(){
    app.fetch('/slides').then(res=>{
      if (res.statusCode==200) {
        this.setData({slidesData:res.data})
      }else{
        console.error(res.errMsg)
      }
    })
  },
  //获取选项菜单数据
  getMenuData(){
    app.fetch('/categories').then(res=>{
      if (res.statusCode==200) {
        this.setData({menuData:res.data})
      }else{
        console.error(res.errMsg)
      }
    })
  },
})