<?php 
    $conn = mysqli_connect("localhost", "thc", "123456", "thehutoncollection");
    $name = mysqli_real_escape_string($conn, $_POST["name"]);
    $email = mysqli_real_escape_string($conn, $_POST["email"]);
    $message =  mysqli_real_escape_string($conn, $_POST["message"]);
    $query = mysqli_query($conn, "INSERT INTO messages (name, email, message) VALUES ('$name', '$email', '$message')");
    echo("hello");

    mysqli_close($conn);
?>