
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //页面信息数据
    pageInfo:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getPageInfo(options)
  },


//获取页面所有信息
  getPageInfo(options){
    app.fetch(`/shops/${options.id}`).then(res=>{
      this.setData({
        pageInfo:res.data
      })
      wx.setNavigationBarTitle({
        title: res.data.name,
      })
    })
  },
  //点击图片时新页面打开图片
  readDetail (e) {
    wx.previewImage({
      current: '',
      urls: e.currentTarget.dataset.images.map(item=>{ return item.replace('w.h','320.320')})
    })
  }
})