<?php
namespace Model;

class Database
{
    public $conn = NULL;
    private $server = 'localhost';
    private $user = 'root';
    private $password = '';
    private $dbName = 'testnal';

    //Hàm kết nối CSDL
    public function connect()
    {
        $this->conn = mysqli_connect($this->server, $this->user, $this->password, $this->dbName);

        if ($this->conn->connect_error) {
            die("Máy chủ không thể kết nối");
        }
    }

    // Hàm đóng CSDL
    public function close()
    {
        if ($this->conn) {
            $this->conn->close();
        }
    }
}
