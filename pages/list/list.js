// pages/list/list.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //页面信息
    pageInfo:{},
    //列表数据
    listData:[]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getPageInfo(options)
    this.getListData(options)
  },
  getPageInfo(options){
    app.fetch(`/categories/${options.cat}`).then(res=>{
                 this.setData({ pageInfo:res.data})
                 wx.setNavigationBarTitle({
                  title: res.data.name,
                })
        })
  },

  getListData(options){
    app.fetch(`/categories/${options.cat}/shops`).then(res=>{     
        this.setData({listData:res.data})
    
       })
  }

})