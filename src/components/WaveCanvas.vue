<template>
  <div class="WaveCanvas">
    <canvas height="0" />
  </div>
</template>

<script>
import { wait } from '@/scripts/util'

export default {
  name: 'WaveCanvas',

  mounted () {
    this.update()
  },

  methods: {
    async update (audioData) {
      const canvas = this.$el.querySelector('canvas')
      canvas.width = 1
      await wait(1)
      canvas.width = this.$el.clientWidth
      canvas.height = 48
      const context = canvas.getContext('2d')
      context.fillStyle = '#004000'
      context.fillRect(0, 0, canvas.width, canvas.height)
      if (audioData == null) {
        return
      }
      const points = []
      const blockLength = Math.floor(audioData.length / canvas.width)
      for (let i = 0, ii = audioData.length, a = 0; i < ii; i ++) {
        a += audioData[i]
        if ((i % blockLength) === 0) {
          a /= blockLength
          points.push(a + 0.5)
          a = 0
        }
      }
      context.strokeStyle = '#00f000'
      context.beginPath()
      context.moveTo(0.5, points[audioData.length] * canvas.height + 0.5)
      for (let i = 0, ii = points.length; i < ii; i ++) {
        context.lineTo(i + 0.5, points[i] * canvas.height + 0.5)
      }
      context.stroke()
    },
  },
}
</script>

<style lang="scss" scoped>
.WaveCanvas {
  canvas {
    display: block;
  }
}
</style>
