<template>
  <div data-aos="fade-up" data-aos-duration="700" class="main-what_item">
    <div class="main-what_item_name">{{ project_item.name }}</div>
    <div class="main-what_item_stack">
      <span>Стек используемых технологий:</span> {{ project_item.stack }}
    </div>
    <div>
      <img :src="require('@/assets/images/' + project_item.screen)" alt="" />
    </div>
    <div class="main-what_item_link_wrapper">
      <a target="_blank" class="main-what_item_link" :href="project_item.http"
        >Посмотреть работу</a
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    project_item: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.main-what_item {
  flex: 0 1 45%;
  &_name {
    font-size: 2.1rem;
    font-weight: 500;
    color: $breeze;
    text-shadow: 0px 0px 4px $black;
    line-height: 140%;
  }
  &_stack {
    font-weight: 300;
    color: $white;
    line-height: 130%;
    text-shadow: 0px 2px 3px $black;
    line-height: 140%;
    margin-bottom: 1rem;
    span {
      font-size: 1.5rem;
      font-weight: 400;
      color: lighten($color: $grey, $amount: 5%);
    }
  }
  img {
    width: 100%;
    object-fit: cover;
    margin-bottom: 1rem;
    box-shadow: 0px 0px 8px $black;
  }
  &_link {
    color: $blue;
    transition: all 0.15s ease;
    text-align: end;
    &_wrapper {
      display: flex;
      justify-content: flex-end;
    }
    &:hover {
      text-shadow: 0px 0px 3px $black;
      color: darken($color: $blue, $amount: 5%);
    }
  }
}
</style>
