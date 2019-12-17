<?php
$id = NULL;
$nickname = $_POST["nickname"];
$password = $_POST["password"];
$pass_md5 = md5($password);
$duplicate = false;

require_once "c4m0-connect.php";
if (!isset($nickname) || trim($nickname) == '' || !isset($password) || trim($password) == '') {
    header("location: ../fields-not-filled.html");
} else {
    $searchfordup = $conn->prepare("select * from gameaccount");
    $searchfordup->execute();

    foreach ($searchfordup as $search) {
        if ($nickname == $search["username"]) {
            $duplicate = true;
            echo "<script>alert('the username $nickname is already in use!?!'); window.location = '../createaccount.html'</script>";
        }
    }
    if ($duplicate == false) {
        $sql = $conn->prepare("insert into gameaccount values (:id, :username, :password)");

        $sql->bindParam(":id", $id);
        $sql->bindParam(":username", $nickname);
        $sql->bindParam(":password", $pass_md5);

        $sql->execute();

        header("location: ../accountcreated.html");
    }
}