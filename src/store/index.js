import { createStore } from 'vuex';
import axios from 'axios';
// import VueCookies from 'vue-cookies';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
// import {useCookies} from 'vue-cookies';
const hostedData = "https://capstone-wqf7.onrender.com/";
/*eslint-disable */
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
    // async fetchProducts({ commit }) {
    //   commit('SET_LOADING', true);
    //   try {
    //     const response = await axios.get(`${hostedData}products`);
    //     if (response.status === 200) {
    //       commit('SET_PRODUCTS', response.data);
    //     }
    //   } catch (error) {
    //     commit('SET_ERROR', error.message);
    //     console.error("Error fetching products:", error);
    //   } finally {
    //     commit('SET_LOADING', false);
    //   }
    // },
    async fetchProducts({ commit }) {
      commit('SET_LOADING', true);
      try {
        const timestamp = new Date().getTime();
        const response = await axios.get(`${hostedData}products?_=${timestamp}`);
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

    // async register({ commit }, payload) {
    //   try {
    //     const response = await axios.post(`${hostedData}user/register`, payload);
    //     if (response.status === 200) {
    //       commit('SET_USER', response.data);
    //     }
    //   } catch (error) {
    //     commit('SET_ERROR', error.message);
    //     console.error("Error registering user:", error);
    //   }
    // },
    async register({ commit }, user) {
      try {
        const { data } = await (await axios.post(`${hostedData}user/register`, user)).data
        console.log('newdata'+data.message)
        if (data.message){
          toast("User Added Successfully", {
            theme: "dark",
            type: "default",
            position: "top-center",
            dangerouslyHTMLString: true
          })
        }
      } catch (error) {
        console.log(error)
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

    // async loginUser({ commit }, info) {
    //   try {
    //     let response = await axios.post(`${hostedData}user/login`, {
    //       userEmail: info.userEmail,
    //       userPass: info.userPass
    //     });
    //     let { data } = response;
    //     console.log(data);
    //     VueCookies.set('token', data.token);
    //     if (data.message) {
    //       console.log("Logged In Successfully");
    //     }
    //     commit('SET_USER', data);
    //   } catch (error) {
    //     commit('SET_ERROR', error.message);
    //     console.error("Error logging in user:", error);
    //   }
    // }
    async loginUser({ commit }, info) {
      console.log(info);
      let { data } = await axios.post(`${hostedData}user/login`, info);
      commit('clearUser');
      console.log(data);
      $cookies.set('token', data.token);
      if (data.message) {
        toast("Logged In Successfully", {
          "theme": "dark",
          "type": "default",
          "position": "top-center",
          "dangerouslyHTMLString": true
        });
      }
    },
  },
  modules: {
  }
});
