<template>
  <div>
    <p>This is : {{count}}</p>
    <button @click="count+=10">Increment</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
};
</script>
