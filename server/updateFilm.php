<?php
    $conn = mysqli_connect("localhost", "thc", "123456", "thehutoncollection");
    $title = $_POST["title"];
    $desc = $_POST["description"];
    $price = $_POST["price"];
    $image = $_POST["image"];
    $pt = $_POST["prevT"];
    $pd = $_POST["prevD"];
    $pp = $_POST["prevP"];
    $pi = $_POST["prevI"];
    $query = mysqli_query($conn, "UPDATE films SET title = '$title', description = '$desc', price = '$price', imgLink = '$image' WHERE title = '$pt' AND description = '$pd' AND price = '$pp' AND imgLink = '$pi'");
?>