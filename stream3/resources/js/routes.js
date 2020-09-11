import VueRouter from "vue-router";
import Home from "./views/Home";
import About from "./views/About";
import Contact from "./views/Contact";
let routes = [
    {
        path: "/",
        component: Home
    },
    {
        path: "/about",
        component: About
    },
    {
        path: "/contact",
        component: Contact
    }
];
export default new VueRouter({
    routes,
    linkActiveClass: "is-active"
});
