class Errors {
    constructor() {
        this.errors = {};
    }
    get(field) {
        // console.log(this.errors[name][0]);
        if (this.errors[field]) {
            return this.errors[field][0];
        }
    }
    record(errors) {
        this.errors = errors;
    }
    clear(field) {
        delete this.errors[field];
    }
    has(field) {
        return this.errors.hasOwnProperty(field);
    }
    any() {
        return Object.keys(this.errors).length > 0;
    }
}
new Vue({
    el: "#root",
    data: {
        name: "",
        description: "",
        errors: new Errors(),
        projects: {},
    },
    methods: {
        onSubmit() {
            axios
                .post("/projects", this.$data)
                .then(this.onSuccess)
                .catch((error) =>
                    this.errors.record(error.response.data.errors)
                );
            axios
                .get("/projectsName")
                .then(
                    (response) => (this.projects = response.data["projects"])
                );
        },
        onSuccess(response) {
            alert(response.data.message);
            this.name = "";
            this.description = "";
        },
    },
    created() {
        axios
            .get("/projectsName")
            .then((response) => (this.projects = response.data["projects"]));
    },
});
