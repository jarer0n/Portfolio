<template>
  <header class="header">
    <div class="container">
      <div class="header_wrapper">
        <p-header-home v-if="this.$route.path !== '/'" />
        <p-header-links />
      </div>
    </div>
  </header>
</template>

<script>
import pHeaderHome from "./p-header-home.vue";
export default {
  components: { pHeaderHome },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
.header {
  &_wrapper {
    display: flex;
    align-items: center;
    border-bottom: 2px solid $breeze;
  }
}
</style>
