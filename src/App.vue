<template>
  <div id="app">
    <router-view />
    <footer>
      <small>&copy; 2021 mimonelu</small>
      <menu>
        <a
          class="text-link"
          href="https://twitter.com/mimonelu"
          rel="noopener"
          target="_blank"
        >@Twitter</a>
        <a
          class="text-link"
          href="https://mimonelu.itch.io/"
          rel="noopener"
          target="_blank"
        >Itch.io</a>
        <a
          class="text-link"
          href="https://github.com/mimonelu/chirping-machine"
          rel="noopener"
          target="_blank"
        >GitHub</a>
        <a
          class="text-link"
          href="https://mimonelu.github.io/chirping-machine/"
          rel="noopener"
          target="_blank"
        >GitHub Pages</a>
      </menu>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/_variables";

#app {
  footer {
    padding: 8rem;

    small {
      display: block;
      font-size: 1rem;
      margin-bottom: 1rem;
      text-align: center;
    }

    menu {
      display: flex;
      align-items: center;
      justify-content: center;

      a {
        display: block;
        padding: 0 1rem;
        &:not(:last-child) {
          border-right: 1px solid $accent-color;
        }
      }
    }
  }
}
</style>
