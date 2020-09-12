<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel</title>
    <link rel="stylesheet" href="{{asset('css/app.css')}}">
</head>

<body>
    <div id="root">
        <my-items :items="['bappi', 'saha', 'one', 'two']">
            <template scope="{item}" slot="my-items">
                <h1 v-text="item"></h1>
            </template>
        </my-items>
    </div>
    <script src="{{asset('js/app.js')}}"></script>
</body>

</html>
