<template>
  <div>
    <h1>
      H W ! {{counter}}
    </h1>
    <button v-on:click="onIncrement" class="">
      Add
    </button>
    <button v-on:click="onDecrement" class="">
      Del
    </button>
    <App v-if="counter>3" />
  </div>

</template>

<script>
import App from "@/App.vue";
export default {
  data() {
    return {
      counter: 1
    }
  },
  methods: {
    onIncrement() {
      this.counter++
    },
    onDecrement() {
      this.counter--
    }
  },
  components:{
    App
  }
}
</script>

<style></style>

