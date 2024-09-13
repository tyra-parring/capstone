<template>
  <div class="admin-page">
    <h1>Admin Dashboard</h1>

    <!-- Products Table -->
    <h2>Products</h2>

    <!-- Add Product Button -->
<button @click="openAddProductModal">Add Product</button>
    <table>
      <thead>
        <tr>
          <th>Product ID</th>
          <th>Name</th>
          <th>Description</th>
          <th>Material</th>
          <th>Price</th>
          <th>Stock</th>
          <th>Image</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.prodID">
          <td>{{ product.prodID }}</td>
          <td><input v-model="product.name" /></td>
          <td><input v-model="product.description" /></td>
          <td><input v-model="product.material" /></td>
          <td><input v-model="product.price" type="number" /></td>
          <td><input v-model="product.stock" type="number" /></td>
          <td><img :src="product.image_url" alt="Product Image" width="50" /></td>
          <td>
            <button @click="updateProduct(product.prodID)">Update</button>
            <button @click="openDeleteProductModal(product)" class="delete-button">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Admin Users Table -->
    <h2>Admin Users</h2>
    <table>
      <thead>
        <tr>
          <th>User ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Age</th>
          <th>Gender</th>
          <th>Email</th>
          <th>Role</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.usersID">
          <td>{{ user.usersID }}</td>
          <td>{{ user.firstName }}</td>
          <td>{{ user.lastName }}</td>
          <td>{{ user.userAge }}</td>
          <td>{{ user.gender }}</td>
          <td>{{ user.userEmail }}</td>
          <td>{{ user.userRole }}</td>
          <td>
            <button @click="openUpdateModal(user)">Update</button>
            <button @click="openDeleteModal(user)" class="delete-button">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Add Product Modal -->
<div v-if="showAddProductModal" class="modal">
  <div class="modal-content">
    <span class="close" @click="closeAddProductModal">&times;</span>
    <h2>Add Product</h2>
    <form @submit.prevent="submitAddProduct">
      <div>
        <label>Name:</label>
        <input v-model="newProduct.name" required />
      </div>
      <div>
        <label>Description:</label>
        <input v-model="newProduct.description" required />
      </div>
      <div>
        <label>Material:</label>
        <input v-model="newProduct.material" required />
      </div>
      <div>
        <label>Price:</label>
        <input v-model="newProduct.price" type="number" required />
      </div>
      <div>
        <label>Stock:</label>
        <input v-model="newProduct.stock" type="number" required />
      </div>
      <div>
        <label>Image URL:</label>
        <input v-model="newProduct.image_url" required />
      </div>
      <button type="submit">Add Product</button>
    </form>
  </div>
</div>

    <!-- Update User Modal -->
    <div v-if="showUpdateModal" class="modal">
      <div class="modal-content">
        <span class="close" @click="closeUpdateModal">&times;</span>
        <h2>Update User</h2>
        <form @submit.prevent="submitUpdateUser">
          <div>
            <label>First Name:</label>
            <input v-model="selectedUser.firstName" required />
          </div>
          <div>
            <label>Last Name:</label>
            <input v-model="selectedUser.lastName" required />
          </div>
          <div>
            <label>Age:</label>
            <input v-model="selectedUser.userAge" type="number" required />
          </div>
          <div>
            <label>Gender:</label>
            <input v-model="selectedUser.gender" required />
          </div>
          <div>
            <label>Email:</label>
            <input v-model="selectedUser.userEmail" type="email" required />
          </div>
          <div>
            <label>Role:</label>
            <input v-model="selectedUser.userRole" required />
          </div>
          <button type="submit">Save Changes</button>
        </form>
      </div>
    </div>

    <!-- Delete User Confirmation Modal -->
    <div v-if="showDeleteModal" class="modal">
      <div class="modal-content">
        <span class="close" @click="closeDeleteModal">&times;</span>
        <h2>Confirm Delete</h2>
        <p>Are you sure you want to delete {{ selectedUser.firstName }}?</p>
        <button @click="confirmDeleteUser">Yes, Delete</button>
        <button @click="closeDeleteModal">Cancel</button>
      </div>
    </div>

    <!-- Delete Product Confirmation Modal -->
    <div v-if="showDeleteProductModal" class="modal">
      <div class="modal-content">
        <span class="close" @click="closeDeleteProductModal">&times;</span>
        <h2>Confirm Delete</h2>
        <p>Are you sure you want to delete {{ selectedProduct.name }}?</p>
        <button @click="confirmDeleteProduct">Yes, Delete</button>
        <button @click="closeDeleteProductModal">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      products: [],
      users: [],
      showUpdateModal: false,
      showDeleteModal: false,
      showDeleteProductModal: false,
      selectedUser: null,
      selectedProduct: null,
      newProduct: {
        name: '',
        description: '',
        material: '',
        price: 0,
        stock: 0,
        image_url: '',
      },
    };
  },
  methods: {
    fetchProducts() {
      axios.get('https://capstone-wqf7.onrender.com/products')
        .then(response => {
          this.products = response.data;
        })
        .catch(error => {
          console.error('Error fetching products:', error);
        });
    },
    fetchUsers() {
      axios.get('https://capstone-wqf7.onrender.com/users')
        .then(response => {
          this.users = response.data;
        })
        .catch(error => {
          console.error('Error fetching users:', error);
        });
    },
    updateProduct(prodID) {
      const product = this.products.find(p => p.prodID === prodID);
      axios.put(`https://capstone-wqf7.onrender.com/products/update/${prodID}`, product)
        .then(() => {
          alert('Product updated successfully!');
        })
        .catch(error => {
          console.error('Error updating product:', error);
        });
    },
    openUpdateModal(user) {
      this.selectedUser = { ...user };
      this.showUpdateModal = true;
    },
    closeUpdateModal() {
      this.showUpdateModal = false;
      this.selectedUser = null;
    },
    submitUpdateUser() {
      axios.put(`https://capstone-wqf7.onrender.com/users/update/${this.selectedUser.usersID}`, this.selectedUser)
        .then(() => {
          alert('User updated successfully!');
          this.closeUpdateModal();
          this.fetchUsers(); 
        })
        .catch(error => {
          console.error('Error updating user:', error);
        });
    },
    openDeleteModal(user) {
      this.selectedUser = user;
      this.showDeleteModal = true;
    },
    closeDeleteModal() {
      this.showDeleteModal = false;
      this.selectedUser = null;
    },
    confirmDeleteUser() {
      axios.delete(`https://capstone-wqf7.onrender.com/users/delete/${this.selectedUser.usersID}`)
        .then(() => {
          alert('User deleted successfully!');
          this.closeDeleteModal();
          this.fetchUsers();
        })
        .catch(error => {
          console.error('Error deleting user:', error);
        });
    },
    openDeleteProductModal(product) {
      this.selectedProduct = product;
      this.showDeleteProductModal = true;
    },
    closeDeleteProductModal() {
      this.showDeleteProductModal = false;
      this.selectedProduct = null;
    },
    confirmDeleteProduct() {
      axios.delete(`https://capstone-wqf7.onrender.com/products/delete/${this.selectedProduct.prodID}`)
        .then(() => {
          alert('Product deleted successfully!');
          this.closeDeleteProductModal();
          this.fetchProducts(); 
        })
        .catch(error => {
          console.error('Error deleting product:', error);
        });
    },
    openAddProductModal() {
      this.showAddProductModal = true;
    },
    closeAddProductModal() {
      this.showAddProductModal = false;
      this.resetNewProduct();
    },
    resetNewProduct() {
      this.newProduct = {
        name: '',
        description: '',
        material: '',
        price: 0,
        stock: 0,
        image_url: '',
      };
    },

  },
  mounted() {
    this.fetchProducts();
    this.fetchUsers();
  }
};
</script>

<style scoped>
.admin-page {
  padding: 20px;
}
table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}
th, td {
  border: 1px solid #ddd;
  padding: 8px;
}
th {
  background-color: #f4f4f4;
}
button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  margin-right: 5px;
}
button:hover {
  background-color: #0056b3;
}
.delete-button {
  background-color: #dc3545;
}
.delete-button:hover {
  background-color: #c82333;
}
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  max-width: 90%;
  position: relative;
}
.close {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 20px;
  cursor: pointer;
}

@media only screen and (max-width: 768px) {
    table {
      font-size: 8px;
      overflow-x: auto;
    }
    th, td {
      padding: 2px;
    }
    .admin-page table:nth-child(2) { /* target the second table (Products) */
      font-size: 3px;
      overflow-x: auto;
    }
    .admin-page table:nth-child(2) th, .admin-page table:nth-child(2) td {
      padding: 2px;
    }
  }

  @media only screen and (max-width: 480px) {
    table {
      font-size: 12px;
    }
    th, td {
      padding: 2px;
    }
    .admin-page table:nth-child(2) { /* target the second table (Products) */
      font-size: 7px;
    }
    .admin-page table:nth-child(2) th, .admin-page table:nth-child(2) td {
      padding: 2px;
    }
  }
</style>
