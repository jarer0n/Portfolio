<template>
  <main class="main">
    <div class="container">
      <div class="main_row">
        <p-main-title />
        <p-main-photo />
      </div>
      <p-main-what />
    </div>
  </main>
</template>

<script>
import PBtn from "../components/p-btn.vue";
import pSeparator from "../components/p-separator.vue";
import { mapGetters } from "vuex";
import PMainWhat from "../components/p-main/p-main-what.vue";
export default {
  components: { pSeparator, PBtn, PMainWhat },
  computed: {
    ...mapGetters({
      getWorks: "works/getWorks",
    }),
  },
};
</script>

<style lang="scss">
.main {
  padding: 10rem 0;
  &_row {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
@media (max-width: 767px) {
  .main {
    padding: 5rem 0;
    &_row {
      flex-direction: column;
    }
  }
} ;
</style>
