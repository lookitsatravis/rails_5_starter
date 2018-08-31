<template>
  <div class="page-not-found">
    <h3>Perhaps you can go <router-link :to="{name: 'Home'}">home</router-link> and try once more?</h3>
  </div>
</template>

<script>
  export default {
    name: 'PageNotFound',
  };
</script>

<style lang="scss" scoped>

</style>
