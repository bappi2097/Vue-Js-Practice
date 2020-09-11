<template>
    <div class="container">
        <div class="columns">
            <div class="column">
                <div class="message" v-for="status in statuses">
                    <div class="message-header">
                        <p>{{ status.user.name }} said...</p>
                        <p>{{ status.created_at | ago }}</p>
                    </div>
                    <div class="message-body">
                        <p>
                            {{ status.body }}
                        </p>
                    </div>
                </div>
                <add-to-stream @completed="addStatus"></add-to-stream>
            </div>
        </div>
    </div>
</template>
<script>
import Status from "../models/Status";
import AddToStream from "../components/AddToStream";
export default {
    components: { AddToStream },
    created() {
        Status.all(statuses => (this.statuses = statuses));
    },
    data() {
        return {
            statuses: []
        };
    },
    filters: {
        ago(date) {
            return moment(date).fromNow();
        },
        capitalize(value) {
            return value.toUpperCase();
        }
    },
    methods: {
        addStatus(status) {
            this.statuses.unshift(status);
            alert("Your Status has been added to stream");
            window.scrollTo(0, 0);
        }
    }
};
</script>
<style>
.message {
    margin-top: 20px;
}
</style>
