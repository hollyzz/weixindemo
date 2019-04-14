Page({
  data: {
    imgUrls: [
      'apple.jpeg',
      'apple.jpeg',
      'apple.jpeg'
    ],
    // 产品列表
    productList: [
      {
        title: '苹果',
        value: 'apple',
      },
      {
        title: '雪梨',
        value: 'pear',
      },
      {
        title: '葡萄',
        value: 'grape',
      }
    ]

  },

  /** 点击轮播图 */
  handleClickBanner(e) {
    const index = e.currentTarget.dataset.index
    const img = this.data.imgUrls[index]
    // TODO: 跳转链接
  },

  /** 点击产品列表 */
  handleClickProduct(e) {
    const index = e.currentTarget.dataset.index
    const prod = this.data.productList[index]
    wx.navigateTo({
      url: '/pages/detail/detail?prodId=' + prod.value
    })
  }
})