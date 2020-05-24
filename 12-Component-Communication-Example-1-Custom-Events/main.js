Vue.component("cupon", {
  template: `<input type="text" placeholder="Enter your Cupon" @blur="onCuponApplied">`,
  methods: {
    onCuponApplied() {
      this.$emit("applied");
    },
  },
});
new Vue({
  el: "#root",
  data: {
    isApplied: false,
  },
  methods: {
    onCuponApplied() {
      this.isApplied = true;
    },
  },
});
