import { defineStore } from "pinia";

export const useMoviesStore = defineStore("movies", {
  state: () => ({
    movies: [],
    isLoading: false,
    query: "",
  }),
  getters: {},
  actions: {
    async getMovies() {
      this.isLoading = true;
      const result = await fetch(
        "http://localhost:8000/movies?q=" + this.query
      );
      const response = await result.json();
      this.movies = response;
      this.isLoading = false;
    },
  },
});
