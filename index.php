<?php
    require 'Model/Database.php';

    use \Model\Database;

    $database = new Database();
    $database->connect();

    if (isset($_GET['controller'])) {
        $controller = $_GET['controller'];
    } else {
        $controller = '';
    }

    switch ($controller) {
        case 'test':
            echo 'Test view';
            break;
        default:
            require 'View/home.php';
            break;
    }

    $database->close();
