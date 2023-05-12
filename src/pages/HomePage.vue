<template>
  <div class="product-list">
    <h2>Data List</h2>
        <div class="card flex justify-content-center">
          <Listbox v-model="product" :options="data" optionLabel="name" class="w-full md:w-14rem" />
        </div>
  </div>
</template>

<script>
import axios from 'axios';
import {getToken, isAuth} from './../utils/auth';
import {URL} from "../env/env.js";
import {useRouter} from "vue-router";
export default {
  data() {
    return {
      data: [],
    };
  },
  beforeRouteEnter(to, from, next) {

    const isAuthenticated = isAuth();
    if (!isAuthenticated) {
      next('/');
    }
    next();
  },
    async created() {
    try {
      const response = await axios.get(`${URL}/customer-group`, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      });
      this.data = response.data;
    } catch (error) {
      console.error(error);
    }
  },
};
</script>
