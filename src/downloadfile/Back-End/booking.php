<?php
session_start();
echo $_SESSION['startdate'];
?>
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
if(ISSET($_POST['room'])) {

    require 'db-config.php';
    try
    {   
        $options =
        [   
            PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES UTF8',
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        ];
        $PDO = new PDO($DB_DSN,$DB_USER,$DB_PASS, $options);



        $sql2 = 'INSERT INTO reservation (room, startdate, enddate, confirmed) 
        VALUES (?,?,?,?)';
        $PDO->prepare($sql2)->execute([$_POST["room"], $_SESSION["startdate"], $_SESSION["enddate"], FALSE]);
        session_destroy();
        echo "<h4 class='text-center text-uppercase font-weight-light p-3 mb-2.bg-light.bg-gradient rounded-pill'>Reservation confirmed!</h4>";
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
<br/>
<center><a href="https://tmtktmtk.github.io/booking-page/"><button class="btn btn-secondary">Home</button></a></center>
    </div>

  </body>
</html>