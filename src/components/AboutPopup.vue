<template>
  <Popup
    class="AboutPopup"
    @close="$emit('close')"
  >
    <h2>About</h2>
    <section>
      <p>chirping-machine is an application can create simple sound effects.</p>
      <ul>
        <li>Click the Save button to save the sound effect.</li>
        <li>Click the Code button to copy JavaScript code. The library is in <a class="text-link" href="https://github.com/mimonelu/chirping-machine/blob/master/src/scripts/chirping-machine.js" rel="noopener" target="_blank">GitHub</a> .</li>
      </ul>
      <pre>
import ChirpingMachine from 'chirping-machine';

const chirpingMachine = new ChirpingMachine();
chirpingMachine.create(...); // Copied code
chirpingMachine.play();
chirpingMachine.play(volume); // volume: 0 - 1.0
chirpingMachine.stop();</pre>
    </section>
  </Popup>
</template>

<script>
import Popup from '@/components/Popup'

export default {
  name: 'AboutPopup',

  components: {
    Popup,
  },
}
</script>

<style lang="scss" scoped>
@import "@/assets/_variables";

.AboutPopup {
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

  p {
    line-height: 1.5;
    margin-bottom: 1rem;
  }

  ul {
    list-style: none;
    margin-bottom: 1rem;
  }

  li {
    line-height: 1.5;
    padding-left: 1rem;
    text-indent: -1rem;

    &::before {
      content: "#";
      margin-right: 0.5rem;
    }
  }

  pre {
    background-color: $black;
    border: 1px solid $bg-color;
    color: $green;
    line-height: 1.5;
    padding: 1rem 2rem;
    user-select: text;
  }
}
</style>
