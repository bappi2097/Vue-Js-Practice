<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.8.2/css/bulma.min.css">
    <style>
        body{
            padding-top: 40px;
        }
    </style>
</head>
<body>
    <div id="root" class="container">
        @include('projects.list')
        <form action="{{route('projects.store')}}" method="post" @submit.prevent="onSubmit()" @keydown="form.errors.clear($event.target.name)">
            @csrf
            <div class="control">
                <label for="name" class="label">Project Name</label>
                <input type="text" class="input" id="name" name="name" v-model="form.name">
                <span class="help is-danger" v-text="form.errors.get('name')" v-if="form.errors.has('name')"></span>
            </div>
            <div class="control">
                <label for="description" class="label">Project Description</label>
                <input type="text" class="input" id="description" name="description" v-model="form.description">
                <span class="help is-danger" v-text="form.errors.get('description')" v-if="form.errors.has('description')"></span>
            </div>
            <div class="control">
                <button class="button is-primary" :disabled="form.errors.any()">Create</button>
            </div>
        </form>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script src="/js/app.js"></script>
</body>
</html>
