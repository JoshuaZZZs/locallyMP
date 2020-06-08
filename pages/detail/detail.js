// pages/detail/detail.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pageInfo:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    this.getPageInfo(options)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

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
  readDetail (e) {
    wx.previewImage({
      current: '',
      urls: e.currentTarget.dataset.images.map(item=>{ return item.replace('w.h','320.320')})
    })
  }
})