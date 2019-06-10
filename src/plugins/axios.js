import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

const URL = 'http://localhost:3000'
axios.defaults.baseURL = URL

Vue.use(VueAxios, axios)