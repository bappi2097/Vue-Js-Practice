<div v-if="projects.length">
    <label class="title">Project Name</label><br>
    <span class="help is-success is-medium" v-for="project in projects" v-text="project.name"></span><br>
</div>
