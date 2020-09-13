<template>
    <div>
        <slot></slot>
    </div>
</template>

<script>
import Flickity from "flickity";
import "flickity/dist/flickity.min.css";
export default {
    props: {
        wraparound: { default: true },
        autoplay: { default: false }
    },
    mounted() {
        new Flickity(this.$el, {
            wrapAround: this.wraparound,
            autoPlay: this.autoplay,
            cellAlign: "left",
            contain: true
        });
    }
};
</script>
