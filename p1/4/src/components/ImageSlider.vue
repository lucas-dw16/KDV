<template>
  <div class="slider-container">
    <div class="slider" ref="sliderRef">
      <div 
        v-for="(slide, index) in slides" 
        :key="index"
        class="slide"
        :class="{ 
          'active': index === currentSlide,
          'prev': index === prevSlide,
          'next': index === nextSlide
        }"
      >
        <img :src="slide.image" :alt="slide.title" />
        <div class="slide-content">
          <h2>{{ slide.title }}</h2>
          <p>{{ slide.description }}</p>
          <button v-if="slide.buttonText" class="slide-btn">
            {{ slide.buttonText }}
          </button>
        </div>
      </div>
    </div>

    <!-- Navigation Controls -->
    <button class="nav-btn prev-btn" @click="prevSlideHandler" :disabled="isAnimating">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
    
    <button class="nav-btn next-btn" @click="nextSlideHandler" :disabled="isAnimating">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>

    <!-- Dots Indicator -->
    <div class="dots-container">
      <button 
        v-for="(slide, index) in slides" 
        :key="`dot-${index}`"
        class="dot"
        :class="{ 'active': index === currentSlide }"
        @click="goToSlide(index)"
        :disabled="isAnimating"
      ></button>
    </div>

    <!-- Auto-play Toggle -->
    <button class="play-pause-btn" @click="toggleAutoPlay">
      <svg v-if="isPlaying" width="20" height="20" viewBox="0 0 24 24" fill="none">
        <rect x="6" y="4" width="4" height="16" fill="currentColor"/>
        <rect x="14" y="4" width="4" height="16" fill="currentColor"/>
      </svg>
      <svg v-else width="20" height="20" viewBox="0 0 24 24" fill="none">
        <polygon points="5,3 19,12 5,21" fill="currentColor"/>
      </svg>
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed, watch } from 'vue'

// Props
const props = defineProps({
  slides: {
    type: Array,
    required: true
  },
  autoPlay: {
    type: Boolean,
    default: true
  },
  autoPlayInterval: {
    type: Number,
    default: 4000
  },
  height: {
    type: String,
    default: '500px'
  }
})

// Reactive state
const currentSlide = ref(0)
const isAnimating = ref(false)
const isPlaying = ref(props.autoPlay)
const sliderRef = ref(null)

// Auto-play interval
let autoPlayTimer = null

// Computed properties
const prevSlide = computed(() => {
  return currentSlide.value === 0 ? props.slides.length - 1 : currentSlide.value - 1
})

const nextSlide = computed(() => {
  return currentSlide.value === props.slides.length - 1 ? 0 : currentSlide.value + 1
})

// Methods
const goToSlide = (index) => {
  if (isAnimating.value || index === currentSlide.value) return
  
  isAnimating.value = true
  currentSlide.value = index
  
  setTimeout(() => {
    isAnimating.value = false
  }, 600) // Animation duration
}

const nextSlideHandler = () => {
  goToSlide(nextSlide.value)
}

const prevSlideHandler = () => {
  goToSlide(prevSlide.value)
}

const startAutoPlay = () => {
  if (!isPlaying.value) return
  
  autoPlayTimer = setInterval(() => {
    nextSlideHandler()
  }, props.autoPlayInterval)
}

const stopAutoPlay = () => {
  if (autoPlayTimer) {
    clearInterval(autoPlayTimer)
    autoPlayTimer = null
  }
}

const toggleAutoPlay = () => {
  isPlaying.value = !isPlaying.value
  
  if (isPlaying.value) {
    startAutoPlay()
  } else {
    stopAutoPlay()
  }
}

// Keyboard navigation
const handleKeydown = (event) => {
  if (isAnimating.value) return
  
  switch (event.key) {
    case 'ArrowLeft':
      prevSlideHandler()
      break
    case 'ArrowRight':
      nextSlideHandler()
      break
    case ' ':
      event.preventDefault()
      toggleAutoPlay()
      break
  }
}

// Watch for autoPlay changes
watch(() => isPlaying.value, (newVal) => {
  if (newVal) {
    startAutoPlay()
  } else {
    stopAutoPlay()
  }
})

// Lifecycle hooks
onMounted(() => {
  if (isPlaying.value) {
    startAutoPlay()
  }
  
  // Add keyboard listener
  window.addEventListener('keydown', handleKeydown)
  
  // Pause on hover
  if (sliderRef.value) {
    sliderRef.value.addEventListener('mouseenter', stopAutoPlay)
    sliderRef.value.addEventListener('mouseleave', () => {
      if (isPlaying.value) startAutoPlay()
    })
  }
})

onUnmounted(() => {
  stopAutoPlay()
  window.removeEventListener('keydown', handleKeydown)
})
</script>

<style scoped>
.slider-container {
  position: relative;
  width: 100%;
  height: v-bind(height);
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.slider {
  position: relative;
  width: 100%;
  height: 100%;
}

.slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transform: translateX(100%);
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  justify-content: center;
}

.slide.active {
  opacity: 1;
  transform: translateX(0);
  z-index: 2;
}

.slide.prev {
  transform: translateX(-100%);
}

.slide.next {
  transform: translateX(100%);
}

.slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}

.slide-content {
  position: relative;
  z-index: 3;
  text-align: center;
  color: white;
  padding: 2rem;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 12px;
  max-width: 600px;
  margin: 0 2rem;
  backdrop-filter: blur(10px);
  transform: translateY(20px);
  opacity: 0;
  transition: all 0.6s ease 0.3s;
}

.slide.active .slide-content {
  transform: translateY(0);
  opacity: 1;
}

.slide-content h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
}

.slide-content p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  line-height: 1.6;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
}

.slide-btn {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 12px 30px;
  border-radius: 25px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.slide-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
}

/* Navigation buttons */
.nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.9);
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 4;
  color: #333;
}

.nav-btn:hover {
  background: white;
  transform: translateY(-50%) scale(1.1);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

.nav-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: translateY(-50%) scale(1);
}

.prev-btn {
  left: 20px;
}

.next-btn {
  right: 20px;
}

/* Dots indicator */
.dots-container {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  z-index: 4;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid white;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
}

.dot.active {
  background: white;
}

.dot:hover {
  transform: scale(1.2);
}

.dot:disabled {
  cursor: not-allowed;
}

/* Play/Pause button */
.play-pause-btn {
  position: absolute;
  top: 20px;
  right: 20px;
  background: rgba(0, 0, 0, 0.7);
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 4;
  color: white;
}

.play-pause-btn:hover {
  background: rgba(0, 0, 0, 0.9);
  transform: scale(1.1);
}

/* Responsive design */
@media (max-width: 768px) {
  .slide-content {
    margin: 0 1rem;
    padding: 1.5rem;
  }
  
  .slide-content h2 {
    font-size: 2rem;
  }
  
  .slide-content p {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }
  
  .nav-btn {
    width: 40px;
    height: 40px;
  }
  
  .prev-btn {
    left: 10px;
  }
  
  .next-btn {
    right: 10px;
  }
  
  .dots-container {
    bottom: 15px;
  }
  
  .play-pause-btn {
    top: 15px;
    right: 15px;
    width: 35px;
    height: 35px;
  }
}
</style>