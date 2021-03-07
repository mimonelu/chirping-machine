<template>
  <span class="ColorfulText">
    <span
      v-for="character, index in characters"
      :key="character"
      :style="{ color: color(index) }"
    >{{ character }}</span>
  </span>
</template>

<script>

export default {
  name: 'ColorfulText',

  props: {
    text: {
      type: String,
      default: '',
    },

    colors: {
      type: Array,
      default: () => ([
        '#ff0000',
        '#ff8000',
        '#80ff00',
        '#00ff00',
        '#00ff80',
        '#0080ff',
        '#0000ff',
        '#8000ff',
        '#ff0080',
      ]),
    },
  },

  computed: {
    characters () {
      return this.text.split('')
    },
  },

  methods: {
    color (index) {
      return this.colors[index % this.colors.length]
    },
  },
}
</script>
