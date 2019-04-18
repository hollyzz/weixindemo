// detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    prod: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const prodId = (options && options.prodId) || ''
    this.loadProductDetail(prodId)
  },

  /** 加载产品数据 */
  loadProductDetail(prodId) {
    this.setData({
      prod: {
        title: prodId
      }
    })
  }
})