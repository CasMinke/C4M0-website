<?php
$id = NULL;
$nickname = $_POST["namebox"];
$discord = $_POST["discordbox"];
$email = $_POST["emailbox"];

require_once "c4m0-connect.php";

$sql = $conn->prepare("insert into members values (:id, :nickname, :discord, :email)");

$sql->bindParam(":id", $id);
$sql->bindParam(":nickname", $nickname);
$sql->bindParam(":discord", $discord);
$sql->bindParam(":email", $email);

$sql->execute();
header("Location: ../join-c4m0-complete.html");

