<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">

    <title>Booking</title>
	
	    <style>
      body {
        background-image: url("https://inspirationfeed.com/wp-content/uploads/2015/04/blurred-background.jpg");
        background-size: cover;
        background-attachment: fixed, fixed;
        background-position: center, center;
        background-repeat: no-repeat;
        height: 100%;
      }
    </style>
	
  </head>
  <body>

    <!-- Option 1: Bootstrap Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>


<div class ="container-sm position-absolute top-50 start-50 translate-middle">
<?php
session_start();
if(isset($_POST['size']) && isset($_POST['startdate']) && isset($_POST['enddate'])) {
    
    $_SESSION['startdate'] = $_POST['startdate'];
    $_SESSION['enddate'] = $_POST['enddate'];
    require 'db-config.php';
    try
    {   
        $options =
        [   
            PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8',
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        ];
        $PDO = new PDO($DB_DSN,$DB_USER,$DB_PASS, $options);

        $sql = 'SELECT * 
        FROM Rooms
        EXCEPT
        SELECT DISTINCT room, size, price FROM Rooms INNER JOIN Reservation ON Rooms.id = Reservation.room
        WHERE size < '.$_POST["size"].' 
        AND ((startdate < '.$_POST["startdate"].' AND enddate > '.$_POST["enddate"].')
        OR (startdate > '.$_POST["startdate"].' AND enddate < '.$_POST["enddate"].'))
        ';

        $results = $PDO->query($sql);

        echo '
		<h1 class="text-center text-uppercase font-weight-light p-3 mb-2 bg-secondary bg-gradient text-white rounded-pill">Select a room</h1>
        <form action="booking.php" method="post">
        <table class="table table-striped table-hover" style="text-align:center;">
		<thead class="thead-dark">
        <tr class="table-dark">
        <th scope="col">Room number</td>
        <th scope="col">Size</td>
        <th scope="col">Price per night</td>
        <th scope="col">Reserve</td>
        </tr>
		</thead>
		<tbody>
        '
        ;

        foreach($results as $room) {
            echo 
            "<tr>".
            "<th scope='col'>".$room['id']."</td>".
            "<td>".$room['size']."</td>".
            "<td>".$room['price']."</td>".
            "<td>
            <input type='submit' id=".$room['id']." name='room' value='Reserve' class="btn-sm btn-secondary">
            </td>
            </tr>"
            ;
        }

        echo '</tbody></table></form>';



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
    </div>

  </body>
</html>
