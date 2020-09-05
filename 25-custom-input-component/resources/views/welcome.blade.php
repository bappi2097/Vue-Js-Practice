<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Lesson 25</title>

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
    <link rel="stylesheet" href="{{asset('css/app.css')}}">
    <!-- Styles -->
    <script src="{{asset('js/vue.js')}}"></script>
    <script src="{{asset('js/axios.min.js')}}"></script>

</head>

<body>
    <div id="root">
        {{-- <input type="text" v-model="cuppon"> --}}
        {{-- <input type="text" :value="cuppon" @input="cuppon=$event.target.value"> --}}
        <cuppon v-model="cuppon">
    </div>
    <script src="{{asset('js/app.js')}}"></script>
</body>

</html>
