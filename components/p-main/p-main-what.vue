<template>
  <div class="main-what">
    <div class="main-what_title title">Что я умею?</div>
    <div class="main-what_hr"></div>
    <div class="main-what_wrapper">
      <p-main-what-item
        v-for="project in fewProjects"
        :key="project.id"
        :project_item="project"
      />
    </div>
    <p-btn
      data-aos="fade-up"
      data-aos-duration="700"
      data-aos-anchor-placement="bottom-bottom"
      class="main-what_btn"
      ><nuxt-link to="/projects">Посмотреть все работы</nuxt-link></p-btn
    >
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import PBtn from "../p-btn.vue";
import pMainWhatItem from "./p-main-what-item.vue";
export default {
  components: { pMainWhatItem, PBtn },
  data() {
    return {
      fewProjects: [],
    };
  },
  computed: {
    ...mapGetters({
      GET_PROJECTS: "projects/GET_PROJECTS",
    }),
  },
  mounted() {
    this.fewProjects = this.GET_PROJECTS.slice(0, 2);
  },
};
</script>

<style lang="scss" scoped>
.main-what {
  padding: 6rem 0;
  &_hr {
    height: 4px;
    background: linear-gradient(to right, $grey, $breeze, $grey);
    margin: 3rem 0;
  }
  &_wrapper {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 7rem;
  }
  &_btn {
    display: block;
    margin: 0 auto;
  }
}
@media (max-width: 767px) {
  .main-what {
    &_wrapper {
      flex-direction: column;
    }
  }
}
</style>
