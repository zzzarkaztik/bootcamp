<!DOCTYPE html>
<html lang="en">
<head>
    @include('layouts/head')
    <title>Students</title>
</head>
<body class="mt-5 pt-3">
    @include('layouts/navbar')
    <h1>Students</h1>
    <img src="img/student.jpeg" class="img-fluid" alt="a magic class in session">
    <p>Total students: {{$total_student -> total}}</p>
    <table class="table">
        <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Year Level</th>
            <th>Province</th>
        </tr>
        @foreach ($students as $s)
            <tr>
                <td>{{$s -> first_name}}</td>
                <td>{{$s -> last_name}}</td>
                <td>{{$s -> year_level}}</td>
                <td>{{$s -> province}}</td>
            </tr>
        @endforeach
    </table>
    <h2>Male Students</h2>
    <table class="table">
        <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>Province</th>
        </tr>
        @foreach ($students_male as $s)
            <tr>
                <td>{{$s -> first_name}}</td>
                <td>{{$s -> last_name}}</td>
                <td>{{$s -> gender}}</td>
                <td>{{$s -> province}}</td>
            </tr>
        @endforeach
    </table>
    <a href="/home">Go back to home page.</a>

</body>
</html>