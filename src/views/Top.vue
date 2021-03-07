<template>
  <div class="Top">
    <header>
      <h1>chirping-machine</h1>
      <div
        class="button right"
        @click="onClickOpenAboutButton"
      >About</div>
      <div
        class="button"
        @click="onClickOpenOptionButton"
      >Option</div>
    </header>
    <ControllerContainer ref="ControllerContainer" />
    <AboutPopup
      v-if="aboutPopupVisible"
      @close="onClickCloseAboutPopupButton"
    />
    <OptionPopup
      v-if="optionPopupVisible"
      @close="onClickCloseOptionPopupButton"
      @changeAllSecond="onClickChangeAllSecondButton"
      @changeAllVolume="onClickChangeAllVolumeButton"
      @changeAllSpecial="onClickChangeAllSpecialButton"
      @resetAll="onClickResetAllButton"
    />
  </div>
</template>

<script>
import AboutPopup from '@/components/AboutPopup'
import ControllerContainer from '@/components/ControllerContainer'
import OptionPopup from '@/components/OptionPopup'

export default {
  name: 'Top',

  components: {
    AboutPopup,
    ControllerContainer,
    OptionPopup,
  },

  data () {
    return {
      aboutPopupVisible: false,
      optionPopupVisible: false,
    }
  },

  methods: {
    onClickOpenAboutButton () {
      this.aboutPopupVisible = true
    },

    onClickCloseAboutPopupButton () {
      this.aboutPopupVisible = false
    },

    onClickOpenOptionButton () {
      this.optionPopupVisible = true
    },

    onClickCloseOptionPopupButton () {
      this.optionPopupVisible = false
    },

    async onClickChangeAllSecondButton (value) {
      await this.$refs.ControllerContainer.changeAllSecond(value)
    },

    async onClickChangeAllVolumeButton (value, easing) {
      await this.$refs.ControllerContainer.changeAllVolume(value, easing)
    },

    async onClickChangeAllSpecialButton (value, easing) {
      await this.$refs.ControllerContainer.changeAllSpecial(value, easing)
    },

    onClickResetAllButton () {
      this.$refs.ControllerContainer.resetAll()
    },
  },
}
</script>

<style lang="scss" scoped>
@import "@/assets/_variables";

.Top {
  header {
    display: flex;
    align-items: center;
    padding: 1rem 1.25rem 0.5rem 1.25rem;

    h1 {
      color: $fg-color;
      font-size: 2rem;
      margin: 0;
    }

    .button:not(:last-child) {
      margin-right: 1rem;
    }

    .right {
      margin-left: auto;
    }
  }

  .ControllerContainer {
    padding: 0.5rem;
  }
}
</style>
