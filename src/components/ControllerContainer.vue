<template>
  <div class="ControllerContainer">
    <div
      v-for="sample in samples"
      :key="sample"
    >
      <Controller
        :ref="`controller-${sample}`"
        :chirpingMachine="chirpingMachine"
        :name="sample"
      />
    </div>
  </div>
</template>

<script>
import { ChirpingMachine, ChirpingMachineSamples } from '@/scripts/chirping-machine'
import Controller from '@/components/Controller'

export default {
  name: 'ControllerContainer',

  components: {
    Controller,
  },

  data () {
    return {
      chirpingMachine: new ChirpingMachine(),
      ChirpingMachineSamples,
    }
  },

  computed: {
    samples () {
      return Object.keys(ChirpingMachineSamples)
    },
  },

  methods: {
    async changeAllSecond (value) {
      for (const key in this.$refs) {
        const controller = this.$refs[key][0]
        await controller.changeSecond(value)
        controller.updateSecondRange()
      }
    },

    async changeAllVolume (value, easing) {
      for (const key in this.$refs) {
        const controller = this.$refs[key][0]
        await controller.changeVolume(value)
        controller.updateVolumeRange()
        controller.volumeEasing = easing
      }
    },

    async changeAllSpecial (value, easing) {
      for (const key in this.$refs) {
        const controller = this.$refs[key][0]
        await controller.changeSpecial(value)
        controller.updateSpecialRange()
        controller.specialEasing = easing
      }
    },

    async resetAll () {
      for (const key in this.$refs) {
        await this.$refs[key][0].onClickResetButton()
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.ControllerContainer {
  display: grid;
  grid-gap: 0.5rem;
  grid-template-columns: 1fr 1fr 1fr;
}
</style>
