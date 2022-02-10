<?php
    require("Model\Database.php");

    $database = new Database();
    $database->connect();

    $database->closeDatabse();
