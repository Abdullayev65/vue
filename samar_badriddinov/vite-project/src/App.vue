<template>
  <div>
    <h1>
      H W ! {{counter}}
    </h1>
    <button v-on:click="onIncrement" class="btn btn-success">
      Add
    </button>
    <button v-on:click="onDecrement" class="btn btn-danger">
      Del
    </button>
  </div>

</template>

<script>
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
  }
}
</script>

<style></style>

