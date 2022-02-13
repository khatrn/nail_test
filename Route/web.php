<?php

$controller = $_GET['controller'];
$action = $_GET['action'];
require "Controller/$controller.php";
$controller = ucfirst('controller');
$request = new WorkController;

switch ($action) {
    case 'addEvent':
        $request->addEvent();
        break;
}
