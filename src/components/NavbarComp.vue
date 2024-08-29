<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-dark">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">Jewelry Ecommerce</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link active" to="/" aria-current="page">Home</router-link>
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
            <li class="nav-item" v-if="isAdmin">
              <router-link class="nav-link" to="/admin">Admin</router-link>
            </li>
          </ul>
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" to="/login" v-if="!isLoggedIn">
                <i class="fas fa-user"></i> Login / Sign Up
              </router-link>
              <router-link class="nav-link" to="/profile" v-if="isLoggedIn">
                <i class="fas fa-user"></i> Profile
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/checkout">
                <i class="fas fa-shopping-cart"></i> Checkout
              </router-link>
            </li>
          </ul>
          <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-danger" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'NavbarComp',
    data() {
      return {
        isLoggedIn: false,
        isAdmin: false
      }
    }
  }
  </script>
  
  <style scoped>
   @import '~font-awesome/css/font-awesome.min.css';
   
  .navbar {
    padding: 1rem 2rem;
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
    color: #ccc;
  }
  
  .navbar-toggler-icon {
    font-size: 1.5rem;
  }
  
  @media (max-width: 991px) {
    .navbar-collapse {
      background-color: #000;
      padding: 1rem;
    }
  }
  </style>