<template>
  <transition
    name="Popup"
    appear
  >
    <div class="Popup">
      <div class="inner">
        <slot />
        <div
          class="closeButton"
          @click="$emit('close')"
        />
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Popup',
}
</script>

<style lang="scss" scoped>
@import "@/assets/_variables";

.Popup {
  background-color: rgba($black, 0.75);
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
  width: 100%;
  height: 100%;
  &-enter-active,
  &-leave-active {
    transition: opacity 250ms ease-out;
  }
  &-enter,
  &-leave-to {
    opacity: 0;
  }

  .inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 3rem 6rem;
    position: relative;
  }

  .closeButton {
    background: url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 24 24"><path fill="%23ffffff" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" /></svg>') no-repeat center center;
    cursor: pointer;
    position: absolute;
    top: 1rem;
    right: 1rem;
    width: 3rem;
    height: 3rem;
  }
}
</style>
