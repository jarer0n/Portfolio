<template>
  <div class="hr">
    <hr />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.hr {
  border: none;
  height: 3px;
  background: linear-gradient(to right, $grey, $breeze, $grey);
  margin: 4rem 0;
  position: relative;
  z-index: 1;
  box-shadow: 0px 3px 6px $black;
  &::before,
  &::after {
    content: "";
    display: inline-block;
    width: 40px;
    height: 40px;
    border: 3px solid $breeze;
    position: absolute;
    z-index: 2;
    left: 50%;
    top: 1.5px;
    transform: translate(-50%, -50%) rotate(45deg);
    background: $dark;
    box-shadow: 4px 4px 6px $black;
  }
  &::after {
    background: $breeze;
    width: 10px;
    height: 10px;
    animation: anim-hr 4s linear infinite;
    border: none;
  }
  @keyframes anim-hr {
    0% {
      box-shadow: 0px 0px 4px $blue;
      background: lighten($color: $breeze, $amount: 20%);
    }
    50% {
      box-shadow: 0px 0px 15px $blue;
      background: lighten($color: $breeze, $amount: 10%);
    }
    100% {
      box-shadow: 0px 0px 30px $blue;
      background: lighten($color: $breeze, $amount: 1);
    }
  }
}
</style>
