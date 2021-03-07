<template>
  <Popup
    class="OptionPopup"
    @close="$emit('close')"
  >
    <h2>Option</h2>
    <div class="rangeContainer">
      <div class="label">Length</div>
      <div />
      <Range
        ref="secondRange"
        :min="0.05"
        :max="3.0"
        :step="0.05"
        :value="second"
        @change="onChangeSecond"
      />
      <div
        class="button"
        @click="onClickChangeAllSecondButton"
      >Change all</div>
      <div class="label">Volume</div>
      <select
        v-model="volumeEasing"
        class="select"
        @change="onChangeEasing"
      >
        <option
          v-for="easingValue, easingName in ChirpingMachineEasings"
          :key="easingName"
          :value="easingName">{{ easingName }}</option>
      </select>
      <Range
        ref="volumeRange"
        :min="0.05"
        :max="1.0"
        :step="0.05"
        :value="volume"
        @change="onChangeVolume"
      />
      <div
        class="button"
        @click="onClickChangeAllVolumeButton"
      >Change all</div>
      <div class="label">Special</div>
      <select
        v-model="specialEasing"
        class="select"
        @change="onChangeEasing"
      >
        <option
          v-for="easingValue, easingName in ChirpingMachineEasings"
          :key="easingName"
          :value="easingName">{{ easingName }}</option>
      </select>
      <Range
        ref="specialRange"
        :min="0.05"
        :max="1.0"
        :step="0.05"
        :value="special"
        @change="onChangeSpecial"
      />
      <div
        class="button"
        @click="onClickChangeAllSpecialButton"
      >Change all</div>
    </div>
    <div
      class="button"
      @click="onClickResetAllButton"
    >Reset all</div>
  </Popup>
</template>

<script>
import { ChirpingMachineEasings } from '@/scripts/chirping-machine'
import Popup from '@/components/Popup'
import Range from '@/components/Range'

export default {
  name: 'OptionPopup',

  components: {
    Popup,
    Range,
  },

  data () {
    return {
      ChirpingMachineEasings,
      second: 0,
      volume: 0,
      volumeEasing: '',
      special: 0,
      specialEasing: '',
    }
  },

  created () {
    this.reset()
    this.load()
  },

  methods: {
    reset () {
      this.second = 1.0
      this.volume = 0.5
      this.volumeEasing = 'out'
      this.special = 0.5
      this.specialEasing = 'none'
    },

    load () {
      const storage = localStorage.getItem('option')
      if (storage) {
        const data = JSON.parse(storage)
        this.second = data.second
        this.volume = data.volume
        this.volumeEasing = data.volumeEasing
        this.special = data.special
        this.specialEasing = data.specialEasing
      }
    },

    save () {
      const storage = JSON.stringify({
        second: this.second,
        volume: this.volume,
        volumeEasing: this.volumeEasing,
        special: this.special,
        specialEasing: this.specialEasing,
      })
      localStorage.setItem('option', storage)
    },

    onChangeSecond (value) {
      this.second = value
      this.save()
    },

    onChangeVolume (value) {
      this.volume = value
      this.save()
    },

    onChangeSpecial (value) {
      this.special = value
      this.save()
    },

    onChangeEasing () {
      this.save()
    },

    onClickChangeAllSecondButton () {
      this.$emit('changeAllSecond', this.second)
    },

    onClickChangeAllVolumeButton () {
      this.$emit('changeAllVolume', this.volume, this.volumeEasing)
    },

    onClickChangeAllSpecialButton () {
      this.$emit('changeAllSpecial', this.special, this.specialEasing)
    },

    onClickResetAllButton () {
      this.reset()
      this.save()
      this.$refs.secondRange.updateValue(this.second)
      this.$refs.volumeRange.updateValue(this.volume)
      this.$refs.specialRange.updateValue(this.special)
      this.$emit('resetAll')
    },
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/_variables";

.OptionPopup {
  &::v-deep {
    .inner {
      background-color: rgba($black, 0.75);
      border-radius: 0.25rem;
      width: 62.5%;
    }
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 3rem;
  }

  .rangeContainer {
    display: grid;
    align-items: center;
    grid-gap: 0.5rem 1rem;
    grid-template-columns: auto auto 1fr auto;
    margin-bottom: 3rem;
    padding-right: 1rem;
    width: 100%;
  }
}
</style>
