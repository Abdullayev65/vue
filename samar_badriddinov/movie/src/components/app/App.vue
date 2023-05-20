<template>
  <div class="app font-monospace">
    <div class="content">
      <AppInfo :allMoviesCount="movies.length" :watchedMoviesCount="movies.filter(a=> a.viewers>1000).length"/>

      <div class="search-panel">
        <SearchPanel :termInput="termInput"/>
        <AppFilter/>
      </div>

      <Box v-if="moviesLoading" class="text-center">
        <Loader/>
      </Box>
      <MovieList v-else :movies="OnSearch(movies,term)" @movieListItemFunc="movieListItemFunc"/>
      <Box>
        <nav aria-label="pagination">
          <ul class="pagination pagination-sm">
            <li
                v-for="pageNum in pagesNumber"
                :class="[pageNum==pageNumber ? 'active':'']"
                @click="this.pageNumber = pageNum">
              <span class="page-link cursor-pointer">{{ pageNum }}</span>
            </li>
          </ul>
        </nav>
      </Box>
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

import axios from "axios"
import Loader from "@/ui-components/Loader.vue";
import Box from "@/ui-components/Box.vue";

export default {
  components: {
    Box,
    Loader,
    AppInfo, SearchPanel, AppFilter, MovieList,
    MovieAddForm,
  },
  data() {
    return {
      movies: [],
      term: '',
      moviesLoading: false,
      pagesNumber: 0,
      pageNumber: 1,
      limit: 7,
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
    },
    async fetchMovies() {
      this.moviesLoading = true
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts", {
        params: {
          _limit: 10,
          page: this.pageNumber
        },
      })
      const newMovies = response.data.map(item => ({
        id: item.id,
        name: item.title,
        like: item.id % 3 == 0,
        favorite: item.id % 2 == 0,
        viewers: item.id * 13,
      }))
      this.pagesNumber = Math.ceil(response.headers['x-total-count'] / this.limit)
      console.log(response)

      // this.movies.push(...newMovies)
      this.movies = newMovies

      this.moviesLoading = false
    },
  },
  mounted() {
    console.log("hello")
    this.fetchMovies()
  },
  watch: {
    pageNumber() {
      this.fetchMovies()
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

.cursor-pointer {
  cursor: pointer;
}
</style>

