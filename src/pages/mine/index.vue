<template>
  <div class="mine">
    <div class="mine_head">
      <img src="/static/images/avatar.png" alt="">
      <p>小马哥</p>
    </div>
    <div class="mine_money">
      <p>总收款（元）</p>
      <h2>2341.30</h2>
      <p><i>!</i> <span>数据是您在云智薪平台历史已收款的总金额</span> </p>
    </div>
    <van-cell title="我的任务" is-link />
    <van-cell title="收款记录" is-link />
    <van-cell title="签约信息" is-link />
    <van-cell title="手机号码" is-link />
    <van-cell title="实名认证" is-link />
    <van-cell title="关于我们" is-link />
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  }
}
</script>
<style lang="less" scoped>
.mine {
  background-color: @baseBackground;
  .mine_head {
    width: 100%;
    height: 189px;
    background-color: rgb(218, 105, 34);
    text-align: center;
    img {
      width: 48px;
      height: 48px;
    }
  }
}
</style>