<?php
$id = NULL;
$nickname = $_POST["nickname"];
$password = $_POST["password"];
$pass_md5 = md5($password);

require_once "c4m0-connect.php";

$sql = $conn->prepare("insert into gameaccount values (:id, :username, :password)");

$sql->bindParam(":id",$id);
$sql->bindParam(":username",$nickname);
$sql->bindParam(":password",$pass_md5);

$sql->execute();

header("location: ../accountcreated.html");