class Errors {
    constructor() {
        this.errors = {};
    }

    any() {
        return Object.keys(this.errors).length > 0;
    }

    clear(field) {
        if (field) {
            delete this.errors[field];
            return;
        }
        this.errors = {};
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

class Form {
    constructor(data) {
        this.originalData = data;
        for (let field in data) {
            this[field] = data[field];
        }
        this.errors = new Errors();
    }

    data() {
        //  data {name:'bappi', description:'lorem psum amet'}
        let data = Object.assign({}, this);
        delete data.originalData;
        delete data.errors;
        return data;
    }

    get(url) {
        //
    }

    onFail(error) {
        //
        this.errors.record(error.response.data.errors);
    }

    onSuccess(response) {
        //
        alert(response.data.message);
    }

    post(url) {
        this.submit("post", url);
    }

    reset() {
        //
        for (let field in this.originalData) {
            this[field] = "";
        }
    }

    submit(requestType, url) {
        //  axios
        axios[requestType](url, this.data())
            .then(this.onSuccess.bind(this))
            .catch(this.onFail.bind(this));
    }
}

var root = new Vue({
    el: "#root",
    data: {
        form: new Form({
            name: "",
            description: "",
        }),
        projects: [],
    },
    methods: {
        onSubmit() {
            this.form.post("/create");
            this.loadData();
            this.form.reset();
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
