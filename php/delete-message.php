<?php
$id = $_POST["id"];
$delete = $_POST["delete"];

require_once "c4m0-connect.php";
if($delete){


    $sql = $conn->prepare("delete from messages where id = :id");

    $sql->execute(["id" => $id]);

    header("location: messages.php");
}
else{
    header("location: ../delete-failed.html");
}