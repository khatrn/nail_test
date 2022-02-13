<?php
namespace Model;

class Database
{
    public $conn = NULL;
    private $server = 'localhost';
    private $user = 'root';
    private $password = '';
    private $dbName = 'test_nal';

    //Hàm kết nối CSDL
    public function __construct()
    {
        $this->conn = mysqli_connect($this->server, $this->user, $this->password, $this->dbName);
    }

    public function add($workName, $start_date, $end_date, $status)
    {
        $query = "INSERT INTO todolist(work_name, start_date, end_date, status) VALUES ('$workName', '$start_date', '$end_date', $status)";
        mysqli_query($this->conn, $query);
    }

    // Hàm đóng CSDL
    public function close()
    {
        if ($this->conn) {
            $this->conn->close();
        }
    }
}
