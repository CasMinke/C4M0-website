<?php
require_once "c4m0-connect.php";
$username = $_POST ["username"];
$password = $_POST ["password"];
$ww_md5 = md5($password);
$found = false;

if (!isset($username) || trim($username) == '' || !isset($password) || trim($password) == '') {
    header("location: ../fields-not-filled.html");
} else {


    $check_login = $conn->prepare("select * from login");
    $check_login->execute();

    foreach ($check_login as $check) {
        if ($username == $check["username"] && $ww_md5 == $check["password"]) {
            $found = true;
        }
    }

    if ($found) {
        header('location: messages.php');
    } else {
        header('location: ../login-fail.html');
    }
}