<template>
  <li class="list-group-item d-flex justify-content-between"
      :class="[{like: movie.like}, {favorite: movie.favorite}]"
  >
    <span
        class="list-group-item-label"
        @click="onClick">
      {{movie.name}}
    </span>
    <input type="number" class="list-group-item-input" v-bind:value="movie.viewers">
    <div class="d-flex justify-content-center align-items-center ">
      <button type="button" class="btn-cookie btn-sm" @click="clickCookie">
        <i class="fas fa-cookie"></i>
      </button>

      <button type="button" class="btn-trash btn-sm" @click="clickTrash">
        <i class="fas fa-trash"></i>
      </button>

      <i class="fas fa-star"></i>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    movie: {
      type: Object,
      required: true
    },
  },
  methods: {
    onClick() {
      this.movie.like =! this.movie.like
      // this.$emit('movieListItemFunc', (app)=> {
        // app.movies = app.movies.map((val)=> {
        //   if (val.id===this.movie.id) {
        //     val.like = !val.like
        //   }
        //   return val
        // })
      // })
    },
    clickCookie() {
      this.movie.favorite =! this.movie.favorite
    },
    clickTrash()  {
      this.$emit('movieListItemFunc', (app)=> {
        app.movies = app.movies.filter((val)=> {
          if (val.id===this.movie.id) {
            return
          }
          return val
        })
      })
    }
  },
}
</script>

<style scoped>
.list-group-item {
  padding: 15px 20px;
  border-bottom: 1px solid #3d5a80;
}
.list-group-item:last-child {
  border-bottom: none;
}
.list-group-item span {
  line-height: 35px;
  font-size: 20px;
  cursor: pointer;
  width: 550px;
}
.list-group-item input {
  line-height: 35px;
  font-size: 20px;
  text-align: center;
  border: 0;
  outline: none;
}
.list-group-item .btn-cookie {
  color: #e09f3e;
}
.list-group-item .btn-trash {
  color: #e5383b;
}
.list-group-item .fa-star {
  width: 35px;
  height: 35px;
  text-align: center;
  line-height: 35px;
  font-size: 16px;
  color: #ffd700;
  transition: 0.3s all;
  transform: translateX(30px);
  opacity: 0;
}
.list-group-item.like .fa-star {
  transform: translateX(0);
  opacity: 1;
}
.list-group-item.favorite .list-group-item-label,
.list-group-item.favorite .list-group-item-input {
  color: #e09f3e;
}


</style>

