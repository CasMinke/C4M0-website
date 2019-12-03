<?php
$id = null;
$highscore = $_POST["highscore"];
$nickname = $_POST["nickname"];

require_once "c4m0-connect.php";

if (!isset($highscore) || trim($highscore) == 0 || !isset($nickname) || trim($nickname) == '') {
    header("location: ../fields-not-filled.html");
} else {
    $duplicate = false;

    $searchfordup = $conn->prepare("select * from game");
    $searchfordup->execute();

    foreach ($searchfordup as $search) {
        if ($nickname == $search["nickname"]) {
            $duplicate = true;
        }
        if ($highscore == $search["highscore"]) {
            $duplicate = true;
        }
    }
    if ($duplicate){
        $sql = $conn->prepare("update game set id = :id, nickname = :nickname, highscore = :highscore where nickname = :nickname");

        $sql->bindParam(":id", $search["id"]);
        $sql->bindParam(":nickname", $nickname);
        $sql->bindParam(":highscore", $highscore);

        $sql->execute();
        header("location: game-leaderboard.php");
    }else{
        $sql = $conn->prepare("insert into game values (:id, :highscore, :nickname)");

        $sql->bindParam(":id", $id);
        $sql->bindParam(":nickname", $nickname);
        $sql->bindParam(":highscore", $highscore);

        $sql->execute();
        header("Location: game-leaderboard.php");
    }





}