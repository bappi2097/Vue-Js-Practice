Vue.component("task-list", {
  template: `
    <div>
        <task v-for="task in tasks" v-text="task.description"></task>
    </div>
    `,
  data() {
    return {
      tasks: [
        { description: "Hello bappi saha", completed: true },
        { description: "hey saha", completed: true },
        { description: "whats saha", completed: true },
        { description: "name bappi saha", completed: true },
        { description: "world bappi saha", completed: true },
        { description: "lorem bappi saha", completed: true },
      ],
    };
  },
});
Vue.component("task", {
  template: "<li><slot></slot></li>",
});
new Vue({
  el: "#root",
});
