let store = {
    user: {
        name: "john doe"
    }
};
new Vue({
    el: "#one",
    data: {
        foo: "bar",
        shared: store
    }
});
new Vue({
    el: "#two",
    data: {
        foo: "other",
        shared: store
    }
});
