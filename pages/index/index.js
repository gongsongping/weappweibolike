//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    tweets:[],
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
  //事件处理函数
  totweet: function(e) {
    let twt = e.currentTarget.dataset.tweet
    wx.navigateTo({
      url: '../tweet/tweet?twt='+JSON.stringify(twt)
    })
  },
  tousertweets: function(e) {
    let twt = e.currentTarget.dataset.tweet
    // console.log(twt)
    wx.navigateTo({
      url: '../usertweets/usertweets?twt=' + JSON.stringify(twt)
    })
  },
  onLoad: function () {
    this.setData({
      tweets: this.data.list
    })
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  onPullDownRefresh: function () {
    console.log("pulldown")
    wx.showNavigationBarLoading()
    wx.showLoading({
      title: '加载中',
    })
    setTimeout(()=>{
      wx.hideNavigationBarLoading()
      wx.hideLoading()
    },1000)
    this.setData({
      tweets: this.data.list
    })
  }, 
  onReachTop: function () {
    console.log("下拉");    
  },
  onReachBottom: function () {
    console.log("上滑");
    // let tws = this.tweets.concat(this.list)
    this.setData({
      tweets: this.data.tweets.concat(this.data.list)
    })
    // wx.showToast({
    //   title: '成功',
    //   icon: 'success',
    //   duration: 1000
    // })
  }  
})
