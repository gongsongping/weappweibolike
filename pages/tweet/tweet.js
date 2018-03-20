// pages/tweet/tweet.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    test:'test',
    tweet: {},
    comments:[],
    list: [
      {
        name: '聪聪',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        images: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        tweet: '评论里留下你的〖生日和所在地〗。看到有缘的就找ta聊聊呗！遇到同一天生日的，互粉一个，以后过生日就不孤单啦！'
      },
      {
        name: '慕小白',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        images: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        tweet: '说一件你经历的，最幸运爆棚的事！！！让我们沾沾喜气！出生前追上卵子那次不算 ​​​ ​​​​'
      },
      {
        name: '龙仔',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg',
        images: 'https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg',
        tweet: '低潮时没有，但生死悠关时有一句话很给力，13年出车祸的那天，我被120送到医院，快失去意识的时候，我感觉我的眼睛像虚焦的镜头一样，什么都是模糊的，能看的稍微清楚点的以及现在唯一能记在脑海里的就是医生和护士的白大褂。然后模糊的听见一句话，不知道是谁说的“赶紧的吧！你妈买彩票中奖了！” '
      },
      {
        name: '妻弄',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
        images: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
        tweet: '以前我很怕得罪人，不敢迟到，不敢要求，不敢说错话，怕冷场，怕对方不高兴，诚惶诚恐的面对所有人。遗憾的是，我并没有得到相应的尊重。后来，我开始宠爱和迁就自己，你迟到我先走，不想做绝不勉强，冷场就玩手机，多顾个人感受，其他人关我屁事。然后发现，我不但被重视，而且更开心了。——易术 '
      },
      {
        name: '妻弄',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
        images: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
        tweet: '以前我很怕得罪人，不敢迟到，不敢要求，不敢说错话，怕冷场，怕对方不高兴，诚惶诚恐的面对所有人。遗憾的是，我并没有得到相应的尊重。后来，我开始宠爱和迁就自己，你迟到我先走，不想做绝不勉强，冷场就玩手机，多顾个人感受，其他人关我屁事。然后发现，我不但被重视，而且更开心了。——易术 '
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      tweet: JSON.parse(options.twt),
      comments: this.data.list
    })
  },
  tousertweets: function (e) {
    let twt = e.currentTarget.dataset.tweet
    wx.navigateTo({
      url: '../usertweets/usertweets?twt=' + JSON.stringify(twt)
    })
  },
  onReachBottom: function () {
    console.log("上滑");
    // let tws = this.tweets.concat(this.list)
    this.setData({
      comments: this.data.comments.concat(this.data.list)
    })

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
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})