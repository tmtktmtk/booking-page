<?php
if(isset($_POST['password']) {
    if($_POST['password'] == 'admin') {
        require db-config.php;
        try
        {   
            $options =
            [   
            PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES UTF8',
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            ]      
            $PDO = new PDO($DB_DSN,$DB_USER,$DB_PASS, $options);
        
            $sql = ('SELECT * FROM Reservation');

            $result = $PDO->query($sql);

            echo '
            <form action="choose.php" method="post">
            <table>
            <tr>
            <td>Reservation id</td>
            <td>Room</td>
            <td>Start</td>
            <td>End</td>
            <td>Confirmed</td>
            <td>Select</td>
            </tr>
            ';

            foreach($results as $res) {
                echo 
                "<tr>".
                "<td>".$res['id']."</td>".
                "<td>".$res['room']."</td>".
                "<td>".$res['startdate']."</td>".
                "<td>".$res['enddate']."</td>".
                "<td>".$res['confirmed']."</td>".
                "<td>
                <input type='checkbox' id=".$res['id']." name='check_list[]' value=".$res['id'].">
                </td>
                </tr>"
                ;
            }

            echo '
            <fieldset>
            <legend>Action</legend>
            <button name="action" type="submit" value="confirm">Confirm</button>
            <button name="action" type="submit" value="cancel">Cancel</button>
            </fieldset>
            '
            ;
        }
    catch(PDOException $pe)
    {
        echo 'ERREUR : '.$pe->getMessage();
    }
    else {
        header("Location: adminlogin.php");
    die();
    }
?>