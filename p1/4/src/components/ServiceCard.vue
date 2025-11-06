<template>
  <div class="service-card" :class="`service-${service.id}`">
    <div class="service-icon">
      <img :src="`/src/assets/${service.icon}`" :alt="service.title" />
    </div>
    <h3>{{ service.title }}</h3>
    <p>{{ service.description }}</p>
  </div>
</template>

<script setup>
defineProps({
  service: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
.service-card {
  background: linear-gradient(145deg, #ffffff, #f9f9f9);
  color: #333;
  padding: 2rem;
  border-radius: 15px;
  border: none;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  text-align: center;
}

/* Accent borders with gradient top border */
.service-card::before {
  content: "";
  display: block;
  height: 5px;
  width: 60px;
  margin: 0 auto 1rem;
  border-radius: 5px;
  background: currentColor;
}

.service-0 { color: #FF6B6B; }
.service-1 { color: #FF6B6B; }
.service-2 { color: #FF6B6B; }
.service-3 { color: #FF6B6B; }
.service-4 { color: #FF6B6B; }
.service-5 { color: #FF6B6B; }

.service-card:hover {
  transform: translateY(-10px) scale(1.03);
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.2);
}

.service-icon {
  width: 70px;
  height: 70px;
  margin: 0 auto 1.5rem;
  background: rgba(0,0,0,0.05);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s;
}

.service-icon img {
  width: 50%;
  height: 50%;
  object-fit: contain;
}

.service-card:hover .service-icon {
  background: rgba(0,0,0,0.1);
}

.service-card h3 {
  font-size: 1.6rem;
  margin-bottom: 0.8rem;
  font-weight: 600;
}

.service-card p {
  line-height: 1.6;
  color: #555;
  font-size: 0.95rem;
}

</style>
