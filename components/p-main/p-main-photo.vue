<template>
  <div
    data-aos="fade-left"
    data-aos-anchor="#example-anchor"
    data-aos-duration="600"
    data-aos-delay="500"
    class="main_photo"
  >
    <div class="main_photo_wrapper">
      <img src="@/assets/images/main_photo3.jpg" alt="" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.main_photo {
  flex: 0 1 47%;
  &_wrapper {
    position: relative;
    z-index: 1;
    &::after {
      position: absolute;
      content: " ";
      width: 100%;
      height: 30px;
      bottom: -31px;
      left: 0;
      -webkit-border-top-left-radius: 20px;
      -webkit-border-top-right-radius: 20px;
      -moz-border-radius-topleft: 20px;
      -moz-border-radius-topright: 20px;
      border-top-left-radius: 20px;
      border-top-right-radius: 20px;
      background: -moz-linear-gradient(
        to top,
        rgba(0, 0, 0, 0.3) 0%,
        rgba(255, 255, 255, 0) 100%
      );
      background: linear-gradient(
        to top,
        rgba(0, 0, 0, 0.3) 0%,
        rgba(255, 255, 255, 0) 100%
      );
      background: -webkit-gradient(
        linear,
        left top,
        left bottom,
        color-stop(0%, rgba(0, 0, 0, 0.3)),
        color-stop(100%, rgba(255, 255, 255, 0))
      );
    }

    img {
      width: 100%;
      opacity: 0.8;
      -webkit-box-shadow: inset 0 0 4px rgba(0, 0, 0, 1),
        inset 0 2px 1px rgba(255, 255, 255, 0.5),
        inset 0 -9px 2px rgba(0, 0, 0, 0.6),
        inset 0 -12px 2px rgba(255, 255, 255, 0.3);
      -moz-box-shadow: inset 0 0 4px rgba(0, 0, 0, 1),
        inset 0 2px 1px rgba(255, 255, 255, 0.5),
        inset 0 -9px 2px rgba(0, 0, 0, 0.6),
        inset 0 -12px 2px rgba(255, 255, 255, 0.3);
      box-shadow: inset 0 0 4px rgba(0, 0, 0, 1),
        inset 0 2px 1px rgba(255, 255, 255, 0.5),
        inset 0 -9px 2px rgba(0, 0, 0, 0.6),
        inset 0 -12px 2px rgba(255, 255, 255, 0.3), 0px 0px 3px $black;
      -webkit-border-radius: 20px;
      -moz-border-radius: 20px;
      border-radius: 20px;
      border: 2rem solid rgba($color: $white, $alpha: 1);
      border-bottom: 4rem solid rgba($color: $white, $alpha: 1);
    }
  }
}
</style>
