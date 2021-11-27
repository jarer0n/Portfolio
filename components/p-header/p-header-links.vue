<template>
  <nav class="header-links">
    <ul>
      <li>
        <nuxt-link class="header-links_link" to="/about">Обо мне</nuxt-link>
      </li>
      <li>
        <nuxt-link class="header-links_link" to="/projects"
          >Мои работы</nuxt-link
        >
      </li>
      <li>
        <nuxt-link class="header-links_link" to="/contacts">Контакты</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.header-links {
  margin: 0 0 0 auto;
  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem 0;
    font-size: 1.7rem;
    font-weight: 500;

    li {
      margin-left: 2rem;
    }
  }
  &_link {
    color: $white;
    position: relative;
    transition: text-shadow 0.1s ease-in-out 0.25s;
    &::before,
    &::after {
      content: "";
      width: 100%;
      height: 2px;
      position: absolute;
      transform: scale(0);
      background-color: $blue;
      transition: transform 0.2s ease-in-out, box-shadow 0.2s ease 0.25s;
    }
    &::before {
      top: -5px;
      left: 0;
      transform-origin: left;
      background: -webkit-linear-gradient(
        90deg,
        rgb(54, 53, 56),
        rgb(82, 214, 244) 100%
      );
      background: -moz-linear-gradient(
        90deg,
        rgb(54, 53, 56),
        rgb(82, 214, 244) 100%
      );
      background: linear-gradient(
        90deg,
        rgb(54, 53, 56),
        rgb(82, 214, 244) 100%
      );
    }
    &::after {
      bottom: -5px;
      left: 0;
      transform-origin: right;
      background: -webkit-linear-gradient(
        270deg,
        rgb(54, 53, 56),
        rgb(82, 214, 244) 100%
      );
      background: -moz-linear-gradient(
        270deg,
        rgb(54, 53, 56),
        rgb(82, 214, 244) 100%
      );
      background: linear-gradient(
        270deg,
        rgb(54, 53, 56),
        rgb(82, 214, 244) 100%
      );
    }
    &:hover {
      text-shadow: 0px 0px 5px $blue;
    }

    &:hover::after,
    &:hover::before {
      transform: scale(1);
      box-shadow: 0px 0px 13px $blue;
    }
  }
}
.header-links_link.nuxt-link-active {
  color: $breeze;
  text-shadow: 0px 2px 4px $black;
  &::after,
  &::before {
    transform: scale(1);
    box-shadow: 0px 2px 5px $black;
  }
  &:hover {
    text-shadow: 0px 2px 4px $black;
    transition: none;
  }
  &:hover::before,
  &:hover::after {
    box-shadow: 0px 2px 5px $black;
    transition: none;
  }
}
@media (max-width: 440px) {
  .header-links {
    ul {
      li {
        font-size: 1.4rem;
        margin-left: 1.3rem;
      }
    }
  }
} ;
</style>
