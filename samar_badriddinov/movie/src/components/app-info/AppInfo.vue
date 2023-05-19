<template>
  <Box class="app-info">
    <p class="fs-3 text-uppercase">Barcha kinolar soni: {{allMoviesCount}}</p>
    <p class="fs-4 text-uppercase">Ko'rilgan kinolar soni: {{watchedMoviesCount}}</p>
  </Box>

</template>

<script>
export default {
  props: {
    allMoviesCount: {
      type: Number,
    },
    watchedMoviesCount: {
      type: Number,
    },
  }
}
</script>

<style scoped>
.app-info {
  /*padding: 1.5rem;*/
  /*border-color: #fcfaf5;*/
  //border-radius: 4px;
  //box-shadow: 15px 15px 15px rgba(0, 0, 0, 0.15);
}
</style>

