<template>
  <div class="about">
    <div class="container">
      <span class="chit">Обо мне</span>
      <div class="about_wrapper">
        <div
          data-aos="fade-down"
          data-aos-duration="700"
          class="about_title title"
        >
          Обо мне
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
          class="about_entry"
        >
          <p>
            Я, Винокуров Данил, родился 17 июля 1992 года в очень холодном
            городе Норильск Красноярского края.
          </p>
          <p>
            В 2009 году после окончания школы перебрался в г.Жигулёвск Самарской
            области.
          </p>
        </div>
        <div class="about_info">
          <div data-aos="fade-right" data-aos-duration="700">
            <span>Образование: </span>
            <p>
              В 2013 году закончил бакалавриат по специальности "Технологические
              машины и оборудование" в Поволжском Государственном Университете
              Сервиса (ПВГУС)
            </p>
          </div>
          <div data-aos="fade-right" data-aos-duration="1000">
            <span>Опыт работы: </span>
            <p>
              2013г. - 2015г. работал "Мастером по ремонту оргтехники"<br />
              2016г. - по настоящее время работаю "Инженером 1 категории отдела
              развития информационных технологий" в ГКУ Самарской области
              "Главное управление социальной защиты населения Центрального
              округа"
            </p>
          </div>
          <div data-aos="fade-right" data-aos-duration="1300">
            <span>Frontend-разработка: </span>
            <p>
              Изучаю frontend-разработку с осени 2020 года. Практически все
              свободное время, с момента начала обучения, трачу на изучение
              документаций, просмотр обучающих видео и семинаров. Ежедневно
              практикуюсь, работаю на ошибками, совершенствую уже изученное.
              Опыт работы в IT помогает более точно и быстро усваивать
              информацию, разбираться с технической документацией, что
              мотивирует меня еще сильнее.
            </p>
          </div>
          <div data-aos="fade-right" data-aos-duration="1600">
            <span>Хобби: </span>
            <p>
              Летом люблю кататься на роликовых коньках, зимой - на горных
              лыжах!
            </p>
          </div>
          <div data-aos="fade-right" data-aos-duration="1900">
            <span>Семейное положение: </span>
            <p>Женат, есть ребенок.</p>
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
};
</script>

<style lang="scss" scoped>
.about {
  &_wrapper {
    padding: 10rem 0;
    font-size: 1.6rem;
    line-height: 140%;
    text-align: center;
  }
  &_entry {
    margin: 6rem 0 4rem 0;
  }
  &_info {
    text-align: left;
    p {
      margin-bottom: 2rem;
    }
    span {
      color: $breeze;
      font-size: 1.8rem;
      font-weight: 500;
      text-shadow: 0px 2px 3px $black;
    }
  }
}
@media (max-width: 767px) {
  .about {
    &_wrapper {
      padding: 5rem 0;
    }
  }
}
</style>
