<template>
  <div id="app">
    <!-- <login></login> -->
    <router-view></router-view>
  </div>
</template>

<script>
import router from './router/router'
import store from './store/index'
export default {
  name: 'app',
  components:{
  },
  router,
  store
}
</script>

<style>

</style>
