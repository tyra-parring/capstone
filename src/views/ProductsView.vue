<template>
  <div class="products">
    <h1>Products List</h1>
    <div v-if="loading">Loading...</div>
    <div v-if="error" class="error">{{ error }}</div>
    <div v-if="products.length > 0">
      <div class="product-grid">
        <div class="product-category" v-for="(products, category) in categorizedProducts" :key="category">
          <h2>{{ category }}</h2>
          <div class="product-cards">
            <div class="product-card" v-for="product in products" :key="product.prodID">
              <img :src="product.image_url || 'https://via.placeholder.com/150'" alt="Product Image" class="product-image" />
              <h3>{{ product.name }}</h3>
              <p>{{ product.description }}</p>
              <div class="product-actions">
                <button @click="addToCart(product)">
                  <span class="text">Add to Cart</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else-if="!loading && !error">No products found.</div>
  </div>
</template>

<script>
import axios from 'axios';
import AOS from 'aos';
import { useCart } from '@/composables/useCart'; 

export default {
  setup() {
    const { addToCart } = useCart();
    return { addToCart };
  },
  data() {
    return {
      products: [],
      loading: false,
      error: '',
    };
  },
  computed: {
    categorizedProducts() {
      const categorized = {};
      this.products.forEach((product) => {
        const category = product.Categories || 'Uncategorized';
        if (!categorized[category]) {
          categorized[category] = [];
        }
        categorized[category].push(product);
      });
      return categorized;
    },
  },
  methods: {
    async fetchProducts() {
      this.loading = true;
      try {
        const response = await axios.get('https://capstone-wqf7.onrender.com/products');
        this.products = response.data;
      } catch (error) {
        this.error = error.message;
      } finally {
        this.loading = false;
      }
    },
  },
  created() {
    this.fetchProducts();
  },
  mounted() {
    AOS.init({
      duration: 1100,
      once: true,
    });
  },
};
</script>

<style scoped>
.products {
  padding: 20px;
  background-image: url(https://tyra-parring.github.io/host-/image/black-smoke-background-border-textured-wallpaper-high-resolution-min.jpg);
  background-size: cover;
  background-attachment: scroll; 
  height: 100vh; 
  overflow-y: auto;
}

.products h1 {
  text-align: center;
  color: whitesmoke;
}

.product-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.product-category {
  margin: 20px;
  padding: 20px;
  width: 100%;
}

.product-category h2 {
  margin-top: 0;
  text-align: center;
  color: whitesmoke;
}

.product-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.product-card {
  margin: 20px;
  padding: 20px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: .6em;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: calc(35% - 20px);
}

.product-image {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 10px;
}

.product-card h3 {
  margin-top: 0;
  text-align: center;
}

.product-actions {
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px; 
}

.product-actions button {
  margin: 0 20px; 
}

/* From Uiverse.io by KINGFRESS */ 
button {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  color: white;
  background-color: #000000;
  padding: 0.9em;
  border: none;
  border-radius: .6rem;
  position: relative;
  cursor: pointer;
  overflow: hidden;
}

button span:not(:nth-child(6)) {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  height: 30px;
  width: 30px;
  background-color: #b8860b;
  border-radius: 50%;
  transition: .6s ease;
}

button span:nth-child(6) {
  position: relative;
}

button span:nth-child(1) {
  transform: translate(-3.3em, -4em);
}

button span:nth-child(2) {
  transform: translate(-6em, 1.3em);
}

button span:nth-child(3) {
  transform: translate(-.2em, 1.8em);
}

button span:nth-child(4) {
  transform: translate(3.5em, 1.4em);
}

button span:nth-child(5) {
  transform: translate(3.5em, -3.8em);
}

button:hover span:not(:nth-child(6)) {
  transform: translate(-50%, -50%) scale(4);
  transition: 1.5s ease;
}
  
/* From Uiverse.io by vinodjangid07 */ 
.cartBtn {
  width: 155px;
  height: 50px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  color: white;
  font-weight: 500;
  position: relative;
  background-color: rgb(0, 0, 0);
  box-shadow: 0 20px 30px -7px rgba(27, 27, 27, 0.219);
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  overflow: hidden;
  border-radius: .6rem;
}

.cart {
  z-index: 2;
}

.cartBtn:active {
  transform: scale(0.96);
}

.product {
  position: absolute;
  width: 12px;
  border-radius: 3px;
  content: "";
  left: 23px;
  bottom: 23px;
  opacity: 0;
  z-index: 1;
  fill: #b8860b;
}

.cartBtn:hover .product {
  animation: slide-in-top 1.2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

@keyframes slide-in-top {
  0% {
    transform: translateY(-30px);
    opacity: 1;
  }

  100% {
    transform: translateY(0) rotate(-90deg);
    opacity: 1;
  }
}

.cartBtn:hover .cart {
  animation: slide-in-left 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

@keyframes slide-in-left {
  0% {
    transform: translateX(-10px);
    opacity: 0;
  }

  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

@media (max-width: 1024px) {
  .product-card {
    width: calc(65% - 20px); 
  }
}

@media (max-width: 768px) {
  .product-card {
    width: calc(95% - 10px);
  }
}

@media (max-width: 480px) {
  .product-card {
    width: calc(50% - 20px); 
  }
}
</style>