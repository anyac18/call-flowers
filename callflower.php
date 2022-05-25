
<?php

$servername = "localhost"; //anything prefixed with a $ is a variable
$username = "aschung_Stefania";
$password = "Wish you were here 18*";
$dbname = "aschung_acad280";

$conn = new mysqli($servername, $username, $password, $dbname);

if($conn->connect_error){
  die("Connection failed: " . $conn->connect_error);
}


echo "id, thedate, thetime, who, length, distance \n";

$sql = "SELECT * FROM `calls`  \n"

    . "ORDER BY `calls`.`thedate`  ASC";
$result = mysqli_query($conn, $sql);

if(mysqli_num_rows($result)> 0){
  while($row = mysqli_fetch_assoc($result)){
    echo $row["id"] . "," . $row["thedate"] . "," . $row["thetime"] . "," . $row["who"] . "," . $row["length"] . "," . $row["distance"] . "\n";
  }
}

//   if(isset($_GET["id"])){
//     $id= $conn->real_escape_string($_GET["id"]);
//     $sql = "SELECT * FROM calls WHERE id = $id";
//     $result = $conn->query($sql);
//
//   if($result->num_rows > 0){
//     echo "id, thedate, thetime, who, length, distance \n";
//     while( $row = $result->fetch_assoc()){
//       echo $row["id"] . "," . $row["thedate"] . "," . $row["thetime"] . "," . $row["who"] . "," . $row["length"] . "," . $row["distance"] . "\n";
//     }
//   }
//
// }




?>
