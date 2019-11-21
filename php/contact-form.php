<?php
$id = NULL;
$email = $_POST["email"];
$name = $_POST["name"];
$question = $_POST["question"];

require_once "c4m0-connect.php";


if (!isset($email) || trim($email) == '' || !isset($name) || trim($name) == '' || !isset($question) || trim($question) == '') {
    header("location: ../fields-not-filled.html");
} else {
        $sql = $conn->prepare("insert into members values (:id, :nickname, :discord, :email)");

        $sql->bindParam(":id", $id);
        $sql->bindParam(":nickname", $nickname);
        $sql->bindParam(":discord", $discord);
        $sql->bindParam(":email", $email);

        $sql->execute();
        header("Location: ../join-c4m0-complete.html");
    }
