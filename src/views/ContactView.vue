<template>
  <div class="contact-page">
    <section class="header-section">
      <h1>Contact Us</h1>
      <p>We'd love to hear from you! Whether you have a question about our jewelry, pricing, or anything else, our team is ready to answer all your questions.</p>
    </section>
    
    <section class="form-section">
      <form class="contact-form" @submit.prevent="submitForm">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" id="name" v-model="formData.name" placeholder="Your Name" required>
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="formData.email" placeholder="Your Email" required>
        </div>
        <div class="form-group">
          <label for="message">Message</label>
          <textarea id="message" rows="5" v-model="formData.message" placeholder="Your Message" required></textarea>
        </div>
        <button type="submit" class="submit-button">Send Message</button>
      </form>
    </section>

    <section class="contact-info">
      <h1>Our Showroom</h1>
      <p>Visit us at our luxurious showroom in Cape Town:</p>
      <div class="showroom-details">
        <div class="showroom-image"></div>
        <div class="showroom-text">
          <address>123 Jewelry Lane, Woodstock, Cape Town, 8001</address>
          <p class="phone"><strong>Phone:</strong> (+27) 867-5309</p>
          <p class="email"><strong>Email:</strong> contact@luxjewels.com</p>
        </div>
      </div>
      <div class="social-icons">
        <a href="#" aria-label="LinkedIn" class="social-icon"><i class="fab fa-linkedin"></i></a>
        <a href="#" aria-label="Instagram" class="social-icon"><i class="fab fa-instagram"></i></a>
        <a href="#" aria-label="Facebook" class="social-icon"><i class="fab fa-facebook-f"></i></a>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ContactMe',
  data() {
    return {
      formData: {
        name: '',
        email: '',
        message: ''
      }
    };
  },
  methods: {
    async submitForm() {
      try {
        await axios.post('https://formspree.io/f/xrgnrzgz', this.formData);
        alert('Message sent successfully!');
        this.formData = { name: '', email: '', message: '' };
      } catch (error) {
        console.error('Error sending message:', error);
        alert('Failed to send your message. Please try again later.');
      }
    }
  }
};
</script>

<style scoped>
.contact-page {
  font-family: 'Playfair Display', serif;
  color: #333;
  background-color: #000000;
  padding: 2rem;
  min-height: 100vh;
  margin: 0;
  background: url(https://tyra-parring.github.io/host-/image/9694810-hd_1920_1080_25fps-ezgif.com-optimize.gif);
  background-size: cover;
}

.header-section {
  text-align: center;
  margin-bottom: 3rem;
}

.header-section h1 {
  font-size: 3rem;
  margin-bottom: 0.5rem;
  color: #b8860b; 
}

.header-section p {
  font-size: 1.2rem;
  color: #666;
}

.form-section {
  background-color: #ffffff;
  padding: 2rem;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.contact-form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  font-size: 1.1rem;
  color: #333;
  margin-bottom: 0.5rem;
  display: block;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  background: #f9f9f9;
  transition: border-color 0.3s;
}

.form-group input:focus,
.form-group textarea:focus {
  border-color: #b8860b;
}

.submit-button {
  padding: 0.75rem 1.5rem;
  background-color: #b8860b;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;
}

.submit-button:hover {
  background-color: #a67c00;
}

.contact-info {
  text-align: center;
  margin-top: 3rem;
}

.contact-info h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #333;
}

.contact-info p {
  font-size: 1rem;
  color: #555;
  margin-bottom: 0.5rem;
}

.showroom-details {
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  overflow: hidden;
  margin-top: 1.5rem;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.showroom-image {
  flex: 1;
  background: url('https://tyra-parring.github.io/host-/image/7c89aef2-515a-414c-99d7-c39e57e6e2b1.png') no-repeat center center;
  background-size: cover;
  min-height: 200px;
}

.showroom-text {
  flex: 1;
  padding: 1.5rem;
  text-align: left;
}

.showroom-text address {
  font-style: normal;
  font-size: 1.1rem;
  color: #333;
  margin-bottom: 1rem;
}

.phone, .email {
  color: #b8860b;
  font-weight: bold;
}

.social-icons {
  margin-top: 1.5rem;
}

.social-icon {
  margin: 0 0.5rem;
  font-size: 1.5rem;
  color: #b8860b;
  text-decoration: none;
  transition: color 0.3s;
}

.social-icon:hover {
  color: #a67c00;
}
</style>
