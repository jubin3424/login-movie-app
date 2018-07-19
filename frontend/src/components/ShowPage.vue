<template>
    <div>
      <h1>상세 내용</h1>
      <img v-bind:src="movie[0].poster" width="300px">
      <h2>{{ movie[0].name }}</h2>
      <h2>{{ movie[0].director }}</h2>
      <h4>{{ movie[0].year }}</h4>

      <a @click="$router.go(-1)" style="cursor: pointer">Back</a>
    </div>
</template>

<script>
  export default {
    name: "ShowPage",
    created () {
      var id = this.$route.params.id;
      this.$http.get(`/api/movies/${id}`)
        .then((response) => {
          this.movie = response.data
        })
    },
    data () {
      return {
        movie: {}
      }
    }
  }
</script>

<style scoped>

</style>
