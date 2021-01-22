<?php
session_start();
if(ISSET($_POST['room'])) {

    require db-config.php;
    try
    {   
        $options =
        [   
            PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES UTF8',
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        ]   
        $PDO = new PDO($DB_DSN,$DB_USER,$DB_PASS, $options);

        $sql1 = 'SELECT id FROM Reservation'
        
        $results = $PDO->query($sql1);
        $range = range(100, 999);
        $randomArray = array_diff($range, $results);
        $resid = $randomArray[array_rand($randomArray, 1)];

        $sql2 = 'INSERT INTO Reservation (id, room, startdate, enddate, confirmed)
        VALUES ('.$resid.', '.$_POST['room']' '.$_SESSION["startdate"].', '.$_SESSION["enddate"].', false)
        ';

        $PDO->query($sq2)
        session_destroy();
        echo "<p> Votre chambre a été réservée!</p>"
    }
    catch(PDOException $pe)
    {
        echo 'ERREUR : '.$pe->getMessage();
    }
}
else {
    header("Location: staywithus.html");
    die();
}
    

?>