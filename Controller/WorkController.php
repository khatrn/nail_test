<?php

use Model\Database;

class WorkController
{
    protected $db;

    public function addEvent()
    {
        $event = new Database();
        $workName = $_POST['work_name'];
        $startDate = date('Y-m-d H:i:s', strtotime($_POST['start_date']));
        $endDate = date('Y-m-d H:i:s', strtotime($_POST['end_date']));
        $status = $_POST['status'];
        $event->add($workName, $startDate, $endDate, $status);
    }
}
