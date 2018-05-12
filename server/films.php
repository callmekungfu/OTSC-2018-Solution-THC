<?php 
    $conn = mysqli_connect("localhost", "thc", "123456", "thehutoncollection");
    $title = mysqli_real_escape_string($conn, $_POST["title"]);
    $desc = mysqli_real_escape_string($conn, $_POST["description"]);
    $price = mysqli_real_escape_string($conn, $_POST["price"]);
    $image = mysqli_real_escape_string($conn, $_POST["image"]);
    $query = mysqli_query($conn, "INSERT INTO films (title, description, imgLink, price) VALUES ('$title', '$desc', '$image' , '$price')");

    mysqli_close($conn);
?>