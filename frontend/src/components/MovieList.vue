<template>
    <div class="movies">
      <h1>Movie List</h1>
      <el-row :gutter="40">
        <el-col :sm="24" :md="6" v-for="(movie, index) in movies" :key="index" style="margin-bottom: 20px;">
          <el-card :body-style="{ padding: '0px' }">
            <img v-bind:src="movie.poster" class="image" style="width:100%;">
            <div style="padding: 14px;">
              <h2><router-link :to="{ name: 'show', params: { id: movie.id }}">{{ movie.name }}</router-link></h2>
              <div class="bottom clearfix">
                <span>{{ movie.director }}</span><br>
                <span style="font-style:italic; color:lightgray">{{ movie.year }}</span>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
</template>

<script>
  export default {
    name: "MovieList",
    created() {
      this.$http.get('/api/movies')
        .then((response) => {
          this.movies = response.data
        })
    },
    data () {
      return {
        movies: []
      }
    }
  }
</script>

<style scoped>
a {
  color: black;
}
</style>
