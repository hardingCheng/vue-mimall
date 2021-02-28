<template>
  <div class="order-header">
    <div class="container clearfix">
      <div class="header-logo">
        <a href="/#/index"></a>
      </div>
      <div class="header-title">
        <h2>{{title}}
          <slot name="tip"></slot>
        </h2>
      </div>
      <div class="header-user">
        <a href="javascript:;">{{username}}</a>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'OrderHeader',
  props: {
    title: {
      type: String
    }
  },
  data() {
    return {
    }
  },
  computed:{
    ...mapState(['username'])
  }
}
</script>

<style lang="scss" scoped>
  .order-header {
    padding:30px 0;
    border-bottom:2px solid #FF6600;
    .header-logo{
      float:left;
    }
    .header-title, .header-user{
      display:inline-block;
      height:55px;
      line-height: 55px;
    }
    .header-title {
      float:left;
      margin-left:54px;
      h2{
        font-size:28px;
        color:#333333;
      }
      span{
        font-size:14px;
        margin-left:17px;
        color:#999999;
        font-weight:200;
      }
    }
    .header-user {
      float:right;
      a{
        color:#666666;
        font-size:16px;
      }
    }
  }
</style>
