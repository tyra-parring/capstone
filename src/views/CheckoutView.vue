<template>
  <div>
    <h1>Checkout</h1>
    <div v-if="cart.length === 0">Your cart is empty.</div>
    <div v-else>
      <table class="checkout-table">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in cart" :key="item.prodID">
            <td>{{ item.name }}</td>
            <td>{{ item.quantity }}</td>
            <td>R{{ item.price }}</td>
            <td>R{{ item.price * item.quantity }}</td>
            <td>
              <button @click="removeFromCart(item)">Remove</button>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th colspan="3">Total:</th>
            <th>R{{ totalCartPrice }}</th>
            <th></th>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
</template>

<script>
import { useCart } from '@/composables/useCart'; 

export default {
  setup() {
    const { cart, removeFromCart } = useCart(); 
    const totalCartPrice = cart.value.reduce((acc, item) => acc + item.price * item.quantity, 0);
    return { cart, removeFromCart, totalCartPrice };
  },
};
</script>

<style scoped>
.checkout-table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 10px;
  border: 1px solid #ccc;
}

th {
  background-color: #f0f0f0;
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