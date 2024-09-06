<template>
  <div class="home-view">
    <section class="section" data-aos="fade-up" data-aos-duration="1000">
      <h1>Luxurious Jewelry</h1>
      <p>Discover our exclusive collection of fine jewelry</p>
    </section>

    <section class="another-section" data-aos="fade-up" data-aos-duration="1400">
      <div>
        <h1>Welcome To Our Jewelry Store</h1>
          <p>Explore our collection of exquisite jewelry pieces, carefully crafted to make you shine.</p>
          <button type="button" class="btn btn-outline-danger">Discover More</button>
      </div>
    </section>

    <section class="banner-section">
      <div class="banner-container">
        <div class="banner-loop">
          <span class="animated-banner">Shop Now</span>
          <span class="animated-banner">Shop Now</span>
          <span class="animated-banner">Shop Now</span>
          <span class="animated-banner">Shop Now</span>
          <span class="animated-banner">Shop Now</span>
          <span class="animated-banner">Shop Now</span>
          <span class="animated-banner">Shop Now</span>
          <span class="animated-banner">Shop Now</span>
          <span class="animated-banner">Shop Now</span>
          <span class="animated-banner">Shop Now</span>
          <span class="animated-banner">Shop Now</span>
          <span class="animated-banner">Shop Now</span>
          <span class="animated-banner">Shop Now</span>
          <span class="animated-banner">Shop Now</span>
          <span class="animated-banner">Shop Now</span>
          <span class="animated-banner">Shop Now</span>
        </div>
      </div>
    </section>

    <section class="grid-section" data-aos="fade-up" data-aos-duration="1400">
      <div class="grid-container">
        <div v-for="product in products" :key="product.id" class="card">
          <img :src="product.image" :alt="product.name" class="card-img" />
          <div class="card-content">
            <h2>{{ product.name }}</h2>
            <p>{{ product.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="call-to-action-section" data-aos="fade-up" data-aos-duration="1400">
      <div class="call-to-action-container">
        <h2>Get Exclusive Offers and Discounts</h2>
        <p>Sign up for our newsletter to stay updated on our latest collections and promotions</p>
        <button type="button" class="btn btn-outline-danger">Sign Up Now</button>
      </div>
    </section>
  </div>
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
  name: 'HomeView',
  components: {
  
  },
  mounted() {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });
  },
}
</script>

<style scoped>
.home-view {
  font-family: 'Playfair Display', serif;
  background-color: #000000f1;
  color: #ffffff;
}

.section {
  text-align: center;
  padding: 2rem 0;
  background-color: #fff8e7;
  margin-bottom: 2rem;
  background: url(https://tyra-parring.github.io/host-/image/6263491-uhd_3840_2160_25fps-ezgif.com-optimize.gif);
  background-repeat: no-repeat;
  background-size: cover;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.section h1 {
  font-size: 3rem;
  margin-bottom: 0.5rem;
  overflow: hidden; 
  white-space: nowrap;
  animation: typing 5s steps(30) forwards;
  position: relative;
}

.section p {
  font-size: 1.5rem;
  color: #ffffff;
  overflow: hidden;
  animation: typing 5s steps(30) forwards;
  position: relative;
}

.section h1::after, .section p::after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 2px;
  height: 100%;
  background-color: #ffffff; 
  animation: cursor-blink 1s infinite; 
}

@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

@keyframes cursor-blink {
  from {
    opacity: 1;
    width: 2px
  }
  to {
    opacity: 0;
    width:2px
  }
}

.grid-section {
  display: flex;
  justify-content: center;
  padding: 2rem;
}

.another-section {
  /* background: rgba(85, 76, 76, 0.5); */
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px); 
  padding: 2rem;
  text-align: center;
  margin-bottom: 30px;
  position: relative;
  overflow: hidden;
  font-size: 1.5rem;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.card {
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.card-img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card-content {
  padding: 1rem;
  text-align: center;
}

.card-content h2 {
  font-size: 1.5rem;
  margin: 0.5rem 0;
  color: #333;
}

.card-content p {
  font-size: 1rem;
  color: #777;
}

.banner-section {
  height: 100px; 
  width: 98.8vw;
  overflow: hidden;
  /* background: rgba(0, 0, 0, 0.5); */
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}
.another-section::before, .banner-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* background: rgba(85, 76, 76, 0.5);  */
  backdrop-filter: blur(100px);
  -webkit-backdrop-filter: blur(10px); 
  z-index: 0; 
}

.another-section > *, .banner-section > * {
  position: relative; 
  z-index: 1; 
}

.banner-container {
  display: flex;
  overflow: hidden;
  position: relative;
}

.banner-loop {
  display: flex;
  animation: scroll 15s linear infinite;
}

.animated-banner {
  padding: 0 20px;
  font-size: 2rem;
  font-weight: bold;
  color: #ffffff; 
  white-space: nowrap;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}


@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in {
  animation: fadeIn 1s ease-in-out;
}

.call-to-action-section {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .call-to-action-container {
    max-width: 400px;
    text-align: center;
  }

  .call-to-action-container h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  .call-to-action-container p {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  .call-to-action-container button {
    cursor: pointer;
  }

  .call-to-action-container button:hover {
    background-color: #c82333;
  }

  @media (max-width: 768px) {
    .call-to-action-section {
      padding: 1rem;
    }
    .call-to-action-container {
      max-width: 300px;
    }
  }

@media (max-width: 768px) {
  .grid-container {
    grid-template-columns: 1fr;
  }
}
</style>
