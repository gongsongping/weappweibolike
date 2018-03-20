// pages/usertweets/usertweets.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tweet:{},
    tweets:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let twt = JSON.parse(options.twt)
    let arr = []
    arr.push(twt, twt, twt, twt, twt)
    this.setData({
      tweet: twt,
      tweets: this.data.tweets.concat(arr)
    })
    console.log(this.data.tweet,this.data.tweets,'ddddddd')
  },
  totweet: function (e) {
    let twt = e.currentTarget.dataset.tweet
    wx.navigateTo({
      url: '../tweet/tweet?twt=' + JSON.stringify(twt)
    })
  },
  tousertweets: function (e) {
    let twt = e.currentTarget.dataset.tweet
    console.log(twt)
    wx.navigateTo({
      url: '../usertweets/usertweets?twt=' + JSON.stringify(twt)
    })
  },
  onReachTop: function () {
    console.log("下拉");
  },
  onReachBottom: function () {
    console.log("上滑");
    let arr = []
    arr.push(this.data.tweet, this.data.tweet, this.data.tweet, this.data.tweet, this.data.tweet)
    this.setData({
      tweet: this.data.tweet,
      tweets: this.data.tweets.concat(arr)
    })
  },  
  // onPullDownRefresh: function () {
  //   console.log("pulldown")
  //   wx.showNavigationBarLoading()
  //   wx.showLoading({
  //     title: '加载中',
  //   })
  //   setTimeout(() => {
  //     wx.hideNavigationBarLoading()
  //     wx.hideLoading()
  //   }, 1000)
  //   this.setData({
  //     tweets: this.data.list
  //   })
  // },
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

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})