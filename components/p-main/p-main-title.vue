<template>
  <div data-aos="fade-right" data-aos-duration="600" class="main_title">
    <h1>Данил Винокуров</h1>
    <h2>Начинающий Fronted-разработчик</h2>
    <h3>JavaScript, Vue.js</h3>
    <p-separator />
    <p>
      Привет! Я начинающий Fronted-разработчик! Начал изучать разработку с осени
      2020 года и никак не могу остановиться. На этом сайте вы узнаете немного
      обо мне, о моих достижениях и как со мной связаться!
    </p>
    <p-btn class="main_btn">
      <nuxt-link to="/about">Подробнее обо мне</nuxt-link></p-btn
    >
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.main_title {
  flex: 0 1 43.5%;
  h1 {
    font-size: 4.8rem;
    text-shadow: 0px 4px 5px $black;
    font-weight: 700;
    color: $breeze;
    margin-bottom: 1.5rem;
  }
  h2 {
    font-size: 1.8rem;
    color: $grey;
    margin-bottom: 0.5rem;
    line-height: 130%;
    text-shadow: 0px 2px 1px $black;
  }
  h3 {
    font-weight: 300;
    color: $grey;
    line-height: 130%;
    text-shadow: 0px 2px 1px $black;
  }
  p {
    line-height: 140%;
    font-size: 1.6rem;
    text-align: center;
    margin-bottom: 1.5rem;
  }
}
.main_btn {
  display: flex;
  margin: 0 auto;
}
@media (max-width: 767px) {
  .main_title {
    text-align: center;
    margin-bottom: 4rem;
  }
}
</style>
