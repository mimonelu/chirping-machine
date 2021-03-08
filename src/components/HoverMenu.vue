<template>
  <div
    class="HoverMenu"
    @mouseleave="onMouseLeave"
  >
    <div
      class="button"
      @click="onClickTrigger"
    >{{ label }}</div>
    <div class="menu">
      <div
        v-for="option in options"
        :key="option.value"
        class="option"
        :data-selected="option.value === value"
        @click="onClickOption(option)"
      >{{ option.label }}</div>
    </div>
  </div>
</template>

<script>
import { wait } from '@/scripts/util'

export default {
  name: 'HoverMenu',

  props: {
    options: {
      type: Array,
      default: () => ([]),
    },
    value: {},
  },

  computed: {
    label () {
      return Object.values(this.options).find((option) => this.value === option.value).label
    },
  },

  methods: {
    onMouseLeave () {
      const $menu = this.$el.querySelector('.menu')
      $menu.style.display = ''
    },

    async onClickTrigger () {
      const $menu = this.$el.querySelector('.menu')
      $menu.style.display = 'block'
      $menu.style.visibility = 'hidden'
      await wait(50)
      $menu.style.visibility = ''
      const menuRect = $menu.getBoundingClientRect()
      const diff = document.documentElement.clientHeight - menuRect.bottom
      if (diff < 0) {
        $menu.style.top = `calc(${diff}px - 1rem)`
      }
    },

    onClickOption (option) {
      this.$emit('update:value', option.value)
      if (this.value !== option.value) {
        this.$emit('change')
      }
    },
  },
}
</script>

<style lang="scss">
@import "@/assets/_variables";

.HoverMenu {
  position: relative;

  .button {
    background: url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 24 24"><path fill="%23e3d7d7" d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>') no-repeat right 0.5rem center;
    background-size: 1rem;
    @include convex($accent-color);
    &:hover {
      background-color: mix($accent-color, $fg-color, 75%);
    }
  }

  .menu {
    background-color: $bg-color;
    border: 1px solid $fg-color;
    border-radius: 0.25rem;
    box-shadow: 0 0 1rem 0 $bg-color;
    display: none;
    padding: 0.25rem;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;

    .option {
      border-radius: 0.125rem;
      padding: 0.25rem 1rem;
      white-space: nowrap;
      &[data-selected="true"] {
        background-color: $accent-color;
      }
      &:hover {
        background-color: $fg-color;
        color: $bg-color;
        cursor: pointer;
      }

      &::before {
        content: "";
        display: inline-block;
        margin-right: 0.25rem;
        width: 1rem;
        height: 1rem;
        vertical-align: middle;
      }
      &[data-selected="true"] {
        &::before {
          background-color: $fg-color;
          mask: url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 24 24"><path fill="%23000000" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" /></svg>') no-repeat center center;
        }
        &:hover::before {
          background-color: $bg-color;
        }
      }
    }
  }
}
</style>
