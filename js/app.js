Vue.component("cuppon", {
  template: `
  <input @change="cupponApplied" type="text">
  `,
  methods: {
    cupponApplied() {
      this.$emit("applied");
    },
  },
});
var root = new Vue({
  el: "#root",
  methods: {
    onCupponApplied() {
      this.isApplied = true;
    },
  },
  data: {
    isApplied: false,
  },
});
