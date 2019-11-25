<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>messages</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
            integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
            crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
            integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
            crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
            integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
            crossorigin="anonymous"></script>
    <link href="../css/style.css" rel="stylesheet">
</head>
<body>
<?php
require_once "c4m0-connect.php";
session_start();
if(!isset($_SESSION['username'])){
    header("Location:../login.html");
}

$messages = $conn->prepare("select contact, email, question from messages");

$messages->execute();

foreach ($messages as $message) {
    echo "<div class='card card-messages'>";
    echo "<h5 class='card-title card-title-messages'>" . $message["contact"] . "</h5>";
    echo "<h5 class='card-title card-title-messages'>" . $message["email"] . "</h5>";
    echo "<div class='card-body'>";
    echo "<p class='card-text' style='text-align: center'>" . $message["question"] . "</p>";
    echo "</div>";
    echo "</div>";
}
?>
<div class='padding-for-footer container-fluid'><a href='logout.php' class='backhome-btn white-link'>log out</a></div>
</body>
</html>