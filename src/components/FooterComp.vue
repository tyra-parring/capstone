<template>
  <div class="footer-container">
    <div class="footer-content">
      <div class="footer-section">
        <h4>Follow Us</h4>
        <ul>
          <li><a href="#" target="_blank" class="social-link"><i class="fa fa-facebook"></i> Facebook</a></li>
          <li><a href="#" target="_blank" class="social-link"><i class="fa fa-twitter"></i> Twitter</a></li>
          <li><a href="#" target="_blank" class="social-link"><i class="fa fa-instagram"></i> Instagram</a></li>
        </ul>
      </div>
      <div class="footer-section">
        <h4>Quick Links</h4>
        <ul>
          <li><router-link to="/" class="quick-link">Home</router-link></li>
          <li><router-link to="/about" class="quick-link">About Us</router-link></li>
          <li><router-link to="/contact" class="quick-link">Contact Us</router-link></li>
        </ul>
      </div>
      <div class="footer-section">
        <h4>Get in Touch</h4>
        <p>
          Email: <a href="mailto: jewelry@gmail.com">jewelry@gmail.com</a>
        </p>
        <p>
          Phone: <a href="tel: 021 345 6789">021 345 6789</a>
        </p>
      </div>
    </div>
    <div class="footer-copyright">
      &copy; Tyra Parring {{ currentYear }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterComp',
  computed: {
    currentYear() {
      return new Date().getFullYear();
    }
  }
}
</script>

<style scoped>
.footer-container {
  background-color: #000000;
  color: #fff;
  padding: 20px;
  text-align: center;
}

.footer-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 20px;
}

.footer-section {
  flex-basis: 30%;
  margin: 10px;
}

.footer-section h4 {
  margin-bottom: 10px;
}

.footer-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-section ul li {
  margin-bottom: 10px;
}

.footer-section a {
  color: #fff;
  text-decoration: none;
}

.social-link:hover {
  color: #3b5998; 
  transition: color 0.2s ease-in-out;
}

.social-link:hover .fa-facebook {
  color: #3b5998; 
}

.social-link:hover .fa-twitter {
  color: #1da1f2; 
}

.social-link:hover .fa-instagram {
  color: #e1306c; 
}

.quick-link {
  color: #fff;
  text-decoration: none;
}

.quick-link:hover {
  color: #ccc;
  transition: color 0.2s ease-in-out;
}

.quick-link.router-link-exact-active {
  color: #ccc;
}

.footer-copyright {
  font-size: 14px;
  margin-top: 20px;
}
</style>