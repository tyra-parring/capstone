import { createStore } from 'vuex';
import axios from 'axios';

const hostedData = "https://capstone-wqf7.onrender.com/";

export default createStore({
  state: {
    products: [],
    product: null,
    error: null,
    isLoading: false,
    user: null,
    users: []
  },
  getters: {
    allProducts: (state) => state.products,
    currentUser: (state) => state.user,
    allUsers: (state) => state.users,
    singleProduct: (state) => state.product,
  },
  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products;
    },
    SET_PRODUCT(state, product) {
      state.product = product;
    },
    SET_LOADING(state, isLoading) {
      state.isLoading = isLoading;
    },
    SET_ERROR(state, error) {
      state.error = error;
    },
    SET_USER(state, user) {
      state.user = user;
    },
    SET_USERS(state, users) {
      state.users = users;
    },
    ADD_PRODUCT(state, product) {
      state.products.push(product);
    },
    REMOVE_PRODUCT(state, prodID) {
      state.products = state.products.filter(product => product.prodID !== prodID);
    },
    REMOVE_USER(state, userID) {
      state.users = state.users.filter(user => user.userID !== userID);
    },
  },
  actions: {
    async fetchProducts({ commit }) {
      commit('SET_LOADING', true);
      try {
        const response = await axios.get(`${hostedData}products`);
        if (response.status === 200) {
          commit('SET_PRODUCTS', response.data);
        }
      } catch (error) {
        commit('SET_ERROR', error.message);
        console.error("Error fetching products:", error);
      } finally {
        commit('SET_LOADING', false);
      }
    },

    async fetchProduct({ commit }, prodID) {
      commit('SET_LOADING', true);
      try {
        const response = await axios.get(`${hostedData}product/${prodID}`);
        if (response.status === 200) {
          commit('SET_PRODUCT', response.data);
        }
      } catch (error) {
        commit('SET_ERROR', error.message);
        console.error("Error fetching product:", error);
      } finally {
        commit('SET_LOADING', false);
      }
    },

    async fetchUsers({ commit }) {
      commit('SET_LOADING', true);
      try {
        const response = await axios.get(`${hostedData}users`);
        if (response.status === 200) {
          commit('SET_USERS', response.data);
        }
      } catch (error) {
        commit('SET_ERROR', error.message);
        console.error("Error fetching users:", error);
      } finally {
        commit('SET_LOADING', false);
      }
    },

    async fetchUser({ commit }, userID) {
      commit('SET_LOADING', true);
      try {
        const response = await axios.get(`${hostedData}user/${userID}`);
        if (response.status === 200) {
          commit('SET_USER', response.data);
        }
      } catch (error) {
        commit('SET_ERROR', error.message);
        console.error("Error fetching user:", error);
      } finally {
        commit('SET_LOADING', false);
      }
    },

    async deleteUser({ commit }, userID) {
      try {
        await axios.delete(`${hostedData}user/delete/${userID}`);
        commit('REMOVE_USER', userID);
      } catch (error) {
        commit('SET_ERROR', error.message);
        console.error("Error deleting user:", error);
      }
    },

    async register({ commit }, payload) {
      try {
        const response = await axios.post(`${hostedData}user/register`, payload);
        if (response.status === 200) {
          commit('SET_USER', response.data);
        }
      } catch (error) {
        commit('SET_ERROR', error.message);
        console.error("Error registering user:", error);
      }
    },

    async addProduct({ dispatch }, payload) {
      try {
        await axios.post(`${hostedData}product/add`, payload);
        dispatch('fetchProducts');
      } catch (error) {
        console.error("Error adding product:", error);
      }
    },

    async updateProduct({ dispatch }, payload) {
      try {
        await axios.patch(`${hostedData}product/update/${payload.prodID}`, payload);
        dispatch('fetchProducts');
      } catch (error) {
        console.error("Error updating product:", error);
      }
    },

    async deleteProduct({ dispatch }, prodID) {
      try {
        await axios.delete(`${hostedData}product/delete/${prodID}`);
        dispatch('fetchProducts');
      } catch (error) {
        console.error("Error deleting product:", error);
      }
    },
  },
  modules: {
  }
});
