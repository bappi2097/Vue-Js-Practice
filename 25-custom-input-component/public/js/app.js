Vue.component("cuppon", {
    props: ["code"],
    template: `
    <input :value="code" @input="updateCode($event.target.value)" ref="input">
    `,
    data() {
        return {
            invalids: ["bappi", "saha"]
        };
    },
    methods: {
        updateCode(code) {
            if (this.invalids.includes(code)) {
                alert("bappi");
                this.$refs.input.value = code = "";
            }
            this.$emit("input", code);
        }
    }
});
var root = new Vue({
    el: "#root",
    data: {
        cuppon: "FREEBIE"
    }
});
