<?php 
    $conn = mysqli_connect("localhost", "thc", "123456", "thehutoncollection");

    $user = $_POST["username"];
    $password = $_POST["password"];

    $query = mysqli_query($conn, "SELECT * FROM users WHERE username = '$user' AND password = '$password'");
    $rows = array();
    while ($i = mysqli_fetch_assoc($query)){
        array_push($rows,$i);
    };
    json_encode($rows);
    echo(json_encode($rows));
?>