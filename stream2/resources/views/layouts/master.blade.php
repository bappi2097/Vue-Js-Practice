<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel</title>

    <link rel="stylesheet" href="{{asset('css/bulma.min.css')}}">
    <link rel="stylesheet" href="{{asset('css/app.css')}}">
</head>

<body>

    <div id="root">
        @include('layouts.header')
        <div class="section">
            <div class="container">
                <router-view></router-view>
            </div>
        </div>
    </div>

    <script src="{{asset('js/app.js')}}"></script>

</body>

</html>
