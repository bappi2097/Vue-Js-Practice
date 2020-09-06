<template>
    <div class="container">
        <div class="columns">
            <div class="column">
                <div
                    class="message"
                    v-for="status in statuses"
                    style="margin-top:20px;"
                >
                    <div class="message-header">
                        <p>{{ status.user.name }} said...</p>
                        <p>{{ status.created_at | age | capitalize }}...</p>
                    </div>
                    <div class="message-body" v-text="status.body">
                        This is Home Page.
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Status from "../models/Status";
export default {
    created() {
        Status.all(statuses => (this.statuses = statuses));
    },
    data() {
        return {
            statuses: []
        };
    },
    filters: {
        age(date) {
            return moment(date).fromNow();
        },
        capitalize(value) {
            return value.toUpperCase();
        }
    },
    methods: {
        postedOn(status) {}
    }
};
</script>

<style lang="scss"></style>
