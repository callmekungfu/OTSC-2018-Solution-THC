<?php
    $conn = mysqli_connect("localhost", "thc", "123456", "thehutoncollection");
    $title = $_POST["title"];
    $desc = $_POST["description"];
    $price = $_POST["price"];
    $image = $_POST["imgLink"];
    $query = mysqli_query($conn, "DELETE FROM films WHERE title = '$title' AND description = '$desc' AND price = '$price' AND imgLink = '$image'");
?>