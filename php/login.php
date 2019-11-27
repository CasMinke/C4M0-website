<?php
require_once "c4m0-connect.php";
$username = $_POST ["username"];
$password = $_POST ["password"];
$ww_md5 = md5($password);
$found = false;
session_start();
$_SESSION["username"] = $username;
$_SESSION["password"] = $password;

if (!isset($username) || trim($username) == '' || !isset($password) || trim($password) == '') {
    header("location: ../fields-not-filled.html");
    session_destroy();
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
        session_destroy();
    }
}