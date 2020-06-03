new Vue({
    // delimiters:{"[[", "]]"},
    el: "#root",
    data: {
        skills: [],
    },
    created() {
        axios.get("/skills").then((response) => (this.skills = response.data));
    },
    // mounted() {
    //     axios.get("/skills").then((response) => (this.skills = response.data));
    // },
});
