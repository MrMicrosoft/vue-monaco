<template>
  <div>Another counter created with a .vue : {{ text }}</div>
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator'
  import getModel from './model'

  @Component({})
  export default class CountVue extends Vue {
    i: number = 0
    timer?: number
    text: string = ""

    mounted () {
      this.text = getModel("Hello World");
      this.timer = window.setInterval(() => {
        this.i++
      }, 2000)
    }

    destroyed () {
      if (this.timer) {
        window.clearInterval(this.timer)
      }
    }

  }
</script>
