<template>
  <div class="Controller">
    <div class="name">{{ name }}</div>
    <WaveCanvas
      ref="waveCanvas"
      :audio="audio"
    />
    <div class="rangeContainer">
      <div class="label">Length</div>
      <div />
      <Range
        ref="secondRange"
        :min="0.05"
        :max="3.0"
        :step="0.05"
        :value.sync="second"
        @change="onChange"
      />
      <div class="label">Volume</div>
      <HoverMenu
        :options="easings"
        :value.sync="volumeEasing"
        @change="onChange"
      />
      <Range
        ref="volumeRange"
        :min="0.05"
        :max="1.0"
        :step="0.05"
        :value.sync="volume"
        @change="onChange"
      />
      <div class="label">Special</div>
      <HoverMenu
        :options="easings"
        :value.sync="specialEasing"
        @change="onChange"
      />
      <Range
        ref="specialRange"
        :min="0.05"
        :max="1.0"
        :step="0.05"
        :value.sync="special"
        @change="onChange"
      />
    </div>
    <div class="buttonContainer">
      <div
        class="button"
        @click="onClickPlayButton"
      >Play</div>
      <div
        class="button"
        @click="onClickRandomizeSpecialButton"
      ><ColorfulText text="Special" /></div>
      <div
        class="button"
        @click="onClickResetButton"
      >Reset</div>
      <div
        class="button right"
        @click="onClickCodeButton"
      >Code</div>
      <div
        class="button"
        @click="onClickDownloadButton"
      >Save</div>
    </div>
  </div>
</template>

<script>
import { irandom, stripNumber, wait } from '@/scripts/util'
import { ChirpingMachineEasings } from '@/scripts/chirping-machine'
import ColorfulText from '@/components/ColorfulText'
import HoverMenu from '@/components/HoverMenu'
import Range from '@/components/Range'
import WaveCanvas from '@/components/WaveCanvas'

export default {
  name: 'Controller',

  components: {
    ColorfulText,
    HoverMenu,
    Range,
    WaveCanvas,
  },

  props: {
    chirpingMachine: Object,
    name: String,
  },

  data () {
    return {
      ChirpingMachineEasings,
      audio: null,
      second: 0,
      volume: 0,
      volumeEasing: '',
      special: 0,
      specialEasing: '',
    }
  },

  computed: {
    easings () {
      return Object.keys(ChirpingMachineEasings).map((easing) => ({
        label: easing,
        value: easing,
      }))
    },
  },

  created () {
    this.reset()
    this.load()
  },

  async mounted () {
    this.update()
    await this.updateCanvas()
    window.addEventListener('resize', async () => {
      await this.updateCanvas()
    })
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
      const storage = localStorage.getItem(this.name)
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
      localStorage.setItem(this.name, storage)
    },

    update () {
      this.audio = this.chirpingMachine.create(this.name, {
        rate: 44100,
        second: this.second,
        volume: this.volume,
        volumeEasing: this.volumeEasing,
        special: this.special,
        specialEasing: this.specialEasing,
      })
      this.save()
    },

    // WANT: throttle したい
    async updateCanvas () {
      if (this.$refs.waveCanvas) {
        await this.$refs.waveCanvas.update(this.audio.data)
      }
    },

    updateSecondRange () {
      this.$refs.secondRange.updateValue(this.second)
    },

    updateVolumeRange () {
      this.$refs.volumeRange.updateValue(this.volume)
    },

    updateSpecialRange () {
      this.$refs.specialRange.updateValue(this.special)
    },

    async onChange () {
      this.update()
      await this.updateCanvas()
      this.audio.play()
    },

    onClickPlayButton () {
      this.update()
      this.audio.play()
    },

    async onClickResetButton () {
      this.reset()
      this.updateSecondRange()
      this.updateVolumeRange()
      this.updateSpecialRange()
      this.update()
      await this.updateCanvas()
    },

    async onClickCodeButton (event) {
      const code = `chirpingMachine.create('${this.name}', {
  rate: 44100,
  second: ${this.second},
  volume: ${this.volume},
  volumeEasing: '${this.volumeEasing}',
  special: ${this.special},
  specialEasing: '${this.specialEasing}'
});
`
      await navigator.clipboard.writeText(code)
      const label = event.target.innerText
      event.target.innerText = 'Copied!'
      await wait(1000)
      event.target.innerText = label
    },

    onClickDownloadButton () {
      this.audio.save(this.name)
    },

    async onClickRandomizeSpecialButton () {
      this.special = stripNumber(irandom(1, 20) * 0.05, 100)
      this.updateSpecialRange()
      const easingNames = Object.keys(ChirpingMachineEasings)
      this.specialEasing = easingNames[irandom(0, easingNames.length - 1)]
      this.update()
      this.audio.play()
      await this.updateCanvas()
    },
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/_variables";

.Controller {
  @include convex(mix($bg-color, $fg-color, 87.5%));
  border-radius: 0.25rem;
  box-shadow: 0 0 2rem 0 $bg-color inset;
  padding: 0.5rem;

  .left {
    width: 50%;
    padding-right: 0.5rem;
  }

  .name {
    @include concave($black);
    color: $green;
    font-size: 1rem;
    padding: 0.25rem 0.5rem;
  }

  .WaveCanvas {
    @include concave(transparent);
    margin-bottom: 1rem;
  }

  .rangeContainer {
    display: grid;
    align-items: center;
    grid-gap: 0.5rem 0.75rem;
    grid-template-columns: auto auto 1fr;
    margin-bottom: 1rem;
    padding: 0 0.5rem;

    .label,
    .HoverMenu {
      font-size: 0.875rem;
    }
    .HoverMenu {
      width: 8.5rem;
    }
  }

  .buttonContainer {
    display: flex;
    align-items: center;

    .button {
      &:not(:last-child) {
        margin-right: 0.5rem;
      }
      &.right {
        margin-left: auto;
      }
    }
  }
}
</style>
