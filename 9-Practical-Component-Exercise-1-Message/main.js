Vue.component("message", {
  props: ["title", "body"],
  data() {
    return {
      isVisible: true,
    };
  },
  template: `
    <article class="message" v-show="isVisible">
        <div class="message-header">
            <p>{{title}}</p>
            <!-- <button class="delete" aria-label="delete" @click="hide">x</button> -->
            <button class="delete" aria-label="delete" @click="isVisible=false">x</button>
        </div>
        <div class="message-body">
            {{body}}
        </div>
    </article>
    `,
  methods: {
    hide() {
      this.isVisible = false;
    },
  },
});
new Vue({
  el: "#root",
});
