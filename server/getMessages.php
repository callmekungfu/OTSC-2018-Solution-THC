<?php 
    $conn = mysqli_connect("localhost", "thc", "123456", "thehutoncollection");
    $query = mysqli_query($conn, "SELECT * FROM messages");
    $rows = array();
    while ($i = mysqli_fetch_assoc($query)){
        $rows = $i;
    };
    echo(json_encode($rows));
?>