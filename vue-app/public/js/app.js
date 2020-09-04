class Errors {
    constructor() {
        this.errors = {};
    }
    any() {
        return Object.keys(this.errors).length > 0;
    }
    clear(field) {
        delete this.errors[field];
    }
    get(field) {
        if (this.errors[field]) {
            return this.errors[field][0];
        }
    }
    has(field) {
        return this.errors.hasOwnProperty(field);
    }
    record(data) {
        this.errors = data;
    }
}
var root = new Vue({
    el: "#root",
    data: {
        name: "",
        description: "",
        projects: [],
        errors: new Errors(),
    },
    methods: {
        onSubmit() {
            axios
                .post("/create", {
                    name: this.name,
                    description: this.description,
                })
                .then(this.onSuccess)
                .catch((error) =>
                    this.errors.record(error.response.data.errors)
                );
        },
        onSuccess(response) {
            this.name = "";
            this.description = "";
            alert(response.data.message);
            this.loadData();
        },
        loadData() {
            axios
                .get("/projects")
                .then((response) => (this.projects = response.data));
        },
    },
    mounted() {
        this.loadData();
    },
});
