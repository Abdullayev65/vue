<template>
  <div class="app font-monospace">
    <div class="content">
      <AppInfo :allMoviesCount="movies.length" :watchedMoviesCount="movies.filter(a=> a.viewers>1000).length"/>

      <div class="search-panel">
        <SearchPanel :termInput="termInput" />
        <AppFilter/>
      </div>

      <MovieList :movies="OnSearch(movies,term)" @movieListItemFunc="movieListItemFunc"/>
      <MovieAddForm @createMovie="createMovie"/>
    </div>

  </div>

</template>

<script>
import AppInfo from '@/components/app-info/AppInfo.vue'
import SearchPanel from '@/components/search-panel/SearchPanel.vue'
import AppFilter from '@/components/app-filter/AppFilter.vue'
import MovieList from '@/components/movie-list/MovieList.vue'
import MovieAddForm from '@/components/movie-add-form/MovieAddForm.vue'

export default {
  components: {
    AppInfo, SearchPanel, AppFilter, MovieList,
    MovieAddForm,
  },
  data() {
    return {
      movies: [
        {
          id: 1,
          name: "Back Adam",
          viewers: 1573,
          favorite: false,
          like: false
        },
        {
          id: 2,
          name: "Red Adam",
          viewers: 1735,
          favorite: true,
          like: false
        },
        {
          id: 3,
          name: "Why?",
          viewers: 125,
          favorite: false,
          like: true
        },
      ],
      term: '',
    }
  },
  methods: {
    createMovie(newMovie) {
      this.movies.push(newMovie)
    },
    movieListItemFunc(func) {
      func(this)
      console.log(this.movies[0])
    },
    OnSearch(arr, term) {
      if (term === '')
        return arr

      term = term.toLowerCase()
      return arr.filter((val) => {
        return val.name.toLowerCase().includes(term)
      })
    },
    termInput(term) {
      this.term = term
    }
  }
}
</script>

<style>
.app {
  height: 100vh;
  color: #000;
}

.content {
  width: 1000px;
  min-height: 700px;
  background-color: #fff;
  margin: 0 auto;
  padding: 5rem 0;
}

.search-panel {
  margin-top: 2rem;
  padding: 1.5rem;
  border-color: #fcfaf5;
  border-radius: 4px;
  box-shadow: 15px 15px 15px rgba(0, 0, 0, 0.15);
}
</style>

