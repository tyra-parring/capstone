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
              <p>Material: {{ product.material }}</p>
              <p>Price: ${{ product.price }}</p>
              <p>Stock: {{ product.stock }}</p>
              <div class="product-actions">
                <button @click="addToCart(product)">Add to Cart</button>
                <router-link to="/product/:id">View More</router-link>
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

export default {
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
        console.log('API response:', response);
        this.products = response.data;
      } catch (error) {
        console.error('Error fetching products:', error);
        this.error = error.message;
      } finally {
        this.loading = false;
      }
    },
  },
  created() {
    this.fetchProducts();
  },
};
</script>

<style scoped>
.products {
  padding: 20px;
  background-color: #f9f9f9;
}

.product-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.product-category {
  margin: 20px;
  padding: 20px;
  background-color: #fff;
  width: 100%;
}

.product-category h2 {
  margin-top: 0;
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
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: calc(25% - 20px);
}

.product-image {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 10px;
}

.product-card h3 {
  margin-top: 0;
}

@media (max-width: 768px) {
  .product-card {
    width: calc(50% - 20px);
  }
}

@media (max-width: 480px) {
  .product-card {
    width: 100%;
  }
}
</style>