<template>
  <button class="btn"><slot></slot></button>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.btn {
  background: $breeze;
  padding: 0.4rem 1rem;
  font-size: 1.7rem;
  color: $white;
  font-weight: 300;
  box-shadow: 0px 3px 3px $black;
  text-shadow: 0px 0px 8px $black;
  transition: all 0.2s ease;
  a {
    color: $white;
  }
  &:hover {
    background: $blue;
    box-shadow: 0px 0px 20px $blue, 0px 4px 3px $black;
  }
}
</style>
