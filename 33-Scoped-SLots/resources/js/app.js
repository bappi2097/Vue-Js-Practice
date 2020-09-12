require("./bootstrap");

import Vue from "vue";
import Example from "./components/Example.vue";
window.Vue = Vue;

Vue.component("my-items", Example);

var root = new Vue({
    el: "#root"
});
