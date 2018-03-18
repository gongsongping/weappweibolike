//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
  bindViewTap: function () {
    wx.navigateTo({
      url: '../index/index'
    })
  },
  onLoad: function (option) {
    console.log(option.title||'notitle');
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  }
})
