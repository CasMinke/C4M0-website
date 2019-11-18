<meta charset="UTF-8">
<?php
$servername = "localhost";
$dbname = "c4m0";
$username = "root";
$password = "";

try{
    $conn = new PDO("mysql:host=$servername;dbname=$dbname",$username,$password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "connectie gelukt";
}
catch (PDOException $e)
{
    echo "Connectie mislukt: " . $e->getMessage();
}