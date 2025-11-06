<template>
  <div>
    <!-- Navigation -->
    <nav class="navbar">
      <div class="nav-container">
        <button class="hamburger" @click="toggleMenu" :class="{ 'open': isMenuOpen }">
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        <!-- Desktop Navigation -->
        <div class="nav-links desktop-nav">
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>

    <!-- Mobile Menu Overlay -->
    <div class="mobile-menu" :class="{ 'open': isMenuOpen }">
      <button class="close-btn" @click="toggleMenu">×</button>
      <a href="#services" @click="toggleMenu">Services</a>
      <a href="#contact" @click="toggleMenu">Contact</a>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<style scoped>
/* Navigation Styles */
.navbar {
  background: #333;
  padding: 1rem 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  justify-content: center; /* Center the navigation links */
  align-items: center;
  position: relative;
}

/* Hamburger Menu */
.hamburger {
  display: none;
  flex-direction: column;
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
  position: absolute;
  right: 1rem;
}

.hamburger span {
  width: 25px;
  height: 3px;
  background: white;
  margin: 3px 0;
  transition: 0.3s;
}

.hamburger.open span:nth-child(1) {
  transform: rotate(-45deg) translate(-5px, 6px);
}

.hamburger.open span:nth-child(2) {
  opacity: 0;
}

.hamburger.open span:nth-child(3) {
  transform: rotate(45deg) translate(-5px, -6px);
}

/* Desktop Navigation */
.desktop-nav {
  display: flex;
  gap: 2rem;
}

.nav-links a {
  color: white;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s;
}

.nav-links a:hover {
  color: #007bff;
}

/* Mobile Menu */
.mobile-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  transform: translateX(-100%);
  transition: transform 0.3s ease;
  z-index: 999;
}

.mobile-menu.open {
  transform: translateX(0);
}

.close-btn {
  position: absolute;
  top: 2rem;
  right: 2rem;
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
}

.mobile-menu a {
  color: white;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hamburger {
    display: flex;
  }
  
  .desktop-nav {
    display: none;
  }
}
</style>