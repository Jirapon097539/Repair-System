<?php
    session_start();
    session_unset();
    // print_r($_SESSION)
    header("Location:../../index.php");
    
?>