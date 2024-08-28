<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Jewelry Ecommerce</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About Us</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Products</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contact Us</a>
            </li>
            <li class="nav-item" v-if="isAdmin">
              <a class="nav-link" href="#">Admin</a>
            </li>
          </ul>
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="#" v-if="!isLoggedIn">
                <i class="fas fa-user"></i> Login / Sign Up
              </a>
              <a class="nav-link" href="#" v-if="isLoggedIn">
                <i class="fas fa-user"></i> Profile
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <i class="fas fa-shopping-cart"></i> Cart
              </a>
            </li>
          </ul>
          <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
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
  .navbar {
    padding: 1rem 2rem;
  }
  
  .navbar-brand {
    font-weight: bold;
    color: #333;
  }
  
  .nav-link {
    color: #666;
    transition: color 0.2s ease;
  }
  
  .nav-link:hover {
    color: #333;
  }
  
  .navbar-toggler-icon {
    font-size: 1.5rem;
  }
  
  @media (max-width: 991px) {
    .navbar-collapse {
      background-color: #f9f9f9;
      padding: 1rem;
    }
  }
  </style>