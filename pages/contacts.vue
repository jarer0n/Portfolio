<template>
  <div class="contacts">
    <div class="container">
      <span class="chit">Мои контакты</span>
      <div class="contacts_wrapper">
        <div
          data-aos="fade-down"
          data-aos-duration="700"
          class="contacts_title title"
        >
          Контакты
        </div>
        <p-separator
          data-aos="zoom-in"
          data-aos-duration="700"
          data-aos-delay="400"
        />
        <div data-aos="fade-up" data-aos-duration="700" class="contacts_row">
          <div>
            <div v-for="c in contacts" :key="c.name" class="contacts_item">
              <span class="contacts_subtitle">{{ c.name }}:</span>
              <a target="_blank" class="contacts_contact" :href="c.link">{{
                c.value
              }}</a>
            </div>
          </div>
          <div class="contacts_img">
            <img src="@/assets/images/contacts.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import pSeparator from "../components/p-separator.vue";
export default {
  components: { pSeparator },
  data() {
    return {
      contacts: [
        {
          name: "Телефон",
          value: "8 (987) 966 86-22",
          link: "tel:+79879668622",
        },
        {
          name: "Телеграм",
          value: "Написать в телеграм",
          link: "https://t.me/jarer0n",
        },
        {
          name: "Вконтакте",
          value: "Перейти на страницу ВК",
          link: "https://vk.com/id81786838",
        },
        {
          name: "Инстаграм",
          value: "Перейти в инстаграм",
          link: "https://www.instagram.com/vinokurov.dnl/",
        },
        {
          name: "GitHub",
          value: "Посетить GitHub",
          link: "https://github.com/jarer0n",
        },
        {
          name: "Эл.почта",
          value: "shonyrimo@yandex.ru",
          link: "mailto:shonyrimo@yandex.ru",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.contacts {
  &_wrapper {
    padding: 10rem 0;
  }
  &_row {
    padding: 10rem 0 0 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &_item {
    margin-bottom: 2rem;
    display: flex;
    align-items: center;
    flex: 0 1 45%;
    &:last-child {
      margin: 0;
    }
  }
  &_subtitle {
    color: $breeze;
    font-weight: 600;
    font-size: 2.1rem;
    text-shadow: 0px 2px 4px $black;
  }
  &_contact {
    color: $white;
    font-size: 1.8rem;
    text-decoration: underline;
    transition: all 0.2s ease;
    margin-left: 0.9rem;
  }
  &_img {
    flex: 0 1 50%;
    img {
      width: 100%;
      object-fit: cover;
      box-shadow: 0px 0px 8px $black;
    }
  }
}
@media (max-width: 767px) {
  .contacts {
    &_wrapper {
      padding: 5rem 0;
    }
    &_row {
      flex-direction: column-reverse;
      padding: 4rem 0;
    }
    &_img {
      margin-bottom: 4rem;
    }
  }
}
@media (max-width: 367px) {
  .contacts {
    &_subtitle {
      font-size: 1.7rem;
    }
    &_contact {
      font-size: 1.4rem;
    }
  }
}
</style>
