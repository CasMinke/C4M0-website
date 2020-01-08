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
    <script src="../javascript/session-destroy.js"></script>
</head>
<body>
<?php
require_once "c4m0-connect.php";
session_start();
if(!isset($_SESSION['username']) || !isset($_SESSION['password'])){
    header("Location:../login.html");
}

$messages = $conn->prepare("select id, contact, email, question from messages");

$messages->execute();
echo "<div class='textarea'>logged in as: " . $_SESSION['username'] . "</div>";
echo "<div class='container-fluid'>";
echo "<div class='row'>";

foreach ($messages as $message) {
    $id = $message["id"];
    echo "<div class='col-12 col-lg-4 col-xl-4 lg-xl-padding-cards-login'>";
    echo "<div class='card card-messages'>";
    echo "<h5 class='card-title'>" . $message["contact"] . "</h5>";
    echo "<h5 class='card-title2'>" . $message["email"] . "</h5>";
    echo "<div class='card-body'>";
    echo "<p class='card-text' style='text-align: center'>" . $message["question"] . "</p>";

    echo "<form action='delete-message.php' method='post' class='center-txt'>";
    echo "<input type='hidden' name='id' value=$id>";
    echo "<input type='hidden' name='delete' value='0'>";
    echo "<input type='checkbox' name='delete' id='$id' value='1'>";
    echo "<label class='label-delete' for='$id'>i am sure i want to delete this message.</label><br>";
    echo "<input type='submit' value='delete' class='delete-btn'>";
    echo "</form>";

    echo "</div>";
    echo "</div>";
    echo "</div>";
}
echo "</div>";
echo "</div>";
?>
<div class='container-fluid padding-for-footer'><a href='logout.php' class='backhome-btn white-link'>log out</a></div>
<footer>
    <p class="footer-text text-p"><span class="break">CONTACT INFO</span><span
                class="break">mail: info@c4m0.com</span> facebook: <a
                href="https://www.facebook.com/groups/c4m0.group"
                class="white-link" target="_blank">www.facebook.com/groups/c4m0.group</a></p>
    <p class="credits text-p">this website is made by: Cas Minke</p>
</footer>
</body>
</html>