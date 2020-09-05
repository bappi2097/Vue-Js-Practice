<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Lesson 24</title>

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
    <link rel="stylesheet" href="{{asset('css/app.css')}}">
    <!-- Styles -->
    <script src="{{asset('js/vue.js')}}"></script>
    <script src="{{asset('js/axios.min.js')}}"></script>

</head>

<body>
    <div id="one">
        <h1>@{{shared.user.name}}</h1>
    </div>
    <div id="two">
        <h1>@{{shared.user.name}}</h1>
    </div>
    <script src="{{asset('js/app.js')}}"></script>
</body>

</html>
