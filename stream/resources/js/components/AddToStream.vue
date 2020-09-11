<template>
    <div class="message">
        <div class="message-header">
            <p>
                Push To the stream...
            </p>
        </div>
        <div class="message-body">
            <form @submit.prevent="onSubmit" @keypress="form.errors.clear()">
                <p class="control">
                    <textarea
                        name="body"
                        id="body"
                        class="textarea"
                        placeholder="I have to Say Something...."
                        v-model="form.body"
                    ></textarea>
                    <span
                        class="help is-danger"
                        v-if="form.errors.has('body')"
                        v-text="form.errors.get('body')"
                    ></span>
                </p>
                <p class="control">
                    <button
                        :disabled="form.errors.any()"
                        class="button is-primary"
                    >
                        Submit
                    </button>
                </p>
            </form>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            form: new Form({ body: "" })
        };
    },
    methods: {
        onSubmit() {
            this.form
                .post("/statuses")
                .then(status => this.$emit("completed", status));
        }
    }
};
</script>

<style lang="scss"></style>
