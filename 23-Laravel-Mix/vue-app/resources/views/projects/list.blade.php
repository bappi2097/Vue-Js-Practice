<div v-if="projects.length>0">
    <label for="" class="title">Project Name</label><br>
    <span class="help is-success is-midium" v-for="project in projects" v-text="project.name"></span><br>
</div>
