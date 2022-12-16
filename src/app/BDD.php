<?php
function BddCall() {

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "netflixtrip";

//Creation de la connexion
$conn = new mysqli($servername, $username, $password, $dbname);

//Verification de la connexion
if ($conn->connect_error) {
    die("Connection echoue: " . $conn->connect_error);
}

//Connexion reussi
$sql = `SELECT login,mdp,admin as login,mdp,admin FROM users`;
$result = mysqli_query($conn,$sql);
$myArray = array();
if ($result->num_rows > 0) {
    //output data of each row
    while($row = $result->fetch_assoc()) {
        $myArray[] = array_map("utf8_encode", $row);
    }
    print json_encore($myArray);
    return $myArray;
}
else {
    echo "0 results";
}
}
?>