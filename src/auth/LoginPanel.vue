<template>
  <div class="p-fluid p-grid p-justify-center">
    <div class="p-col-12 p-md-6 p-lg-4">
      <form @submit.prevent="login">
        <div class="card">
          <h1 class="p-text-center">Login</h1>
          <div v-focustrap class="card">
            <div class="field">
              <InputText id="username" v-model="state.username" type="text" placeholder="Email" autofocus />
            </div>
            <div class="field pt-2">
              <div class="p-input-icon-right">
                <i class="pi pi-envelope" />
                <InputText id="password" v-model="state.password" type="text" placeholder="Password" />
              </div>
            </div>
            <div class="p-field p-text-center">
              <Button type="submit">Login</Button>
            </div>
          </div>

        </div>
      </form>
    </div>
  </div>
</template>
<script>
import {URL} from "../env/env.js";
import { reactive } from 'vue';
import axios from 'axios';
import {getToken, saveToken} from './../utils/auth';
import { useRouter } from "vue-router";

export default {
  setup() {
    const state = reactive({
      username: '',
      password: '',
    });
    const router = useRouter()
    const login = () => {
      const requestData = {
        username: state.username,
        password: state.password,
      };
      axios.post(`${URL}/login`, requestData)
          .then(response => {
           saveToken(response.data?.access_token);
            router.push('/product-list')
          })
          .catch(error => {
            console.log(error.response.data);
          });
    };

    return {
      state,
      login,
    };
  },
};
</script>
<style scoped>
.p-inputtext{
  margin-bottom:5px;
}
.p-button{
  margin-top:12px;
}
</style>
