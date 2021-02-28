<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
import {mapActions} from 'vuex'
export default {
  name:'app',
  data(){
    return {

    }
  },
  mounted () {
    if(this.$cookie.get('userId')){
      this.getUser();
      this.getCartCount();
    }
  },
  methods:{
    getUser(){
      this.axios.get('/user').then((res={})=>{
        //this.$store.dispatch('saveUserName',res.username);
        this.saveUserName(res.username)
      })
    },
    getCartCount(){
      this.axios.get('/carts/products/sum').then((res=0)=>{
        //this.$store.dispatch('saveCartCount',res);
        this.saveCartCount(res)
      })
    },
    ...mapActions(['saveUserName','saveCartCount'])
  }
}
</script>
<style lang="scss">
  @import './assets/scss/config.scss';
  @import './assets/scss/reset.scss';
  @import './assets/scss/base.scss';
  @import './assets/scss/mixin.scss';
  @import './assets/scss/Modal.scss';
  @import './assets/scss/button.scss';
</style>
