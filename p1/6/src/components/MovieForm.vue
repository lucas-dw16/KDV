<template>
  <div class="movie-form-container">
    <h1>Add Movie</h1>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="title">Title</label>
        <p v-if="errorMessages.title" class="error-message">{{ errorMessages.title }}</p>
        <input type="text" id="title" v-model="title" :class="{ error: errorMessages.title }" />
      </div>

      <div class="form-group">
        <label for="year">Year</label>
        <p v-if="errorMessages.year" class="error-message">{{ errorMessages.year }}</p>
        <input type="text" id="year" v-model="year" :class="{ error: errorMessages.year }" />
      </div>

      <div class="form-group">
        <label for="director">Director</label>
        <p v-if="errorMessages.director" class="error-message">{{ errorMessages.director }}</p>
        <input type="text" id="director" v-model="director" :class="{ error: errorMessages.director }" />
      </div>

      <div class="form-group">
        <label for="genre">Genre</label>
        <p v-if="errorMessages.genre" class="error-message">{{ errorMessages.genre }}</p>
        <input type="text" id="genre" v-model="genre" :class="{ error: errorMessages.genre }" />
      </div>

      <button type="submit">Add Movie</button>
    </form>

    <h2>Movies List</h2>
    <ul>
      <li v-for="(movie, index) in movieStore.movies" :key="index">
        {{ movie.title }} ({{ movie.year }}) - {{ movie.director }} - {{ movie.genre }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { useMovieStore } from '../store/movieStore';

const movieStore = useMovieStore();

const title = ref('');
const year = ref('');
const director = ref('');
const genre = ref('');

const errorMessages = reactive({
  title: '',
  year: '',
  director: '',
  genre: ''
});

function submitForm() {
  // Reset errors
  errorMessages.title = '';
  errorMessages.year = '';
  errorMessages.director = '';
  errorMessages.genre = '';

  let isValid = true;
  const currentYear = new Date().getFullYear();

  if (!title.value.trim()) {
    errorMessages.title = 'Title is required';
    isValid = false;
  }

  const yearNum = parseInt(year.value);
  if (!year.value) {
    errorMessages.year = 'Year is required';
    isValid = false;
  } else if (isNaN(yearNum) || yearNum < 1900 || yearNum > currentYear) {
    errorMessages.year = `Year must be between 1900 and ${currentYear}`;
    isValid = false;
  }

  const nameParts = director.value.trim().split(' ').filter(p => p.length > 0);
  if (!director.value.trim()) {
    errorMessages.director = 'Director is required';
    isValid = false;
  } else if (nameParts.length < 2) {
    errorMessages.director = 'Director must include first and last name';
    isValid = false;
  }

  if (!genre.value.trim()) {
    errorMessages.genre = 'Genre is required';
    isValid = false;
  } else if (genre.value.trim().length < 5) {
    errorMessages.genre = 'Genre must be at least 5 characters';
    isValid = false;
  }

  if (isValid) {
    movieStore.addMovie({
      title: title.value,
      year: yearNum,
      director: director.value,
      genre: genre.value
    });

    // Reset form
    title.value = '';
    year.value = '';
    director.value = '';
    genre.value = '';
  }
}
</script>

<style scoped>
.error-message { color: red; font-size: 0.85rem; margin: 0.25rem 0; }
.error { border-color: red; }
</style>
