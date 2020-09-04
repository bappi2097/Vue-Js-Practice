<div v-show="projects.length">
    <h1 class="title is-3">Projects</h1>
    <ul>
        <li class="has-text-primary" v-for="project in projects" v-text="project.name"></li>
    </ul>
</div>
