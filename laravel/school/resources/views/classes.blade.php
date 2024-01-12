<!DOCTYPE html>
<html lang="en">
<head>
    @include('layouts/head')
    <title>Classes</title>
</head>
<body class="mt-5 pt-3">
    @include('layouts/navbar')
    <h1>Classes</h1>
    <img src="img/mtuniversity.jpeg" class="img-fluid" alt="a magic class in session">
    <h2>List of Classes</h2>
    <table class="table">
        <tr>
            <th>Class ID</th>
            <th>Subject</th>
            <th>Room</th>
            <th>Schedule</th>
        </tr>
        @foreach ($classes as $c)
            <tr>
                <td>{{$c -> class_id}}</td>
                <td>{{$c -> name}}</td>
                <td>{{$c -> room}}</td>
                <td>{{$c -> schedule}}</td>
            </tr>
        @endforeach
    </table>
</body>
</html>