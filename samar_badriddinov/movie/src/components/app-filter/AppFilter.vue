<template>
  <div class="btn-group">


    <button v-for="item in filterItems"
            class="btn"
            :key="item.name"
            :class="[item.name===filterName ? 'btn-dark' : 'btn-outline-dark']"
    @click="clickFilterItem(item.name)">
      {{item.title}}
    </button>

  </div>

</template>

<script>
export default {
  data() {
    return {
      filterName: 'all',
      filterItems: [
        {
          name: 'all',
          title: 'Barcha kinolar'
        },
        {
          name: 'famous',
          title: 'Mashxur kinolar'
        },
        {
          name: 'mostWatched',
          title: "Eng ko'p ko'rilgan kinolar"
        },
      ],
    }
  },
  methods: {
    clickFilterItem(newFilterName) {
      this.filterName = newFilterName
    }
  }
}
</script>

<style>

</style>

