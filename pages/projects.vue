<template>
  <div class="projects">
    <div class="container">
      <span class="chit">Мои работы</span>
      <div class="projects_wrapper">
        <div
          data-aos="fade-down"
          data-aos-duration="700"
          class="projects_title title"
        >
          Мои работы
        </div>
        <p-separator
          data-aos="zoom-in"
          data-aos-duration="700"
          data-aos-delay="400"
        />
        <div
          data-aos="zoom-in"
          data-aos-duration="700"
          data-aos-delay="400"
          class="projects_comment"
        >
          Представленные работы выполнены в целях обучения и усовершенствования
          навыков разработки
        </div>
        <div class="projects_row">
          <div
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-anchor-placement="top-bottom"
            v-for="p in GET_PROJECTS"
            :key="p.name"
            class="projects_item"
          >
            <div class="projects_item_img">
              <img :src="require('@/assets/images/' + p.screen)" alt="" />
            </div>
            <div class="projects_item_info">
              <h5>{{ p.name }}</h5>
              <p>{{ p.stack }}</p>
              <div class="projects_item_info_about">{{ p.comment }}</div>
              <div class="projects_item_info_btn">
                <p-btn
                  ><a target="_blank" :href="p.http"
                    >Посмотреть работу</a
                  ></p-btn
                >
              </div>
            </div>
          </div>
        </div>
        <p-separator
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-anchor-placement="bottom-bottom"
        />
        <div
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-anchor-placement="bottom-bottom"
          class="projects_this"
        >
          Этот сайт разработан с использованием Nuxt.js
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import PBtn from "../components/p-btn.vue";
import pSeparator from "../components/p-separator.vue";
export default {
  components: { pSeparator, PBtn },
  computed: {
    ...mapGetters({
      GET_PROJECTS: "projects/GET_PROJECTS",
    }),
  },
};
</script>

<style lang="scss" scoped>
.projects {
  &_wrapper {
    padding: 10rem 0;
  }
  &_row {
    padding: 5rem 0;
  }
  &_comment {
    font-size: 1.6rem;
    text-align: center;
    margin-top: 5rem;
    text-shadow: 0px 2px 1px $black;
  }
  &_item {
    display: flex;
    justify-content: space-between;
    margin-bottom: 5rem;
    border: 3px solid $breeze;
    padding: 1.5rem 1rem;
    box-shadow: 0px 10px 15px $black;
    border-radius: 20px;
    &:last-child {
      margin: 0;
    }
    &_img {
      flex: 0 1 50%;
      img {
        width: 100%;
        box-shadow: 0px 1px 3px $black;
        border-radius: 20px;
      }
    }
    &_info {
      flex: 0 1 45%;
      display: flex;
      flex-direction: column;

      h5 {
        text-align: center;
        font-size: 2.3rem;
        color: $breeze;
        font-weight: 600;
        text-shadow: 0px 2px 3px $black;
        line-height: 140%;
        margin-bottom: 1rem;
      }
      p {
        text-align: center;
        font-size: 1.8rem;
        color: $grey;
        line-height: 130%;
        text-shadow: 0px 2px 1px $black;
      }
      &_about {
        text-align: center;
        flex-basis: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.5rem;
        text-shadow: 0px 2px 1px $black;
        line-height: 140%;
      }
      &_btn {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        button {
          border-radius: 5px;
        }
      }
    }
  }
  &_this {
    text-align: center;
    margin-top: 6rem;
    font-size: 1.8rem;
    color: $grey;
    line-height: 130%;
    text-shadow: 0px 2px 1px $black;
  }
}
@media (max-width: 767px) {
  .projects {
    &_wrapper {
      padding: 5rem 0;
    }
    &_item {
      flex-direction: column-reverse;

      &_info {
        margin-bottom: 3rem;
        &_about {
          margin-bottom: 1rem;
        }
        &_btn {
          button {
            width: 100%;
          }
        }
      }
    }
  }
}
</style>
