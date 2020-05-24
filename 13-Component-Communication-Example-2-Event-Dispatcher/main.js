window.Event = new (class {
  constructor() {
    this.vue = new Vue();
  }
  fire(event, data = null) {
    this.vue.$emit(event, data);
  }
  listen(event, callback) {
    this.vue.$on(event, callback);
  }
})();
Vue.component("cupon", {
  template: `<input placeholder="Enter your Cupon" @blur="onCuponApplied">`,
  methods: {
    onCuponApplied() {
      Event.fire("applied");
    },
  },
});
new Vue({
  el: "#root",
  data: {
    isApplied: false,
  },
  created() {
    Event.listen("applied", () => (this.isApplied = true));
  },
});
