<template>
  <footer class="footer">
    <div class="container">
      <div class="footer_wrapper">
        <div class="footer_title">
          <h4>Данил Винокуров</h4>
          <h5>Fronted-разработчик</h5>
        </div>
        <div class="footer_subtitle">Открыт для предложений</div>
        <div class="footer_social">
          <a target="_blank" href="https://vk.com/id81786838"
            ><img src="@/assets/images/vk.png" alt="vk"
          /></a>
          <a target="_blank" href="https://www.instagram.com/vinokurov.dnl/"
            ><img src="@/assets/images/instagram.png" alt="inst"
          /></a>
          <a target="_blank" href="https://t.me/jarer0n"
            ><img src="@/assets/images/telegram.png" alt="telegram"
          /></a>
          <a target="_blank" href="https://github.com/jarer0n"
            ><img src="@/assets/images/github.png" alt="GitHub"
          /></a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss">
.footer {
  background: $dark;
  &_wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3rem 0;
  }
  &_title {
    h4 {
      color: $breeze;
      font-size: 1.8rem;
      font-weight: 600;
      text-shadow: 0px 3px 5px $black;
      line-height: 140%;
      margin-bottom: 0.5rem;
    }
    h5 {
      font-size: 1.3rem;
      font-weight: 300;
      color: $grey;
      text-shadow: 0px 2px 3px $black;
    }
  }
  &_subtitle {
    font-weight: 300;
    color: $grey;
    text-shadow: 0px 2px 3px $black;
  }
  &_social {
    a {
      margin-left: 1.7rem;
      &:first-child {
        margin-left: 0;
      }
      img {
        width: 4rem;
        border-radius: 100%;
        box-shadow: 0px 2px 6px $black;
      }
    }
  }
}
@media (max-width: 767px) {
  .footer {
    &_wrapper {
      flex-direction: column;
      padding: 1.5rem 0 2rem 0;
    }
    &_title {
      h5 {
        margin-bottom: 1.5rem;
        text-align: center;
      }
    }
    &_subtitle {
      margin-bottom: 1.5rem;
    }
  }
}
</style>
