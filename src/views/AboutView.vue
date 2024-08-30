<template>
  <div class="about-view">

    <div class="about-grid">
      <!-- Left column: Main about section -->
      <div class="about-section about-main">
        <div class="about-content">
          <h2>About jewelry</h2>
          <p>
            jewelry is a luxurious jewelry brand that embodies elegance, craftsmanship, and timeless beauty.
            Each piece is meticulously crafted to perfection, reflecting our commitment to quality and exquisite design.
            Discover the world of jewelry and indulge in the allure of fine jewelry that tells your unique story.
          </p>
        </div>
      </div>

      <!-- Right column, top: Company mission or another section -->
      <div class="about-section about-right-top">
        <div class="about-content">
          <h3>Our Mission</h3>
          <p>
            Our mission is to create jewelry that not only complements your style but also celebrates your individuality.
            We believe in the power of fine jewelry to elevate every moment and cherish life's special memories.
          </p>
        </div>
      </div>

      <!-- Right column, bottom: Another informational section -->
      <div class="about-section about-right-bottom">
        <div class="about-content">
          <h3>Our Vision</h3>
          <p>
            At jewelry, our vision is to inspire confidence and elegance through our curated collections.
            We strive to be the go-to destination for luxury jewelry that resonates with the essence of modern sophistication.
          </p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
// import NavbarComp from '@/components/NavbarComp.vue';
// import FooterComp from '@/components/FooterComp.vue';

export default {
  name: 'AboutView',
  components: {
    // NavbarComp,
    // FooterComp,
  },
};
</script>

<style scoped>
.about-view {
  display: flex;
  flex-direction: column;
  background-color: #f8f9fa;
}

.about-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 1rem;
  margin: 2rem;
}

.about-section {
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  color: #fff;
}

.about-main {
  grid-row: span 2;
  background-image: url('https://tyra-parring.github.io/homehost-/pexels-tima-miroshnichenko-6262835.jpg'); 
}

.about-right-top {
  background-image: url('https://tyra-parring.github.io/homehost-/pexels-arjivexports-5362404.jpg'); 
}

.about-right-bottom {
  background-image: url('https://tyra-parring.github.io/homehost-/38b56d9c-e41e-480b-af98-27cf497bc289.png'); 
}

.about-content {
  position: absolute;
  top: 50%;
  left: 10%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.6);
  padding: 1rem;
  border-radius: 8px;
}

.about-content h2, .about-content h3 {
  font-family: 'Playfair Display', serif;
  color: #d4af37; /* Gold color */
  margin-bottom: 0.5rem;
}

.about-content p {
  font-family: 'Lato', sans-serif;
  font-size: 1rem;
  color: #f1f1f1;
  line-height: 1.5;
}

@media (max-width: 768px) {
  .about-grid {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }

  .about-main {
    grid-row: span 1;
  }
}
</style>
