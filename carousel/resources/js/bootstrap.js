import Vue from "vue";
import axios from "axios";
window.Vue = Vue;
window.axios = axios;
window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
