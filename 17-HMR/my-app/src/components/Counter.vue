<template>
  <div>
    <h2>Counter:{{ count }}</h2>
    <button @click="count += 1">Increase</button>
  </div>
</template>
<script>
export default {
  data() {
    return { count: 0 };
  }
};
</script>
