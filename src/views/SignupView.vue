<template>
  <div class="form-box">
    <form class="form">
      <span class="title">Sign up</span>
      <span class="subtitle">Create a free account with your email.</span>
      <div class="form-container">
        <input type="text" v-model="firstName" class="input" placeholder="First Name">
        <input type="text" v-model="lastName" class="input" placeholder="Last Name">
        <input type="email" v-model="userEmail" class="input" placeholder="Email">
        <select v-model="gender" class="input" placeholder="Gender">
          <option value="Female">Female</option>
          <option value="Male">Male</option>
          <option value="Other">Other</option>
        </select>
        <select v-model="userRole" class="input" placeholder="Role">
          <option value="User">User</option>
          <option value="Admin">Admin</option>
        </select>
        <input type="number" v-model="userAge" class="input" placeholder="Age">
        <input type="password" v-model="userPass" class="input" placeholder="Password">
      </div>
      <button type="submit" @click="register()">Sign up</button>
    </form>
  </div>
</template>
<!-- Your Register Works now 🫡-->
<script>
import { toast } from 'vue3-toastify';


export default {
    data() {
      return {
        firstName: '',
        lastName: '',
        userAge: '',
        gender: '',
        userEmail: '',
        userPass: '',
        userProfile: '',
        userRole: '',
        userProfilePicture: '',
      };
    },
    methods: {
      register() {
        this.$store.dispatch('register', {
          firstName: this.firstName,
          lastName: this.lastName,
          userAge: this.userAge,
          gender: this.gender,
          userEmail: this.userEmail,
          userPass: this.userPass,
          userProfile: this.userProfile,
          userRole: this.userRole,
          userProfilePicture: this.userProfilePicture
        })
        .then(() => {
        toast.success('Account created successfully!');
      })
      .catch((error) => {
        toast.error('Failed to create account.');
        console.error('Error registering user:', error);
      });
      },
      // async loginUser() {
      //   if (!this.emailAdd || !this.userPass) {
      //     console.log('Please fill in all fields');
      //     return;
      //   }
      //   try {
      //     await this.$store.dispatch('loginUser', {
      //       emailAdd: this.emailAdd,
      //       userPass: this.userPass
      //     });
      //     this.$router.push('/');
      //   } catch (error) {
      //     console.error('Login failed:', error);
      //   }
      // }
    }
  };
</script>

<style scoped>
    /* From Uiverse.io by alexruix */ 
/* .form-box {
  max-width: 300px;
  background: #f1f7fe;
  overflow: hidden;
  border-radius: 16px;
  color: #010101;
} */

.form {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 32px 24px 24px;
  gap: 16px;
  text-align: center;
  background-image: url(https://tyra-parring.github.io/host-/image/bk.jpg);
  background-size: cover;
  background-position: center;
  height: 100vh;
}

/*Form text*/
.title {
  font-weight: bold;
  font-size: 1.6rem;
}

.subtitle {
  font-size: 1rem;
  color: #666;
}

/*Inputs box*/
.form-container {
  overflow: hidden;
  border-radius: 8px;
  background-color: #fff;
  margin: 1rem 0 .5rem;
  width: 100%;
}

.input {
  background: none;
  border: 0;
  outline: 0;
  height: 40px;
  width: 100%;
  border-bottom: 1px solid #eee;
  font-size: .9rem;
  padding: 8px 15px;
}

/* .form-section {
  padding: 16px;
  font-size: .85rem;
  background-color: #e0ecfb;
  box-shadow: rgb(0 0 0 / 8%) 0 -1px;
} */

.form-section a {
  font-weight: bold;
  color: #0066ff;
  transition: color .3s ease;
}

.form-section a:hover {
  color: #005ce6;
  text-decoration: underline;
}

/*Button*/
.form button {
  background-color: #0066ff;
  color: #fff;
  border: 0;
  border-radius: 24px;
  padding: 10px 16px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color .3s ease;
}

.form button:hover {
  background-color: #005ce6;
}
</style>