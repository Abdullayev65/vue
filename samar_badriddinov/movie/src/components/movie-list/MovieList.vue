<template>
  <ul class="movie-list list-group">
    <Box v-if="movies.length==0">
      <p class="text-center fs-3 text-danger">Kinolar Yo'q</p>
    </Box>
    <MovieListItem
        v-else
        v-for="movie in movies" v-bind:movie="movie"
        :key="movie.id"
        @movieListItemFunc="movieListItemFunc"
    />
  </ul>

</template>

<script>
import MovieListItem from "@/components/movie-list-item/MovieListItem.vue";
import Box from "@/ui-components/Box.vue";

export default {
  components: {Box, MovieListItem},
  props: {
    movies: {
      type: Array,
      required: true,
    }
  },
  methods: {
    movieListItemFunc(func) {
      this.$emit("movieListItemFunc", func)
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

