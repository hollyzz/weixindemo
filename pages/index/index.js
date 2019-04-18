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
        img: '../images/apple.jpeg',
        value: 'apple2',
      },
      {
        title: '雪梨',
        img: '../images/dog.jpeg',
        value: 'pear3',
      },
      {
        title: '雪梨收到了会计法熟练度看风景都是龙卷风',
        img: '../images/dog.jpeg',
        value: 'pear1',
      },
      {
        title: '雪梨',
        img: '../images/dog.jpeg',
        value: 'pear4',
      },
      {
        title: '葡萄',
        img: '../images/apple.jpeg',
        value: 'grape5',
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