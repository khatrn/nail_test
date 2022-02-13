<?php
    require 'Model/Database.php';

    use \Model\Database;

    $database = new Database();

    if (isset($_GET['controller'])) {
        require 'Route/web.php';
    } else {
        require 'View/home.php';
    }

    $database->close();
