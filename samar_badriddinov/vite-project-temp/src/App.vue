<template>

  <Lvl>
    <Lvl>
      <Lvl>

      </Lvl>
    </Lvl>
  </Lvl>

</template>

<script>
import Lvl from "@/Lvl.vue";
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
  components: {
    Lvl
  },
}
</script>

<style></style>

