import VueRouter from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
let routes = [
    {
        path: "/",
        component: Home
    },
    {
        path: "/about",
        component: About
    }
];
export default new VueRouter({
    routes
});
