<template>
  <div>
    <ul>
      <li v-for="item in items">
        <slot :item="item" name="my-items">{{item}}</slot>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["items"],
};
</script>
