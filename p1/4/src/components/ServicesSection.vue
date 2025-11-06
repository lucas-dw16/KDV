<template>
  <section id="services" class="services-section">
    <div class="container">
      <LoadingSpinner 
        v-if="loading" 
        message="Loading services..."
      />
      <ErrorMessage 
        v-else-if="error" 
        :message="error"
        :show-retry="true"
        @retry="fetchServices"
      />
      <div v-else-if="serviceData">
        <h1>{{ serviceData.title }}</h1>
        <p class="intro">{{ serviceData.intro }}</p>
        
        <div class="services-grid">
          <ServiceCard 
            v-for="service in serviceData.services" 
            :key="service.id"
            :service="service"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import ServiceCard from './ServiceCard.vue'
import LoadingSpinner from './LoadingSpinner.vue'
import ErrorMessage from './ErrorMessage.vue'

const serviceData = ref(null)
const loading = ref(true)
const error = ref(null)

const fetchServices = async () => {
  try {
    loading.value = true
    error.value = null
    
    // First try to fetch from the API
    const response = await fetch('http://jemx.nl/FTED/ExOp/')
    if (!response.ok) {
      throw new Error('Failed to fetch services from API')
    }
    const data = await response.json()
    serviceData.value = data.service
  } catch (err) {
    console.warn('API fetch failed, using fallback data:', err.message)
    
    // Fallback data in case API is not accessible
    serviceData.value = {
      title: "Our Marketing Services",
      intro: "So, what exactly is digital marketing, and what are the different types of digital marketing channels? We're glad you asked. Digital marketing is any type of promotional activity done via the web. This includes anything in our list of marketing services",
      services: [
        {
          id: 0,
          title: "Marketing",
          icon: "marketing.svg",
          description: "Boost your brand's online presence with our comprehensive marketing service. From SEO to social media, we've got you covered. Contact us today!"
        },
        {
          id: 1,
          title: "Consultancy",
          icon: "consultancy.svg",
          description: "Maximize your marketing potential with our expert consultancy service. From strategy to execution, we'll help you achieve your business goals."
        },
        {
          id: 2,
          title: "Effective",
          icon: "effective.svg",
          description: "Our marketing service delivers results. From increased brand awareness to higher conversion rates, we'll help take your business to the next level."
        },
        {
          id: 3,
          title: "Strategy",
          icon: "strategy.svg",
          description: "Through targeted campaigns and data-driven insights, our main marketing strategy ensures maximum ROI for your business. Let's get started!"
        },
        {
          id: 4,
          title: "Agile",
          icon: "agile.svg",
          description: "Our agile marketing methodology allows us to pivot quickly and adapt to changing market conditions, ensuring your brand stays ahead of the competition."
        },
        {
          id: 5,
          title: "Support",
          icon: "support.svg",
          description: "Our support service is available 24/7 to address any questions or concerns you may have. We're here to support your marketing success."
        }
      ]
    }
  } finally {
    loading.value = false
  }
}

// Lifecycle
onMounted(() => {
  fetchServices()
})
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  width: 100%;
}

/* Services Section */
.services-section {
  background: #333;
  color: white;
  padding: 4rem 0;
  text-align: center;
}

.services-section h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.intro {
  font-size: 1.1rem;
  margin-bottom: 3rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

/* Responsive Design */
@media (max-width: 768px) {
  .services-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .services-section h1 {
    font-size: 2rem;
  }
  
  .intro {
    font-size: 1rem;
  }
}

@media (min-width: 769px) {
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1200px) {
  .services-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>