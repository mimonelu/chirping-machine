export class ChirpingMachine {
  constructor () {
    this.context = new (window.AudioContext || window.webkitAudioContext)()

    // WebKit ではユーザージェスチャーのイベントリスナー内でこれが必要
    // SEE: https://developers.google.com/web/updates/2017/09/autoplay-policy-changes
    window.addEventListener('click', () => {
      if (this.context.state !== 'running') {
        this.context.resume().then(() => {})
      }
    })
  }

  create (sampleId, option) {
    const optionSanitized = option || {}
    optionSanitized.rate = optionSanitized.rate === undefined ? 44100 : optionSanitized.rate
    optionSanitized.second = optionSanitized.second === undefined ? 1.0 : optionSanitized.second
    optionSanitized.volume = optionSanitized.volume === undefined ? 0.5 : optionSanitized.volume
    optionSanitized.volumeEasing = optionSanitized.volumeEasing === undefined ? 'none' : optionSanitized.volumeEasing
    optionSanitized.special = optionSanitized.special === undefined ? 1.0 : optionSanitized.special
    optionSanitized.specialEasing = optionSanitized.specialEasing === undefined ? 'none' : optionSanitized.specialEasing
    const instance = new ChirpingMachineInstance(this.context)
    instance.create(sampleId, optionSanitized)
    return instance
  }
}

class ChirpingMachineInstance {
  constructor (context) {
    this.context = context
    this.buffer = null
    this.source = null
  }

  get data () {
    if (this.buffer === null) {
      return null
    }
    return this.buffer.getChannelData(0)
  }

  create (sampleId, option) {
    const length = option.rate * option.second
    if (length <= 0) {
      return
    }
    this.buffer = this.context.createBuffer(1, length, option.rate)
    ChirpingMachineSamples[sampleId](this.data, option)

    for (let i = 0, ii = this.data.length; i < ii; i ++) {
      if (this.data[i] < - 1.0) {
        this.data[i] = - 1.0
      } else if (this.data[i] > 1.0) {
        this.data[i] = 1.0
      }
    }
  }

  play (volume = 0.5) {
    if (this.context.state === 'running') {
      this.source = this.context.createBufferSource()
      this.source.buffer = this.buffer

      // ボリュームの即時変更
      const gainNode = this.context.createGain()
      this.source.connect(gainNode)
      gainNode.connect(this.context.destination)
      gainNode.gain.value = volume

      this.source.start(this.context.currentTime)
    }
  }

  stop () {
    if (this.source !== null) {
      this.source.stop()
    }
  }

  save (fileName) {
    const audioBlob = this.createAudioBlob()
    this.download(fileName, audioBlob)
  }

  // WANT: 現状 44100 Hz 固定なので可変にしたい
  // SEE: https://qiita.com/HirokiTanaka/items/56f80844f9a32020ee3b
  createAudioBlob () {
    const audioData = [ this.buffer.getChannelData(0) ]
    const encodeWAV = function (samples, sampleRate) {
      const buffer = new ArrayBuffer(44 + samples.length * 2)
      const view = new DataView(buffer)
      const writeString = function (view, offset, string) {
        for (let i = 0; i < string.length; i ++) {
          view.setUint8(offset + i, string.charCodeAt(i))
        }
      }
      const floatTo16BitPCM = function (output, offset, input) {
        for (let i = 0; i < input.length; i ++, offset += 2) {
          const s = Math.max(- 1, Math.min(1, input[i]))
          output.setInt16(offset, s < 0 ? s * 0x8000 : s * 0x7FFF, true)
        }
      }
      writeString(view, 0, 'RIFF') // RIFFヘッダ
      view.setUint32(4, 32 + samples.length * 2, true) // これ以降のファイルサイズ
      writeString(view, 8, 'WAVE') // WAVEヘッダ
      writeString(view, 12, 'fmt ') // fmtチャンク
      view.setUint32(16, 16, true) // fmtチャンクのバイト数
      view.setUint16(20, 1, true) // フォーマットID
      view.setUint16(22, 1, true) // チャンネル数
      view.setUint32(24, sampleRate, true) // サンプリングレート
      view.setUint32(28, sampleRate * 2, true) // データ速度
      view.setUint16(32, 2, true) // ブロックサイズ
      view.setUint16(34, 16, true) // サンプルあたりのビット数
      writeString(view, 36, 'data') // dataチャンク
      view.setUint32(40, samples.length * 2, true) // 波形データのバイト数
      floatTo16BitPCM(view, 44, samples) // 波形データ
      return view
    }
    const mergeBuffers = function (audioData) {
      let sampleLength = 0
      for (let i = 0; i < audioData.length; i ++) {
        sampleLength += audioData[i].length
      }
      const samples = new Float32Array(sampleLength)
      let sampleIdx = 0
      for (let i = 0; i < audioData.length; i ++) {
        for (let j = 0; j < audioData[i].length; j ++) {
          samples[sampleIdx] = audioData[i][j]
          sampleIdx ++
        }
      }
      return samples
    }
    const dataview = encodeWAV(mergeBuffers(audioData), this.context.sampleRate)
    return new Blob([ dataview ], { type: 'audio/wav' })
  }

  download (fileName, blob) {
    const link = document.createElement('a')
    link.download = fileName
    link.href = URL.createObjectURL(blob)
    link.target = '_blank'
    link.click()
  }
}

const PI = Math.PI
const PI02 = Math.PI * 0.5
const PI2 = Math.PI * 2.0
const frandom = (min, max) => Math.random() * (max - min) + min

export const ChirpingMachineEasings = {
  none:       (i, ii) => 1.0,
  in:         (i, ii) => i / ii,
  out:        (i, ii) => 1.0 - (i / ii),
  sin:        (i, ii) => Math.sin(i / ii * PI),
  sinInv:     (i, ii) => 1.0 - Math.sin(i / ii * PI),
  sinHalf:    (i, ii) => Math.sin(i / ii * PI02),
  sinHalfInv: (i, ii) => 1.0 - Math.sin(i / ii * PI02),
  cos:        (i, ii) => Math.cos(i / ii * PI),
  cosInv:     (i, ii) => 1.0 - Math.cos(i / ii * PI),
  cosHalf:    (i, ii) => Math.cos(i / ii * PI02),
  cosHalfInv: (i, ii) => 1.0 - Math.cos(i / ii * PI02),
  tan:        (i, ii) => Math.tan(i / ii * PI),
  tanInv:     (i, ii) => 1.0 - Math.tan(i / ii * PI),
}

export const ChirpingMachineSamples = {
  noise (channel, option) {
    for (let i = 0, ii = channel.length; i < ii; i ++) {
      const random = frandom(- 1.0, 1.0) * option.special * ChirpingMachineEasings[option.specialEasing](i, ii)
      channel[i] = random * option.volume * ChirpingMachineEasings[option.volumeEasing](i, ii)
    }
  },

  sin (channel, option) {
    for (let i = 0, ii = channel.length; i < ii; i ++) {
      const special = option.rate * option.special * ChirpingMachineEasings[option.specialEasing](i, ii)
      channel[i] = Math.sin(i / ii * Math.PI * special) * option.volume * ChirpingMachineEasings[option.volumeEasing](i, ii)
    }
  },

  cos (channel, option) {
    for (let i = 0, ii = channel.length; i < ii; i ++) {
      const special = option.special * ChirpingMachineEasings[option.specialEasing](i, ii)
      const co = Math.cos(i / ii * Math.PI * 2048 * special)
      channel[i] = co * option.volume * ChirpingMachineEasings[option.volumeEasing](i, ii)
    }
  },

  tan (channel, option) {
    for (let i = 0, ii = channel.length; i < ii; i ++) {
      const special = option.special * ChirpingMachineEasings[option.specialEasing](i, ii)
      const co = Math.tan(i / ii * Math.PI * 1024 * special)
      channel[i] = co * option.volume * ChirpingMachineEasings[option.volumeEasing](i, ii)
    }
  },

  square (channel, option) {
    let j = 1
    for (let i = 0, ii = channel.length; i < ii; i ++) {
      if ((i % Math.round(512.0 * option.special * ChirpingMachineEasings[option.specialEasing](i, ii))) === 0) {
        j *= - 1
      }
      channel[i] = j * option.volume * ChirpingMachineEasings[option.volumeEasing](i, ii)
    }
  },

  triangle (channel, option) {
    let j = 0
    let k = - 1.0
    for (let i = 0, ii = channel.length; i < ii; i ++) {
      if (k >= 1.0) {
        j = - 0.2 * option.special * ChirpingMachineEasings[option.specialEasing](i, ii)
      } else if (k <= - 1.0) {
        j = 0.2 * option.special * ChirpingMachineEasings[option.specialEasing](i, ii)
      }
      k += j
      channel[i] = k * option.volume * ChirpingMachineEasings[option.volumeEasing](i, ii)
    }
  },

  and (channel, option) {
    for (let i = 0, ii = channel.length; i < ii; i ++) {
      const special = option.special * ChirpingMachineEasings[option.specialEasing](i, ii)
      const co = Math.sin(i / ii * Math.PI * (ii & i) * special)
      channel[i] = co * option.volume * ChirpingMachineEasings[option.volumeEasing](i, ii)
    }
  },

  or (channel, option) {
    for (let i = 0, ii = channel.length; i < ii; i ++) {
      const special = option.special * ChirpingMachineEasings[option.specialEasing](i, ii)
      const co = Math.sin(i / ii * Math.PI * (ii | i) * special)
      channel[i] = co * option.volume * ChirpingMachineEasings[option.volumeEasing](i, ii)
    }
  },

  explosion (channel, option) {
    let random = 0
    for (let i = 0, ii = channel.length; i < ii; i ++) {
      if ((i % Math.round(64.0 * option.special * ChirpingMachineEasings[option.specialEasing](i, ii))) === 0) {
        random = frandom(- 1.0, 1.0)
      }
      channel[i] = random * option.volume * ChirpingMachineEasings[option.volumeEasing](i, ii)
    }
  },

  spring (channel, option) {
    let j = 0
    for (let i = 0, ii = channel.length; i < ii; i ++) {
      j = i / ii
      channel[i] = ((i % Math.round(256.0 * option.special * ChirpingMachineEasings[option.specialEasing](i, ii))) === 0 ? 1 : (j - 0.5) * 2.0) * (1.0 - j) * option.volume * ChirpingMachineEasings[option.volumeEasing](i, ii)
    }
  },

  warp (channel, option) {
    for (let i = 0, ii = channel.length; i < ii; i ++) {
      const special = option.special * ChirpingMachineEasings[option.specialEasing](i, ii)
      const co = Math.sin(Math.pow(i / ii * Math.PI, 2 * special) * 1000)
      channel[i] = co * option.volume * ChirpingMachineEasings[option.volumeEasing](i, ii)
    }
  },

  bell (channel, option) {
    let j = 1
    for (let i = 0, ii = channel.length; i < ii; i ++) {
      const co = option.rate / (2048.0 * option.special * ChirpingMachineEasings[option.specialEasing](i, ii)) * j
      if ((i % 128) === 0) {
        j *= - 1
      }
      channel[i] = Math.sin(i / co * Math.PI) * option.volume * ChirpingMachineEasings[option.volumeEasing](i, ii)
    }
  },

  phone (channel, option) {
    for (let i = 0, ii = channel.length; i < ii; i ++) {
      channel[i] = Math.sin(i * 0.05) * Math.sin(i / option.rate * Math.PI * 16 * option.special * ChirpingMachineEasings[option.specialEasing](i, ii)) * option.volume * ChirpingMachineEasings[option.volumeEasing](i, ii)
    }
  },

  energy (channel, option) {
    for (let i = 0, ii = channel.length; i < ii; i ++) {
      const r = Math.sin((i * 128 * option.special * ChirpingMachineEasings[option.specialEasing](i, ii)) / ii * Math.PI * 2 * Math.sin((i * 32 * option.special * ChirpingMachineEasings[option.specialEasing](i, ii)) / ii * Math.PI * 2))
      channel[i] = r * option.volume * ChirpingMachineEasings[option.volumeEasing](i, ii)
    }
  },

  ping (channel, option) {
    for (let i = 0, ii = channel.length; i < ii; i ++) {
      channel[i] = Math.sin((i * 2048 * option.special * ChirpingMachineEasings[option.specialEasing](i, ii)) / ii * PI2) * option.volume * ChirpingMachineEasings[option.volumeEasing](i, ii)
    }
  },

  chime (channel, option) {
    let j = 1
    for (let i = 0, ii = channel.length, k = 1; i < ii; i ++) {
      if ((i % Math.round(64.0 * option.special * ChirpingMachineEasings[option.specialEasing](i, ii))) === 0) {
        j *= - 1
      }
      if ((i % Math.round(192.0 * option.special * ChirpingMachineEasings[option.specialEasing](i, ii))) === 0) {
        k *= - 1
      }
      const l = (j + k) / 2
      channel[i] = l * option.volume * ChirpingMachineEasings[option.volumeEasing](i, ii)
    }
  },

  cackle (channel, option) {
    let j = 0
    for (let i = 0, ii = channel.length; i < ii; i ++) {
      j = i / ii * Math.PI
      channel[i] = Math.sin(j * 512.0 * Math.sin(j * 8 * option.special * ChirpingMachineEasings[option.specialEasing](i, ii))) * option.volume * ChirpingMachineEasings[option.volumeEasing](i, ii)
    }
  },

  space (channel, option) {
    for (let i = 0, ii = channel.length; i < ii; i ++) {
      const special = option.special * ChirpingMachineEasings[option.specialEasing](i, ii)
      const co1 = i / ii * Math.PI * 128
      const co2 = Math.sin(co1 * Math.cos(co1) * special)
      channel[i] = co2 * option.volume * ChirpingMachineEasings[option.volumeEasing](i, ii)
    }
  },

  synthesizer (channel, option) {
    let j = 0
    for (let i = 0, ii = channel.length; i < ii; i ++) {
      j = i / ii * Math.PI
      channel[i] = Math.sin(j * 8 * Math.sin(j * 1024.0 * option.special * ChirpingMachineEasings[option.specialEasing](i, ii))) * option.volume * ChirpingMachineEasings[option.volumeEasing](i, ii)
    }
  },

  electone (channel, option) {
    for (let i = 0, ii = channel.length; i < ii; i ++) {
      const j = Math.round((option.special * ChirpingMachineEasings[option.specialEasing](i, ii) * 1000) / 200) * 200
      const special = Math.sin(i / ii * Math.PI * j)
      channel[i] = special * option.volume * ChirpingMachineEasings[option.volumeEasing](i, ii)
    }
  },

  echo (channel, option) {
    let j = 0
    for (let i = 0, ii = channel.length; i < ii; i ++) {
      j = i / ii * Math.PI
      channel[i] = Math.sin(j * 2048.0 * option.special * ChirpingMachineEasings[option.specialEasing](i, ii)) * Math.sin(j * 8) * option.volume * ChirpingMachineEasings[option.volumeEasing](i, ii)
    }
  },

  floating (channel, option) {
    let j = 0
    for (let i = 0, ii = channel.length; i < ii; i ++) {
      j = i / ii * Math.PI
      channel[i] = Math.sin(j * (1024.0 * option.special * ChirpingMachineEasings[option.specialEasing](i, ii)) / Math.cos(j * 0.5)) * option.volume * ChirpingMachineEasings[option.volumeEasing](i, ii)
    }
  },

  zap (channel, option) {
    let j = 0
    for (let i = 0, ii = channel.length; i < ii; i ++) {
      j = i / ii * Math.PI
      channel[i] = Math.sin(j * 128.0 / Math.sin(j * 16.0 * option.special * ChirpingMachineEasings[option.specialEasing](i, ii))) * option.volume * ChirpingMachineEasings[option.volumeEasing](i, ii)
    }
  },

  bounce (channel, option) {
    let j = 0
    for (let i = 0, ii = channel.length; i < ii; i ++) {
      j = i / ii * Math.PI
      channel[i] = Math.sin(j * 32 * (Math.round(i / ii * 100.0 * option.special * ChirpingMachineEasings[option.specialEasing](i, ii)) % 2 === 0 ? 1 : 64)) * option.volume * ChirpingMachineEasings[option.volumeEasing](i, ii)
    }
  },

  surprise (channel, option) {
    let j = 0
    for (let i = 0, ii = channel.length; i < ii; i ++) {
      j = i / ii
      channel[i] = Math.sin(j * (Math.sin(j * PI02) * Math.PI) * 2048.0 * option.special * ChirpingMachineEasings[option.specialEasing](i, ii)) * option.volume * ChirpingMachineEasings[option.volumeEasing](i, ii)
    }
  },

  despair (channel, option) {
    let j = 0
    for (let i = 0, ii = channel.length; i < ii; i ++) {
      j = i / ii
      channel[i] = Math.sin(j * (Math.cos(j * Math.PI * 0.25) * Math.PI) * 2048.0 * option.special * ChirpingMachineEasings[option.specialEasing](i, ii)) * option.volume * ChirpingMachineEasings[option.volumeEasing](i, ii)
    }
  },

  robot (channel, option) {
    const walks = Array.from(Array(8)).map(() => frandom(0, 1.0))
    for (let i = 0, ii = channel.length; i < ii; i ++) {
      const special = option.special * ChirpingMachineEasings[option.specialEasing](i, ii)
      const step = Math.floor(i / ii * 8.0)
      const co = Math.sin(i / ii * Math.PI * 4096 * walks[step] * special)
      channel[i] = co * option.volume * ChirpingMachineEasings[option.volumeEasing](i, ii)
    }
  },
}
