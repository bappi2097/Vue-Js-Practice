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

Vue.component("cuppon", {
  template: `
  <input type="text" @change="onCupponApplied">
  `,
  methods: {
    onCupponApplied() {
      Event.fire("applied");
    },
  },
});
var root = new Vue({
  el: "#root",
  data: {
    cupponApplied: false,
  },
  created() {
    Event.listen("applied", () => alert("bappi"));
  },
});
