Vue.component("modal", {
  template: `
    <div class="modal" :class="{'is-active' : isActive}">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">
          <slot name="header"></slot>
          </p>
          <button class="delete" aria-label="close" @click="isActive=false"></button>
        </header>
        <section class="modal-card-body">
          <slot>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, impedit
          asperiores! Corporis illum qui odit ducimus modi et, saepe doloribus cumque
          adipisci molestiae exercitationem dicta ut debitis quis laborum impedit!
          </slot>
        </section>
        <footer class="modal-card-foot">
        <slot name="footer">
        <button class="button is-success">Okay</button>
        </slot>
        </footer>
      </div>
    </div>
  `,
  props: {
    active: { default: false },
  },
  data() {
    return {
      isActive: false,
    };
  },
  created() {
    this.isActive = this.active;
  },
});
var root = new Vue({
  el: "#root",
});
