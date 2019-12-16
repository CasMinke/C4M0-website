<?php
require_once "c4m0-connect.php";
$id = null;
$highscore = $_POST["highscore"];
$username = $_POST ["username"];
$password = $_POST ["password"];
$ww_md5 = md5($password);
$found = false;
$duplicate = false;
$higherthanhighscore = false;

if (!isset($highscore) || trim($highscore) == 0){
    header("location: ../nohighscore.html");
    exit();
}else {
    if (!isset($username) || trim($username) == '' || !isset($password) || trim($password) == '') {
        header("location: ../fields-not-filled.html");
        exit();
    } else {


        $check_login = $conn->prepare("select * from gameaccount");
        $check_login->execute();

        foreach ($check_login as $check) {
            if ($username == $check["username"] && $ww_md5 == $check["password"]) {
                $found = true;
            }
        }

        if ($found) {
            $searchfordup = $conn->prepare("select * from game");
            $searchfordup->execute();

            foreach ($searchfordup as $search) {
                if ($username == $search["nickname"]) {
                    $duplicate = true;
                }
                if ($highscore > $search["highscore"]){
                    $higherthanhighscore = true;
                }
            }
            if ($duplicate) {
                if ($higherthanhighscore) {
                    $sql = $conn->prepare("update game set nickname = :nickname, highscore = :highscore where nickname = :nickname");

                    $sql->bindParam(":nickname", $username);
                    $sql->bindParam(":highscore", $highscore);

                    $sql->execute();
                    header("location: game-leaderboard.php");
                    exit();
                }else{
                    header("location: ../nohighscore.html");
                    exit();
                }

            } else {
                $sql = $conn->prepare("insert into game values (:id, :highscore, :nickname)");

                $sql->bindParam(":id", $id);
                $sql->bindParam(":nickname", $username);
                $sql->bindParam(":highscore", $highscore);

                $sql->execute();
                header("Location: game-leaderboard.php");
                exit();
            }
        } else {
            header('location: ../login-fail-game.html');
            exit();
        }
    }
}