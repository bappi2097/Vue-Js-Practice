<template>
    <div class="container">
        <div class="columns">
            <div class="column">
                <div class="message" v-for="status in statuses">
                    <div class="message-header">
                        <p>{{ status.user.name }} said...</p>
                        <p>A moment Ago...</p>
                    </div>
                    <div class="message-body">
                        <p>
                            {{ status.body }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            statuses: []
        };
    },
    created() {
        axios.get("/statuses").then(({ data }) => (this.statuses = data));
    }
};
</script>
<style>
.message {
    margin-top: 20px;
}
</style>
