<script setup>
import Navigation from './components/Navigation.vue'
import ImageSlider from './components/ImageSlider.vue'
import ServicesSection from './components/ServicesSection.vue'
import ContactForm from './components/ContactForm.vue'

// Slider data with Pexels images
const sliderData = [
  {
    image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    title: 'Digital Marketing Excellence',
    description: 'Transform your business with our comprehensive digital marketing strategies that drive real results.',
    buttonText: 'Get Started'
  },
  {
    image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    title: 'Strategic Growth Solutions',
    description: 'Unlock your potential with data-driven insights and expert consultancy services.',
    buttonText: 'Learn More'
  },
  {
    image: 'https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    title: 'Innovative Team Collaboration',
    description: 'Experience agile methodologies that keep your brand ahead of the competition.',
    buttonText: 'Discover'
  },
  {
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    title: '24/7 Expert Support',
    description: 'Get the support you need, when you need it. Our team is here for your success.',
    buttonText: 'Contact Us'
  }
]
</script>

<template>
  <div class="app">
    <Navigation />
    
    <!-- Main Content -->
    <main>
      <!-- Hero Slider Section -->
      <section class="hero-section">
        <ImageSlider 
          :slides="sliderData" 
          :auto-play="true" 
          :auto-play-interval="5000"
          height="600px"
        />
      </section>
      
      <ServicesSection />
      <ContactForm />
    </main>
  </div>
</template>

<style>
/* Global reset - remove scoped to apply to entire page */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  margin: 0 !important;
  padding: 0 !important;
  width: 100%;
  height: 100%;
  font-family: Arial, sans-serif;
  line-height: 1.6;
  color: #333;
  overflow-x: hidden; /* Prevent horizontal scroll */
}

#app {
  margin: 0;
  padding: 0;
  width: 100%;
}

.app {
  min-height: 100vh;
  width: 100%;
  margin: 0;
  padding: 0;
}

/* Main Content */
main {
  width: 100%;
}

/* Hero Section */
.hero-section {
  width: 100%;
  position: relative;
}
</style>
