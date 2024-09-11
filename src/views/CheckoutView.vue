<template>
  <div>
    <h1>Checkout</h1>
    <div v-if="cart.length === 0">Your cart is empty.</div>
    <div v-else>
      <div v-for="item in cart" :key="item.prodID" class="checkout-item">
        <img :src="item.image_url || 'https://via.placeholder.com/150'" alt="Product Image" class="checkout-image"/>
        <h3>{{ item.name }}</h3>
        <p>Quantity: {{ item.quantity }}</p>
        <p>Price: R{{ item.price }}</p>
        <button @click="removeFromCart(item)">Remove</button>
      </div>
    </div>
  </div>
</template>

<script>
import { useCart } from '@/composables/useCart'; 

export default {
  setup() {
    const { cart, removeFromCart } = useCart(); 
    return { cart, removeFromCart };
  },
};
</script>

<style scoped>
.checkout-item {
  display: flex;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #ccc;
}

.checkout-image {
  width: 100px;
  height: 100px;
  margin-right: 20px;
  border-radius: 10px;
}

h3 {
  margin-bottom: 10px;
}

button {
  background-color: #4CAF50;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #3e8e41;
}

.empty-cart {
  font-size: 24px;
  font-weight: bold;
  color: #666;
  padding: 20px;
  text-align: center;
}
</style>
