/* eslint-disable */
<template>
  <div class="form-inline">
    <h3>Sign Up</h3>
    <div class="form-group">
      <input type="text" placeholder="email" class="form-control" v-model="email"/>
      <input type="password" placeholder="password" class="form-control" v-model="password">
    <br>
    <button class="btn btn-primary" @click="signUp">Sign Up</button>
     <br>
     <router-link to="/signin">Already have an account</router-link>
    <br>
  </div>
  <br>
  <p>{{error.message}}</p>
  </div>
</template>

<script>
import { firebaseApp } from '../firebaseApp';

export default {
  data() {
    return {
      email: '',
      password: '',
      error: {
        message: '',
      },
    };
  },
  methods: {
    signUp() {
      firebaseApp
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .catch((error) => {
          this.error = error;
        });
    },
  },
};
</script>
