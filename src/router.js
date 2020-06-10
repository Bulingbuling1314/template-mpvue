module.exports = [
  {
    path: 'pages/index/index',
    config: {
      navigationBarTitleText: '首页',
      usingComponents: {
        'van-cell': '/static/vant/cell/index'
      }
    }
  },
  {
    path: 'pages/task/index',
    config: {
      navigationBarTitleText: '任务大厅'
    }
  },
  {
    path: 'pages/mine/index',
    config: {
      navigationBarTitleText: '我的',
      usingComponents: {
        'van-cell': '/static/vant/cell/index'
      }
    }
  }
]
