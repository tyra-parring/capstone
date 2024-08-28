<template>
  <div class="home-view">
    <header class="header">
      <h1>Luxurious Jewelry</h1>
      <p>Discover our exclusive collection of fine jewelry</p>
    </header>

    <section class="grid-section">
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
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  components: {
  
  }
}
</script>

<style scoped>
.home-view {
  font-family: 'Playfair Display', serif;
  background-color: #f8f9fa;
  color: #343a40;
}

.header {
  text-align: center;
  padding: 2rem 0;
  background-color: #fff8e7;
  margin-bottom: 2rem;
}

.header h1 {
  font-size: 3rem;
  color: #d4af37; 
  margin-bottom: 0.5rem;
}

.header p {
  font-size: 1.5rem;
  color: #555;
}

.grid-section {
  display: flex;
  justify-content: center;
  padding: 2rem;
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

@media (max-width: 768px) {
  .grid-container {
    grid-template-columns: 1fr;
  }
}
</style>
