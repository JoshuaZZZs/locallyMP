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
    //搜索关键字
    query:''
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getPageInfo(options)
  },
  onReady() {
    //页面数据完成时设置页面名称
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
    // 重置页面所有信息
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
  //用户搜索函数
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
//获取页面信息
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
  //获取列表信息
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