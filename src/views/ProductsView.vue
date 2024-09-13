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
                <button class="button">
                  <span class="text">View More</span>
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

button {
  background-color: #000000; 
  color: #ffffff;
  border: none;
  border-radius: .6rem;
  padding: 0.9em;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
}

button:hover {
  background-color: #b8860b; 
  color: #ffffff; 
}

.router-link {
  background-color: #000000; 
  color: #ffffff;
  border: none;
  border-radius: .6rem;
  padding: 0.9em;
  cursor: pointer;
  text-decoration: none; 
  transition: background-color 0.3s ease-in-out;
}

.router-link:hover {
  background-color: #b8860b; 
  color: #ffffff; 
  text-decoration: none; 
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