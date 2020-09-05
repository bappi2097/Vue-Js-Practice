<template>
  <div class="notification">
    <h1>{{msg}}</h1>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "Hello World",
    };
  },
};
</script>
<style lang="scss">
.notification {
  background: #e3e3e3;
}
</style>
