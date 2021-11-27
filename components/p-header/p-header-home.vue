<template>
  <div>
    <nuxt-link class="header-home_link" to="/">На главную</nuxt-link>
    <nuxt-link class="header-home_link_mobile" to="/"
      ><img src="@/assets/images/home.svg" alt="home"
    /></nuxt-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.header-home_link {
  color: $white;
  font-size: 1.7rem;
  font-weight: 600;
  color: $breeze;
  transition: all 0.2s ease;
  text-shadow: 0px 0px 7px black;
  &:hover {
    color: $blue;
  }
  &_mobile {
    display: none;
  }
}
@media (max-width: 440px) {
  .header-home_link {
    display: none;
    &_mobile {
      display: block;
      img {
        width: 2.5rem;
      }
    }
  }
}
</style>
