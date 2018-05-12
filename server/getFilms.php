<?php 
    $conn = mysqli_connect("localhost", "thc", "123456", "thehutoncollection");
    $query = mysqli_query($conn, "SELECT * FROM films");
    $rows = array();
    while ($i = mysqli_fetch_assoc($query)){
        array_push($rows,$i);
    };
    json_encode($rows);
    echo(json_encode($rows));
?>