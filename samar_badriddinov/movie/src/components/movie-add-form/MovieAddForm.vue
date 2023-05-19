<template>

  <div class="movie-add-form">
    <h3>Yangi kino qo'shish</h3>
    <form class="add-form d-flex" @submit.prevent>
      <Input class="new-movie-label"
             placeholder="Kino nomi?"
             v-model="name"
      />
      <Input type="number"
             class="form-controller new-movie-label"
             placeholder="Kino necci marta ko'rlganligi?"
             v-model="viewers"
      />
      <PrimaryButton class="btn-outline-dark" type="submit" @click="addMovie">Qo'shish</PrimaryButton>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      viewers: '',
    }
  },
  methods: {
    addMovie() {
      if (this.name === '' || this.viewers === '') {
        return alert('Barcha malumotlarni kiriting!')
      }
      const newMovie = {
        id: Date.now(),
        name: this.name,
        viewers: this.viewers,
        favorite: false,
        like: false
      }
      this.$emit('createMovie', newMovie)
      this.name = ''
      this.viewers = ''
    }
  },
}
</script>

<style>
.movie-add-form {
  margin-top: 2rem;
  padding: 1.5rem;
  border-color: #fcfaf5;
  border-radius: 4px;
  box-shadow: 15px 15px 15px rgba(0, 0, 0, 0.15);
}

form input {
  width: 100%;
}
</style>

