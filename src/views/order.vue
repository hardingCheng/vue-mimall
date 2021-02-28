<template>
 <div id="order">
   <router-view />
   <nav-footer/>
 </div>
</template>

<script>
import OrderHeader from '@/components/OrderHeader'
import NavFooter from '@/components/NavFooter'
export default {
  name: 'order',
  components: { NavFooter, OrderHeader }
}
</script>

<style scoped>

</style>
