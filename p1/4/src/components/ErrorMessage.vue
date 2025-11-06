<template>
  <div class="error-container">
    <div class="error-icon">⚠️</div>
    <h3>Oops! Something went wrong</h3>
    <p>{{ message }}</p>
    <button v-if="showRetry" @click="$emit('retry')" class="retry-btn">
      Try Again
    </button>
  </div>
</template>

<script setup>
defineProps({
  message: {
    type: String,
    default: 'An error occurred while loading the content.'
  },
  showRetry: {
    type: Boolean,
    default: false
  }
})

defineEmits(['retry'])
</script>

<style scoped>
.error-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  text-align: center;
  color: #ff6b6b;
}

.error-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.error-container h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #ff6b6b;
}

.error-container p {
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  max-width: 500px;
}

.retry-btn {
  background: #007bff;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.retry-btn:hover {
  background: #0056b3;
}
</style>