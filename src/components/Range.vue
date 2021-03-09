<template>
  <div class="Range">
    <div class="bar">
      <div class="knob" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Range',

  props: {
    min: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 100,
    },
    step: {
      type: Number,
      default: 1,
    },
    value: {
      type: Number,
      default: 50,
    },
  },

  data () {
    return {
      pseudoValue: this.value,
      knobNode: null,
      inputStarted: false,
      previousLeft: 0,
    }
  },

  mounted () {
    this.knobNode = this.$el.querySelector('.knob')
    if (this.knobNode) {
      this.updateKnobPosition(false)
      this.$el.addEventListener('mousedown', this.onInputStart)
      document.body.addEventListener('mousemove', this.onInputMove)
      document.body.addEventListener('mouseup', this.onInputEnd)
      window.addEventListener('resize', () => this.updateKnobPosition(false))
    }
  },

  methods: {
    onInputStart (event) {
      this.inputStarted = true
      this.moveKnob(event)
    },

    onInputMove (event) {
      if (this.inputStarted) {
        this.moveKnob(event)
      }
    },

    onInputEnd () {
      this.inputStarted = false
    },

    moveKnob (event) {
      const width = this.$el.clientWidth
      const pageX = (event.touches ? event.touches[0] : event).pageX
      const box = this.$el.getBoundingClientRect()
      const left = Math.max(0, Math.min(width, pageX - box.left))
      this.pseudoValue = (left / width) * (this.max - this.min) + this.min
      this.updateKnobPosition(true)
    },

    updateKnobPosition (whetherEmit = false) {
      const width = this.$el.clientWidth
      this.pseudoValue = Math.round(this.pseudoValue / this.step) * this.step
      this.pseudoValue = Number(this.pseudoValue.toFixed((String(this.step).split('.')[1] || '0').length))
      const left = (this.pseudoValue - this.min) / (this.max - this.min) * width - (this.knobNode.clientWidth / 2)
      if (this.knobNode) {
        this.knobNode.style.left = `${left}px`
      }
      if (this.previousLeft !== left && whetherEmit) {
        this.$emit('update:value', this.pseudoValue)
        this.$emit('change')
      }
      this.previousLeft = left
    },

    updateValue (value) {
      this.pseudoValue = value
      this.updateKnobPosition(false)
    },
  },
}
</script>

<style lang="scss">
.Range {
  position: relative;
  width: 100%;
  height: 1em;

  .bar {
    background-color: #000000;
    position: relative;
    top: calc(50% - 0.125em);
    height: 0.25em;
  }

  .knob {
    background-color: #000000;
    margin-top: calc(-#{(1 / 2) - (0.25 / 2)}em);
    position: absolute;
    width: 1em;
    height: 1em;
    transition: left 100ms linear;
  }
}
</style>
