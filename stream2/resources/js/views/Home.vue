<template>
  <div class="container">
    <div class="columns">
      <div class="column">
        <div class="message" style="margin-top:20px;" v-for="status in statuses">
          <div class="message-header">
            <p>{{ status.user.name }} Said...</p>
            <p>{{ status.created_at | age | capitalize }}...</p>
          </div>
          <div class="message-body">
            <p>{{ status.body }}</p>
          </div>
        </div>
        <add-to-stream></add-to-stream>
      </div>
    </div>
  </div>
</template>

<script>
import Status from "../model/Status";
import AddToStream from "../components/AddToStream";
export default {
  components: { AddToStream },
  created() {
    Status.all((statuses) => (this.statuses = statuses));
  },
  data() {
    return {
      statuses: [],
    };
  },
  filters: {
    age(date) {
      return moment(date).fromNow();
    },
    capitalize(value) {
      return value.toUpperCase();
    },
  },
  methods: {
    postedOn(status) {},
  },
};
</script>

<style lang="scss"></style>
