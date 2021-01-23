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
if(isset($_POST['password'])) {
    $pass = $_POST['password'];
    if($pass == 'admin') {
        require 'db-config.php';
        try
        {   
            $options =
            [   
            PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES UTF8',
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            ]; 
            $PDO = new PDO($DB_DSN,$DB_USER,$DB_PASS, $options);
        
            $sql = ('SELECT * FROM reservation');

            $results = $PDO->query($sql);

            echo '
            <form action="admin_action.php" method="post">
        <table class="table table-striped table-hover" style="text-align:center;">
		<thead class="thead-dark">
        <tr class="table-dark">
            <th scope="col">Reservation id</td>
            <th scope="col">Room</td>
            <th scope="col">Start</td>
            <th scope="col">End</td>
            <th scope="col">Confirmed</td>
            <th scope="col">Select</td>
            </tr>
            ';

            foreach($results as $res) {
                echo 
                "<tr>".
                "<th scope='col'>".$res['id']."</td>".
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
            </table>
			<center>
            <fieldset>
            <legend>Action</legend>
            <button name="action" type="submit" value="confirm" class="btn-sm btn-success">Confirm</button>
            <button name="action" type="submit" value="cancel" class="btn-sm btn-danger">Cancel</button>
            </fieldset>
			</center>
            </form>
            '
            ;
        }
    catch(PDOException $pe)
    {
        echo 'ERREUR : '.$pe->getMessage();
    }
}
    else {
        header("Location: https://pwtest2020.planethoster.world/adminlogin.php");
        die();
    }
}
else {
        header("Location: https://pwtest2020.planethoster.world/adminlogin.php");
    die();
    }
?>
<br/>
<center><a href="https://tmtktmtk.github.io/booking-page/"><button class="btn btn-secondary">Home</button></a></center>
    </div>

  </body>
</html>