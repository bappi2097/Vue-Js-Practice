class Form {
    constructor(data) {
        this.originalData = data;
        for (let field in data) {
            this[field] = data[field];
        }
        this.errors = new Errors();
    }
    data() {
        let data = Object.assign({}, this);
        delete data.originalData;
        delete data.errors;
        return data;
    }
    submit(requestType, url) {
        return new Promise((resolve, reject) => {
            axios[requestType](url, this.data())
                .then((response) => {
                    this.onSuccess(response.data);
                    resolve(response.data);
                })
                .catch((error) => {
                    this.onFail(error.response.data.errors);
                    reject(error.response.data.errors);
                });
        });
    }
    onSuccess(response) {
        alert(response.message);
        this.reset();
        root.updateProjectName();
    }
    onFail(error) {
        this.errors.record(error);
    }
    reset() {
        for (let field in this.originalData) {
            delete this[field];
        }
        this.errors.clear();
    }
}
class Errors {
    constructor() {
        this.errors = {};
    }
    get(field) {
        if (this.errors[field]) {
            return this.errors[field][0];
        }
    }
    clear(field) {
        if (field) delete this.errors[field];
        else this.errors = {};
    }
    record(errors) {
        this.errors = errors;
    }
    any() {
        return Object.keys(this.errors).length > 0;
    }
    has(field) {
        return this.errors.hasOwnProperty(field);
    }
}
var root = new Vue({
    el: "#root",
    data: {
        projects: {},
        form: new Form({
            name: "",
            description: "",
        }),
    },
    methods: {
        onSubmit() {
            this.form
                .submit("post", "/projects")
                .then((response) => console.log(response))
                .catch((error) => console.log(error));
        },
        updateProjectName() {
            axios
                .get("/projects")
                .then((response) => (this.projects = response.data.projects));
        },
    },
    mounted() {
        this.updateProjectName();
    },
});
