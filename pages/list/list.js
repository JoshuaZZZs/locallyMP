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
    isLoading:false,
    //页面初始数据
    pageNo:1,
    pageSize:15,
    query:''
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
  /**
   * 
   * 滑动底部刷新
   */
  onReachBottom(){
    if (this.data.hasMore&&!this.data.isLoading) {
      this.getListData()
    }
  },
    /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    this.setData({
      listData: [],
      //是否还有更多数据
      hasMore:true,
      isLoading:false,
      //页面初始数据
      pageNo:1,
      pageSize:15
    })
    this.getListData().then(
      wx.stopPullDownRefresh()
    )
  },
search(e){
  this.setData({
    listData: [],
    //是否还有更多数据
    hasMore:true,
    isLoading:false,
    //页面初始数据
    pageNo:1,
    pageSize:15
  })
  this.setData({query:e.detail.value})
  this.getListData()
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
  getListData(options=this.data.pageInfo) {
    
    this.setData({isLoading:true})
    const param={
      _page:this.data.pageNo,
      _limit:this.data.pageSize
    } 
    
    this.data.query?param.q=this.data.query:''
    const id=options.cat||options.id
    return app.fetch(`/categories/${id}/shops`,param).then(res => {
      const hasMore=this.data.pageNo*this.data.pageSize<=parseInt(res.header['x-total-count'])?true:false
      this.setData({
        listData:this.data.listData.concat(res.data),
        hasMore:hasMore,
        pageNo:hasMore?this.data.pageNo+1:this.data.pageNo,
        isLoading:false
      })
     

    })
  }

})