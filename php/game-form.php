<?php
$id = null;
$highscore = $_POST["highscore"];
$nickname = $_POST["nickname"];

require_once "c4m0-connect.php";

if (!isset($highscore) || trim($highscore) == 0 || !isset($nickname) || trim($nickname) == '') {
    header("location: ../fields-not-filled.html");
} else {
    $duplicate = false;
    $higherthanhighscore = false;

    $searchfordup = $conn->prepare("select * from game");
    $searchfordup->execute();

    foreach ($searchfordup as $search) {
        if ($nickname == $search["nickname"]) {
            $duplicate = true;
        }
        if ($highscore > $search["highscore"]){
            $higherthanhighscore = true;
        }
    }
    if ($duplicate) {
        if ($higherthanhighscore) {
            $sql = $conn->prepare("update game set nickname = :nickname, highscore = :highscore where nickname = :nickname");

            $sql->bindParam(":nickname", $nickname);
            $sql->bindParam(":highscore", $highscore);

            $sql->execute();
            header("location: game-leaderboard.php");
            exit();
        }else{
            echo "<script>alert('you did not improve your highscore, improve your highscore to save it'); window.location = '../minigame.html'</script>";
            exit();
        }

    } else {
        $sql = $conn->prepare("insert into game values (:id, :highscore, :nickname)");

        $sql->bindParam(":id", $id);
        $sql->bindParam(":nickname", $nickname);
        $sql->bindParam(":highscore", $highscore);

        $sql->execute();
        header("Location: game-leaderboard.php");
        exit();
    }


}