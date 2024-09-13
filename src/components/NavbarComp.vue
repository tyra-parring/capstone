<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-black">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">
          <img src="https://tyra-parring.github.io/host-/image/tuxedo%20taylor%20(1).png" alt="Jewelry Ecommerce" style="height: 100px; width: 100px;"/>
        </router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" to="/" aria-current="page">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about">About Us</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/products">Products</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/contact">Contact Us</router-link>
            </li>
            <li class="nav-item" >
              <router-link class="nav-link" to="/admin" >
                Admin
              </router-link>
              <!-- <span v-else>No admin access</span> -->
            </li>
          </ul>
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" to="/login" v-if="!isLoggedIn">
                <font-awesome-icon icon="fa-solid fa-user"/> 
                  <span class="login-signup-links">
                    <span v-if="!isLoggedIn">  Login</span>
                    <span v-if="!isLoggedIn">|</span>
                    <router-link to="/signup">Sign Up</router-link>
                  </span>
              </router-link>
              <router-link class="nav-link" to="/profile" v-if="isLoggedIn">
                <font-awesome-icon icon="fa-solid fa-user" /> Profile
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/checkout">
                <font-awesome-icon icon="fa-solid fa-shopping-cart"/> Checkout
              </router-link>
            </li>
          </ul>
          <form class="d-flex">
            <input class="form-control me-2" type="search" v-model="searchQuery" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-danger" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
import axios from 'axios';

export default {
  name: 'NavbarComp',
  data() {
    return {
      // isLoggedIn: false, 
      // isAdmin: false,
      searchQuery: '',
      sortBy: 'price-asc',
      products: []
    }
  },
  mounted() {
    this.fetchProducts()
    this.checkLoginStatus()
  },
  methods: {
    fetchProducts() {
      axios.get('https://capstone-wqf7.onrender.com', {
        params: {
          sort_by: this.sortBy
        }
      })
        .then(response => {
          this.products = response.data
        })
        .catch(error => {
          console.error(error)
        })
    },
    sortByPriceAsc(products) {
      return [...products].sort((a, b) => a.price - b.price)
    },
    sortByPriceDesc(products) {
      return [...products].sort((a, b) => b.price - a.price)
    },
    checkLoginStatus() {
      axios.get('https://capstone-wqf7.onrender.com')
        .then(response => {
          if (response.data.isLoggedIn) {
            this.isLoggedIn = true
            this.isAdmin = response.data.isAdmin 
          }
        })
        .catch(error => {
          console.error(error)
        })
    }
  },
  computed: {
    filteredProducts() {
      const filtered = this.products.filter(product => {
        const searchQuery = this.searchQuery.toLowerCase()
        const prodName = product.name.toLowerCase()
        const category = product.Categories ? product.Categories.toLowerCase() : ''
        return prodName.includes(searchQuery) || category.includes(searchQuery)
      })

      if (this.sortBy === 'price-asc') {
        return this.sortByPriceAsc(filtered)
      } else if (this.sortBy === 'price-desc') {
        return this.sortByPriceDesc(filtered)
      }

      return filtered
    }
  }
}
  </script>
  
  <style scoped>
  .navbar {
    padding: .6rem;
  }
  
  .navbar-brand {
    font-weight: bold;
    color: #ffffff;
  }
  
  .nav-link {
    color: #ffffff;
    transition: color 0.2s ease;
  }
  
  .nav-link:hover {
    color: #b8860b;
  }
  
  .navbar-toggler-icon {
    font-size: 1.5rem;
    filter: invert(1);
  }

  .router-link-active {
  color: #b8860b !important; 
  }

  .login-signup-links {
      font-size: 16px;
      font-weight: bold;
      color: #ffffff;
    }
    .login-signup-links span {
      margin-right: 10px;
    }
    .login-signup-links .mx-2 {
      margin: 0 10px;
    }
    .login-signup-links a {
      color: #ffffff; 
      text-decoration: none;
    }

    .btn-outline-danger {
    border-color: #b8860b;
    color: #b8860b;
  }

  .btn-outline-danger:hover {
    background-color: #b8860b;
    border-color: #b8860b;
  }
  
  @media (max-width: 991px) {
    .navbar-collapse {
      background-color: #000;
      padding: .6rem;
    }
  }
  </style>