// pages/list/list.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //页面信息
    pageInfo: {},
    //列表数据
    listData: [],
    //是否还有更多数据
    hasMore:true,
    //页面初始数据
    pageNo:1,
    pageSize:15
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getPageInfo(options)
  },
  onReady() {
    if (this.data.pageInfo.name) {
      wx.setNavigationBarTitle({
        title: this.data.pageInfo.name,
      })
    }
  },
  onReachBottom(){
    if (this.data.hasMore) {
      this.getListData()
    }
  },
  getPageInfo(options) {
    app.fetch(`/categories/${options.cat}`).then(res => {
      this.setData({
        pageInfo: res.data
      })
      wx.setNavigationBarTitle({
        title: res.data.name,
      })
      this.getListData(options)
    })
  },
  getListData(options=this.data.pageInfo.id) {
    debugger
    const param={
      _page:this.data.pageNo,
      _limit:this.data.pageSize
    }
    app.fetch(`/categories/${options.cat}/shops`,param).then(res => {
      debugger
      const hasMore=this.data.pageNo*this.data.pageSize<=parseInt(res.header['x-total-count'])?true:false
      this.setData({
        listData:this.data.listData.concat(res.data),
        hasMore:hasMore,
        pageNo:hasMore?this.data.pageNo++:this.data.pageNo,
      })
      
    })
  }

})