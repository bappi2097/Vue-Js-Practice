<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Lesson 19</title>
    <link rel="stylesheet" href="{{asset('css/bulma.min.css')}}">
    <script src="{{asset('js/vue.js')}}"></script>
    <script src="{{asset('js/axios.min.js')}}"></script>
</head>

<body>
    <br>
    <div class="container">
        <div id="root">
            @include('projects.list')
            <form action="{{route('create')}}" method="post" class="form" @submit.prevent="onSubmit"
                @keypress="errors.clear($event.target.name)">
                <br>
                <div class="control">
                    <label for="name" class="label">Project Name</label>
                    <input type="text" name="name" id="name" class="input is-primary" v-model="name">
                    <span class="help is-danger" v-text="errors.get('name')" v-if="errors.has('name')"></span>
                </div><br>
                <div class="control">
                    <label for="description" class="label">Project Description</label>
                    <input type="text" name="description" id="description" class="input is-primary"
                        v-model="description">
                    <span class="help is-danger" v-text="errors.get('description')"
                        v-if="errors.has('description')"></span>
                </div><br>
                <div class="control">
                    <button class="button is-primary" :disabled="errors.any()">Save</button>
                </div>
            </form>
        </div>
    </div>
    <script src="{{asset('js/app.js')}}"></script>
</body>

</html>
