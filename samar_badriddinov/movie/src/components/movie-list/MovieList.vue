<template>
  <ul class="movie-list list-group">
    <MovieListItem v-for="movie in movies" v-bind:movie="movie"/>
  </ul>

</template>

<script>
import MovieListItem from "@/components/movie-list-item/MovieListItem.vue";

export default {
  components: {MovieListItem},
  data() {
    return {
      movies: [
        {
          name: "Back Adam",
          viewers: 1573,
          favorite: false,
          like: false
        },
        {
          name: "Red Adam",
          viewers: 1735,
          favorite: true,
          like: false
        },
        {
          name: "Why?",
          viewers: 125,
          favorite: false,
          like: true
        },
      ]
    }
  }

}
</script>

<style scoped>
.movie-list {
  margin-top: 2rem;
  padding: 1.5rem;
  background-color: #fcfaf5;
  border-radius: 4px;
  box-shadow: 15px 15px 15px rgba(0, 0, 0, 0.15);
}
</style>

