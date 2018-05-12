<?php
    if ($_FILES["file"]["size"] > 5000000) {
        echo "Sorry, your file is too large.";
    }else if ( 0 < $_FILES['file']['error'] ) {
        echo 'Error: ' . $_FILES['file']['error'] . '<br>';
    }
    else {
        if(move_uploaded_file($_FILES['file']['tmp_name'], '../uploads/' . $_FILES['file']['name'])){
            echo "The file ". basename( $_FILES["file"]["name"]). " has been uploaded.";
        };
    }
?>