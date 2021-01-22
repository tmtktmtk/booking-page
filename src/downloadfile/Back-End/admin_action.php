<?php
if(isset($_POST['action'])){

    try
    {   
        $options =
        [   
            PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES UTF8',
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        ]   
        $PDO = new PDO($DB_DSN,$DB_USER,$DB_PASS, $options);
        if($_POST['action'] == 'cancel') {
            foreach($_POST['check_list'] as $res) {
                $sql = 'DELETE FROM Reservation
                WHERE id = '.$res["id"];

                $PDO->query($sql)
            }
        }
        else if($_POST['action'] == 'confirm') {
            foreach($_POST['check_list'] as $res) {
                $sql = 'UPDATE Reservation
                SET confirmed = true
                WHERE id = '.$res["id"];

                $PDO->query($sql)
            }
        }
    }
}
else {
    header("Location: adminlogin.php");
    die();
}

?>