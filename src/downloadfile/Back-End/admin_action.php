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
if(isset($_POST['action'])){

    try
    {   
        require 'db-config.php';
        $options =
        [   
            PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES UTF8',
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        ];   
        $PDO = new PDO($DB_DSN,$DB_USER,$DB_PASS, $options);
        if($_POST['action'] == 'cancel') {
            echo '<h6 class="text-center text-uppercase font-weight-light">Canceled</h6>';
            foreach($_POST['check_list'] as $res) {
                $sql = 'DELETE FROM reservation WHERE id = '.$res["id"];
                $PDO->query($sql);
            }
        }
        else if($_POST['action'] == 'confirm') {
            foreach($_POST['check_list'] as $res) {
                $sql = 'UPDATE Reservation
                SET confirmed = true WHERE id = '.$res["id"];

                $PDO->query($sql);
            }
        }
        echo '<h6 class="text-center text-uppercase font-weight-light">Done</h6>';
//        header("Location: pannel.php");
//        die();
    }
    catch(PDOException $pe)
    {
        echo 'ERREUR : '.$pe->getMessage();
    }
}
else {
    header("Location: adminlogin.php");
    die();
}

?>
<br/>
<center><a href="https://tmtktmtk.github.io/booking-page/"><button class="btn btn-secondary">Home</button></a></center>
    </div>

  </body>
</html>