<template>
  <div id="myrecharge">
    <transition name="childtranslate">
      <router-view class="my-recharge-childview"></router-view>
    </transition>
    <div class="header">
      <img src="../my/assets/back.png" alt="" class="back" @click="back">
    	<headbar title="订单详情" custombg="header-bg"></headbar>
    </div>
    <div class="my-recharge-content">
    	<div class="box">
        <div>购买商品<span>待付款</span></div>
        <div>
          <div></div>
          <p>升级成为VIP会员</p>
          <p>期限为一年</p>
          <p>￥100</p>
        </div>
      </div>
      <button @click="toPay">立即支付</button>
    </div>
  </div>
</template>
<script type="text/javascript">
import Header from '../common/header/Header.vue';
import router from '../../router/index.js';

export default {
  data() {
    return {
    }
  },
  components: {
    headbar: Header
  },
  methods: {
    // 返回上一页
    back() {
      router.go(-1);
    },
    // 支付
    toPay() {
      router.push('/upgrade/recharge/paySuccess');
    }
  }
}
</script>
<style lang="css" type="text/css" scoped>
.header-bg{
  background:#D00009
}
.my-recharge-childview{
  position: fixed;
  top: 0;
  z-index: 200;
  width: 100%;
  height: 100%;
  /*overflow-y: scroll;*/
}
.childtranslate-enter-active {
  transition: all .5s ease;
}
.childtranslate-leave-active {
  transition: all .4s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.childtranslate-enter, .childtranslate-leave-to
/* .slide-fade-leave-active for <2.1.8 */ {
  transform: translateX(100%);
  /*opacity: 0;*/
  /*width:0;*/
}
#myrecharge {
	padding-top: .45rem;
	font-size: .14rem;
	height: 100%;
	background: #f1f1f1;
}
a{
	color: #a3a3a3
}
.back {
	position: fixed;
	z-index: 100;
	top: .13rem;
	left: .1rem;
	width: .1rem;
	height: .18rem;
}
.box{
  padding: .1rem;
  background: #fff;
}
.box>div:first-child{
  padding-bottom: .08rem;
  border-bottom: 1px solid #C4C6C9;
  color: #636466;
}
.box>div:first-child span:last-child{
  float: right;
}
.box>div:last-child{
  overflow: hidden;
  margin-top: .1rem;
}
.box>div:last-child div{
  float: left;
  width: .7rem;
  height: .7rem;
  background: #EDEFF0 url(../my/assets/grade_vip.png) no-repeat center center;
}
.box>div:last-child p{
  margin-left: .8rem;
}
.box>div:last-child p:nth-child(2){
  font-size: .16rem;
}
.box>div:last-child p:nth-child(3){
  margin: .1rem .8rem;
  font-size: .12rem;
  color:#88939A;
}
.box>div:last-child p:nth-child(4){
  font-size: .16rem;
  color: #FF0C00;
}
.my-recharge-content button{
  display: block;
  margin: .4rem auto;
  padding: .08rem;
  width: 90%;
  background: #E87D0B;
  color: #fff;
  font-size: .14rem;
  border:none;
  border-radius: .05rem;
  outline: none;
}
</style>
