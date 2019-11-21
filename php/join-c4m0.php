<?php
$id = NULL;
$nickname = $_POST["namebox"];
$discord = $_POST["discordbox"];
$email = $_POST["emailbox"];

require_once "c4m0-connect.php";


if (!isset($nickname) || trim($nickname) == '' || !isset($discord) || trim($discord) == '' || !isset($email) || trim($email) == '') {
    header("location: ../fields-not-filled.html");
} else {
    $duplicate = false;

    $searchfordup = $conn->prepare("select * from members");
    $searchfordup->execute();


    echo "<ul>";
    foreach ($searchfordup as $search) {
        //echo "<li>nickname:" . $search["nickname"] . "</li>";
        //echo "<li>discord:" . $search["discord"] . "</li>";
        //echo "<li>email:" . $search["email"] . "</li>";
        if ($nickname == $search["nickname"]) {
            $duplicate = true;
        }
        if ($discord == $search["discord"]) {
            $duplicate = true;
        }
        if ($email == $search["email"]) {
            $duplicate = true;
        }
    }
    echo "</ul>";


    if ($duplicate) {
        header("location: ../join-c4m0-fail.html");
    } else {


        $sql = $conn->prepare("insert into members values (:id, :nickname, :discord, :email)");

        $sql->bindParam(":id", $id);
        $sql->bindParam(":nickname", $nickname);
        $sql->bindParam(":discord", $discord);
        $sql->bindParam(":email", $email);

        $sql->execute();
        header("Location: ../join-c4m0-complete.html");
    }
}
