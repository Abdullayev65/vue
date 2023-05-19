<template>
  <input type="text" class="form-control search-input" placeholder="Kinolarni qidirish" @input="Input">

</template>

<script>
export default {
  methods: {
    Input(e) {
      this.termInput(e.target.value)
    }
  },
  props: {
    termInput: {
      type: Function,
      required: true,
    }
  },
}
</script>

<style scoped>
.search-input {
  margin-top: 2rem;
  margin-bottom: 1.5rem;
  padding: 1.5rem;
  border-color: #fcfaf5;
  border-radius: 4px;
  box-shadow: 15px 15px 15px rgba(0, 0, 0, 0.15);
}
</style>

