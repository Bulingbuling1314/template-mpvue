<template>
  <div class="home">
    <img class="home_head" src="/static/images/home-head.png" alt="">
    <div class="home_content">
      <div class="content_title">适合人群</div>
      <div class="flex">
        <div class="flex_item" v-for="(item, index) in navList" :key="index">
          <img :src="item.imgPath" alt="">
          <p>{{ item.title }}</p>
        </div>
      </div>
      <div class="content_title">常见问题</div>
      <van-cell v-for="(item, index) in cellList" :key="index" :title="item.title" is-link />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      navList: [
        { id: 1, imgPath: '/static/images/nav-default.png', title: '微商&电商' },
        { id: 2, imgPath: '/static/images/nav-default.png', title: '直播网红' },
        { id: 3, imgPath: '/static/images/nav-default.png', title: '快递&骑手' },
        { id: 4, imgPath: '/static/images/nav-default.png', title: '自由经纪人' },
        { id: 5, imgPath: '/static/images/nav-default.png', title: '兼职个人' },
        { id: 6, imgPath: '/static/images/nav-default.png', title: '包工头' },
        { id: 7, imgPath: '/static/images/nav-default.png', title: '自由职业者' },
        { id: 8, imgPath: '/static/images/nav-default.png', title: '个体经营者' },
        { id: 9, imgPath: '/static/images/nav-default.png', title: '保险代理人' }
      ],
      cellList: [
        { id: 1, title: '我是标题我是标题我是标题我是标题' },
        { id: 2, title: '我是标题我是标题我是标题我是标题' },
        { id: 3, title: '我是标题我是标题我是标题我是标题' },
        { id: 4, title: '我是标题我是标题我是标题我是标题' },
        { id: 5, title: '我是标题我是标题我是标题我是标题' },
        { id: 6, title: '我是标题我是标题我是标题我是标题' },
        { id: 7, title: '我是标题我是标题我是标题我是标题' }
      ]
    }
  },
  created () {
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>
  .home {
    font-size: 16px;
    background-color: @baseBackground;
    padding-bottom: 20px;
    .home_head {
      width: 100%;
      height: 169px;
    }
    .home_content {
      width: 100%;
      padding: 0 8px;
      box-sizing: border-box;
      .content_title {
        position: relative;
        width: 100%;
        line-height: 56px;
        padding-left: 16px;
        font-size: 16px;
        font-weight: 700;
        box-sizing: border-box;
        &::before {
          content: "";
          position: absolute;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
          width: 3px;
          height: 16px;
          background-color: #FF7302;
          border-radius: 8px;
        }
      }
      .flex {
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        .flex_item {
          width: 32%;
          padding: 24px;
          box-sizing: border-box;
          text-align: center;
          font-size: 10px;
          margin-bottom: 11px;
          background-color: #fff;
          img {
            width: 25px;
            height: 25px;
            margin-bottom: 14px;
          }
        }
      }
    }
  }
</style>
