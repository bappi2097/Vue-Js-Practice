<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel</title>
    <script src="{{asset('js/axios.min.js')}}"></script>
    <script src="{{asset('js/vue.js')}}"></script>
</head>

<body>
    <div id="root">
        <ul>
            <li v-for="skill in skills">@{{skill}}</li>
        </ul>
    </div>
    <script src="{{asset('js/app.js')}}"></script>
</body>

</html>
