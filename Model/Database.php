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
    function connect()
    {
        $this->conn = mysqli_connect($this->server, $this->user, $this->password, $this->dbName);

        if (!$this->conn) {
            die("Không thể kết nối");
        }
    }

    // Hàm đóng CSDL
    function close()
    {
        if ($this->conn) {
            $this->conn->close();
        }
    }
}
