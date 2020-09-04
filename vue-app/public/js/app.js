class Errors {
    constructor() {
        this.errors = {};
    }

    any() {
        return Object.keys(this.errors).length > 0;
    }

    clear(field = null) {
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
        let data = {};
        for (let field in this.originalData) {
            data[field] = this[field];
        }
        return data;
    }

    get(url) {
        //
    }

    onFail(error) {
        //
        this.errors.record(error);
    }

    onSuccess(message) {
        //
        alert(message);
        this.reset();
    }

    post(url) {
        return this.submit("post", url);
    }

    reset() {
        //
        for (let field in this.originalData) {
            this[field] = "";
        }
        this.errors.clear();
    }

    submit(requestType, url) {
        //  axios
        return new Promise((resolve, reject) => {
            axios[requestType](url, this.data())
                .then( (response) => {
                    this.onSuccess(response.data.message);
                    resolve(response.data);
                })
                .catch((error) => {
                    this.onFail(error.response.data.errors);
                    reject(error.response.data.errors);
                });
        });
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
            this.form.post("/create").then((data)=>console.log(data)).catch((error)=>console.log(error));
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
