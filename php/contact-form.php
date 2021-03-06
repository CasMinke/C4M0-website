<?php
$id = NULL;
$email = $_POST["email"];
$name = $_POST["name"];
$question = $_POST["question"];

require_once "c4m0-connect.php";


if (!isset($email) || trim($email) == '' || !isset($name) || trim($name) == '' || !isset($question) || trim($question) == '') {
    header("location: ../fields-not-filled.html");
} else {
        $sql = $conn->prepare("insert into messages values (:id, :contact, :email, :question)");

        $sql->bindParam(":id", $id);
        $sql->bindParam(":contact", $name);
        $sql->bindParam(":email", $email);
        $sql->bindParam(":question", $question);

        $sql->execute();
        header("Location: ../contact-complete.html");
    }
