<template>
  <section id="contact" class="contact-section">
    <div class="container">
      <h2>Contact</h2>
      <form @submit.prevent="submitForm" class="contact-form">
        <div class="form-group">
          <label for="name">Name</label>
          <input 
            type="text" 
            id="name" 
            v-model="contactForm.name"
            required
          />
        </div>
        
        <div class="form-group">
          <label for="email">Email</label>
          <input 
            type="email" 
            id="email" 
            v-model="contactForm.email"
            required
          />
        </div>
        
        <div class="form-group">
          <label for="subject">Subject</label>
          <input 
            type="text" 
            id="subject" 
            v-model="contactForm.subject"
            required
          />
        </div>
        
        <div class="form-group">
          <label for="message">Message</label>
          <textarea 
            id="message" 
            v-model="contactForm.message"
            rows="5"
            required
          ></textarea>
        </div>
        
        <button type="submit" class="submit-btn">Send message</button>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

// Contact form data
const contactForm = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const submitForm = () => {
  // Handle form submission
  console.log('Form submitted:', contactForm.value)
  
  // Show success message (you could emit an event to parent here)
  alert('Thank you for your message! We will get back to you soon.')
  
  // Reset form
  contactForm.value = {
    name: '',
    email: '',
    subject: '',
    message: ''
  }
}
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  width: 100%;
}

/* Contact Section */
.contact-section {
  background: #2c3e50;
  color: white;
  padding: 4rem 0;
}

.contact-section h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
}

.contact-form {
  max-width: 600px;
  margin: 0 auto;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.75rem;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  background: white;
  color: #333;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  box-shadow: 0 0 0 2px #007bff;
}

.submit-btn {
  background: #007bff;
  color: white;
  padding: 0.75rem 2rem;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
  float: right;
}

.submit-btn:hover {
  background: #0056b3;
}

/* Responsive Design */
@media (max-width: 768px) {
  .contact-section h2 {
    font-size: 2rem;
  }
}
</style>