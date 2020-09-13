require("./bootstrap");
import Carousel from "./components/Carousel.vue";

Vue.component("carousel", Carousel);

var root = new Vue({
    el: "#root",
    components: { Carousel }
});
